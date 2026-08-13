// Standalone Real Estate Feed Validator Engine v3.2

const SAMPLE_FEEDS = {
    nd_domclick: `<?xml version="1.0" encoding="UTF-8"?>
<feed format-version="1.0">
    <complex>
        <id>12345</id>
        <name>ЖК Южный полюс</name>
        <latitude>55.751244</latitude>
        <longitude>37.618423</longitude>
        <address>г. Москва, Проспект Мира, дом 1</address>
        <images><image>https://example.com/complex.jpg</image></images>
        <description_main><text>Комфортный жилой комплекс с уникальным благоустройством.</text></description_main>
        <buildings>
            <building>
                <id>98765</id>
                <fz_214>true</fz_214>
                <name>Корпус 1</name>
                <latitude>55.751244</latitude>
                <longitude>37.618423</longitude>
                <address>г. Москва, Проспект Мира, дом 1</address>
                <flats>
                    <flat>
                        <flat_id>913</flat_id>
                        <apartment>33</apartment>
                        <floor>8</floor>
                        <room>2</room>
                        <plans><plan>https://example.com/plan.png</plan></plans>
                        <price>14500000</price>
                        <area>58.4</area>
                        <living_area>34.0</living_area>
                        <housing_type>0</housing_type>
                    </flat>
                </flats>
            </building>
        </buildings>
        <sales_info>
            <sales_phone>+74951234567</sales_phone>
            <timezone>+3</timezone>
            <work_days>
                <work_day><day>пн</day><open_at>09:00</open_at><close_at>21:00</close_at></work_day>
            </work_days>
        </sales_info>
        <developer>
            <id>101</id>
            <name>ООО Южный Девелопмент</name>
        </developer>
    </complex>
</feed>`,

    nd_avito: `<?xml version="1.0" encoding="UTF-8"?>
<Ads formatVersion="3" timestamp="2026-08-11T10:00:00">
    <Ad>
        <Id>LOT-ND-101</Id>
        <Category>Квартиры</Category>
        <OperationType>Продам</OperationType>
        <MarketType>Новостройка</MarketType>
        <NewDevelopmentId>12345</NewDevelopmentId>
        <PropertyRights>Застройщик</PropertyRights>
        <Price>14500000</Price>
        <Square>58.4</Square>
        <Rooms>2</Rooms>
        <Floor>7</Floor>
        <Floors>24</Floors>
        <HouseType>Монолитный</HouseType>
        <Decoration>Чистовая</Decoration>
        <Status>Квартира</Status>
        <Description>Прекрасная двухкомнатная квартира с отделкой в ЖК бизнес-класса.</Description>
        <LivingSpace>34.0</LivingSpace>
        <Images><Image url="https://example.com/img1.jpg"/></Images>
    </Ad>
</Ads>`,

    nd_cian: `<?xml version="1.0" encoding="UTF-8"?>
<feed>
    <feed_version>2</feed_version>
    <object>
        <ExternalId>CIAN-ND-99</ExternalId>
        <Category>newBuildingFlatSale</Category>
        <Address>г. Москва, ул. Арбат, д. 10</Address>
        <TotalArea>62.1</TotalArea>
        <FloorNumber>12</FloorNumber>
        <FlatRoomsCount>2</FlatRoomsCount>
        <Description>Просторная двухкомнатная квартира в новостройке от застройщика.</Description>
        <JKSchema><Id>98765</Id></JKSchema>
        <Building><FloorsCount>18</FloorsCount></Building>
        <BargainTerms><Price>18900000</Price><SaleType>fz214</SaleType></BargainTerms>
        <Phones><PhoneSchema><CountryCode>+7</CountryCode><Number>9990000000</Number></PhoneSchema></Phones>
        <LivingArea>38.0</LivingArea>
    </object>
</feed>`,

    comm_warehouse: `<?xml version="1.0" encoding="UTF-8"?>
<realty-feed xmlns="http://webmaster.yandex.ru/schemas/feed/realty/1.0">
    <offer internal-id="COMM-WH-500">
        <type>продажа</type>
        <category>коммерческая</category>
        <commercial-type>warehouse</commercial-type>
        <price><value>85000000</value><currency>RUB</currency></price>
        <area><value>1200.0</value></area>
        <ceiling-height>8.5</ceiling-height>
        <electricity>150</electricity>
        <building-class>A</building-class>
        <railway>1</railway>
        <crane>1</crane>
        <location><address>Московская область, г. Подольск, ул. Заводская, 15</address></location>
        <sales-agent><phone>+74959998877</phone></sales-agent>
    </offer>
</realty-feed>`,

    comm_office: `<?xml version="1.0" encoding="UTF-8"?>
<Ads formatVersion="3">
    <Ad>
        <Id>COMM-OFFICE-88</Id>
        <Category>Коммерческая недвижимость</Category>
        <OperationType>Продам</OperationType>
        <Address>г. Москва, Пресненская набережная, д. 12</Address>
        <Price>45000000</Price>
        <Square>185.0</Square>
        <BuildingClass>A</BuildingClass>
        <Floor>15</Floor>
        <Floors>45</Floors>
        <Decoration>Офисная отделка</Decoration>
        <Parking>Подземная</Parking>
        <Description>Современный офис с панорамным видом в Москва-Сити.</Description>
        <Images><Image url="https://example.com/office.jpg"/></Images>
    </Ad>
</Ads>`
};

// Global App State
let currentMarket = 'new_developments';
let currentPlatform = 'avito';
let currentCommercialType = 'Все типы';
let hideNonApplicable = false;

let rawXmlText = '';
let currentFileName = '';
let parsedAnalysisResult = null;

// DOM Elements
const segmentBtns = document.querySelectorAll('.segment-btn');
const platformBtns = document.querySelectorAll('.platform-btn');
const commercialTypeGroup = document.getElementById('commercial-type-group');
const commercialTypeSelect = document.getElementById('commercial-type-select');
const checkboxHideNa = document.getElementById('checkbox-hide-na');

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const loadedFileInfo = document.getElementById('loaded-file-info');
const fileNameDisplay = document.getElementById('file-name-display');
const fileSizeDisplay = document.getElementById('file-size-display');
const btnRemoveFile = document.getElementById('btn-remove-file');
const resultsSection = document.getElementById('results-section');

// Modal Elements
const modalPaste = document.getElementById('modal-paste');
const btnPasteXml = document.getElementById('btn-paste-xml');
const btnClosePasteModal = document.getElementById('btn-close-paste-modal');
const btnCancelPaste = document.getElementById('btn-cancel-paste');
const btnSubmitPaste = document.getElementById('btn-submit-paste');
const xmlPasteTextarea = document.getElementById('xml-paste-textarea');

// Export Summary Modal
const modalExportSummary = document.getElementById('modal-export-summary');
const btnExportSummary = document.getElementById('btn-export-summary');
const btnCloseSummaryModal = document.getElementById('btn-close-summary-modal');
const tableSummaryBody = document.getElementById('table-summary-body');
const btnCopySummaryText = document.getElementById('btn-copy-summary-text');
const btnModalCsv = document.getElementById('btn-modal-csv');
const btnModalJson = document.getElementById('btn-modal-json');

// Metrics
const metricObjects = document.getElementById('metric-objects');
const metricMissingMandatory = document.getElementById('metric-missing-mandatory');
const metricCanAdd = document.getElementById('metric-can-add');
const metricTotalTags = document.getElementById('metric-total-tags');
const scoreValue = document.getElementById('score-value');

// Tabs & Toolbar
const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');
const searchInput = document.getElementById('search-input');
const btnExportJson = document.getElementById('btn-export-json');
const btnExportCsv = document.getElementById('btn-export-csv');
const toast = document.getElementById('toast');

const badgeTabMandatory = document.getElementById('badge-tab-mandatory');
const badgeTabOptional = document.getElementById('badge-tab-optional');
const badgeTabPresent = document.getElementById('badge-tab-present');
const badgeTabNa = document.getElementById('badge-tab-na');
const badgeTabAllXml = document.getElementById('badge-tab-all-xml');

const tableMandatoryBody = document.getElementById('table-mandatory-body');
const tableOptionalBody = document.getElementById('table-optional-body');
const tablePresentBody = document.getElementById('table-present-body');
const tableNaBody = document.getElementById('table-na-body');
const tableAllXmlBody = document.getElementById('table-all-xml-body');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMarketSelector();
    initPlatformSelector();
    initCommercialTypeSelector();
    initFileUpload();
    initSampleFeeds();
    initTabs();
    initModal();
    initSearchAndFilter();
    initExport();
    initThemeToggle();
});

// 1. Market Category Segmented Control
// 1. Market Category Segmented Control
function initMarketSelector() {
    const domclickBtn = document.querySelector('[data-platform="domclick"]');
    segmentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            segmentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMarket = btn.getAttribute('data-market');

            if (currentMarket === 'commercial') {
                commercialTypeGroup.classList.remove('hidden');
                if (domclickBtn) domclickBtn.classList.add('hidden');
                if (currentPlatform === 'domclick') {
                    currentPlatform = 'avito';
                    platformBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-platform') === 'avito'));
                }
                updateCommercialTypeDropdown();
            } else {
                commercialTypeGroup.classList.add('hidden');
                if (domclickBtn) domclickBtn.classList.remove('hidden');
            }

            if (rawXmlText) analyzeAndRender();
        });
    });
}

// 2. Platform Buttons
function initPlatformSelector() {
    platformBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            platformBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPlatform = btn.getAttribute('data-platform');

            if (currentMarket === 'commercial') {
                updateCommercialTypeDropdown();
            }

            if (rawXmlText) analyzeAndRender();
        });
    });
}

// 3. Commercial Object Type Dropdown
function updateCommercialTypeDropdown() {
    const types = (typeof PLATFORM_COMMERCIAL_TYPES !== 'undefined' && PLATFORM_COMMERCIAL_TYPES[currentPlatform])
        ? PLATFORM_COMMERCIAL_TYPES[currentPlatform]
        : (typeof PLATFORM_COMMERCIAL_TYPES !== 'undefined' ? PLATFORM_COMMERCIAL_TYPES.avito : []);

    if (commercialTypeSelect) {
        commercialTypeSelect.innerHTML = types.map(t => `<option value="${escapeHtml(t.val)}" data-id="${escapeHtml(t.id)}">${escapeHtml(t.name)}</option>`).join('');
        currentCommercialType = commercialTypeSelect.value || 'Все типы';
    }
}

function initCommercialTypeSelector() {
    updateCommercialTypeDropdown();
    commercialTypeSelect.addEventListener('change', (e) => {
        currentCommercialType = e.target.value;
        if (rawXmlText) analyzeAndRender();
    });
}

// 4. File Upload
function initFileUpload() {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) readAndProcessFile(file);
    });

    ['dragenter', 'dragover'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
            e.preventDefault(); e.stopPropagation();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(name => {
        dropZone.addEventListener(name, (e) => {
            e.preventDefault(); e.stopPropagation();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files[0];
        if (file) readAndProcessFile(file);
    });

    btnRemoveFile.addEventListener('click', () => {
        rawXmlText = '';
        currentFileName = '';
        fileInput.value = '';
        loadedFileInfo.classList.add('hidden');
        resultsSection.classList.add('hidden');
    });
}

function readAndProcessFile(file) {
    currentFileName = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
        rawXmlText = e.target.result;
        fileNameDisplay.textContent = file.name;
        fileSizeDisplay.textContent = `(${(file.size / 1024).toFixed(1)} KB)`;
        loadedFileInfo.classList.remove('hidden');
        analyzeAndRender();
    };
    reader.readAsText(file);
}

// 5. Sample Demos
function initSampleFeeds() {
    document.querySelectorAll('.chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const sampleKey = btn.getAttribute('data-sample');
            rawXmlText = SAMPLE_FEEDS[sampleKey];
            currentFileName = `${sampleKey}.xml`;

            if (sampleKey.startsWith('nd_')) {
                currentMarket = 'new_developments';
                commercialTypeGroup.classList.add('hidden');
                if (sampleKey.includes('domclick')) currentPlatform = 'domclick';
                else if (sampleKey.includes('avito')) currentPlatform = 'avito';
                else if (sampleKey.includes('cian')) currentPlatform = 'cian';
            } else if (sampleKey.startsWith('comm_')) {
                currentMarket = 'commercial';
                commercialTypeGroup.classList.remove('hidden');
                if (sampleKey.includes('warehouse')) {
                    currentCommercialType = 'Склад';
                    commercialTypeSelect.value = 'Склад';
                    currentPlatform = 'yandex';
                } else if (sampleKey.includes('office')) {
                    currentCommercialType = 'Офис';
                    commercialTypeSelect.value = 'Офис';
                    currentPlatform = 'avito';
                }
            }

            segmentBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-market') === currentMarket));
            platformBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-platform') === currentPlatform));

            fileNameDisplay.textContent = currentFileName;
            fileSizeDisplay.textContent = `(Демо XML)`;
            loadedFileInfo.classList.remove('hidden');
            analyzeAndRender();
        });
    });
}

// Modal
function initModal() {
    btnPasteXml.addEventListener('click', () => modalPaste.classList.remove('hidden'));
    btnClosePasteModal.addEventListener('click', () => modalPaste.classList.add('hidden'));
    btnCancelPaste.addEventListener('click', () => modalPaste.classList.add('hidden'));

    btnSubmitPaste.addEventListener('click', () => {
        const text = xmlPasteTextarea.value.trim();
        if (text) {
            rawXmlText = text;
            currentFileName = 'pasted_feed.xml';
            fileNameDisplay.textContent = currentFileName;
            fileSizeDisplay.textContent = `(Текст из буфера)`;
            loadedFileInfo.classList.remove('hidden');
            modalPaste.classList.add('hidden');
            analyzeAndRender();
        }
    });

    // Export Summary Modal listeners
    btnExportSummary.addEventListener('click', openExportSummaryModal);
    btnCloseSummaryModal.addEventListener('click', () => modalExportSummary.classList.add('hidden'));
    
    btnCopySummaryText.addEventListener('click', copySummaryToClipboard);
    btnModalCsv.addEventListener('click', triggerCsvExport);
    btnModalJson.addEventListener('click', triggerJsonExport);
}

// Tabs
function initTabs() {
    tabItems.forEach(btn => {
        btn.addEventListener('click', () => {
            tabItems.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Helper to get realistic fill-in example for missing parameters (clean human example, no XML tags)
function getSampleFillExample(paramName) {
    if (!paramName) return 'Пример значения';
    const n = paramName.toLowerCase();

    for (let [k, exampleVal] of Object.entries(SAMPLE_FILL_EXAMPLES)) {
        if (n.includes(k)) return exampleVal;
    }

    if (n.includes('name') || n.includes('название') || n.includes('бренд') || n.includes('менеджер') || n.includes('застройщик')) {
        if (n.includes('жк') || n.includes('complex') || n.includes('building')) return 'ЖК Южный полюс';
        if (n.includes('бц') || n.includes('тц')) return 'БЦ Премьер Плаза';
        if (n.includes('manager') || n.includes('менеджер')) return 'Иван Петров';
        if (n.includes('developer') || n.includes('застройщик')) return 'ООО Южный Девелопмент';
        return 'ЖК Южный полюс';
    }

    if (n.includes('id') || n.includes('номер') || n.includes('код') || n.includes('кадастр') || n.includes('inn') || n.includes('инн')) {
        if (n.includes('cadastral') || n.includes('кадастр')) return '77:01:0001001:1234';
        if (n.includes('inn') || n.includes('инн')) return '7712345678';
        return '12345';
    }

    if (n.includes('lat') || n.includes('широта')) return '55.751244';
    if (n.includes('lng') || n.includes('long') || n.includes('долгота')) return '37.618423';
    if (n.includes('address') || n.includes('адрес') || n.includes('расположение') || n.includes('локаци')) return 'г. Москва, ул. Арбат, д. 10';
    if (n.includes('image') || n.includes('photo') || n.includes('фото') || n.includes('обложка') || n.includes('планировка') || n.includes('plan') || n.includes('avatar')) {
        return 'https://example.com/photo.jpg';
    }
    if (n.includes('description') || n.includes('описание') || n.includes('text') || n.includes('утп') || n.includes('profit')) {
        return 'Просторный объект в современном комплексе с развитой инфраструктурой.';
    }
    if (n.includes('fz') || n.includes('214') || n.includes('способ продажи') || n.includes('договор')) return 'ДДУ (ФЗ-214)';
    if (n.includes('phone') || n.includes('телефон')) return '+7 (495) 123-45-67';
    if (n.includes('timezone')) return '+3 (МСК)';
    if (n.includes('day') || n.includes('график') || n.includes('часы') || n.includes('режим') || n.includes('доступ')) return 'пн-пт с 09:00 до 21:00';

    if (n.includes('price') || n.includes('цена') || n.includes('стоимость') || n.includes('платеж') || n.includes('плат') || n.includes('ставка') || n.includes('bet') || n.includes('fee') || n.includes('cost')) {
        return '14 500 000 руб.';
    }
    if (n.includes('living') || n.includes('жилая')) return '34.0 м²';
    if (n.includes('area') || n.includes('площадь') || n.includes('square') || n.includes('пространство')) return '58.4 м²';
    if (n.includes('height') || n.includes('высота') || n.includes('ceiling')) return '2.95 м';

    if (n.includes('floors') || n.includes('этажей')) return '24';
    if (n.includes('floor') || n.includes('этаж')) return '7';
    if (n.includes('room') || n.includes('комнат')) return '2';

    if (n.includes('type') || n.includes('тип') || n.includes('status') || n.includes('статус') || n.includes('назначение') || n.includes('категория') || n.includes('category')) {
        if (n.includes('house') || n.includes('дом') || n.includes('стен') || n.includes('material')) return 'Монолит-кирпич';
        if (n.includes('decoration') || n.includes('renovation') || n.includes('отделка') || n.includes('ремонт')) return 'Чистовая';
        if (n.includes('status') || n.includes('статус') || n.includes('housing')) return 'Квартира';
        return 'Продажа';
    }

    if (n.includes('built') || n.includes('year') || n.includes('год') || n.includes('deadline') || n.includes('срок') || n.includes('date') || n.includes('дата')) return '4 кв. 2026';
    if (n.includes('quarter') || n.includes('квартал')) return '4 кв.';
    if (n.includes('state') || n.includes('стадия') || n.includes('состояние')) return 'Строится';

    if (n.includes('lift') || n.includes('лифт')) return '2 пассажирских, 1 грузовой';
    if (n.includes('parking') || n.includes('парковка') || n.includes('стоянка') || n.includes('машиномест')) return 'Подземная парковка';
    if (n.includes('security') || n.includes('охрана') || n.includes('кпп') || n.includes('доступ') || n.includes('пропуск')) return 'Закрытая территория, КПП';
    if (n.includes('window') || n.includes('окна') || n.includes('вид')) return 'Во двор и на улицу';
    if (n.includes('balcony') || n.includes('балкон') || n.includes('loggia')) return '1 лоджия';
    if (n.includes('bathroom') || n.includes('санузел') || n.includes('туалет') || n.includes('wc')) return 'Раздельный';

    if (n.includes('url') || n.includes('site') || n.includes('ссылка') || n.includes('сайт') || n.includes('link')) return 'https://example.com';
    if (n.includes('metro') || n.includes('метро') || n.includes('транспорт')) return 'Арбатская (5 мин. пешком)';
    if (n.includes('power') || n.includes('мощность') || n.includes('электричеств') || n.includes('квт')) return '150 кВт';
    if (n.includes('entrance') || n.includes('вход')) return 'Отдельный с улицы';
    if (n.includes('gas') || n.includes('газ') || n.includes('отопление')) return 'Центральное';
    if (n.includes('water') || n.includes('водопровод') || n.includes('канализаци')) return 'Центральная';

    return 'Да (включено)';
}

// Evaluate Commercial Formula
function evaluateCommercialFormula(formulaStr, selectedType) {
    if (!formulaStr || formulaStr === '="Да"') return true;
    if (selectedType === 'Все типы') return true;

    if (formulaStr.includes('IF(')) {
        const typeTokensMap = {
            'Апартаменты': ['Апартаменты', 'ПСН', 'Гостиница', 'Общепит'],
            'Офис': ['Офис', 'Офисная'],
            'Торговая': ['Торговая', 'Ритейл'],
            'ПСН': ['ПСН'],
            'Склад': ['Склад'],
            'Производство': ['Производство'],
            'Земля': ['Земля'],
            'Готовый бизнес': ['Готовый бизнес'],
            'Гараж': ['Гараж'],
            'Общепит': ['Общепит'],
            'Гостиница': ['Гостиница'],
            'Автосервис': ['Автосервис'],
            'Здание': ['Здание'],
            'Кладовая': ['Кладовая']
        };

        const tokens = typeTokensMap[selectedType] || [selectedType];
        const hasType = tokens.some(t => formulaStr.includes(`"${t}"`));

        if (formulaStr.includes('"Нет","Да"') || formulaStr.includes('"Нет", "Да"') || formulaStr.includes('"Нет","Да"')) {
            return !hasType;
        } else {
            return hasType;
        }
    }

    return true;
}

// XML Parser
function parseXMLFeed(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    const parseError = xmlDoc.getElementsByTagName("parsererror");
    if (parseError.length > 0) {
        throw new Error("Ошибка парсинга XML: " + parseError[0].textContent);
    }

    const root = xmlDoc.documentElement;
    const xmlPathsMap = new Map();
    let totalObjects = 0;

    const objectTags = ['object', 'ad', 'offer', 'flat', 'item', 'realty'];
    const allElements = xmlDoc.getElementsByTagName("*");

    for (let elem of allElements) {
        const cleanTag = (elem.localName || elem.tagName.split(':').pop()).toLowerCase();
        if (objectTags.includes(cleanTag)) {
            totalObjects++;
        }
    }

    function walkElement(node, currentPath = '') {
        const tag = node.localName || node.tagName.split(':').pop();
        const path = currentPath ? `${currentPath}.${tag}` : tag;

        // Capture text content for both leaf nodes and container tags (e.g. <Description><p>...</p></Description>)
        const sampleVal = (node.textContent || '').trim();

        if (!xmlPathsMap.has(path) && sampleVal) xmlPathsMap.set(path, sampleVal);
        if (!xmlPathsMap.has(tag) && sampleVal) xmlPathsMap.set(tag, sampleVal);

        for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes[i];
            const attrPath = `${path}@${attr.name}`;
            const attrTag = `${tag}@${attr.name}`;
            if (!xmlPathsMap.has(attrPath)) xmlPathsMap.set(attrPath, attr.value);
            if (!xmlPathsMap.has(attrTag)) xmlPathsMap.set(attrTag, attr.value);
            if (!xmlPathsMap.has(attr.name)) xmlPathsMap.set(attr.name, attr.value);
            if (!xmlPathsMap.has(`@${attr.name}`)) xmlPathsMap.set(`@${attr.name}`, attr.value);
            if (!xmlPathsMap.has(`${tag} ${attr.name}`)) xmlPathsMap.set(`${tag} ${attr.name}`, attr.value);
        }

        for (let child of node.children) {
            walkElement(child, path);
        }
    }

    walkElement(root);

    // Guaranteed regex fallback for Yandex offer internal-id attribute
    const internalIdMatch = xmlString.match(/internal-id\s*=\s*["']?([^"'\s>]+)/i);
    if (internalIdMatch) {
        const internalIdVal = internalIdMatch[1].replace(/["']/g, '');
        xmlPathsMap.set('offer internal-id', internalIdVal);
        xmlPathsMap.set('internal-id', internalIdVal);
        xmlPathsMap.set('offer@internal-id', internalIdVal);
        xmlPathsMap.set('@internal-id', internalIdVal);
        xmlPathsMap.set('offer.internal-id', internalIdVal);
    }

    return { xmlPathsMap, totalObjects };
}

// Dynamic XML Tag Aliases Helper
function generateAliasesForParam(paramName) {
    const nameLow = paramName.toLowerCase();
    const aliases = [paramName];

    if (nameLow.includes('internal-id') || nameLow.includes('internal_id') || nameLow === 'id' || nameLow.includes('идентификатор') || nameLow.includes('offer internal-id')) {
        aliases.push('offer internal-id', 'internal-id', 'offer@internal-id', '@internal-id', 'offer.internal-id', 'Id', 'id', 'ExternalId', 'flat_id', 'complex.id', 'building.id', 'offer id', 'offer@id');
    }

    if (nameLow.includes('phone') || nameLow.includes('телефон') || nameLow.includes('номер') || nameLow.includes('phones')) {
        aliases.push('Number', 'Phone', 'Phones', 'PhoneSchema', 'PhoneSchema.Number', 'Phones.PhoneSchema.Number', 'phone', 'sales-agent.phone', 'sales_phone', 'number', 'Phones.PhoneSchema', 'PhoneSchema.Phone', 'ContactPhone');
    }

    if (nameLow.includes('vat') || nameLow.includes('ндс')) {
        aliases.push('VatType', 'BargainTerms.VatType', 'vat', 'Vat');
    }

    if (nameLow.includes('contracttype') || nameLow.includes('договор') || nameLow.includes('сделк')) {
        aliases.push('ContractType', 'BargainTerms.ContractType', 'SaleType', 'BargainTerms.SaleType', 'OperationType', 'TransactionType');
    }

    if (nameLow.includes('specialty') || nameLow.includes('назначение')) {
        aliases.push('Specialty', 'Types', 'AdditionalTypes', 'Purpose', 'purpose', 'commercial-type', 'ObjectType');
    }

    const dict = {
        'заголовок': ['Title', 'title', 'Header'],
        'адрес': ['Address', 'address', 'location.address', 'location', 'complex.address', 'building.address'],
        'широта': ['Latitude', 'latitude', 'Coordinates.Lat', 'location.latitude', 'complex.latitude', 'building.latitude', 'lat'],
        'долгота': ['Longitude', 'longitude', 'Coordinates.Lng', 'location.longitude', 'complex.longitude', 'building.longitude', 'lng'],
        'кадастровый': ['CadastralNumber', 'cadastral_number', 'cadastral-number'],
        'метро': ['Metro', 'metro', 'Metro.Name', 'location.metro', 'subway'],
        'цена': ['Price', 'price', 'BargainTerms.Price', 'price.value', 'flat.price'],
        'площадь': ['Square', 'square', 'TotalArea', 'area.value', 'flat.area', 'area'],
        'этаж': ['Floor', 'floor', 'FloorNumber', 'flat.floor'],
        'этажей': ['Floors', 'floors', 'FloorsCount', 'floors-total', 'building.floors'],
        'описание': ['Description', 'description', 'description_main.text'],
        'фотографии': ['Images', 'images', 'Photos', 'Photos.PhotoSchema', 'picture', 'image', 'images.image', 'plans.plan'],
        'видео': ['VideoURL', 'video_url', 'ObjectTour.FullUrl', 'virtual-tour', 'video-review'],
        'телефон': ['Phones', 'Phone', 'phone', 'sales-agent.phone', 'Number', 'PhoneSchema', 'PhoneSchema.Number', 'sales_phone', 'ContactPhone'],
        'менеджер': ['ManagerName', 'manager_name', 'sales-agent.name', 'SubAgent.FirstName'],
        'отделка': ['Decoration', 'decoration', 'renovation', 'flat.renovation', 'decorations'],
        'потолок': ['CeilingHeight', 'ceiling_height', 'Building.CeilingHeight', 'ceiling-height', 'flat.ceiling_height'],
        'парковка': ['Parking', 'parking', 'Parking.Type', 'infrastructure.parking', 'ParkingType'],
        'охрана': ['Security', 'security', 'guarded-building', 'YardAndEntranceFeatures', 'Courtyard', 'infrastructure.security'],
        'лифт': ['Lift', 'lift', 'PassengerElevator', 'FreightElevator', 'building.passenger_lifts_count', 'building.cargo_lifts_count'],
        'здание': ['HouseType', 'house_type', 'building-type', 'Building.MaterialType', 'BuildingType'],
        'класс': ['BuildingClass', 'building_class', 'Building.ClassType', 'building-class'],
        'мощность': ['Power', 'power', 'Building.Power', 'electric-capacity'],
        'вход': ['EntranceType', 'entrance_type', 'Entrance', 'entrance-type'],
        'назначение': ['Purpose', 'purpose', 'commercial-type', 'Category', 'category', 'ObjectType'],
        'комнат': ['Rooms', 'rooms', 'FlatRoomsCount', 'flat.room'],
        'жилая': ['LivingArea', 'LivingSpace', 'living-space.value', 'flat.living_area'],
        'застройщик': ['Developer', 'developer', 'builder', 'developer.name'],
        'скидка': ['Discount', 'discount', 'discount.final-price', 'discounts']
    };

    for (let [k, list] of Object.entries(dict)) {
        if (nameLow.includes(k)) {
            aliases.push(...list);
        }
    }

    return Array.from(new Set(aliases));
}

// Analyzer Function
function analyzeAndRender() {
    try {
        const { xmlPathsMap, totalObjects } = parseXMLFeed(rawXmlText);

        // Auto-detect Market & Platform from XML tags if obvious
        const categoryVal = (xmlPathsMap.get('Category') || xmlPathsMap.get('category') || xmlPathsMap.get('ObjectType') || xmlPathsMap.get('commercial-type') || '').toLowerCase();
        
        const isCommercialFeed = ['garagesale', 'officesale', 'warehousesale', 'businesssale', 'commerciallandsale', 'buildingsale', 'shoppingareasale', 'freeappointmentobjectsale', 'commercial', 'коммерческая'].some(k => categoryVal.includes(k)) ||
            xmlPathsMap.has('commercial-type') || xmlPathsMap.has('ObjectType') || xmlPathsMap.has('Garage.Type') || xmlPathsMap.has('StorageRoomType');

        if (isCommercialFeed && currentMarket !== 'commercial') {
            currentMarket = 'commercial';
            commercialTypeGroup.classList.remove('hidden');
            segmentBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-market') === 'commercial'));
        }

        // Platform Auto-detection
        if (xmlPathsMap.has('Feed_Version') || xmlPathsMap.has('JKSchema') || categoryVal.includes('sale') || categoryVal.includes('rent')) {
            if (currentPlatform !== 'cian') {
                currentPlatform = 'cian';
                platformBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-platform') === 'cian'));
                updateCommercialTypeDropdown();
            }
        } else if (rawXmlText.includes('target="Avito.ru"') || xmlPathsMap.has('AdStatus') || xmlPathsMap.has('ObjectType')) {
            if (currentPlatform !== 'avito') {
                currentPlatform = 'avito';
                platformBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-platform') === 'avito'));
                updateCommercialTypeDropdown();
            }
        } else if (rawXmlText.includes('realty-feed') || xmlPathsMap.has('commercial-type') || xmlPathsMap.has('offer internal-id')) {
            if (currentPlatform !== 'yandex') {
                currentPlatform = 'yandex';
                platformBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-platform') === 'yandex'));
                updateCommercialTypeDropdown();
            }
        }

        // Auto-detect Commercial ObjectType from feed
        if (currentMarket === 'commercial') {
            const rawCat = categoryVal || (xmlPathsMap.get('Garage.Type') || '').toLowerCase();
            let targetType = '';

            if (rawCat.includes('garage') || rawCat.includes('parking') || rawCat.includes('гараж') || rawCat.includes('машиноместо')) {
                targetType = 'Гараж';
            } else if (rawCat.includes('office') || rawCat.includes('офис')) {
                targetType = 'Офис';
            } else if (rawCat.includes('warehouse') || rawCat.includes('склад')) {
                targetType = 'Склад';
            } else if (rawCat.includes('shopping') || rawCat.includes('retail') || rawCat.includes('торгов')) {
                targetType = 'Торговая';
            } else if (rawCat.includes('free') || rawCat.includes('psn') || rawCat.includes('псн')) {
                targetType = 'ПСН';
            } else if (rawCat.includes('industry') || rawCat.includes('manufactur') || rawCat.includes('производств')) {
                targetType = 'Производство';
            } else if (rawCat.includes('business') || rawCat.includes('бизнес')) {
                targetType = 'Готовый бизнес';
            } else if (rawCat.includes('building') || rawCat.includes('здание')) {
                targetType = 'Здание';
            } else if (rawCat.includes('land') || rawCat.includes('земля')) {
                targetType = 'Земля';
            } else if (rawCat.includes('kladov') || rawCat.includes('storage') || rawCat.includes('кладов')) {
                targetType = 'Кладовая';
            }

            if (targetType && commercialTypeSelect) {
                const opt = Array.from(commercialTypeSelect.options).find(o => o.value === targetType);
                if (opt && opt.value !== currentCommercialType) {
                    currentCommercialType = opt.value;
                    commercialTypeSelect.value = opt.value;
                }
            }
        }

        // Get spec parameters from RAW_EXCEL_DATA
        let marketSpec = RAW_EXCEL_DATA[currentMarket][currentPlatform] || [];

        // Extra safety check: Filter out Kitchen Space for New Developments
        if (currentMarket === 'new_developments') {
            marketSpec = marketSpec.filter(item => !item.name.toLowerCase().includes('площадь кухни'));
        }

        const cleanedPaths = Array.from(xmlPathsMap.keys());

        function matchXmlAlias(aliases) {
            let bestMatch = null;

            for (let alias of aliases) {
                const aliasLower = alias.toLowerCase();

                if (xmlPathsMap.has(alias)) {
                    const val = xmlPathsMap.get(alias) || '';
                    return { present: true, matchedTag: alias, sampleValue: val };
                }

                for (let xmlPath of cleanedPaths) {
                    const xmlPathLow = xmlPath.toLowerCase();
                    if (
                        xmlPathLow === aliasLower ||
                        xmlPathLow.endsWith(aliasLower) ||
                        xmlPathLow.endsWith(`@${aliasLower}`) ||
                        xmlPathLow.includes(`@${aliasLower}`) ||
                        (xmlPathLow.includes(`internal-id`) && aliasLower.includes(`internal-id`)) ||
                        xmlPathLow.endsWith(`.${aliasLower}`)
                    ) {
                        const val = xmlPathsMap.get(xmlPath) || '';
                        if (val && val.trim()) {
                            return { present: true, matchedTag: xmlPath, sampleValue: val.trim() };
                        }
                        if (!bestMatch) {
                            bestMatch = { present: true, matchedTag: xmlPath, sampleValue: val };
                        }
                    }
                }
            }

            return bestMatch || { present: false, matchedTag: '', sampleValue: '' };
        }

        const processedParams = [];
        let missingMandatoryCount = 0;
        let canAddCount = 0;
        let nonApplicableCount = 0;
        let presentCount = 0;

        marketSpec.forEach(item => {
            const paramName = item.name;
            const category = item.category || 'Общие';
            const formula = item.formula || '="Да"';

            let isApplicable = true;
            if (currentMarket === 'commercial') {
                isApplicable = evaluateCommercialFormula(formula, currentCommercialType);
            }

            const aliases = generateAliasesForParam(paramName);
            const match = matchXmlAlias(aliases);

            const mandatoryKeywords = ['адрес', 'цена', 'площадь', 'категория', 'этаж', 'телефон', 'название', 'id', 'тип', 'застройщик'];
            const isMandatoryHeuristic = item.mandatory !== undefined ? item.mandatory : mandatoryKeywords.some(k => paramName.toLowerCase().includes(k));

            const sampleFillExample = getSampleFillExample(paramName);

            if (!isApplicable) {
                nonApplicableCount++;
                processedParams.push({
                    ...item,
                    aliases,
                    status: 'NA',
                    present: match.present,
                    matchedTag: match.matchedTag,
                    sampleValue: match.sampleValue,
                    sampleFillExample,
                    isMandatory: isMandatoryHeuristic
                });
            } else if (match.present) {
                presentCount++;
                processedParams.push({
                    ...item,
                    aliases,
                    status: 'PRESENT',
                    present: true,
                    matchedTag: match.matchedTag,
                    sampleValue: match.sampleValue,
                    sampleFillExample,
                    isMandatory: isMandatoryHeuristic
                });
            } else if (isMandatoryHeuristic) {
                missingMandatoryCount++;
                processedParams.push({
                    ...item,
                    aliases,
                    status: 'MISSING_MANDATORY',
                    present: false,
                    matchedTag: '',
                    sampleValue: '',
                    sampleFillExample,
                    isMandatory: true
                });
            } else {
                canAddCount++;
                processedParams.push({
                    ...item,
                    aliases,
                    status: 'CAN_ADD',
                    present: false,
                    matchedTag: '',
                    sampleValue: '',
                    sampleFillExample,
                    isMandatory: false
                });
            }
        });

        const activeParamsCount = processedParams.filter(p => p.status !== 'NA').length;
        const activePresentCount = processedParams.filter(p => p.status === 'PRESENT').length;
        const scorePercentage = activeParamsCount > 0 ? Math.round((activePresentCount / activeParamsCount) * 100) : 100;

        parsedAnalysisResult = {
            market: currentMarket,
            platform: currentPlatform,
            commercialType: currentCommercialType,
            totalObjects,
            uniqueTagsCount: cleanedPaths.length,
            missingMandatoryCount,
            canAddCount,
            nonApplicableCount,
            presentCount,
            processedParams,
            xmlPathsMap,
            scorePercentage
        };

        renderDashboard(parsedAnalysisResult);
        resultsSection.classList.remove('hidden');

    } catch (err) {
        alert("Ошибка при обработке XML файла:\n" + err.message);
    }
}

// Render Dashboard UI
function renderDashboard(data) {
    metricObjects.textContent = data.totalObjects > 0 ? data.totalObjects : 'н/д';
    metricMissingMandatory.textContent = data.missingMandatoryCount;
    metricCanAdd.textContent = data.canAddCount;
    metricTotalTags.textContent = data.uniqueTagsCount;

    scoreValue.textContent = `${data.scorePercentage}%`;

    badgeTabMandatory.textContent = data.missingMandatoryCount;
    badgeTabOptional.textContent = data.canAddCount;
    badgeTabPresent.textContent = data.presentCount;
    badgeTabNa.textContent = data.nonApplicableCount;
    badgeTabAllXml.textContent = data.uniqueTagsCount;

    renderMandatoryTable(data.processedParams.filter(p => p.status === 'MISSING_MANDATORY'));
    renderOptionalTable(data.processedParams.filter(p => p.status === 'CAN_ADD'));
    renderPresentTable(data.processedParams.filter(p => p.status === 'PRESENT'));
    renderNaTable(data.processedParams.filter(p => p.status === 'NA'));
    renderAllXmlTable(data.xmlPathsMap, data.processedParams);
}

function renderMandatoryTable(items) {
    if (items.length === 0) {
        tableMandatoryBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--color-success); font-weight:500;">Все обязательные теги найдены в фиде</td></tr>`;
        return;
    }

    tableMandatoryBody.innerHTML = items.map(item => `
        <tr>
            <td><span class="status-dot status-dot-danger">Отсутствует</span></td>
            <td><span class="cat-label">${escapeHtml(item.category)}</span></td>
            <td><span class="code-tag">${escapeHtml(formatParamNameWithTag(item))}</span></td>
            <td><span class="alias-text">${item.aliases.slice(0, 4).join(', ')}</span></td>
            <td style="text-align: right;">
                <button class="btn btn-secondary btn-sm" onclick="copyToClipboard('<${item.aliases[0]}></${item.aliases[0]}>')">
                    Скопировать
                </button>
            </td>
        </tr>
    `).join('');
}

function renderOptionalTable(items) {
    if (items.length === 0) {
        tableOptionalBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-muted);">Все рекомендуемые теги присутствуют</td></tr>`;
        return;
    }

    tableOptionalBody.innerHTML = items.map(item => `
        <tr>
            <td><span class="status-dot status-dot-warning">Можно добавить</span></td>
            <td><span class="cat-label">${escapeHtml(item.category)}</span></td>
            <td><span class="code-tag">${escapeHtml(formatParamNameWithTag(item))}</span></td>
            <td><span class="sample-text" style="max-width: 100%; font-size: 0.8rem;" title="${escapeHtml(item.sampleFillExample)}">${escapeHtml(item.sampleFillExample)}</span></td>
            <td style="text-align: right;">
                <button class="btn btn-secondary btn-sm" onclick="copyToClipboard('<${item.aliases[0]}></${item.aliases[0]}>')">
                    Скопировать
                </button>
            </td>
        </tr>
    `).join('');
}

function renderPresentTable(items) {
    if (items.length === 0) {
        tablePresentBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-muted);">Тегов не найдено</td></tr>`;
        return;
    }

    tablePresentBody.innerHTML = items.map(item => `
        <tr>
            <td>
                <span class="status-dot ${item.isMandatory ? 'status-dot-success' : 'status-dot-warning'}">
                    ${item.isMandatory ? 'Обязательный' : 'Дополнительный'}
                </span>
            </td>
            <td><span class="cat-label">${escapeHtml(item.category)}</span></td>
            <td><span class="code-tag">${escapeHtml(item.name)}</span></td>
            <td><span class="alias-text">${escapeHtml(item.matchedTag)}</span></td>
            <td><span class="sample-text" title="${escapeHtml(item.sampleValue)}">${escapeHtml(item.sampleValue) || '—'}</span></td>
        </tr>
    `).join('');
}

function renderNaTable(items) {
    if (items.length === 0) {
        tableNaBody.innerHTML = `<tr><td colspan="4" style="text-align:center; color: var(--text-muted);">Все параметры спецификации актуальны для этого типа объекта</td></tr>`;
        return;
    }

    tableNaBody.innerHTML = items.map(item => `
        <tr>
            <td><span class="status-dot status-dot-neutral">Не требуется</span></td>
            <td><span class="cat-label">${escapeHtml(item.category)}</span></td>
            <td><span class="code-tag">${escapeHtml(item.name)}</span></td>
            <td>Не относится к объектам типа «${escapeHtml(currentCommercialType)}»</td>
        </tr>
    `).join('');
}

function renderAllXmlTable(xmlPathsMap, processedParams) {
    const matchedSet = new Set(processedParams.filter(p => p.present).map(p => p.matchedTag.toLowerCase()));

    let index = 1;
    let rows = [];
    xmlPathsMap.forEach((sampleVal, xmlPath) => {
        const cleanTagName = xmlPath.split('.').pop();
        const isMatched = matchedSet.has(xmlPath.toLowerCase()) || matchedSet.has(cleanTagName.toLowerCase());

        rows.push(`
            <tr>
                <td>${index++}</td>
                <td><span class="alias-text">${escapeHtml(xmlPath)}</span></td>
                <td><span class="code-tag">${escapeHtml(cleanTagName)}</span></td>
                <td><span class="sample-text" title="${escapeHtml(sampleVal)}">${escapeHtml(sampleVal) || '—'}</span></td>
                <td><span class="status-dot ${isMatched ? 'status-dot-success' : 'status-dot-neutral'}">${isMatched ? 'Распознан' : 'Дополнительный'}</span></td>
            </tr>
        `);
    });

    tableAllXmlBody.innerHTML = rows.join('');
}

// Russian Translation Dictionary for Parameter Names
const PARAM_RUSSIAN_MAP = {
    'complex.id': 'ID ЖК',
    'complex.name': 'Название ЖК',
    'complex.latitude': 'Широта ЖК',
    'complex.longitude': 'Долгота ЖК',
    'complex.address': 'Адрес ЖК',
    'images.image': 'Фотографии ЖК',
    'description_main.text': 'Описание ЖК',
    'description_main.title': 'Заголовок описания ЖК',
    'building.id': 'ID корпуса',
    'building.fz_214': 'Соответствие ФЗ-214',
    'building.name': 'Название корпуса',
    'building.latitude': 'Широта корпуса',
    'building.longitude': 'Долгота корпуса',
    'building.address': 'Адрес корпуса',
    'building.floors': 'Этажность корпуса',
    'building.floors_ready': 'Построено этажей',
    'building.building_state': 'Стадия строительства',
    'building.ceiling_height': 'Высота потолков в корпусе',
    'building.passenger_lifts_count': 'Пассажирские лифты',
    'building.cargo_lifts_count': 'Грузовые лифты',
    'flat.flat_id': 'ID квартиры',
    'flat.apartment': 'Номер квартиры / помещения',
    'flat.domrf_id': 'ID на дом.рф',
    'flat.entrance': 'Подъезд',
    'flat.booking': 'Статус бронирования',
    'flat.euro_plan': 'Европланировка',
    'flat.balcony': 'Количество балконов',
    'flat.loggia': 'Количество лоджий',
    'flat.connected_bathroom': 'Совмещенный санузел',
    'flat.separated_bathroom': 'Раздельный санузел',
    'flat.floor': 'Этаж',
    'flat.room': 'Количество комнат',
    'flat.plans.plan': 'Планировка квартиры',
    'flat.price': 'Цена квартиры',
    'flat.area': 'Общая площадь',
    'flat.living_area': 'Жилая площадь',
    'flat.housing_type': 'Тип жилья (квартира / апартаменты)',
    'sales_info.sales_phone': 'Телефон отдела продаж',
    'sales_info.timezone': 'Часовой пояс',
    'sales_info.work_days.work_day': 'График работы отдела продаж',
    'sales_info.sales_address': 'Адрес отдела продаж',
    'developer.id': 'ID застройщика',
    'developer.name': 'Название застройщика',
    'developer.site': 'Сайт застройщика',
    'developer.logo': 'Логотип застройщика',
    'offer internal-id': 'ID объявления',
    'type': 'Тип сделки',
    'property-type': 'Тип недвижимости',
    'category': 'Категория объекта',
    'creation-date': 'Дата создания объявления',
    'location.address': 'Адрес объекта',
    'location.latitude': 'Широта объекта',
    'location.longitude': 'Долгота объекта',
    'sales-agent.phone': 'Телефон продавца',
    'sales-agent.category': 'Категория продавца',
    'deal-status': 'Тип сделки (первичная / 214-ФЗ)',
    'price.value': 'Цена объекта',
    'price.currency': 'Валюта цены',
    'area.value': 'Общая площадь',
    'living-space.value': 'Жилая площадь',
    'image': 'Фотографии объекта',
    'new-flat': 'Признак новостройки',
    'floor': 'Этаж',
    'rooms': 'Количество комнат',
    'yandex-building-id': 'ID ЖК в Яндекс',
    'yandex-house-id': 'ID корпуса в Яндекс',
    'built-year': 'Год сдачи',
    'ready-quarter': 'Квартал сдачи',
    'building-state': 'Стадия строительства',
    'Id': 'Уникальный ID объявления',
    'DateBegin': 'Дата начала публикации',
    'DateEnd': 'Дата окончания публикации',
    'ListingFee': 'Вариант платного размещения',
    'AdStatus': 'Услуга продвижения',
    'AvitoId': 'Номер объявления на Авито',
    'ManagerName': 'Имя менеджера',
    'ContactPhone': 'Контактный телефон',
    'Description': 'Описание объявления',
    'Images': 'Фотографии объекта',
    'VideoURL': 'Ссылка на видео',
    'Address': 'Полный адрес объекта',
    'Longitude': 'Географическая долгота',
    'Latitude': 'Географическая широта',
    'ContactMethod': 'Способ связи',
    'InternetCalls': 'Интернет-звонки',
    'CallsDevices': 'Устройства для приема звонков',
    'Category': 'Категория объявления',
    'Title': 'Заголовок объявления',
    'Price': 'Цена объекта',
    'PriceWithVAT': 'НДС включен в цену',
    'OperationType': 'Тип объявления',
    'ObjectType': 'Вид коммерческого объекта',
    'AdditionalObjectTypes': 'Дополнительные виды объекта',
    'VideoFileURL': 'Видеофайл (прямая ссылка)',
    'EgrnExtractionLink': 'Ссылка на выписку ЕГРН',
    'PropertyRights': 'Право собственности',
    'PremisesType': 'Тип помещения (торговля)',
    'Entrance': 'Вход в помещение',
    'EntranceAdditionally': 'Вход дополнительно',
    'Floor': 'Этаж',
    'FloorAdditionally': 'Этаж дополнительно',
    'Layout': 'Планировка',
    'StorageRoomType': 'Тип кладовой',
    'Square': 'Общая площадь',
    'Width': 'Ширина помещения / кладовой',
    'Length': 'Длина помещения / кладовой',
    'PlaceIsRented': 'Помещение сдано в аренду',
    'RenterName': 'Название арендатора',
    'RenterMonthPayment': 'Месячный арендный платеж',
    'RentContractExpireDate': 'Дата окончания договора аренды',
    'PaymentIndexation': 'Индексация платежа',
    'PercentOfTrade': 'Процент с товарооборота',
    'CeilingHeight': 'Высота потолков',
    'Volume': 'Объем кладовой',
    'Security': 'Наличие охраны',
    'AccessSchedule': 'Доступ на объект',
    'CarAccess': 'Подъезд на машине',
    'Decoration': 'Отделка помещения',
    'PowerGridCapacity': 'Мощность электросети',
    'PowerGridAdditionally': 'Электросеть дополнительно',
    'Heating': 'Отопление',
    'Lighting': 'Наличие освещения',
    'PowerSockets': 'Наличие розеток',
    'ReadinessStatus': 'Статус готовности здания',
    'BuildingType': 'Тип здания',
    'BuildingClass': 'Класс здания',
    'DistanceFromRoad': 'Удаленность от дороги',
    'ParkingType': 'Тип парковки',
    'ParkingAdditionally': 'Дополнительно о парковке',
    'ParkingSpaces': 'Количество мест на парковке',
    'TransactionType': 'Тип сделки',
    'PriceType': 'Вариант задания цены',
    'SaleOptions': 'Способ продажи',
    'ObjectBooked': 'Объект забронирован',
    'ReadyBusinessType': 'Тип готового бизнеса',
    'MonthlyIncome.Income': 'Месячная прибыль (готовый бизнес)',
    'MonthlyIncome.Currency': 'Валюта месячной прибыли',
    'Specialty': 'Возможное назначение объекта',
    'Building.FloorsCount': 'Количество этажей в здании',
    'Land.Area': 'Площадь участка',
    'Land.AreaUnitType': 'Единица измерения площади участка',
    'Land.Status': 'Статус земли',
    'Land.PermittedUseType': 'Вид разрешенного использования',
    'Land.PossibleToChangeStatus': 'Возможность изменения статуса земли',
    'Land.PossibleToChangePermitedUseType': 'Возможность изменения ВРИ',
    'Land.HasEncumbrances': 'Наличие обременений на землю',
    'Land.Electricity': 'Электроснабжение участка',
    'Land.Gas': 'Газоснабжение участка',
    'Land.Drainage': 'Канализация на участке',
    'Land.Water': 'Водоснабжение участка',
    'Land.DrivewayType': 'Подъездные пути к участку',
    'BargainTerms.VatType': 'Тип НДС',
    'BargainTerms.ContractType': 'Тип договора',
    'BargainTerms.AgentBonus': 'Бонус агенту',
    'Auction': 'Подключение аукциона по продвижению',
    'AuctionPerClick': 'Аукцион за просмотр',
    'IsNeedHideExactAddress': 'Скрыть точный адрес',
    'Coordinates.Lat': 'Географическая широта',
    'Coordinates.Lng': 'Географическая долгота',
    'SubAgent.Email': 'Email субагента',
    'LayoutPhoto': 'Планировка объекта',
    'HasFurniture': 'Наличие мебели',
    'HasEquipment': 'Наличие оборудования',
    'IsInHiddenBase': 'Размещение в закрытой базе',
    'FurniturePresence': 'Наличие мебели',
    'InputType': 'Тип входа в помещение',
    'HasShopWindows': 'Витринные окна',
    'IsOccupied': 'Помещение занято',
    'WaterPipesCount': 'Количество мокрых точек',
    'TaxNumber': 'Номер налоговой',
    'BusinessShoppingCenter.Id': 'Идентификатор ТЦ / БЦ',
    'FloorMaterialTypeType': 'Материал пола на складе',
    'CranageTypes': 'Крановое оборудование',
    'GatesType': 'Тип ворот на складе',
    'ColumnGrid': 'Сетка колонн',
    'Building.LiftTypes': 'Лифтовое оборудование здания',
    'HasOfficeSpace': 'Офисные помещения на складе',
    'commercial-building-type': 'Тип коммерческого здания',
    'purpose-warehouse': 'Назначение склада',
    'lot-number': 'Номер лота',
    'vas': 'Продвижение (VAS)',
    'taxation-form': 'Форма налогообложения',
    'cleaning-included': 'Клининг включен в стоимость',
    'utilities-included': 'Коммунальные услуги включены',
    'electricity-included': 'Электроэнергия включена',
    'entrance-type': 'Вход в помещение (общий / отдельный)',
    'open-plan': 'Свободная планировка',
    'self-selection-telecom': 'Самостоятельный выбор провайдера',
    'room-furniture': 'Наличие мебели',
    'floor-covering': 'Покрытие пола',
    'window-type': 'Тип окон',
    'window-view': 'Вид из окон',
    'office-class': 'Класс бизнес-центра',
    'guarded-building': 'Закрытая охраняемая территория',
    'access-control-system': 'Пропускная система',
    'twenty-four-seven': 'Круглосуточный доступ 24/7',
    'eating-facilities': 'Общепит в здании',
    'responsible-storage': 'Ответственное хранение',
    'pallet-price': 'Стоимость паллетоместа',
    'freight-elevator': 'Грузовой лифт',
    'truck-entrance': 'Подъезд фуры',
    'ramp': 'Наличие пандуса',
    'railway': 'Ж/Д ветка',
    'office-warehouse': 'Офис на складе',
    'open-area': 'Открытая площадка',
    'service-three-pl': '3PL логистические услуги',
    'temperature-comment': 'Температурный режим на складе',
    'Building.BuildYear': 'Год постройки здания',
    'Building.MaterialType': 'Материал стен здания',
    'Building.HeatingType': 'Тип отопления в здании',
    'Building.CeilingHeight': 'Высота потолков в здании',
    'Building.Parking': 'Парковка в здании',
    'Building.Type': 'Тип здания (БЦ / административное / и др.)',
    'Building.ClassType': 'Класс здания (A / B / C)',
    'Building.Developer': 'Застройщик здания',
    'Building.ManagementCompany': 'Управляющая компания',
    'Building.VentilationType': 'Вентиляция в здании',
    'Building.ConditioningType': 'Кондиционирование в здании',
    'Building.ExtinguishingSystemType': 'Система пожаротушения в здании',
    'EstateType': 'Тип недвижимости (собственность / аренда)',
    'ObjectTour': '3D-тур по объекту',
    'MultiListingSlots': 'Слоты мультиобъявления',
    'ConditionType': 'Состояние объекта и ремонт',
    'InputType': 'Вход в помещение',
    'AvailableFrom': 'Дата освобождения помещения',
    'TaxNumber': 'Номер налоговой',
    'IsLegalAddressProvided': 'Предоставление юридического адреса',
    'WaterPipesCount': 'Количество мокрых точек (водопровод)',
    'BusinessShoppingCenter.Id': 'ID ТЦ / БЦ в базе Циан',
    'HasShopWindows': 'Наличие витринных окон',
    'FloorMaterialTypeType': 'Материал пола (производство / склад)',
    'GatesType': 'Тип ворот (производство / склад)',
    'ColumnGrid': 'Сетка колонн',
    'Building.Name': 'Название здания / БЦ',
    'Building.HeatingType': 'Отопление в здании',
    'Building.CeilingHeight': 'Высота потолков в здании',
    'Building.Parking': 'Парковка в здании',
    'Building.Type': 'Тип здания',
    'Building.HouseLineType': 'Линия домов',
    'Building.ClassType': 'Класс здания',
    'Building.Developer': 'Застройщик здания',
    'Building.ManagementCompany': 'Управляющая компания',
    'Building.VentilationType': 'Вентиляция в здании',
    'Building.ConditioningType': 'Кондиционирование в здании',
    'Building.ExtinguishingSystemType': 'Система пожаротушения',
    'Building.LiftTypes': 'Лифты в здании',
    'Building.StatusType': 'Статус здания (действующее / проект / строящееся)',
    'Building.AccessType': 'Доступ в здание (пропускной / свободный)',
    'Building.Infrastructure': 'Инфраструктура здания',
    'Garage.Type': 'Тип гаража / машиноместа',
    'Garage.GarageType': 'Конструкция гаража',
    'Garage.Material': 'Материал стен гаража',
    'Garage.Status': 'Статус владения гаражом',
    'HasLight': 'Есть свет в гараже',
    'HasElectricity': 'Электричество в гараже',
    'HasHeating': 'Отопление в гараже',
    'HasWater': 'Водоснабжение в гараже',
    'HasExtinguishingSystem': 'Пожаротушение в гараже',
    'HasTire': 'Шиномонтаж в ГСК',
    'HasInspectionPit': 'Смотровая яма',
    'HasVideoSurveillance': 'Видеонаблюдение',
    'HasHourSecurity': 'Круглосуточная охрана',
    'HasAutomaticGates': 'Автоматические ворота',
    'HasEntryByPass': 'Въезд по пропускам',
    'HasBasement': 'Подвал / погреб',
    'HasSafeCustody': 'Ответственное хранение (склад)',
    'IsCustoms': 'Таможня на складе',
    'HasTransportServices': 'Транспортные услуги (склад)',
    'ShoppingCenterScaleType': 'Масштаб торгового центра',
    'PlacementType': 'Тип размещения (ТЦ / Street Retail)',
    'Tenants': 'Арендаторы',
    'OpeningHours': 'Часы работы',
    'LivingSpace': 'Жилая площадь',
    'ApartmentNumber': 'Номер квартиры',
    'BalconyOrLoggiaMulti': 'Балкон или лоджия',
    'ViewFromWindows': 'Вид из окон',
    'PassengerElevator': 'Пассажирский лифт',
    'FreightElevator': 'Грузовой лифт',
    'Courtyard': 'Особенности двора',
    'Parking': 'Парковка',
    'RoomType': 'Тип комнат',
    'BathroomMulti': 'Санузел',
    'SaleOptions': 'Способ продажи',
    'CeilingHeight': 'Высота потолков',
    'NDAdditionally': 'Дополнительно',
    'SaleMethod': 'Способ продажи',
    'BasePriceND': 'Базовая цена',
    'DduLink': 'Ссылка на ДДУ',
    'ManagerName': 'Имя менеджера',
    'ContactPhone': 'Контактный телефон',
    'Images': 'Фотографии',
    'VideoURL': 'Ссылка на видео'
};

function formatParamNameWithTag(item) {
    const rawName = item.name;
    const rusName = PARAM_RUSSIAN_MAP[rawName] || rawName;

    let tagToShow = rawName;
    if (item.aliases && item.aliases.length > 0) {
        if (rusName === rawName && item.aliases[0] !== rawName) {
            tagToShow = item.aliases[0];
        }
    }

    if (rusName !== tagToShow) {
        return `${rusName} (${tagToShow})`;
    }
    return rusName;
}

// Open Export Summary Modal (Shows ONLY missing parameters + Fill Examples + Category)
function openExportSummaryModal() {
    if (!parsedAnalysisResult) return;

    // Filter ONLY missing parameters (what is NOT present in the feed)
    const missingParams = parsedAnalysisResult.processedParams.filter(
        p => p.status === 'MISSING_MANDATORY' || p.status === 'CAN_ADD'
    );

    if (missingParams.length === 0) {
        tableSummaryBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color: var(--color-success); font-weight: 500;">🎉 Замечательный фид! Все параметры из спецификации присутствуют в файле.</td></tr>`;
    } else {
        tableSummaryBody.innerHTML = missingParams.map(item => {
            const formattedName = formatParamNameWithTag(item);
            return `
            <tr>
                <td><strong style="color: var(--text-primary);">${escapeHtml(formattedName)}</strong></td>
                <td>
                    <span class="status-dot ${item.isMandatory ? 'status-dot-danger' : 'status-dot-warning'}">
                        ${item.isMandatory ? 'Обязательный' : 'Необязательный'}
                    </span>
                </td>
                <td><span class="sample-text" style="max-width: 100%; font-size: 0.8rem;" title="${escapeHtml(item.sampleFillExample)}">${escapeHtml(item.sampleFillExample)}</span></td>
            </tr>
            `;
        }).join('');
    }

    modalExportSummary.classList.remove('hidden');
}

function copySummaryToClipboard() {
    if (!parsedAnalysisResult) return;

    const missingParams = parsedAnalysisResult.processedParams.filter(
        p => p.status === 'MISSING_MANDATORY' || p.status === 'CAN_ADD'
    );

    let text = `ОТЧЕТ ПО НЕДОСТАЮЩИМ ПАРАМЕТРАМ В ФИДЕ (${currentFileName})\n`;
    text += `Направление: ${currentMarket === 'new_developments' ? 'Новостройки' : 'Коммерческая'}\n`;
    text += `Площадка: ${currentPlatform.toUpperCase()}\n`;
    text += `--------------------------------------------------\n\n`;

    missingParams.forEach((item, i) => {
        const cat = item.isMandatory ? 'Обязательный' : 'Необязательный';
        const formattedName = formatParamNameWithTag(item);
        text += `${i + 1}. ${formattedName}\n`;
        text += `   Категория: ${cat}\n`;
        text += `   Пример для заполнения: ${item.sampleFillExample}\n\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
        toast.textContent = `Отчет скопирован в буфер обмена (${missingParams.length} элементов)`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2500);
    });
}

function triggerCsvExport() {
    if (!parsedAnalysisResult) return;

    // Filter ONLY missing parameters (what is NOT present in the feed)
    const missingParams = parsedAnalysisResult.processedParams.filter(
        p => p.status === 'MISSING_MANDATORY' || p.status === 'CAN_ADD'
    );

    let csvContent = "Название параметра;Категория;Пример для заполнения\n";
    missingParams.forEach(p => {
        const categoryStr = p.isMandatory ? "Обязательный" : "Необязательный";
        const formattedName = formatParamNameWithTag(p);
        csvContent += `"${formattedName}";"${categoryStr}";"${p.sampleFillExample}"\n`;
    });

    downloadFile("\uFEFF" + csvContent, `report_missing_${currentFileName.split('.')[0]}_${currentPlatform}.csv`, 'text/csv;charset=utf-8;');
}

function triggerJsonExport() {
    if (!parsedAnalysisResult) return;

    // Filter ONLY missing parameters (what is NOT present in the feed)
    const missingParams = parsedAnalysisResult.processedParams.filter(
        p => p.status === 'MISSING_MANDATORY' || p.status === 'CAN_ADD'
    ).map(p => ({
        "Название параметра": formatParamNameWithTag(p),
        "Категория": p.isMandatory ? "Обязательный" : "Необязательный",
        "Пример для заполнения": p.sampleFillExample
    }));

    downloadFile(JSON.stringify(missingParams, null, 4), `report_missing_${currentFileName.split('.')[0]}_${currentPlatform}.json`, 'application/json');
}

// Search & Checkbox
function initSearchAndFilter() {
    searchInput.addEventListener('input', applyFilters);
    checkboxHideNa.addEventListener('change', (e) => {
        hideNonApplicable = e.target.checked;
        const btnTabNa = document.getElementById('btn-tab-na');
        if (hideNonApplicable) {
            btnTabNa.classList.add('hidden');
        } else {
            btnTabNa.classList.remove('hidden');
        }
        applyFilters();
    });
}

function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const activeTabPanel = document.querySelector('.tab-panel.active');
    if (!activeTabPanel) return;

    const tableRows = activeTabPanel.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}

// Copy Helper
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        toast.textContent = `Скопировано: ${text}`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2000);
    });
}

// Export Setup
function initExport() {
    btnExportJson.addEventListener('click', triggerJsonExport);
    btnExportCsv.addEventListener('click', triggerCsvExport);
}

function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Theme Toggle
function initThemeToggle() {
    const btnTheme = document.getElementById('btn-theme-toggle');
    const sunIcon = btnTheme.querySelector('.sun-icon');
    const moonIcon = btnTheme.querySelector('.moon-icon');

    btnTheme.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, "&amp;")
                       .replace(/</g, "&lt;")
                       .replace(/>/g, "&gt;")
                       .replace(/"/g, "&quot;")
                       .replace(/'/g, "&#039;");
}
