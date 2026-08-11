#!/usr/bin/env python3
import sys
import os
import xml.etree.ElementTree as ET
import json
import argparse

# Real Estate Feed Validator v3.1: Supports Avito, Cian, Yandex, DomClick
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'parsed_excel_data.json')

def load_specifications():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return None

def clean_tag_name(path):
    parts = []
    for p in path.split('.'):
        p = p.split('@')[0].split('[')[0]
        if '}' in p:
            p = p.split('}')[-1]
        parts.append(p)
    return '.'.join(parts)

def build_flat_xml_paths(element, current_path=''):
    paths = set()
    tag = element.tag.split('}')[-1] if '}' in element.tag else element.tag
    path = f"{current_path}.{tag}" if current_path else tag
    
    paths.add(path)
    paths.add(tag)
    
    for attr in element.attrib:
        paths.add(f"{path}@{attr}")
        paths.add(f"{tag}@{attr}")
        
    for child in element:
        paths.update(build_flat_xml_paths(child, path))
        
    return paths

def evaluate_commercial_formula(formula_str, selected_type):
    if not formula_str or formula_str == '="Да"' or selected_type == 'Все типы':
        return True
        
    if '<>"Земля"' in formula_str and selected_type == 'Земля':
        return False
    if '<>"Гараж"' in formula_str and selected_type == 'Гараж':
        return False
        
    tokens_map = {
        'Апартаменты': ['Апартаменты', 'ПСН', 'Гостиница', 'Общепит'],
        'Офис': ['Офис', 'Офисная'],
        'Торговая': ['Торговая', 'Ритейл'],
        'ПСН': ['ПСН'],
        'Склад': ['Склад'],
        'Производство': ['Производство'],
        'Земля': ['Земля'],
        'Готовый бизнес': ['Готовый бизнес'],
        'Гараж': ['Гараж'],
        'Общепит': ['Общепит', 'Гостиница', 'Автосервис', 'Здание', 'Кладовая']
    }
    
    tokens = tokens_map.get(selected_type, [selected_type])
    for t in tokens:
        if f'"{t}"' in formula_str:
            return True
            
    if '<>' in formula_str and not any(f'="{t}"' in formula_str for t in tokens):
        return True
        
    return False

def analyze_feed(feed_path, platform_key, market='new_developments', obj_type='Все типы'):
    specs = load_specifications()
    if not specs:
        print("Ошибка: Файл спецификации parsed_excel_data.json не найден.")
        return

    market_data = specs.get(market, {}).get(platform_key, [])
    if not market_data:
        print(f"Ошибка: Не найдена спецификация для рынка '{market}' и платформы '{platform_key}'.")
        return

    print(f"\n=======================================================")
    print(f"АНАЛИЗ ФИДА: {os.path.basename(feed_path)}")
    print(f"НАПРАВЛЕНИЕ: {market.upper()} | ПЛАТФОРМА: {platform_key.upper()}")
    if market == 'commercial':
        print(f"ТИП КОММЕРЧЕСКОГО ОБЪЕКТА: {obj_type}")
    print(f"=======================================================\n")

    try:
        tree = ET.parse(feed_path)
        root = tree.getroot()
    except Exception as e:
        print(f"Ошибка парсинга XML: {e}")
        return

    xml_paths = set()
    total_objects = 0

    for elem in root.iter():
        tag_clean = elem.tag.split('}')[-1] if '}' in elem.tag else elem.tag
        if tag_clean in ['object', 'Ad', 'offer', 'flat']:
            total_objects += 1
        xml_paths.update(build_flat_xml_paths(elem))

    cleaned_xml_paths = {clean_tag_name(p) for p in xml_paths}

    def is_present(param_name):
        for p in cleaned_xml_paths:
            if param_name.lower() in p.lower():
                return True
        return False

    applicable_items = []
    na_items = []

    for item in market_data:
        name = item['name']
        formula = item.get('formula', '="Да"')
        
        is_app = True
        if market == 'commercial':
            is_app = evaluate_commercial_formula(formula, obj_type)
            
        present = is_present(name)
        if not is_app:
            na_items.append({'name': name, 'category': item.get('category', '')})
        else:
            applicable_items.append({
                'name': name,
                'category': item.get('category', ''),
                'present': present
            })

    missing_count = sum(1 for i in applicable_items if not i['present'])
    present_count = sum(1 for i in applicable_items if i['present'])

    print(f"--- РЕЗЮМЕ ПО ФИДУ ---")
    print(f"Объектов в фиде: {total_objects if total_objects > 0 else 'не определено'}")
    print(f"Параметров спецификации: {len(applicable_items)}")
    print(f"Найдено параметров: {present_count}")
    print(f"Отсутствует тегов: {missing_count}")
    print(f"Не требуется для этого типа: {len(na_items)}")
    print(f"----------------------\n")

    report_data = {
        'filename': os.path.basename(feed_path),
        'market': market,
        'platform': platform_key,
        'object_type': obj_type,
        'total_objects': total_objects,
        'missing_count': missing_count,
        'present_count': present_count,
        'non_applicable_count': len(na_items),
        'applicable_items': applicable_items,
        'na_items': na_items
    }

    out_name = f"report_{os.path.splitext(os.path.basename(feed_path))[0]}_{market}_{platform_key}.json"
    with open(out_name, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, ensure_ascii=False, indent=4)
    print(f"Отчет сохранен в файл: {out_name}\n")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Real Estate XML Feed Validator v3.1")
    parser.add_argument("feed_path", help="Путь к xml файлу")
    parser.add_argument("platform", choices=["avito", "cian", "yandex", "domclick"], help="Площадка")
    parser.add_argument("--market", choices=["new_developments", "commercial"], default="new_developments", help="Направление")
    parser.add_argument("--type", default="Все типы", help="Тип объекта в коммерции (Офис, Склад, Торговая, Земля...)")

    args = parser.parse_args()
    analyze_feed(args.feed_path, args.platform.lower(), args.market.lower(), args.type)
