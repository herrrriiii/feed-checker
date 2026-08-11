// Standalone Real Estate Feed Validator Engine v3.2

const SAMPLE_FEEDS = {
    nd_domclick: `<?xml version="1.0" encoding="UTF-8"?>
<feed format-version="1.0">
    <offer id="DOMCLICK-101">
        <type>продажа</type>
        <property-type>жилая</property-type>
        <category>квартира</category>
        <price>16500000</price>
        <area>54.0</area>
        <title>Заголовок ЖК Премиум Класс</title>
        <description>Квартира от застройщика в новом жилом комплексе.</description>
        <floors-total>25</floors-total>
        <built-year>2026</built-year>
        <ready-quarter>4</ready-quarter>
        <lift>1</lift>
        <parking>1</parking>
        <security>1</security>
        <is-euro-flat>1</is-euro-flat>
        <balconies-count>1</balconies-count>
        <ceiling-height>3.0</ceiling-height>
        <developer>ООО Застройщик Девелопмент</developer>
    </offer>
</feed>`,

    nd_avito: `<?xml version="1.0" encoding="UTF-8"?>
<Ads formatVersion="3" timestamp="2026-08-11T10:00:00">
    <Ad>
        <Id>LOT-ND-101</Id>
        <Category>Квартиры</Category>
        <OperationType>Продам</OperationType>
        <PropertyRights>Застройщик</PropertyRights>
        <Address>г. Москва, ул. Арбат, д. 10</Address>
        <Price>14500000</Price>
        <Square>58.4</Square>
        <Decoration>Чистовая</Decoration>
        <Floor>7</Floor>
        <Floors>24</Floors>
        <Rooms>2</Rooms>
        <MarketType>Новостройка</MarketType>
        <NewDevelopmentId>12345</NewDevelopmentId>
        <HouseType>Монолитный</HouseType>
        <Description>Прекрасная двухкомнатная квартира с отделкой в ЖК бизнес-класса.</Description>
        <Images><Image url="https://example.com/img1.jpg"/></Images>
        <Status>Квартира</Status>
        <LivingSpace>34.0</LivingSpace>
    </Ad>
</Ads>`,

    nd_cian: `<?xml version="1.0" encoding="UTF-8"?>
<feed>
    <feed_version>2</feed_version>
    <object>
        <ExternalId>CIAN-ND-99</ExternalId>
        <Category>flat</Category>
        <TotalArea>62.1</TotalArea>
        <FloorNumber>12</FloorNumber>
        <FloorsCount>18</FloorsCount>
        <FlatRoomsCount>2</FlatRoomsCount>
        <Description>Просторная квартира в новостройке от застройщика.</Description>
        <JKSchema><Id>98765</Id></JKSchema>
        <House><Id>54321</Id></House>
        <BargainTerms><Price>18900000</Price><SaleType>fz214</SaleType></BargainTerms>
        <Phones><PhoneSchema><Number>+79990000000</Number></PhoneSchema></Phones>
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

            if (rawXmlText) analyzeAndRender();
        });
    });
}

// 3. Commercial Object Type Dropdown
function initCommercialTypeSelector() {
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

// Helper to get realistic fill-in example for missing parameters
function getSampleFillExample(paramName, aliasTag) {
    const nameLow = paramName.toLowerCase();
    const tagSnippet = aliasTag ? `<${aliasTag}>...</${aliasTag}>` : '';

    for (let [k, exampleVal] of Object.entries(SAMPLE_FILL_EXAMPLES)) {
        if (nameLow.includes(k)) {
            return `${exampleVal} ${tagSnippet ? `(${tagSnippet})` : ''}`;
        }
    }
    return `Значение параметра ${tagSnippet ? `(${tagSnippet})` : ''}`;
}

// Evaluate Commercial Formula
function evaluateCommercialFormula(formulaStr, selectedType) {
    if (!formulaStr || formulaStr === '="Да"' || formulaStr.includes('"Да"')) {
        if (!formulaStr.includes('IF')) return true;
    }
    if (selectedType === 'Все типы') return true;

    if (formulaStr.includes('<>"Земля"') && selectedType === 'Земля') return false;
    if (formulaStr.includes('<>"Гараж"') && selectedType === 'Гараж') return false;
    if (formulaStr.includes('<>"Готовый бизнес"') && selectedType === 'Готовый бизнес') return false;

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
        'Общепит': ['Общепит', 'Гостиница', 'Автосервис', 'Здание', 'Кладовая']
    };

    const tokens = typeTokensMap[selectedType] || [selectedType];
    for (let t of tokens) {
        if (formulaStr.includes(`"${t}"`)) return true;
    }

    if (formulaStr.includes('<>') && !tokens.some(t => formulaStr.includes(`="${t}"`))) {
        return true;
    }

    return false;
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

    const objectTags = ['object', 'Ad', 'offer', 'flat'];
    const allElements = xmlDoc.getElementsByTagName("*");

    for (let elem of allElements) {
        const cleanTag = elem.localName || elem.tagName.split(':').pop();
        if (objectTags.includes(cleanTag)) {
            totalObjects++;
        }
    }

    function walkElement(node, currentPath = '') {
        const tag = node.localName || node.tagName.split(':').pop();
        const path = currentPath ? `${currentPath}.${tag}` : tag;

        let sampleVal = '';
        if (node.children.length === 0 && node.textContent) {
            sampleVal = node.textContent.trim();
        }

        if (!xmlPathsMap.has(path) && sampleVal) xmlPathsMap.set(path, sampleVal);
        if (!xmlPathsMap.has(tag) && sampleVal) xmlPathsMap.set(tag, sampleVal);

        for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes[i];
            const attrPath = `${path}@${attr.name}`;
            const attrTag = `${tag}@${attr.name}`;
            if (!xmlPathsMap.has(attrPath)) xmlPathsMap.set(attrPath, attr.value);
            if (!xmlPathsMap.has(attrTag)) xmlPathsMap.set(attrTag, attr.value);
        }

        for (let child of node.children) {
            walkElement(child, path);
        }
    }

    walkElement(root);
    return { xmlPathsMap, totalObjects };
}

// Dynamic XML Tag Aliases Helper
function generateAliasesForParam(paramName) {
    const nameLow = paramName.toLowerCase();
    const aliases = [paramName];

    const dict = {
        'заголовок': ['Title', 'title', 'Header'],
        'адрес': ['Address', 'address', 'location.address', 'location'],
        'широта': ['Latitude', 'latitude', 'Coordinates.Lat', 'location.latitude', 'lat'],
        'долгота': ['Longitude', 'longitude', 'Coordinates.Lng', 'location.longitude', 'lng'],
        'кадастровый': ['CadastralNumber', 'cadastral_number', 'cadastral-number'],
        'метро': ['Metro', 'metro', 'Metro.Name', 'location.metro', 'subway'],
        'цена': ['Price', 'price', 'BargainTerms.Price', 'price.value'],
        'площадь': ['Square', 'square', 'TotalArea', 'area.value', 'area'],
        'этаж': ['Floor', 'floor', 'FloorNumber', 'floors-total'],
        'этажей': ['Floors', 'floors', 'FloorsCount', 'floors-total'],
        'описание': ['Description', 'description'],
        'фотографии': ['Images', 'images', 'Photos', 'Photos.PhotoSchema', 'picture', 'image'],
        'видео': ['VideoURL', 'video_url', 'ObjectTour.FullUrl', 'virtual-tour', 'video-review'],
        'телефон': ['Phones', 'Phone', 'phone', 'sales-agent.phone'],
        'менеджер': ['ManagerName', 'manager_name', 'sales-agent.name', 'SubAgent.FirstName'],
        'отделка': ['Decoration', 'decoration', 'renovation'],
        'потолок': ['CeilingHeight', 'ceiling_height', 'Building.CeilingHeight', 'ceiling-height'],
        'парковка': ['Parking', 'parking', 'Parking.Type'],
        'охрана': ['Security', 'security', 'guarded-building', 'YardAndEntranceFeatures', 'Courtyard'],
        'лифт': ['Lift', 'lift', 'PassengerElevator', 'FreightElevator'],
        'здание': ['HouseType', 'house_type', 'building-type', 'Building.MaterialType', 'BuildingType'],
        'класс': ['BuildingClass', 'building_class', 'Building.ClassType', 'building-class'],
        'мощность': ['Power', 'power', 'Building.Power', 'electric-capacity'],
        'вход': ['EntranceType', 'entrance_type', 'Entrance', 'entrance-type'],
        'назначение': ['Purpose', 'purpose', 'commercial-type', 'Category', 'category'],
        'комнат': ['Rooms', 'rooms', 'FlatRoomsCount'],
        'жилая': ['LivingArea', 'LivingSpace', 'living-space.value'],
        'двор': ['Courtyard', 'guarded-building', 'YardAndEntranceFeatures'],
        'детский сад': ['Kindergarten', 'kindergarten'],
        'школа': ['School', 'school'],
        'балкон': ['Balcony', 'balcony', 'BalconiesCount', 'balconies-count'],
        'лоджия': ['Loggia', 'loggia', 'LoggiasCount', 'loggias-count'],
        'санузел': ['Bathroom', 'bathroom-unit', 'Wc', 'SeparateWcsCount', 'CombinedWcsCount'],
        'застройщик': ['Developer', 'developer', 'builder'],
        'скидка': ['Discount', 'discount', 'discount.final-price']
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

        // Get spec parameters from RAW_EXCEL_DATA
        let marketSpec = RAW_EXCEL_DATA[currentMarket][currentPlatform] || [];

        // Extra safety check: Filter out Kitchen Space for New Developments
        if (currentMarket === 'new_developments') {
            marketSpec = marketSpec.filter(item => !item.name.toLowerCase().includes('площадь кухни'));
        }

        const cleanedPaths = Array.from(xmlPathsMap.keys());
        const lowerPaths = cleanedPaths.map(p => p.toLowerCase());

        function matchXmlAlias(aliases) {
            for (let alias of aliases) {
                const aliasLower = alias.toLowerCase();
                if (lowerPaths.includes(aliasLower)) {
                    const idx = lowerPaths.indexOf(aliasLower);
                    return { present: true, matchedTag: cleanedPaths[idx], sampleValue: xmlPathsMap.get(cleanedPaths[idx]) || '' };
                }
                for (let xmlPath of cleanedPaths) {
                    if (xmlPath.endsWith(alias) || xmlPath.toLowerCase().endsWith(aliasLower)) {
                        return { present: true, matchedTag: xmlPath, sampleValue: xmlPathsMap.get(xmlPath) || '' };
                    }
                }
            }
            return { present: false, matchedTag: '', sampleValue: '' };
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
            const isMandatoryHeuristic = mandatoryKeywords.some(k => paramName.toLowerCase().includes(k));

            const sampleFillExample = getSampleFillExample(paramName, aliases[0]);

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
            <td><span class="code-tag">${escapeHtml(item.name)}</span></td>
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
            <td><span class="code-tag">${escapeHtml(item.name)}</span></td>
            <td>Рекомендуется для повышения качества объявления</td>
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
        tableSummaryBody.innerHTML = missingParams.map(item => `
            <tr>
                <td><strong style="color: var(--text-primary);">${escapeHtml(item.name)}</strong></td>
                <td>
                    <span class="status-dot ${item.isMandatory ? 'status-dot-danger' : 'status-dot-warning'}">
                        ${item.isMandatory ? 'Обязательный' : 'Необязательный'}
                    </span>
                </td>
                <td><span class="sample-text" style="max-width: 100%; font-size: 0.8rem;" title="${escapeHtml(item.sampleFillExample)}">${escapeHtml(item.sampleFillExample)}</span></td>
            </tr>
        `).join('');
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
        text += `${i + 1}. ${item.name}\n`;
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
        csvContent += `"${p.name}";"${categoryStr}";"${p.sampleFillExample}"\n`;
    });

    downloadFile("\uFEFF" + csvContent, `report_missing_${currentFileName.split('.')[0]}_${currentPlatform}.csv`, 'text/csv;charset=utf-8;');
}

function triggerJsonExport() {
    if (!parsedAnalysisResult) return;

    // Filter ONLY missing parameters (what is NOT present in the feed)
    const missingParams = parsedAnalysisResult.processedParams.filter(
        p => p.status === 'MISSING_MANDATORY' || p.status === 'CAN_ADD'
    ).map(p => ({
        "Название параметра": p.name,
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
