// Specification Data generated from Памятка Новостройки.xlsx and Памятка коммерция.xlsx

const PLATFORM_COMMERCIAL_TYPES = {
    avito: [
        { id: 'all', name: 'Все типы объектов', val: 'Все типы' },
        { id: 'pantry', name: 'Кладовая', val: 'Кладовая' },
        { id: 'office', name: 'Офисное помещение (Офис)', val: 'Офис' },
        { id: 'retail', name: 'Торговое помещение (Ритейл)', val: 'Торговая' },
        { id: 'psn', name: 'Помещение свободного назначения (ПСН)', val: 'ПСН' },
        { id: 'warehouse', name: 'Складское помещение (Склад)', val: 'Склад' },
        { id: 'industry', name: 'Производственное помещение', val: 'Производство' },
        { id: 'land', name: 'Земельный участок', val: 'Земля' },
        { id: 'business', name: 'Готовый бизнес', val: 'Готовый бизнес' },
        { id: 'garage', name: 'Гараж / Машиноместо', val: 'Гараж' },
        { id: 'catering', name: 'Помещение общественного питания (Общепит)', val: 'Общепит' },
        { id: 'hotel', name: 'Гостиница', val: 'Гостиница' },
        { id: 'auto_repair', name: 'Автосервис', val: 'Автосервис' },
        { id: 'building', name: 'Здание', val: 'Здание' },
        { id: 'apartments', name: 'Апартаменты (Апарт-отели / ПСН)', val: 'Апартаменты' }
    ],
    cian: [
        { id: 'all', name: 'Все типы объектов', val: 'Все типы' },
        { id: 'psn', name: 'Помещение свободного назначения (freeAppointmentObjectSale)', val: 'ПСН' },
        { id: 'office', name: 'Офисное помещение (officeSale / officeRent)', val: 'Офис' },
        { id: 'business', name: 'Готовый бизнес (businessSale)', val: 'Готовый бизнес' },
        { id: 'garage', name: 'Гараж / Машиноместо (garageSale)', val: 'Гараж' },
        { id: 'warehouse', name: 'Складской комплекс (warehouseSale)', val: 'Склад' },
        { id: 'retail', name: 'Торговая площадь (shoppingAreaSale)', val: 'Торговая' },
        { id: 'industry', name: 'Производственный объект (industrySale)', val: 'Производство' },
        { id: 'building', name: 'Здание (buildingSale)', val: 'Здание' },
        { id: 'land', name: 'Коммерческая земля (commercialLandSale)', val: 'Земля' },
        { id: 'apartments', name: 'Апартаменты (apartmentsSale)', val: 'Апартаменты' }
    ],
    yandex: [
        { id: 'all', name: 'Все типы объектов (All)', val: 'Все типы' },
        { id: 'apartments', name: 'Апартаменты / Инвест-отель (YML / Товарный фид)', val: 'Апартаменты' },
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

const PARAM_OPTIONS_MAP = {
  "new_developments_avito": {
    "Courtyard": [
      "Закрытая территория",
      "Детская площадка",
      "Спортивная площадка"
    ],
    "Parking": [
      "Подземная",
      "Наземная многоуровневая",
      "Открытая во дворе",
      "За шлагбаумом во дворе",
      "Гостевая"
    ],
    "Decoration": [
      "Без отделки",
      "Черновая",
      "Предчистовая",
      "Чистовая",
      "Чистовая с мебелью"
    ],
    "ViewFromWindows": [
      "Во двор",
      "На улицу",
      "На солнечную сторону"
    ],
    "RoomType": [
      "Изолированные",
      "Смежные"
    ],
    "BathroomMulti": [
      "Совмещённый",
      "Раздельный",
      "Несколько"
    ],
    "BalconyOrLoggiaMulti": [
      "Балкон",
      "Лоджия",
      "Несколько"
    ],
    "PassengerElevator": [
      "Нет",
      "1",
      "2",
      "3",
      "4"
    ],
    "FreightElevator": [
      "Нет",
      "1",
      "2",
      "3",
      "4"
    ],
    "NDAdditionally": [
      "Гардеробная",
      "Панорамные окна",
      "Терраса",
      "Французский балкон"
    ],
    "SaleOptions": [
      "Можно в ипотеку",
      "Продажа доли",
      "Аукцион"
    ],
    "SaleMethod": [
      "Договор долевого участия (ДДУ)",
      "Договор уступки права требования",
      "Договор ЖСК",
      "Договор купли-продажи"
    ],
    "HouseType": [
      "Кирпичный",
      "Монолитный",
      "Панельный",
      "Блочный",
      "Монолитно-кирпичный"
    ],
    "Status": [
      "Квартира",
      "Апартаменты"
    ],
    "MarketType": [
      "Новостройка",
      "Вторичка"
    ],
    "PropertyRights": [
      "Застройщик",
      "Собственник",
      "Агентство"
    ],
    "OperationType": [
      "Продам"
    ],
    "Category": [
      "Квартиры"
    ],
    "Rooms": [
      "Студия",
      "1",
      "2",
      "3",
      "4",
      "5+"
    ],
    "Floor": [
      "Числовой этаж (например, 7)"
    ],
    "Floors": [
      "Всего этажей в здании (например, 25)"
    ],
    "Square": [
      "Общая площадь в м² (например, 64.5)"
    ],
    "LivingSpace": [
      "Жилая площадь в м² (например, 32.0)"
    ],
    "Price": [
      "Полная стоимость в рублях (например, 12500000)"
    ],
    "Description": [
      "Подробное описание объекта и ЖК"
    ],
    "Images": [
      "Ссылки на фотографии планировки и рендеров"
    ],
    "ContactPhone": [
      "Номер телефона отдела продаж (+7XXXXXXXXXX)"
    ],
    "ManagerName": [
      "Имя менеджера или Отдел продаж"
    ],
    "NewDevelopmentId": [
      "Идентификатор ЖК в базе Авито (число)"
    ],
    "DduLink": [
      "Ссылка на архив/документ ДДУ"
    ],
    "VideoURL": [
      "Ссылка на видеоролик объекта / ЖК"
    ]
  },
  "commercial_avito": {
    "ObjectType": [
      "Офисное помещение",
      "Торговое помещение",
      "Помещение свободного назначения",
      "Складское помещение",
      "Производственное помещение",
      "Здание",
      "Земельный участок",
      "Готовый бизнес",
      "Гараж",
      "Помещение общественного питания",
      "Гостиница",
      "Автосервис",
      "Кладовая"
    ],
    "TransactionType": [
      "Продажа",
      "Аренда",
      "Прямая аренда",
      "Субаренда"
    ],
    "PriceType": [
      "за всё",
      "за м²"
    ],
    "Entrance": [
      "С улицы",
      "Со двора",
      "Отдельный вход",
      "Общий вход"
    ],
    "Layout": [
      "Открытая (open space)",
      "Кабинетная",
      "Коридорная",
      "Смешанная"
    ],
    "Decoration": [
      "Без отделки",
      "Черновая",
      "Чистовая",
      "Офисная отделка",
      "Требуется ремонт"
    ],
    "Heating": [
      "Центральное",
      "Автономное",
      "Индивидуальное",
      "Нет"
    ],
    "ParkingType": [
      "В здании",
      "Подземная",
      "Наземная",
      "Открытая во дворе",
      "Охраняемая"
    ],
    "BuildingType": [
      "Бизнес-центр",
      "Торговый центр",
      "Жилой дом",
      "Административное здание",
      "Отдельно стоящее здание",
      "Складской комплекс"
    ],
    "BuildingClass": [
      "A",
      "B",
      "C"
    ],
    "DistanceFromRoad": [
      "Первая линия",
      "Вторая линия и дальше"
    ],
    "ReadinessStatus": [
      "Проект",
      "Строится",
      "В эксплуатации"
    ],
    "PlacementType": [
      "Для уличной торговли",
      "В торговом комплексе"
    ],
    "ObjectBooked": [
      "Забронировано",
      "Свободно"
    ],
    "Category": [
      "Коммерческая недвижимость"
    ],
    "OperationType": [
      "Продам",
      "Сдам"
    ],
    "PropertyRights": [
      "Собственник",
      "Застройщик",
      "Агентство"
    ],
    "Square": [
      "Общая площадь помещения в м²"
    ],
    "Price": [
      "Стоимость объекта в рублях"
    ],
    "PowerGridCapacity": [
      "Электрическая мощность в кВт (например, 50)"
    ],
    "PowerGridAdditionally": [
      "Возможность увеличения мощности (Да / Нет)"
    ],
    "Lighting": [
      "Есть",
      "Нет"
    ],
    "PowerSockets": [
      "Есть",
      "Нет"
    ],
    "ParkingAdditionally": [
      "Бесплатная",
      "Платная",
      "Охраняемая"
    ],
    "ParkingSpaces": [
      "Количество машиномест (число)"
    ],
    "CarAccess": [
      "Легковой",
      "Грузовой",
      "Пандус"
    ],
    "FloorMaterialTypeType": [
      "Бетонный",
      "Антипыль",
      "Плитка",
      "Наливной",
      "Асфальт"
    ],
    "GatesType": [
      "Доковые",
      "Въездные нулевой уровень",
      "Пандус"
    ],
    "ColumnGrid": [
      "Сетка колонн (например, 6x6 м, 12x18 м)"
    ],
    "WaterPipesCount": [
      "Количество мокрых точек (число)"
    ],
    "HasShopWindows": [
      "Да (витринные окна)",
      "Нет"
    ],
    "HasFurniture": [
      "Есть",
      "Нет"
    ],
    "HasEquipment": [
      "Есть",
      "Нет"
    ]
  },
  "new_developments_cian": {
    "FlatRoomsCount": [
      "0 (студия)",
      "1 (однокомнатная)",
      "2 (двухкомнатная)",
      "3 (трёхкомнатная)",
      "4 (четырёхкомнатная)",
      "5 (пятикомнатная)"
    ],
    "IsEuroFlat": [
      "true (европланировка)",
      "false (классическая)"
    ],
    "IsApartments": [
      "true (апартаменты)",
      "false (квартира)"
    ],
    "IsPenthouse": [
      "true (пентхаус)",
      "false (нет)"
    ],
    "Decoration": [
      "without (без отделки)",
      "rough (черновая)",
      "preFine (предчистовая)",
      "fine (чистовая)",
      "fineWithFurniture (чистовая с мебелью)",
      "turnkey (под ключ)",
      "unknown (не указано)"
    ],
    "ViewFromWindows": [
      "yard (во двор)",
      "street (на улицу)",
      "yardAndStreet (во двор и на улицу)"
    ],
    "RoomType": [
      "separate (изолированные)",
      "combined (смежные)",
      "both (смежно-изолированные)"
    ],
    "Building.MaterialType": [
      "brick (кирпичный)",
      "monolith (монолитный)",
      "panel (панельный)",
      "monolithBrick (монолитно-кирпичный)"
    ],
    "Building.Parking.Type": [
      "ground (наземная)",
      "multilevel (многоуровневая)",
      "open (открытая)",
      "roof (на крыше)",
      "underground (подземная)"
    ],
    "Building.Deadline.Quarter": [
      "first (1 кв.)",
      "second (2 кв.)",
      "third (3 кв.)",
      "fourth (4 кв.)"
    ],
    "Building.IsDelivered": [
      "true (дом сдан)",
      "false (строится)"
    ],
    "Building.HasRamp": [
      "true (пандус есть)",
      "false (нет)"
    ],
    "Building.HasBarrier": [
      "true (шлагбаум есть)",
      "false (нет)"
    ],
    "Building.IsYardCarFree": [
      "true (двор без машин)",
      "false (нет)"
    ],
    "Building.HasConcierge": [
      "true (консьерж есть)",
      "false (нет)"
    ],
    "BargainTerms.Currency": [
      "rur (рубли)",
      "usd (доллары)",
      "eur (евро)"
    ],
    "BargainTerms.SaleType": [
      "free (свободная)",
      "alternative (альтернативная)",
      "ddu (ДДУ)"
    ],
    "Category": [
      "flatSale (квартира в новостройке)"
    ],
    "TotalArea": [
      "Общая площадь в м²"
    ],
    "LivingArea": [
      "Жилая площадь в м²"
    ],
    "FloorNumber": [
      "Номер этажа"
    ],
    "Building.FloorsCount": [
      "Количество этажей в доме"
    ],
    "JKSchema.Id": [
      "Идентификатор ЖК в базе Циан"
    ],
    "ApartmentNumber": [
      "Номер квартиры на площадке"
    ],
    "BalconiesCount": [
      "Количество балконов (число)"
    ],
    "LoggiasCount": [
      "Количество лоджий (число)"
    ],
    "SeparateWcsCount": [
      "Количество раздельных санузлов (число)"
    ],
    "CombinedWcsCount": [
      "Количество совмещенных санузлов (число)"
    ],
    "PassengerLiftsCount": [
      "Количество пассажирских лифтов"
    ],
    "CargoLiftsCount": [
      "Количество грузовых лифтов"
    ],
    "CeilingHeight": [
      "Высота потолков в метрах (например, 3.1)"
    ]
  },
  "commercial_cian": {
    "Category": [
      "officeSale (Офис)",
      "freeAppointmentObjectSale (ПСН)",
      "shoppingAreaSale (Торговая)",
      "warehouseSale (Склад)",
      "businessSale (Готовый бизнес)",
      "commercialLandSale (Земля)",
      "buildingSale (Здание)",
      "garageSale (Гараж)"
    ],
    "BargainTerms.VatType": [
      "included (НДС включен)",
      "notIncluded (НДС не включен)",
      "usn (УСН)"
    ],
    "BargainTerms.ContractType": [
      "sale (продажа)",
      "rent (прямая аренда)",
      "subrent (субаренда)"
    ],
    "ConditionType": [
      "typical (типовой)",
      "euro (евроремонт)",
      "cosmetic (косметический)",
      "design (дизайнерский)",
      "major (капитальный)",
      "no (без ремонта)"
    ],
    "Layout": [
      "cabinet (кабинетная)",
      "corridor (коридорная)",
      "mixed (смешанная)",
      "openSpace (открытое пространство)"
    ],
    "InputType": [
      "commonStreet (общий с улицы)",
      "commonYard (общий со двора)",
      "separateStreet (отдельный с улицы)",
      "separateYard (отдельный со двора)"
    ],
    "Building.ClassType": [
      "a",
      "aPlus",
      "b",
      "bMinus",
      "bPlus",
      "c",
      "d"
    ],
    "Building.HouseLineType": [
      "first (первая линия)",
      "second (вторая линия)",
      "other (другая)"
    ],
    "Building.AccessType": [
      "free (свободный доступ)",
      "passSystem (пропускной режим)"
    ],
    "Building.StatusType": [
      "operational (действующее)",
      "project (проект)",
      "underConstruction (строящееся)"
    ],
    "Building.MaterialType": [
      "brick (кирпичный)",
      "monolith (монолитный)",
      "panel (панельный)"
    ],
    "GatesType": [
      "zeroLevel (в ноль)",
      "dockType (док)",
      "ramp (пандус)"
    ],
    "PlacementType": [
      "shoppingCenter (торговый центр)",
      "streetRetail (стрит-ритейл)"
    ],
    "Land.AreaUnitType": [
      "sotka (сотка)",
      "hectare (гектар)"
    ],
    "Land.Status": [
      "owned (собственность)",
      "rent (аренда)"
    ],
    "Land.DrivewayType": [
      "asphalt (асфальт)",
      "ground (грунт)",
      "no (нет)"
    ],
    "Land.Electricity": [
      "border (по границе)",
      "location (на участке)",
      "no (нет)"
    ],
    "Land.Gas": [
      "border (по границе)",
      "location (на участке)",
      "no (нет)"
    ],
    "Land.Water": [
      "border (по границе)",
      "location (на участке)",
      "no (нет)"
    ],
    "Land.Drainage": [
      "border (по границе)",
      "location (на участке)",
      "no (нет)"
    ],
    "Garage.Type": [
      "garage (гараж)",
      "parkingPlace (машиноместо)",
      "box (бокс)"
    ],
    "Garage.GarageType": [
      "builtIn (встроенный)",
      "capital (капитальный)",
      "metal (металлический)"
    ],
    "Garage.Status": [
      "byTrust (по доверенности)",
      "cooperative (кооператив)",
      "ownership (собственность)"
    ],
    "FloorMaterialTypeType": [
      "asphalt (асфальт)",
      "concrete (бетон)",
      "ironConcrete (железобетон)",
      "polymer (полимерный)",
      "antiDust (антипыль)",
      "selfLeveling (наливной)",
      "tiles (плитка)"
    ],
    "Auction": [
      "Ставка продвижения (Double: 10, 20, 30...)"
    ],
    "AuctionPerClick": [
      "Ставка за клик (Double: 1, 2, 5...)"
    ],
    "Specialty": [
      "Специализация объекта (office, bank, retail, medical...)"
    ],
    "ReadyBusinessType": [
      "readyBusiness (готовый бизнес)",
      "rentalBusiness (арендный бизнес)"
    ],
    "HasSafeCustody": [
      "true (есть ответственное хранение)",
      "false (нет)"
    ],
    "IsCustoms": [
      "true (таможенный склад)",
      "false (нет)"
    ],
    "HasTransportServices": [
      "true (транспортные услуги есть)",
      "false (нет)"
    ],
    "HasVideoSurveillance": [
      "true (видеонаблюдение)",
      "false (нет)"
    ],
    "HasHourSecurity": [
      "true (круглосуточная охрана)",
      "false (нет)"
    ],
    "HasAutomaticGates": [
      "true (автоматические ворота)",
      "false (нет)"
    ],
    "HasEntryByPass": [
      "true (въезд по пропускам)",
      "false (нет)"
    ],
    "HasBasement": [
      "true (подвал / погреб)",
      "false (нет)"
    ]
  },
  "yandex_common": {
    "commercial-type": [
      "office (Офис)",
      "retail (Торговая)",
      "free purpose (ПСН)",
      "warehouse (Склад)",
      "industry (Производство)",
      "public catering (Общепит)",
      "auto repair (Автосервис)",
      "business (Готовый бизнес)",
      "legal address (Юридический адрес)",
      "land (Земля)",
      "hotel (Гостиница)"
    ],
    "commercial-building-type": [
      "business center (Бизнес-центр)",
      "warehouse (Складской комплекс)",
      "shopping center (ТЦ)",
      "residential building (Жилой дом)",
      "detached (Отдельно стоящее здание)",
      "standalone",
      "other"
    ],
    "building-state": [
      "built (построен)",
      "hand-over (сдан в эксплуатацию)",
      "unfinished (строится)"
    ],
    "renovation": [
      "дизайнерский",
      "евроремонт",
      "косметический",
      "требует ремонта",
      "хороший",
      "черновая отделка"
    ],
    "entrance-type": [
      "separate (отдельный)",
      "common (общий)"
    ],
    "window-type": [
      "show-windows (витринные)",
      "small (маленькие)",
      "standard (стандартные)"
    ],
    "window-view": [
      "yard (во двор)",
      "street (на улицу)",
      "yard and street (во двор и на улицу)"
    ],
    "office-class": [
      "A",
      "A+",
      "B",
      "B+",
      "C",
      "C+"
    ],
    "floor-covering": [
      "carpet (ковролин)",
      "laminate (ламинат)",
      "linoleum (линолеум)",
      "parquet (паркет)"
    ],
    "purpose-warehouse": [
      "alcohol (алкогольный)",
      "pharmaceutical (фармацевтический)",
      "vegetable store (овощехранилище)"
    ],
    "deal-status": [
      "primary (первичная продажа)",
      "reassignment (переуступка)",
      "direct (прямая продажа)"
    ],
    "taxation-form": [
      "ndfl (НДФЛ)",
      "usn (УСН)",
      "osn (ОСНО)",
      "envd (ЕНВД)"
    ],
    "type": [
      "продажа",
      "аренда"
    ],
    "category": [
      "commercial (коммерческая)",
      "квартира",
      "новостройка"
    ],
    "open-plan": [
      "1 (свободная планировка)",
      "0 (нет)"
    ],
    "self-selection-telecom": [
      "1 (выбор провайдера)",
      "0 (нет)"
    ],
    "room-furniture": [
      "1 (есть мебель)",
      "0 (нет)"
    ],
    "guarded-building": [
      "1 (охраняемое здание)",
      "0 (нет)"
    ],
    "access-control-system": [
      "1 (пропускная система)",
      "0 (нет)"
    ],
    "twenty-four-seven": [
      "1 (доступ 24/7)",
      "0 (нет)"
    ],
    "eating-facilities": [
      "1 (общепит в здании)",
      "0 (нет)"
    ],
    "responsible-storage": [
      "1 (ответственное хранение)",
      "0 (нет)"
    ],
    "freight-elevator": [
      "1 (грузовой лифт)",
      "0 (нет)"
    ],
    "truck-entrance": [
      "1 (подъезд фуры)",
      "0 (нет)"
    ],
    "ramp": [
      "1 (пандус)",
      "0 (нет)"
    ],
    "railway": [
      "1 (жд ветка)",
      "0 (нет)"
    ],
    "office-warehouse": [
      "1 (офис на складе)",
      "0 (нет)"
    ],
    "open-area": [
      "1 (открытая площадка)",
      "0 (нет)"
    ],
    "service-three-pl": [
      "1 (3PL услуги)",
      "0 (нет)"
    ]
  },
  "new_developments_domclick": {
    "flat.housing_type": [
      "0 (квартира)",
      "1 (апартаменты)"
    ],
    "flat.renovation": [
      "без отделки",
      "черновая",
      "предчистовая",
      "чистовая",
      "да",
      "нет"
    ],
    "flat.room": [
      "0 (студия)",
      "1 (однокомнатная)",
      "2 (двухкомнатная)",
      "3 (трёхкомнатная)",
      "4 (четырёхкомнатная)",
      "5 (пятикомнатная)"
    ],
    "flat.layout_type": [
      "free (свободная планировка)",
      "standard (стандартная)"
    ],
    "flat.window_view": [
      "во двор",
      "на улицу",
      "во двор и на улицу"
    ],
    "flat.booking": [
      "0 (свободна к продаже)",
      "1 (забронирована)"
    ],
    "flat.euro_plan": [
      "1 (европланировка)",
      "0 (стандартная)"
    ],
    "building.building_state": [
      "built (построен, но не сдан)",
      "hand_over (сдан в эксплуатацию)",
      "unfinished (строится)",
      "ready (построен и сдан)"
    ],
    "building.fz_214": [
      "true / 1 (соответствует 214-ФЗ)",
      "false / 0 (нет)"
    ],
    "infrastructure.parking": [
      "подземная",
      "наземная",
      "нет"
    ],
    "infrastructure.security": [
      "true / 1 (есть охрана)",
      "false / 0 (нет)"
    ],
    "infrastructure.fenced_area": [
      "true / 1 (огороженная территория)",
      "false / 0 (нет)"
    ],
    "infrastructure.sports_ground": [
      "true / 1 (спортивная площадка)",
      "false / 0 (нет)"
    ],
    "infrastructure.playground": [
      "true / 1 (детская площадка)",
      "false / 0 (нет)"
    ],
    "infrastructure.school": [
      "true / 1 (школа на территории)",
      "false / 0 (нет)"
    ],
    "infrastructure.kindergarten": [
      "true / 1 (детский сад)",
      "false / 0 (нет)"
    ],
    "videos.video.type": [
      "rutube",
      "vk"
    ],
    "sales_info.work_days.work_day.day": [
      "пн",
      "вт",
      "ср",
      "чт",
      "пт",
      "сб",
      "вс"
    ],
    "condition.kind": [
      "cash (наличные)",
      "mortgage (ипотека)"
    ],
    "discounts.discount.type": [
      "скидки на жилье",
      "бонусы и подарки",
      "программы с господдержкой",
      "скидки для профессий и семей",
      "trade-in",
      "рассрочка и гибкие платежи",
      "другие акции"
    ]
  }
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
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sales_info.work_days.work_day",
        "category": "Офис продаж",
        "mandatory": false,
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
        "name": "offer@internal-id",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "type",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "category",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
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
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "location.address",
        "category": "Местоположение",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "location.latitude",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "location.longitude",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "sales-agent.phone",
        "category": "Контакты",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "sales-agent.category",
        "category": "Контакты",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
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
        "category": "Параметры помещения",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
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
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "floors-total",
        "category": "Здание",
        "mandatory": true,
        "formula": "IF(E2=\"Апартаменты\",\"Нет\",\"Да\")"
      },
      {
        "name": "price.period",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "deal-status",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "commercial-building-type",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "purpose",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Торговая\",E2=\"ПСН\",E2=\"Офис\",E2=\"Общепит\"),\"Да\",\"Нет\")"
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
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "direction",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "distance",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "metro",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "railway-station",
        "category": "Местоположение",
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
        "name": "whatsapp-phone",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "telegram-link",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "max-link",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "organization",
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
        "name": "email",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "photo",
        "category": "Контакты",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "partner",
        "category": "Общие параметры",
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
        "name": "commission",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "prepayment",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "security-payment",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "rent-pledge",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "taxation-form",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "cleaning-included",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "utilities-included",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electricity-included",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "area.unit",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "is-image-order-change-allowed",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "renovation",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "quality",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
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
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "entrance-type",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\",E2=\"Общепит\"),\"Да\",\"Нет\")"
      },
      {
        "name": "open-plan",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\"),\"Да\",\"Нет\")"
      },
      {
        "name": "phone-lines",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "adding-phone-on-request",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "internet",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "self-selection-telecom",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "room-furniture",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\",E2=\"Гостиница\"),\"Да\",\"Нет\")"
      },
      {
        "name": "air-conditioner",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "ventilation",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "fire-alarm",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "water-supply",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "sewerage-supply",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "gas-supply",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "heating-supply",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electricity-supply",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "electric-capacity",
        "category": "Инженерия",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "floor-covering",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "window-type",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Торговая\",E2=\"ПСН\",E2=\"Офис\",E2=\"Общепит\"),\"Да\",\"Нет\")"
      },
      {
        "name": "window-view",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "office-class",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ceiling-height",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "guarded-building",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "access-control-system",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Здание\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "twenty-four-seven",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Склад\",E2=\"Производство\",E2=\"ПСН\"),\"Да\",\"Нет\")"
      },
      {
        "name": "lift",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
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
        "name": "parking-guest",
        "category": "Парковка",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "parking-guest-places",
        "category": "Парковка",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "security",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "eating-facilities",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Склад\",E2=\"Производство\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "is-elite",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "yandex-building-id",
        "category": "Жилой комплекс",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "yandex-house-id",
        "category": "Жилой комплекс",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "built-year",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(E2=\"Земля\",\"Нет\",\"Да\")"
      },
      {
        "name": "building-name",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "purpose-warehouse",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "responsible-storage",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "pallet-price",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "freight-elevator",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "truck-entrance",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ramp",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "railway",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\",E2=\"Земля\"),\"Да\",\"Нет\")"
      },
      {
        "name": "office-warehouse",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "open-area",
        "category": "Склад / Производство",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\",E2=\"Земля\"),\"Да\",\"Нет\")"
      },
      {
        "name": "service-three-pl",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "temperature-comment",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
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
        "category": "Местоположение",
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
        "category": "Параметры помещения",
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
        "name": "FloorNumber",
        "category": "Параметры помещения",
        "mandatory": true,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Building.FloorsCount",
        "category": "Здание",
        "mandatory": true,
        "formula": "IF(OR(E2=\"Здание\",E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "BargainTerms.VatType",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Торговая\",E2=\"ПСН\",E2=\"Склад\",E2=\"Производство\",E2=\"Готовый бизнес\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Specialty",
        "category": "ПСН / Торговая",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Готовый бизнес\",E2=\"Торговая\",E2=\"ПСН\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ReadyBusinessType",
        "category": "Готовый бизнес",
        "mandatory": true,
        "formula": "IF(E2=\"Готовый бизнес\",\"Да\",\"Нет\")"
      },
      {
        "name": "MonthlyIncome.Income",
        "category": "Готовый бизнес",
        "mandatory": true,
        "formula": "IF(E2=\"Готовый бизнес\",\"Да\",\"Нет\")"
      },
      {
        "name": "Garage.Type",
        "category": "Гараж / Машиноместо",
        "mandatory": true,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "Land.Area",
        "category": "Коммерческая земля",
        "mandatory": true,
        "formula": "IF(E2=\"Земля\",\"Да\",\"Нет\")"
      },
      {
        "name": "Land.AreaUnitType",
        "category": "Коммерческая земля",
        "mandatory": true,
        "formula": "IF(E2=\"Земля\",\"Да\",\"Нет\")"
      },
      {
        "name": "Land.Status",
        "category": "Коммерческая земля",
        "mandatory": true,
        "formula": "IF(E2=\"Земля\",\"Да\",\"Нет\")"
      },
      {
        "name": "FloorMaterialTypeType",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "CranageTypes",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "GatesType",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ColumnGrid",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "HasSafeCustody",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "IsCustoms",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasTransportServices",
        "category": "Склад",
        "mandatory": false,
        "formula": "IF(E2=\"Склад\",\"Да\",\"Нет\")"
      },
      {
        "name": "Auction",
        "category": "Продвижение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AuctionPerClick",
        "category": "Продвижение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Coordinates.Lat",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Coordinates.Lng",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CadastralNumber",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Highways",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Undergrounds",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ConditionType",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Здание\",E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "JKSchema",
        "category": "Жилой комплекс",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "IsOccupied",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Layout",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Здание\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "AvailableFrom",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "IsLegalAddressProvided",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "WaterPipesCount",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Производство\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "TaxNumber",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Здание\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "BusinessShoppingCenter.Id",
        "category": "Здание / ТЦ / БЦ",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "SubAgent.Email",
        "category": "Контакты",
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
        "name": "Photos",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CollateralObjectSchema",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "IsInHiddenBase",
        "category": "Общие параметры",
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
        "name": "MultiListingSlots",
        "category": "Параметры помещения",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "PublishTerms",
        "category": "Продвижение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ExtraData",
        "category": "Модерация",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.Currency",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.ContractType",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "BargainTerms.AgentBonus",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.Name",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.BuildYear",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.HeatingType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.CeilingHeight",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.Type",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.ClassType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.Developer",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.ManagementCompany",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.VentilationType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.ConditioningType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.ExtinguishingSystemType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.StatusType",
        "category": "Здание",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Building.LiftTypes",
        "category": "Здание",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Garage.GarageType",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "Garage.Material",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "Garage.Status",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasLight",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasElectricity",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasHeating",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasWater",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "HasExtinguishingSystem",
        "category": "Гараж / Машиноместо",
        "mandatory": false,
        "formula": "IF(E2=\"Гараж\",\"Да\",\"Нет\")"
      },
      {
        "name": "ShoppingCenterScaleType",
        "category": "Торговая площадь",
        "mandatory": false,
        "formula": "IF(E2=\"Торговая\",\"Да\",\"Нет\")"
      },
      {
        "name": "PlacementType",
        "category": "Торговая площадь",
        "mandatory": false,
        "formula": "IF(E2=\"Торговая\",\"Да\",\"Нет\")"
      },
      {
        "name": "Tenants",
        "category": "Торговая площадь",
        "mandatory": false,
        "formula": "IF(E2=\"Торговая\",\"Да\",\"Нет\")"
      },
      {
        "name": "OpeningHours",
        "category": "Торговая площадь",
        "mandatory": false,
        "formula": "IF(E2=\"Торговая\",\"Да\",\"Нет\")"
      }
    ],
    "avito": [
      {
        "name": "Id",
        "category": "Общие элементы",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Description",
        "category": "Общие элементы",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Address",
        "category": "Местоположение",
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
        "name": "Price",
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
        "name": "ObjectType",
        "category": "Общие параметры",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "PropertyRights",
        "category": "Контакты",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Square",
        "category": "О помещениях",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "TransactionType",
        "category": "Условия сделки",
        "mandatory": true,
        "formula": "=\"Да\""
      },
      {
        "name": "Entrance",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Floor",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Кладовая\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Layout",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Кладовая\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Decoration",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\",E2=\"Кладовая\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Heating",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\",E2=\"Кладовая\"),\"Да\",\"Нет\")"
      },
      {
        "name": "BuildingType",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\",E2=\"Кладовая\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ParkingType",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "StorageRoomType",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "Width",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "Length",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "CeilingHeight",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(OR(E2=\"Кладовая\",E2=\"Склад\",E2=\"Производство\"),\"Да\",\"Нет\")"
      },
      {
        "name": "Volume",
        "category": "Кладовая",
        "mandatory": false,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "Security",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "AccessSchedule",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "CarAccess",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "Lighting",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "PowerSockets",
        "category": "Кладовая",
        "mandatory": true,
        "formula": "IF(E2=\"Кладовая\",\"Да\",\"Нет\")"
      },
      {
        "name": "DateBegin",
        "category": "Общие элементы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "DateEnd",
        "category": "Общие элементы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ListingFee",
        "category": "Общие элементы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AdStatus",
        "category": "Общие элементы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AvitoId",
        "category": "Общие элементы",
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
        "name": "Latitude",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "Longitude",
        "category": "Местоположение",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ContactMethod",
        "category": "Способ связи",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "InternetCalls",
        "category": "Способ связи",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "CallsDevices",
        "category": "Способ связи",
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
        "name": "PriceWithVAT",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AdditionalObjectTypes",
        "category": "Общие параметры",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "VideoFileURL",
        "category": "Медиа",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "EgrnExtractionLink",
        "category": "Документы",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "PremisesType",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(E2=\"Торговая\",\"Да\",\"Нет\")"
      },
      {
        "name": "EntranceAdditionally",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "FloorAdditionally",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\"),\"Да\",\"Нет\")"
      },
      {
        "name": "PlaceIsRented",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "RenterName",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "RenterMonthPayment",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "RentContractExpireDate",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "PaymentIndexation",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "PercentOfTrade",
        "category": "Арендатор",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "PowerGridCapacity",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "PowerGridAdditionally",
        "category": "О помещениях",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ReadinessStatus",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "BuildingClass",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "DistanceFromRoad",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ParkingAdditionally",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "ParkingSpaces",
        "category": "О здании",
        "mandatory": false,
        "formula": "IF(OR(E2=\"Офис\",E2=\"ПСН\",E2=\"Торговая\",E2=\"Склад\",E2=\"Производство\",E2=\"Общепит\",E2=\"Гостиница\",E2=\"Автосервис\",E2=\"Здание\"),\"Да\",\"Нет\")"
      },
      {
        "name": "PriceType",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "SaleOptions",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "ObjectBooked",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AgentSellCommissionPresence",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      },
      {
        "name": "AgentSellCommissionSize",
        "category": "Условия сделки",
        "mandatory": false,
        "formula": "=\"Да\""
      }
    ]
  }
};
