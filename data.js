// Specification Data generated from Памятка Новостройки.xlsx and Памятка коммерция.xlsx

const PLATFORM_COMMERCIAL_TYPES = {
    avito: [
        { id: 'all', name: 'Все типы объектов', val: 'Все типы' },
        { id: 'apartments', name: 'Апартаменты (Апарт-отели / ПСН)', val: 'Апартаменты' },
        { id: 'office', name: 'Офис / Здание', val: 'Офис' },
        { id: 'retail', name: 'Торговая помешение / Ритейл', val: 'Торговая' },
        { id: 'psn', name: 'ПСН (Свободное назначение)', val: 'ПСН' },
        { id: 'warehouse', name: 'Склад / Логистика', val: 'Склад' },
        { id: 'industry', name: 'Производственное помещение', val: 'Производство' },
        { id: 'land', name: 'Земельный участок', val: 'Земля' },
        { id: 'business', name: 'Готовый бизнес', val: 'Готовый бизнес' },
        { id: 'garage', name: 'Гараж / Машиноместо', val: 'Гараж' },
        { id: 'other', name: 'Общепит / Гостиница / Кладовая', val: 'Общепит' }
    ],
    cian: [
        { id: 'all', name: 'Все типы объектов', val: 'Все типы' },
        { id: 'apartments', name: 'Апартаменты (Апарт-отели)', val: 'Апартаменты' },
        { id: 'office', name: 'Офисное помещение / БЦ (office)', val: 'Офис' },
        { id: 'retail', name: 'Торговая площадь / ТЦ (shoppingArea)', val: 'Торговая' },
        { id: 'psn', name: 'Помещение свободного назначения (freeAppointmentObject)', val: 'ПСН' },
        { id: 'warehouse', name: 'Складской комплекс (warehouse)', val: 'Склад' },
        { id: 'industry', name: 'Производственный объект (industry)', val: 'Производство' },
        { id: 'land', name: 'Коммерческая земля (land)', val: 'Земля' },
        { id: 'business', name: 'Готовый бизнес (business)', val: 'Готовый бизнес' },
        { id: 'garage', name: 'Гараж / Паркинг (garage)', val: 'Гараж' }
    ],
    yandex: [
        { id: 'all', name: 'Все типы объектов (All)', val: 'Все типы' },
        { id: 'office', name: 'Офисные помещения (office)', val: 'Офис' },
        { id: 'retail', name: 'Торговые помещения (retail)', val: 'Торговая' },
        { id: 'free purpose', name: 'Свободного назначения (free purpose)', val: 'ПСН' },
        { id: 'warehouse', name: 'Склад (warehouse)', val: 'Склад' },
        { id: 'manufacturing', name: 'Производство (manufacturing)', val: 'Производство' },
        { id: 'land', name: 'Земли коммерческого назначения (land)', val: 'Земля' },
        { id: 'business', name: 'Готовый бизнес (business)', val: 'Готовый бизнес' },
        { id: 'auto repair', name: 'Автосервис (auto repair)', val: 'Автосервис' },
        { id: 'hotel', name: 'Гостиница (hotel)', val: 'Гостиница' },
        { id: 'public catering', name: 'Общепит / Ресторан (public catering)', val: 'Общепит' },
        { id: 'legal address', name: 'Юридический адрес (legal address)', val: 'Юридический адрес' }
    ]
};

const COMMERCIAL_TYPES = PLATFORM_COMMERCIAL_TYPES.avito;

const SAMPLE_FILL_EXAMPLES = {
    'название жк': 'ЖК Южный полюс',
    'id новостройки': '12345',
    'complex.id': '12345',
    'complex.name': 'ЖК Южный полюс',
    'complex.latitude': '55.751244',
    'complex.longitude': '37.618423',
    'complex.address': 'г. Москва, ул. Арбат, д. 10',
    'images.image': 'https://example.com/complex.jpg',
    'description_main.text': 'Самый комфортный жилой комплекс с благоустроенным двором.',
    'building.id': '98765',
    'building.fz_214': 'true',
    'building.name': 'Корпус 1',
    'building.latitude': '55.751244',
    'building.longitude': '37.618423',
    'building.address': 'г. Москва, ул. Арбат, д. 10',
    'flat.flat_id': '913',
    'flat.apartment': '33',
    'flat.floor': '8',
    'flat.room': '2',
    'flat.plans.plan': 'https://example.com/plan.jpg',
    'flat.price': '14 500 000 руб.',
    'flat.area': '58.4 м²',
    'flat.living_area': '34.0 м²',
    'flat.housing_type': '0 (Квартира)',
    'sales_info.sales_phone': '+7 (495) 123-45-67',
    'sales_info.timezone': '+3',
    'sales_info.work_days.work_day': 'пн-пт с 09:00 до 21:00',
    'developer.id': '101',
    'developer.name': 'ООО Южный Девелопмент',
    'yandex-building-id': '12345',
    'yandex-house-id': '54321',
    'built-year': '2026',
    'ready-quarter': '4',
    'building-state': 'unfinished',
    'deal-status': 'первичная продажа',
    'creation-date': '2026-08-11T12:00:00+03:00',
    'type': 'продажа',
    'property-type': 'жилая',
    'category': 'квартира',
    'commercial-type': 'office',
    'new-flat': '1',
    'корпус': 'Корпус 2.1',
    'секция': 'Секция 1',
    'номер квартиры': '142',
    'адрес': 'г. Москва, ул. Арбат, д. 10',
    'широта': '55.751244',
    'долгота': '37.618423',
    'район': 'Центральный',
    'шоссе': 'Варшавское шоссе',
    'расстояние до мкад': '12 км',
    'метро': 'Арбатская (5 мин. пешком)',
    'ж/д': 'Станция Подольск (10 мин. транспортом)',
    'цена': '14 500 000 руб.',
    'базовая цена': '16 000 000 руб.',
    'цена со скидкой': '14 500 000 руб.',
    'размер скидки': '10%',
    'скидка': '10% при 100% оплате',
    'площадь участка': '15 соток',
    'ед. измерения земли': 'сотки',
    'право на землю': 'Собственность',
    'категория земли': 'Земли населенных пунктов',
    'ври': 'Для индивидуального жилищного строительства (ИЖС)',
    'площадь': '58.4 м²',
    'жилая площадь': '34.0 м²',
    'этаж': '7',
    'всего этажей': '24',
    'количество этажей': '24',
    'построено этажей': '12',
    'комнат': '2',
    'европланировка': 'Да',
    'студия': 'Нет',
    'апартаменты': 'Да',
    'санузел': 'Раздельный',
    'высота потолков': '2.95 м',
    'отделка': 'Чистовая',
    'вид из окон': 'Во двор и на парк',
    'балкон': '1 лоджия',
    'лифт': '2 пассажирских, 1 грузовой',
    'пассажирский лифт': '2',
    'грузовой лифт': '1',
    'парковка': 'Подземная парковка',
    'охрана': 'Закрытая территория, КПП',
    'видеонаблюдение': 'Да',
    'описание': 'Просторное коммерческое помещение в современном комплексе.',
    'заголовок': 'Офисное помещение 138.4 м² на Невском проспекте',
    'кадастровый номер': '77:01:0001001:1234',
    'год сдачи': '2026',
    'квартал сдачи': '4 кв.',
    'статус строительства': 'Строится',
    'материал стен': 'Монолит-кирпич',
    'класс здания': 'A',
    'мощность': '150 кВт',
    'вход': 'Отдельный с улицы',
    'витринные окна': 'Да',
    'акция': 'Скидка 10% до конца месяца',
    'ипотека': 'Да',
    'способ продажи': 'ДДУ (ФЗ-214)',
    'способы оплаты': 'Ипотека, 100% оплата, рассрочка',
    'проектная декларация': 'https://example.com/declaration.pdf',
    'видео': 'https://youtube.com/watch?v=example',
    '3d-тур': 'https://example.com/3d-tour',
    'планировка': 'https://example.com/plan.jpg',
    'главная обложка': 'https://example.com/cover.jpg',
    'фотографии': 'https://example.com/photo1.jpg, https://example.com/photo2.jpg',
    'телефон': '+7 (495) 123-45-67',
    'менеджер': 'Иван Петров',
    'застройщик': 'ЗАО Девелопмент Групп',
    'сайт застройщика': 'https://example.ru',
    'логотип': 'https://example.com/logo.png',
    'утп': 'Высокие потолки, витринные окна'
};

const RAW_EXCEL_DATA = {
  "new_developments": {
    "yandex": [
      {
        "name": "offer internal-id",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "type",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "property-type",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "category",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "creation-date",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.address",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.latitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.longitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.phone",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.category",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "deal-status",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "price.value",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "price.currency",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "area.value",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "living-space.value",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "image",
        "category": "Медиа",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "new-flat",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "floor",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "rooms",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "yandex-building-id",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "yandex-house-id",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "built-year",
        "category": "Параметры дома",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "ready-quarter",
        "category": "Параметры дома",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building-state",
        "category": "Параметры дома",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "url",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "vas",
        "category": "Параметры продвижения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.metro",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.direction",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.distance",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.name",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.organization",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.url",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.photo",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "renovation",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "description",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "video-review",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "virtual-tour",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "rooms-type",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "apartments",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "studio",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "open-plan",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "balcony",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "window-view",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "bathroom-unit",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "floors-total",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building-name",
        "category": "Параметры ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building-section",
        "category": "Параметры ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building-phase",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building-type",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ceiling-height",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "lift",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "guarded-building",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "parking",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ],
    "avito": [
      {
        "name": "Id",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Category",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "OperationType",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "MarketType",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "NewDevelopmentId",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "PropertyRights",
        "category": "Параметры продажи",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Price",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Square",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Rooms",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Floor",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Floors",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "HouseType",
        "category": "Параметры дома",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Decoration",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Status",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Description",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "LivingSpace",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ApartmentNumber",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BalconyOrLoggiaMulti",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ViewFromWindows",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "PassengerElevator",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "FreightElevator",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Courtyard",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Parking",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "RoomType",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BathroomMulti",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "SaleOptions",
        "category": "Параметры продажи",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CeilingHeight",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "NDAdditionally",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "SaleMethod",
        "category": "Параметры продажи",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BasePriceND",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "DduLink",
        "category": "Параметры продажи",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ManagerName",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ContactPhone",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Images",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "VideoURL",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "DateBegin",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "DateEnd",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ListingFee",
        "category": "Параметры продвижения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AdStatus",
        "category": "Параметры продвижения",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ],
    "cian": [
      {
        "name": "Category",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "ExternalId",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Description",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Address",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "FlatRoomsCount",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Phones",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "TotalArea",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "FloorNumber",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "JKSchema.Id",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.FloorsCount",
        "category": "Параметры дома",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.Price",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.SaleType",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "LivingArea",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "IsEuroFlat",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "IsApartments",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Coordinates",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CadastralNumber",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Undergrounds",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "House.Id",
        "category": "Параметры ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "FlatNumber",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "LoggiasCount",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BalconiesCount",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Photos",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "LayoutPhoto",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Decoration",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ProjectDeclarationUrl",
        "category": "Параметры ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "WindowsViewType",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "SeparateWcsCount",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CombinedWcsCount",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Videos",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Title",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ObjectTour",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.MaterialType",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.CeilingHeight",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.PassengerLiftsCount",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.CargoLiftsCount",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Parking",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Deadline",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "YardAndEntranceFeatures",
        "category": "Параметры дома",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.MortgageAllowed",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ActionId",
        "category": "Параметры акции",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ],
    "domclick": [
      {
        "name": "complex.id",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "complex.name",
        "category": "Параметры ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "complex.latitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "complex.longitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "complex.address",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "images.image",
        "category": "Медиа ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "description_main.text",
        "category": "Описание ЖК",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.id",
        "category": "Параметры корпуса",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.fz_214",
        "category": "Параметры корпуса",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.name",
        "category": "Параметры корпуса",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.latitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.longitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "building.address",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.flat_id",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.apartment",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.floor",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.room",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.plans.plan",
        "category": "Медиа квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.price",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.area",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.living_area",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.housing_type",
        "category": "Параметры квартиры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales_info.sales_phone",
        "category": "Офис продаж",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales_info.timezone",
        "category": "Офис продаж",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales_info.work_days.work_day",
        "category": "Офис продаж",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "developer.id",
        "category": "Застройщик",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "developer.name",
        "category": "Застройщик",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "description_main.title",
        "category": "Описание ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "decorations",
        "category": "Варианты отделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "infrastructure",
        "category": "Инфраструктура",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "videos",
        "category": "Медиа ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "profits_main",
        "category": "УТП ЖК",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.floors",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.floors_ready",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.building_state",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.ceiling_height",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.passenger_lifts_count",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "building.cargo_lifts_count",
        "category": "Параметры корпуса",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.domrf_id",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.entrance",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.booking",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.euro_plan",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.balcony",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.loggia",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.connected_bathroom",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.separated_bathroom",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.discounts",
        "category": "Акции квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.ceiling_height",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.description",
        "category": "Описание квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.renovation",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.price_conditions",
        "category": "Условия покупки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.rooms_area",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.window_view",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.layout_type",
        "category": "Параметры квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "flat.virtual_tours",
        "category": "Медиа квартиры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "discounts",
        "category": "Акции застройщика",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales_info.sales_address",
        "category": "Офис продаж",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "developer.site",
        "category": "Застройщик",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "developer.logo",
        "category": "Застройщик",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ]
  },
  "commercial": {
    "yandex": [
      {
        "name": "offer internal-id",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "type",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "category",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "commercial-type",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "creation-date",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.address",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.latitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "location.longitude",
        "category": "Расположение",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.phone",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.category",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "price.value",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "price.currency",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "price.period",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "deal-status",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "area.value",
        "category": "Параметры объекта",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "image",
        "category": "Медиа",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "floor",
        "category": "Параметры помещения",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "floors-total",
        "category": "Параметры здания",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "commercial-building-type",
        "category": "Параметры здания",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "purpose",
        "category": "Параметры объекта",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "purpose-warehouse",
        "category": "Параметры склада",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "lot-number",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "url",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "cadastral-number",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "vas",
        "category": "Продвижение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.apartment",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.direction",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.distance",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.metro",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "location.railway-station",
        "category": "Расположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.name",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.whatsapp-phone",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.telegram-link",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.organization",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.url",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales-agent.photo",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.unit",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.commission",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.prepayment",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.security-payment",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.rent-pledge",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "price.taxation-form",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "cleaning-included",
        "category": "Условия аренды",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "utilities-included",
        "category": "Условия аренды",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electricity-included",
        "category": "Условия аренды",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "renovation",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "quality",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "description",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "video-review",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "virtual-tour",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "rooms",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "entrance-type",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "open-plan",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "phone-lines",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "internet",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "air-conditioner",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ventilation",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "fire-alarm",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "water-supply",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sewerage-supply",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "gas-supply",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "heating-supply",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electricity-supply",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electric-capacity",
        "category": "Коммуникации",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "office-class",
        "category": "Параметры здания",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ceiling-height",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "guarded-building",
        "category": "Безопасность",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "access-control-system",
        "category": "Безопасность",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "twenty-four-seven",
        "category": "Режим работы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "lift",
        "category": "Параметры здания",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "parking",
        "category": "Парковка",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "parking-places",
        "category": "Парковка",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "parking-place-price",
        "category": "Парковка",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "security",
        "category": "Безопасность",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "responsible-storage",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "pallet-price",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "freight-elevator",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "truck-entrance",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ramp",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "railway",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "office-warehouse",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "open-area",
        "category": "Склад",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ],
    "cian": [
      {
        "id": 1,
        "category": "Общие",
        "name": "Координаты — широта",
        "formula": "=\"Да\""
      },
      {
        "id": 2,
        "category": "Общие",
        "name": "Координаты — долгота",
        "formula": "=\"Да\""
      },
      {
        "id": 3,
        "category": "Общие",
        "name": "Кадастровый номер",
        "formula": "=\"Да\""
      },
      {
        "id": 4,
        "category": "Общие",
        "name": "Скрыть точный адрес",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 5,
        "category": "Общие",
        "name": "ID шоссе",
        "formula": "=\"Да\""
      },
      {
        "id": 6,
        "category": "Общие",
        "name": "Удалённость от МКАД/города",
        "formula": "=\"Да\""
      },
      {
        "id": 7,
        "category": "Общие",
        "name": "ID метро",
        "formula": "=\"Да\""
      },
      {
        "id": 8,
        "category": "Общие",
        "name": "Время до метро (мин)",
        "formula": "=\"Да\""
      },
      {
        "id": 9,
        "category": "Общие",
        "name": "Способ до метро",
        "formula": "=\"Да\""
      },
      {
        "id": 10,
        "category": "Общие",
        "name": "Валюта сделки",
        "formula": "=\"Да\""
      },
      {
        "id": 11,
        "category": "Общие",
        "name": "Тип договора",
        "formula": "=\"Да\""
      },
      {
        "id": 12,
        "category": "Общие",
        "name": "Состояние и ремонт",
        "formula": "=IF(OR($I$2=\"Все типы\",AND($I$2<>\"Гараж\",$I$2<>\"Готовый бизнес\",$I$2<>\"Земля\")),\"Да\",\"—\")"
      },
      {
        "id": 13,
        "category": "Общие",
        "name": "Планировка",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Офис\",$I$2=\"Склад\",$I$2=\"Торговая\",$I$2=\"ПСН\",$I$2=\"Производство\",$I$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 14,
        "category": "Общие",
        "name": "Вход в помещение",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\",$I$2=\"ПСН\",$I$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 15,
        "category": "Общие",
        "name": "Помещение занято",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Офис\",$I$2=\"Торговая\",$I$2=\"ПСН\"),\"Да\",\"—\")"
      },
      {
        "id": 16,
        "category": "Общие",
        "name": "Дата освобождения",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Офис\",$CH2=\"Склад\",$I$2=\"Торговая\",$I$2=\"ПСН\",$I$2=\"Производство\",$I$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 17,
        "category": "Общие",
        "name": "Юридический адрес",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 18,
        "category": "Общие",
        "name": "Количество мокрых точек",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 19,
        "category": "Общие",
        "name": "Наличие мебели",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\",$C$2=\"Здание\",$C$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 20,
        "category": "Общие",
        "name": "Наличие оборудования",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 21,
        "category": "Общие",
        "name": "Название БЦ / ТЦ",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 22,
        "category": "Общие",
        "name": "ID БЦ / ТЦ",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 23,
        "category": "Общие",
        "name": "Класс здания",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 24,
        "category": "Общие",
        "name": "Тип / назначение здания",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 25,
        "category": "Общие",
        "name": "Линия домов",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 26,
        "category": "Общие",
        "name": "Год постройки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 27,
        "category": "Общие",
        "name": "Материал стен",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\"),\"Да\",\"—\")"
      },
      {
        "id": 28,
        "category": "Общие",
        "name": "Высота потолков",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 29,
        "category": "Общие",
        "name": "Отопление",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 30,
        "category": "Общие",
        "name": "Вентиляция",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 31,
        "category": "Общие",
        "name": "Кондиционирование",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 32,
        "category": "Общие",
        "name": "Пожаротушение",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 33,
        "category": "Общие",
        "name": "Лифты — тип",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 34,
        "category": "Общие",
        "name": "Лифты — количество",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 35,
        "category": "Общие",
        "name": "Грузоподъёмность лифтов",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Склад\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 36,
        "category": "Общие",
        "name": "Статус строения",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 37,
        "category": "Общие",
        "name": "Застройщик",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 38,
        "category": "Общие",
        "name": "Управляющая компания",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 39,
        "category": "Общие",
        "name": "Режим доступа",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 40,
        "category": "Общие",
        "name": "ID / название ЖК",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 41,
        "category": "Общие",
        "name": "Корпус ЖК",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 42,
        "category": "Общие",
        "name": "Квартира / секция ЖК",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 43,
        "category": "Общие",
        "name": "Буфет",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 44,
        "category": "Общие",
        "name": "Столовая",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 45,
        "category": "Общие",
        "name": "Центральная рецепция",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 46,
        "category": "Общие",
        "name": "Гостиница в комплексе",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 47,
        "category": "Общие",
        "name": "Банкомат",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 48,
        "category": "Общие",
        "name": "Фуд-корт",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 49,
        "category": "Общие",
        "name": "Аптека",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 50,
        "category": "Общие",
        "name": "Отделение банка",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 51,
        "category": "Общие",
        "name": "Кафе / Ресторан",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 52,
        "category": "Общие",
        "name": "Фитнес-центр",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 53,
        "category": "Общие",
        "name": "Супермаркет / минимаркет",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 54,
        "category": "Общие",
        "name": "Офисные помещения (для склада)",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Склад\"),\"Да\",\"—\")"
      },
      {
        "id": 55,
        "category": "Общие",
        "name": "Тип парковки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\",$C$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 56,
        "category": "Общие",
        "name": "Количество мест",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 57,
        "category": "Общие",
        "name": "Стоимость парковки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 58,
        "category": "Общие",
        "name": "Валюта парковки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 59,
        "category": "Общие",
        "name": "Бесплатная стоянка",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Офис\",$C$2=\"Склад\",$C$2=\"Торговая\",$C$2=\"ПСН\",$C$2=\"Производство\",$C$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 60,
        "category": "Общие",
        "name": "Расположение стоянки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Склад\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 61,
        "category": "Общие",
        "name": "Назначение стоянки",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Склад\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 62,
        "category": "Общие",
        "name": "Стоимость въезда",
        "formula": "=IF(OR($C$2=\"Все типы\",$C$2=\"Склад\",$C$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 63,
        "category": "Общие",
        "name": "Материал пола",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 64,
        "category": "Общие",
        "name": "Сетка колонн",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 65,
        "category": "Общие",
        "name": "Тип ворот",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 66,
        "category": "Общие",
        "name": "Тип крана",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 67,
        "category": "Общие",
        "name": "Грузоподъёмность крана",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 68,
        "category": "Общие",
        "name": "Количество кранов",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 69,
        "category": "Общие",
        "name": "Ответственное хранение (3PL)",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 70,
        "category": "Общие",
        "name": "Таможенный пост (СВХ)",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 71,
        "category": "Общие",
        "name": "Транспортные услуги",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Склад\",$I$2=\"Производство\"),\"Да\",\"—\")"
      },
      {
        "id": 72,
        "category": "Общие",
        "name": "Витринные окна",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\",$I$2=\"ПСН\"),\"Да\",\"—\")"
      },
      {
        "id": 73,
        "category": "Общие",
        "name": "Тип торговой локации",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 74,
        "category": "Общие",
        "name": "Интернет в зале",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 75,
        "category": "Общие",
        "name": "Масштаб ТЦ",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 76,
        "category": "Общие",
        "name": "Список арендаторов ТЦ",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 77,
        "category": "Общие",
        "name": "Рабочие дни",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 78,
        "category": "Общие",
        "name": "Часы работы — с",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 79,
        "category": "Общие",
        "name": "Часы работы — до",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 80,
        "category": "Общие",
        "name": "Тип графика",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 81,
        "category": "Общие",
        "name": "Площадь участка (при объекте)",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 82,
        "category": "Общие",
        "name": "Ед. измерения земли",
        "formula": "=\"Да\""
      },
      {
        "id": 83,
        "category": "Общие",
        "name": "Право на землю",
        "formula": "=\"Да\""
      },
      {
        "id": 84,
        "category": "Общие",
        "name": "Возможна смена категории",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 85,
        "category": "Общие",
        "name": "Вид разрешённого использования",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 86,
        "category": "Общие",
        "name": "Возможна смена ВРИ",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 87,
        "category": "Общие",
        "name": "Обременения",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 88,
        "category": "Общие",
        "name": "Подъездные пути",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 89,
        "category": "Общие",
        "name": "Электричество на участке",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 90,
        "category": "Общие",
        "name": "Газ на участке",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 91,
        "category": "Общие",
        "name": "Водопровод на участке",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 92,
        "category": "Общие",
        "name": "Канализация на участке",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2<>\"Земля\"),\"Да\",\"—\")"
      },
      {
        "id": 93,
        "category": "Общие",
        "name": "Право на недвижимость",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Готовый бизнес\"),\"Да\",\"—\")"
      },
      {
        "id": 94,
        "category": "Общие",
        "name": "Конструкция гаража",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 95,
        "category": "Общие",
        "name": "Материал стен бокса",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 96,
        "category": "Общие",
        "name": "Юридический статус",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 97,
        "category": "Общие",
        "name": "Электричество",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 98,
        "category": "Общие",
        "name": "Освещение",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 99,
        "category": "Общие",
        "name": "Отопление",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 100,
        "category": "Общие",
        "name": "Водопровод",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 101,
        "category": "Общие",
        "name": "Пожарная сигнализация",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 102,
        "category": "Общие",
        "name": "Смотровая яма",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 103,
        "category": "Общие",
        "name": "Погреб / подвал",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 104,
        "category": "Общие",
        "name": "Автоматические ворота",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 105,
        "category": "Общие",
        "name": "Въезд по пропускам",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 106,
        "category": "Общие",
        "name": "Видеонаблюдение",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 107,
        "category": "Общие",
        "name": "Круглосуточная охрана",
        "formula": "=IF(OR($I$2=\"Все типы\",$I$2=\"Гараж\"),\"Да\",\"—\")"
      },
      {
        "id": 108,
        "category": "Общие",
        "name": "Планировка (URL)",
        "formula": "=\"Да\""
      },
      {
        "id": 109,
        "category": "Общие",
        "name": "Главная обложка",
        "formula": "=\"Да\""
      },
      {
        "id": 110,
        "category": "Общие",
        "name": "Видео-обзор",
        "formula": "=\"Да\""
      },
      {
        "id": 111,
        "category": "Общие",
        "name": "3D-тур",
        "formula": "=\"Да\""
      },
      {
        "id": 112,
        "category": "Общие",
        "name": "Слоты мультиобъявления",
        "formula": "=IF(OR($I$2=\"Все типы\",AND($I$2<>\"Гараж\",$I$2<>\"Земля\")),\"Да\",\"—\")"
      }
    ],
    "avito": [
      {
        "id": 1,
        "category": "Общие",
        "name": "Вариант задания цены",
        "formula": "=\"Да\""
      },
      {
        "id": 2,
        "category": "Общие",
        "name": "Способ продажи",
        "formula": "=\"Да\""
      },
      {
        "id": 3,
        "category": "Общие",
        "name": "Объект забронирован",
        "formula": "=\"Да\""
      },
      {
        "id": 4,
        "category": "Общие",
        "name": "Географическая широта",
        "formula": "=\"Да\""
      },
      {
        "id": 5,
        "category": "Общие",
        "name": "Географическая долгота",
        "formula": "=\"Да\""
      },
      {
        "id": 6,
        "category": "Общие",
        "name": "Фотографии объекта",
        "formula": "=\"Да\""
      },
      {
        "id": 7,
        "category": "Общие",
        "name": "Ссылка на видео",
        "formula": "=\"Да\""
      },
      {
        "id": 8,
        "category": "Общие",
        "name": "Прямой видеофайл",
        "formula": "=\"Да\""
      },
      {
        "id": 9,
        "category": "Общие",
        "name": "Дополнительные назначения",
        "formula": "=\"Да\""
      },
      {
        "id": 10,
        "category": "Общие",
        "name": "НДС включён в цену",
        "formula": "=\"Да\""
      },
      {
        "id": 11,
        "category": "Общие",
        "name": "Тип помещения (торговля)",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 12,
        "category": "Общие",
        "name": "Отдельный вход",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 13,
        "category": "Общие",
        "name": "Несколько этажей",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\"),\"Да\",\"—\")"
      },
      {
        "id": 14,
        "category": "Общие",
        "name": "Объём кладовой",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      },
      {
        "id": 15,
        "category": "Общие",
        "name": "Мощность электросети",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 16,
        "category": "Общие",
        "name": "Возможность увеличения мощности",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 17,
        "category": "Общие",
        "name": "Выписка ЕГРН (ссылка)",
        "formula": "=\"Да\""
      },
      {
        "id": 18,
        "category": "Общие",
        "name": "Статус готовности здания",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 19,
        "category": "Общие",
        "name": "Класс здания",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"Склад\"),\"Да\",\"—\")"
      },
      {
        "id": 20,
        "category": "Общие",
        "name": "Удалённость от дороги",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"ПСН\",$O$2=\"Торговая\"),\"Да\",\"—\")"
      },
      {
        "id": 21,
        "category": "Общие",
        "name": "Дополнительно о парковке",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 22,
        "category": "Общие",
        "name": "Количество мест на парковке",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Офис\",$O$2=\"ПСН\",$O$2=\"Торговая\",$O$2=\"Склад\",$O$2=\"Производство\",$O$2=\"Общепит\",$O$2=\"Гостиница\",$O$2=\"Автосервис\",$O$2=\"Здание\"),\"Да\",\"—\")"
      },
      {
        "id": 23,
        "category": "Общие",
        "name": "Помещение сдано в аренду",
        "formula": "=\"Да\""
      },
      {
        "id": 24,
        "category": "Общие",
        "name": "Название / бренд арендатора",
        "formula": "=\"Да\""
      },
      {
        "id": 25,
        "category": "Общие",
        "name": "Месячный арендный платёж",
        "formula": "=\"Да\""
      },
      {
        "id": 26,
        "category": "Общие",
        "name": "Срок окончания аренды",
        "formula": "=\"Да\""
      },
      {
        "id": 27,
        "category": "Общие",
        "name": "Ежегодная индексация аренды",
        "formula": "=\"Да\""
      },
      {
        "id": 28,
        "category": "Общие",
        "name": "Процент с товарооборота",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Торговая\",$O$2=\"Общепит\"),\"Да\",\"—\")"
      },
      {
        "id": 29,
        "category": "Общие",
        "name": "Охрана",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      },
      {
        "id": 30,
        "category": "Общие",
        "name": "Подъезд машины",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      },
      {
        "id": 31,
        "category": "Общие",
        "name": "Доступ (график)",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      },
      {
        "id": 32,
        "category": "Общие",
        "name": "Освещение",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      },
      {
        "id": 33,
        "category": "Общие",
        "name": "Розетки",
        "formula": "=IF(OR($O$2=\"Все типы\",$O$2=\"Кладовая\"),\"Да\",\"—\")"
      }
    ]
  }
};
