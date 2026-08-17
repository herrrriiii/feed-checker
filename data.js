// Specification Data generated from Памятка Новостройки.xlsx and Памятка коммерция.xlsx

var PLATFORM_COMMERCIAL_TYPES = {
    "avito": [
        {
            "id": "all",
            "name": "Все типы объектов",
            "val": "Все типы"
        },
        {
            "id": "pantry",
            "name": "Кладовая",
            "val": "Кладовая"
        },
        {
            "id": "office",
            "name": "Офисное помещение (Офис)",
            "val": "Офис"
        },
        {
            "id": "retail",
            "name": "Торговое помещение (Ритейл)",
            "val": "Торговая"
        },
        {
            "id": "psn",
            "name": "Помещение свободного назначения (ПСН)",
            "val": "ПСН"
        },
        {
            "id": "warehouse",
            "name": "Складское помещение (Склад)",
            "val": "Склад"
        },
        {
            "id": "industry",
            "name": "Производственное помещение",
            "val": "Производство"
        },
        {
            "id": "land",
            "name": "Земельный участок",
            "val": "Земля"
        },
        {
            "id": "business",
            "name": "Готовый бизнес",
            "val": "Готовый бизнес"
        },
        {
            "id": "garage",
            "name": "Гараж / Машиноместо",
            "val": "Гараж"
        },
        {
            "id": "catering",
            "name": "Помещение общественного питания (Общепит)",
            "val": "Общепит"
        },
        {
            "id": "hotel",
            "name": "Гостиница",
            "val": "Гостиница"
        },
        {
            "id": "auto_repair",
            "name": "Автосервис",
            "val": "Автосервис"
        },
        {
            "id": "building",
            "name": "Здание",
            "val": "Здание"
        },
        {
            "id": "apartments",
            "name": "Апартаменты (Апарт-отели / ПСН)",
            "val": "Апартаменты"
        }
    ],
    "cian": [
        {
            "id": "all",
            "name": "Все типы объектов",
            "val": "Все типы"
        },
        {
            "id": "psn",
            "name": "Помещение свободного назначения (freeAppointmentObjectSale)",
            "val": "ПСН"
        },
        {
            "id": "office",
            "name": "Офисное помещение (officeSale / officeRent)",
            "val": "Офис"
        },
        {
            "id": "business",
            "name": "Готовый бизнес (businessSale)",
            "val": "Готовый бизнес"
        },
        {
            "id": "garage",
            "name": "Гараж / Машиноместо (garageSale)",
            "val": "Гараж"
        },
        {
            "id": "warehouse",
            "name": "Складской комплекс (warehouseSale)",
            "val": "Склад"
        },
        {
            "id": "retail",
            "name": "Торговая площадь (shoppingAreaSale)",
            "val": "Торговая"
        },
        {
            "id": "industry",
            "name": "Производственный объект (industrySale)",
            "val": "Производство"
        },
        {
            "id": "building",
            "name": "Здание (buildingSale)",
            "val": "Здание"
        },
        {
            "id": "land",
            "name": "Коммерческая земля (commercialLandSale)",
            "val": "Земля"
        },
        {
            "id": "apartments",
            "name": "Апартаменты (apartmentsSale)",
            "val": "Апартаменты"
        }
    ],
    "yandex": [
        {
            "id": "all",
            "name": "Все типы объектов",
            "val": "Все типы"
        },
        {
            "id": "office",
            "name": "Офис (office)",
            "val": "Офис"
        },
        {
            "id": "retail",
            "name": "Торговая площадь / Ритейл (retail)",
            "val": "Торговая"
        },
        {
            "id": "psn",
            "name": "Помещение свободного назначения (free purpose)",
            "val": "ПСН"
        },
        {
            "id": "warehouse",
            "name": "Склад / Складской комплекс (warehouse)",
            "val": "Склад"
        },
        {
            "id": "industry",
            "name": "Производство (manufacturing)",
            "val": "Производство"
        },
        {
            "id": "catering",
            "name": "Общепит (public catering)",
            "val": "Общепит"
        },
        {
            "id": "auto_repair",
            "name": "Автосервис (auto repair)",
            "val": "Автосервис"
        },
        {
            "id": "business",
            "name": "Готовый бизнес (business)",
            "val": "Готовый бизнес"
        },
        {
            "id": "land",
            "name": "Земельный участок (land)",
            "val": "Земля"
        },
        {
            "id": "hotel",
            "name": "Гостиница (hotel)",
            "val": "Гостиница"
        },
        {
            "id": "legal_address",
            "name": "Юридический адрес (legal address)",
            "val": "Юридический адрес"
        }
    ]
};

var SAMPLE_FILL_EXAMPLES = {
    "адрес": "г. Москва, ул. Арбат, д. 10",
    "широта": "55.751244",
    "долгота": "37.618423",
    "цена": "14 500 000 руб.",
    "базовая цена": "16 000 000 руб.",
    "цена со скидкой": "14 500 000 руб.",
    "размер скидки": "10%",
    "площадь": "58.4 м²",
    "жилая площадь": "34.0 м²",
    "этаж": "7",
    "всего этажей": "24",
    "количество этажей": "24",
    "построено этажей": "12",
    "комнат": "2",
    "санузел": "Раздельный (1)",
    "высота потолков": "2.95 м",
    "отделка": "Чистовая / Отделка под ключ",
    "вид из окон": "Во двор и на парк",
    "балкон": "1 лоджия",
    "лифт": "2 пассажирских, 1 грузовой",
    "пассажирский лифт": "2",
    "грузовой лифт": "1",
    "парковка": "Подземная (120 м/м)",
    "охрана": "Да (закрытая территория, КПП)",
    "видеонаблюдение": "Да",
    "описание": "Просторная двухкомнатная квартира с отделкой в ЖК бизнес-класса.",
    "заголовок": "2-комн. квартира 58.4 м² в ЖК Премиум",
    "кадастровый номер": "77:01:0001001:1234",
    "год сдачи": "2026",
    "квартал сдачи": "4",
    "статус строительства": "Строится",
    "материал стен": "Монолит-кирпич",
    "класс здания": "A",
    "мощность": "150 кВт",
    "вход": "Отдельный с улицы",
    "акция": "Скидка 10% до конца месяца",
    "ипотека": "Да",
    "способы оплаты": "Ипотека, 100% оплата, рассрочка",
    "проектная декларация": "https://example.com/declaration.pdf",
    "видео": "https://youtube.com/watch?v=example",
    "3d-тур": "https://example.com/3d-tour",
    "планировка": "https://example.com/plan.jpg",
    "фотографии": "https://example.com/photo1.jpg, https://example.com/photo2.jpg",
    "телефон": "+7 (495) 123-45-67",
    "менеджер": "Иван Петров",
    "застройщик": "ООО Девелопмент Групп",
    "сайт застройщика": "https://developer-example.ru",
    "логотип": "https://example.com/logo.png",
    "утп": "Высокие потолки, панорамные окна",
    "ширина ворот": "4.5 м",
    "кран-балка": "Да (5 тонн)",
    "железнодорожная ветка": "Да (подведена к складу)"
};

var PARAM_OPTIONS_MAP = {
    "new_developments_avito": {
        "Category": [
            "Квартиры",
            "Комнаты"
        ],
        "OperationType": [
            "Продам",
            "Сдам"
        ],
        "MarketType": [
            "Новостройка"
        ],
        "NewDevelopmentId": [
            "ID жилого комплекса в базе Авито (например, 9406658)"
        ],
        "PropertyRights": [
            "Застройщик",
            "Собственник",
            "Посредник"
        ],
        "Price": [
            "Полная стоимость квартиры в рублях (например, 14500000)"
        ],
        "Square": [
            "Общая площадь квартиры в м² (например, 54.8)"
        ],
        "LivingSpace": [
            "Жилая площадь в м² (например, 28.5)"
        ],
        "Rooms": [
            "Студия",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10 и больше",
            "Свободная планировка"
        ],
        "Floor": [
            "Номер этажа (например, 7)"
        ],
        "Floors": [
            "Всего этажей в секции / доме (например, 24)"
        ],
        "HouseType": [
            "Кирпичный",
            "Монолитный",
            "Панельный",
            "Блочный",
            "Монолитно-кирпичный"
        ],
        "Decoration": [
            "Без отделки",
            "Черновая",
            "Предчистовая (White box)",
            "Чистовая",
            "Чистовая с мебелью"
        ],
        "Status": [
            "Квартира",
            "Апартаменты"
        ],
        "Description": [
            "Подробное описание квартиры, преимуществ и условий покупки"
        ],
        "Address": [
            "Адрес объекта (например, г. Москва, ул. Большая Очаковская, д. 2)"
        ],
        "ContactPhone": [
            "Номер телефона отдела продаж в формате +79991234567"
        ],
        "ManagerName": [
            "Имя менеджера или название отдела продаж"
        ],
        "AdStatus": [
            "Free — Бесплатное размещение",
            "Premium — Пакет продвижения Премиум",
            "VIP — Пакет продвижения VIP",
            "Highlight — Выделение цветом"
        ],
        "Courtyard": [
            "Закрытая территория",
            "Детская площадка",
            "Спортивная площадка",
            "Озеленение",
            "Двор без машин"
        ],
        "Parking": [
            "Подземная",
            "Наземная многоуровневая",
            "Открытая во дворе",
            "За шлагбаумом во дворе",
            "Гостевая"
        ],
        "ViewFromWindows": [
            "Во двор",
            "На улицу",
            "На солнечную сторону",
            "Во двор и на улицу (распашонка)"
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
            "Несколько",
            "Нет"
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
            "Французский балкон",
            "Высокие потолки",
            "Мастер-спальня",
            "Окно в ванной",
            "Два санузла"
        ],
        "SaleOptions": [
            "Можно в ипотеку",
            "Материнский капитал",
            "Субсидированная ставка",
            "Рассрочка от застройщика",
            "Трейд-ин"
        ],
        "SaleMethod": [
            "Договор долевого участия (ДДУ 214-ФЗ)",
            "Договор уступки права требования (ДУПТ)",
            "Договор купли-продажи (ДКП)",
            "Договор ЖСК"
        ],
        "Images": [
            "Ссылки на фотографии квартиры и рендеры ЖК через тег <Image url=\"...\" />"
        ],
        "VideoURL": [
            "Ссылка на видеоролик YouTube или Rutube"
        ],
        "Latitude": [
            "Широта (например, 55.751244)"
        ],
        "Longitude": [
            "Долгота (например, 37.618423)"
        ],
        "FlatNumber": [
            "Номер квартиры (например, 142)"
        ],
        "SectionNumber": [
            "Номер секции / подъезда (например, 2)"
        ],
        "DeliveryQuarter": [
            "1 квартал",
            "2 квартал",
            "3 квартал",
            "4 квартал"
        ],
        "DeliveryYear": [
            "Год сдачи дома (например, 2026)"
        ]
    },
    "new_developments_cian": {
        "Category": [
            "flatSale — Продажа квартиры / апартаментов в новостройке"
        ],
        "ExternalId": [
            "Уникальный идентификатор квартиры в CRM (например, 204918)"
        ],
        "Description": [
            "Текст описания квартиры и инфраструктуры жилого комплекса"
        ],
        "Address": [
            "Точный адрес объекта (например, г. Москва, ш. Энтузиастов, вл. 58)"
        ],
        "FlatRoomsCount": [
            "0 — Студия",
            "1 — 1-комнатная",
            "2 — 2-комнатная",
            "3 — 3-комнатная",
            "4 — 4-комнатная",
            "5 — 5-комнатная",
            "6 — 6-комнатная и более",
            "freeLayout — Свободная планировка"
        ],
        "Phones": [
            "Телефон отдела продаж в формате +79991234567"
        ],
        "TotalArea": [
            "Общая площадь квартиры в м² (например, 62.4)"
        ],
        "LivingArea": [
            "Жилая площадь в м² (например, 31.2)"
        ],
        "KitchenArea": [
            "Площадь кухни в м² (например, 14.5)"
        ],
        "FloorNumber": [
            "Этаж квартиры (например, 12)"
        ],
        "Building.FloorsCount": [
            "Этажность корпуса (например, 32)"
        ],
        "JKSchema.Id": [
            "ID жилого комплекса в базе Циан (например, 74921)"
        ],
        "JKSchema.Name": [
            "Название жилого комплекса (например, ЖК «Символ»)"
        ],
        "JKSchema.House.Name": [
            "Название / номер корпуса ЖК (например, Корпус 3.1)"
        ],
        "JKSchema.House.FlatNumber": [
            "Номер квартиры в корпусе (например, 185)"
        ],
        "JKSchema.House.SectionNumber": [
            "Номер секции (например, 2)"
        ],
        "BargainTerms.Price": [
            "Стоимость квартиры в рублях (например, 18900000)"
        ],
        "BargainTerms.SaleType": [
            "ddu — Договор долевого участия (ДДУ 214-ФЗ)",
            "assignment — Уступка прав требования (переуступка)",
            "dkp — Договор купли-продажи (готовое жилье)",
            "investment — Инвестиционный договор",
            "jsc — Жилищно-строительный кооператив (ЖСК)"
        ],
        "BargainTerms.Currency": [
            "rur — Российский рубль",
            "usd — Доллар США",
            "eur — Евро"
        ],
        "IsEuroFlat": [
            "true — Европланировка (кухня-гостиная)",
            "false — Классическая планировка"
        ],
        "IsApartments": [
            "true — Апартаменты",
            "false — Квартира"
        ],
        "IsPenthouse": [
            "true — Пентхаус",
            "false — Нет"
        ],
        "FlatType": [
            "flat — Квартира",
            "apartments — Апартаменты",
            "penthouse — Пентхаус",
            "livingRoom — Комната"
        ],
        "RoomType": [
            "separate — Изолированные комнаты",
            "combined — Смежные комнаты",
            "both — Смежно-изолированные"
        ],
        "RepairType": [
            "no — Без отделки",
            "cosmetic — Косметический",
            "euro — Евроремонт",
            "design — Дизайнерский",
            "rough — Черновая отделка",
            "finishing — Чистовая отделка (под ключ)"
        ],
        "WindowsViewType": [
            "yard — Во двор",
            "street — На улицу",
            "yardAndStreet — Во двор и на улицу"
        ],
        "BalconiesCount": [
            "Количество балконов (например, 1)"
        ],
        "LoggiasCount": [
            "Количество лоджий (например, 1)"
        ],
        "SeparateWcsCount": [
            "Количество раздельных санузлов (например, 1)"
        ],
        "CombinedWcsCount": [
            "Количество совмещенных санузлов (например, 2)"
        ],
        "PassengerLiftsCount": [
            "Количество пассажирских лифтов в подъезде (например, 2)"
        ],
        "CargoLiftsCount": [
            "Количество грузовых лифтов в подъезде (например, 1)"
        ],
        "Building.MaterialType": [
            "brick — Кирпичный",
            "monolith — Монолитный",
            "monolithBrick — Монолитно-кирпичный",
            "panel — Панельный",
            "block — Блочный"
        ],
        "Building.Parking.ParkingType": [
            "underground — Подземный паркинг",
            "ground — Наземная многоуровневая парковка",
            "open — Открытая во дворе",
            "roof — На крыше"
        ],
        "Building.Deadline.Quarter": [
            "first — 1 квартал",
            "second — 2 квартал",
            "third — 3 квартал",
            "fourth — 4 квартал"
        ],
        "Building.Deadline.Year": [
            "Год сдачи корпуса (например, 2026)"
        ],
        "Building.Deadline.IsComplete": [
            "true — Дом сдан",
            "false — Дом строится"
        ],
        "Building.CeilingHeight": [
            "Высота потолков в метрах (например, 3.10)"
        ],
        "Photos.PhotoSchema.FullUrl": [
            "Прямая ссылка на фото (например, https://example.com/photo.jpg)"
        ],
        "LayoutPhoto.FullUrl": [
            "Прямая ссылка на планировку (например, https://example.com/plan.jpg)"
        ],
        "Videos.VideoSchema.Url": [
            "Ссылка на видеообзор ЖК / квартиры (VK или Rutube)"
        ],
        "ObjectTour.FullUrl": [
            "Ссылка на 3D-тур квартиры"
        ]
    },
    "new_developments_yandex": {
        "type": [
            "продажа"
        ],
        "property-type": [
            "жилая"
        ],
        "category": [
            "квартира"
        ],
        "commercial-type": [
            "не указывается для новостроек"
        ],
        "creation-date": [
            "Дата генерации в формате ISO (например, 2026-08-17T10:00:00+03:00)"
        ],
        "location.address": [
            "Адрес объекта (например, Россия, Москва, Ленинградский проспект, 37)"
        ],
        "location.latitude": [
            "Широта (например, 55.792451)"
        ],
        "location.longitude": [
            "Долгота (например, 37.538192)"
        ],
        "sales-agent.phone": [
            "Телефон застройщика в формате +79991234567"
        ],
        "sales-agent.category": [
            "developer — Застройщик",
            "agency — Агентство недвижимости",
            "owner — Собственник"
        ],
        "sales-agent.name": [
            "Название застройщика / отдела продаж"
        ],
        "deal-status": [
            "primary-sale — Первичная продажа от застройщика",
            "re-sale — Вторичная продажа / переуступка"
        ],
        "price.value": [
            "Стоимость квартиры в рублях (например, 16500000)"
        ],
        "price.currency": [
            "RUB — Российский рубль",
            "USD — Доллар",
            "EUR — Евро"
        ],
        "area.value": [
            "Общая площадь квартиры в м² (например, 58.6)"
        ],
        "living-space.value": [
            "Жилая площадь в м² (например, 29.4)"
        ],
        "kitchen-space.value": [
            "Площадь кухни в м² (например, 13.8)"
        ],
        "rooms": [
            "Количество комнат (например, 1, 2, 3, 4; для студии: studio=true)"
        ],
        "studio": [
            "true — Квартира-студия",
            "false — Обычная квартира"
        ],
        "open-plan": [
            "true — Свободная планировка",
            "false — Нет"
        ],
        "apartments": [
            "true — Апартаменты",
            "false — Жилое помещение (квартира)"
        ],
        "euro-flat": [
            "true — Европланировка (евродвушка, евротрешка)",
            "false — Стандартная"
        ],
        "floor": [
            "Этаж квартиры (например, 8)"
        ],
        "floors-total": [
            "Всего этажей в здании (например, 25)"
        ],
        "building-name": [
            "Название жилого комплекса (например, ЖК «Прайм Парк»)"
        ],
        "building-section": [
            "Секция / подъезд (например, Секция 1)"
        ],
        "flat-number": [
            "Номер квартиры на поэтажном плане (например, 114)"
        ],
        "building-state": [
            "built — Дом сдан",
            "unfinished — Дом строится",
            "hand-over — Выдача ключей"
        ],
        "built-year": [
            "Год сдачи дома (например, 2026)"
        ],
        "ready-quarter": [
            "1, 2, 3 или 4 квартал сдачи"
        ],
        "renovation": [
            "rough-finish — Черновая отделка",
            "fine-finish — Чистовая отделка под ключ",
            "without-renovation — Без отделки",
            "cosmetic-done — Косметический ремонт",
            "designer-renovation — Дизайнерский ремонт"
        ],
        "building-type": [
            "monolith — Монолитный",
            "brick — Кирпичный",
            "panel — Панельный",
            "block — Блочный",
            "monolith-brick — Монолитно-кирпичный"
        ],
        "ceiling-height": [
            "Высота потолков в метрах (например, 3.15)"
        ],
        "window-view": [
            "street — Окна на улицу",
            "yard — Окна во двор",
            "street-and-yard — На улицу и во двор (распашонка)"
        ],
        "balcony": [
            "balcony — Балкон",
            "loggia — Лоджия",
            "two-balconies — Два балкона",
            "two-loggias — Две лоджии",
            "balcony-and-loggia — Балкон и лоджия",
            "none — Без балкона"
        ],
        "bathroom-unit": [
            "combined — Совмещенный санузел",
            "separated — Раздельный санузел",
            "two-and-more — Два и более санузла"
        ],
        "lift": [
            "true — В доме есть лифт",
            "false — Лифта нет"
        ],
        "parking": [
            "underground — Подземный паркинг",
            "ground — Наземная парковка",
            "open — Открытая во дворе"
        ],
        "image": [
            "Прямая ссылка на фото квартиры или рендер фасада (например, https://example.com/photo.jpg)"
        ]
    },
    "new_developments_domclick": {
        "complex.id": [
            "ID жилого комплекса в базе Домклик (например, 48291)"
        ],
        "complex.name": [
            "Название жилого комплекса (например, ЖК «Остров»)"
        ],
        "complex.latitude": [
            "Широта расположения ЖК (например, 55.702812)"
        ],
        "complex.longitude": [
            "Долгота расположения ЖК (например, 37.472911)"
        ],
        "complex.address": [
            "Официальный строительный адрес жилого комплекса"
        ],
        "images.image": [
            "Ссылка на фотографию ЖК / фасада / входной группы"
        ],
        "description_main.text": [
            "Основной маркетинговый текст с описанием ЖК"
        ],
        "building.id": [
            "ID корпуса в базе Домклик (например, 108392)"
        ],
        "building.fz_214": [
            "1 — Строительство по 214-ФЗ (с эскроу-счетами)",
            "0 — Без 214-ФЗ"
        ],
        "building.name": [
            "Наименование / строительный номер корпуса (например, Корпус 4)"
        ],
        "building.latitude": [
            "Широта корпуса (например, 55.703102)"
        ],
        "building.longitude": [
            "Долгота корпуса (например, 37.473504)"
        ],
        "building.address": [
            "Почтовый или строительный адрес корпуса"
        ],
        "building.floor_min": [
            "Минимальная этажность корпуса (например, 18)"
        ],
        "building.floor_max": [
            "Максимальная этажность корпуса (например, 22)"
        ],
        "building.built_year": [
            "Год сдачи корпуса по проектной декларации (например, 2026)"
        ],
        "building.ready_quarter": [
            "1, 2, 3 или 4 квартал сдачи"
        ],
        "building.building_state": [
            "built — Сдан в эксплуатацию",
            "unfinished — Строится"
        ],
        "building.building_type": [
            "monolith — Монолитный",
            "brick — Кирпичный",
            "panel — Панельный",
            "monolith-brick — Монолит-кирпич",
            "block — Блочный"
        ],
        "building.ceiling_height": [
            "Высота потолков в метрах (например, 3.20)"
        ],
        "building.parking": [
            "underground — Подземный паркинг",
            "ground — Наземный многоуровневый",
            "open — Открытая стоянка"
        ],
        "building.security": [
            "1 — Охрана и закрытая территория",
            "0 — Нет охраны"
        ],
        "flat.flat_id": [
            "Уникальный ID квартиры в фиде застройщика (например, FLT-49102)"
        ],
        "flat.apartment": [
            "1 — Апартаменты",
            "0 — Квартира"
        ],
        "flat.flat_type": [
            "flat — Квартира",
            "apartment — Апартаменты",
            "studio — Студия",
            "penthouse — Пентхаус"
        ],
        "flat.flat_rooms_count": [
            "1 — 1-комнатная",
            "2 — 2-комнатная",
            "3 — 3-комнатная",
            "4 — 4-комнатная",
            "5 — 5-комнатная и более",
            "studio — Студия",
            "free_layout — Свободная планировка"
        ],
        "flat.price": [
            "Полная стоимость квартиры в рублях (например, 21500000)"
        ],
        "flat.area": [
            "Общая площадь квартиры в м² (например, 68.4)"
        ],
        "flat.living_area": [
            "Жилая площадь в м² (например, 34.2)"
        ],
        "flat.kitchen_area": [
            "Площадь кухни в м² (например, 16.0)"
        ],
        "flat.floor": [
            "Этаж расположения квартиры (например, 14)"
        ],
        "flat.number": [
            "Официальный номер квартиры (например, 192)"
        ],
        "flat.section_number": [
            "Номер подъезда / секции (например, 1)"
        ],
        "flat.decoration": [
            "without — Без отделки",
            "rough — Черновая",
            "pre_finishing — Предчистовая (White box)",
            "fine — Чистовая под ключ",
            "turnkey — Чистовая с меблировкой"
        ],
        "flat.balcony": [
            "balcony — Балкон",
            "loggia — Лоджия",
            "balcony_and_loggia — Балкон и лоджия",
            "two_balconies — Два балкона",
            "two_loggias — Две лоджии",
            "none — Без балкона"
        ],
        "flat.bathroom": [
            "combined — Совмещенный санузел",
            "separate — Раздельный санузел",
            "two_and_more — Два и более санузла"
        ],
        "flat.window_view": [
            "street — Окна на улицу",
            "yard — Окна во двор",
            "street_and_yard — На улицу и во двор (распашонка)"
        ],
        "flat.sale_type": [
            "ddu — Договор долевого участия (214-ФЗ)",
            "dupt — Уступка прав требования",
            "dkp — Договор купли-продажи",
            "invest — Инвестиционный договор"
        ],
        "flat.plan_image": [
            "Прямая ссылка на схему планировки квартиры"
        ]
    },
    "commercial_cian": {
        "Category": [
            "officeSale — Продажа офиса",
            "officeRent — Аренда офиса",
            "freeAppointmentObjectSale — Продажа ПСН (свободного назначения)",
            "freeAppointmentObjectRent — Аренда ПСН",
            "shoppingAreaSale — Продажа торговой площади",
            "shoppingAreaRent — Аренда торговой площади",
            "warehouseSale — Продажа склада",
            "warehouseRent — Аренда склада",
            "industrySale — Продажа производства",
            "industryRent — Аренда производства",
            "businessSale — Продажа готового бизнеса",
            "commercialLandSale — Продажа коммерческой земли",
            "commercialLandRent — Аренда коммерческой земли",
            "buildingSale — Продажа здания целиком",
            "buildingRent — Аренда здания целиком",
            "garageSale — Продажа гаража / машиноместа",
            "garageRent — Аренда гаража / машиноместа"
        ],
        "ExternalId": [
            "Уникальный ID объекта в CRM (например, COMM-88192)"
        ],
        "Description": [
            "Подробное коммерческое описание объекта"
        ],
        "Address": [
            "Полный адрес объекта (например, г. Москва, ул. Арбат, д. 10)"
        ],
        "Phones": [
            "Телефон ответственного брокера в формате +79991234567"
        ],
        "TotalArea": [
            "Общая площадь в м² (например, 145.5)"
        ],
        "BargainTerms.Price": [
            "Стоимость объекта в рублях (например, 25000000)"
        ],
        "FloorNumber": [
            "Номер этажа (например, 3; если цоколь: -1, если подвал: -2)"
        ],
        "Building.FloorsCount": [
            "Количество этажей в здании (например, 12)"
        ],
        "BargainTerms.VatType": [
            "included — НДС включен",
            "usn — УСН (без НДС)",
            "notIncluded — НДС не включен"
        ],
        "BargainTerms.ContractType": [
            "sale — Продажа",
            "leaseAssignment — Переуступка прав аренды",
            "rent — Прямая аренда",
            "sublease — Субаренда"
        ],
        "BargainTerms.PaymentType": [
            "fixed — Фиксированная сумма",
            "percent — Процент от сделки"
        ],
        "BargainTerms.Currency": [
            "rur — Рубль",
            "eur — Евро",
            "usd — Доллар США"
        ],
        "BargainTerms.ClientFee": [
            "Размер комиссии с клиента в % (например, 50)"
        ],
        "BargainTerms.AgentBonus.Value": [
            "Размер бонуса агенту"
        ],
        "BargainTerms.AgentBonus.PaymentType": [
            "fixed — Фиксированный",
            "percent — Процент"
        ],
        "ConditionType": [
            "cosmetic — Косметический ремонт",
            "design — Дизайнерский ремонт",
            "euro — Евроремонт",
            "major — Капитальный ремонт",
            "requires — Требует ремонта",
            "finishing — Чистовая отделка",
            "typical — Типовой ремонт",
            "unpainted — Черновая отделка"
        ],
        "Layout": [
            "cabinet — Кабинетная планировка",
            "corridor — Коридорная система",
            "mixed — Смешанная планировка",
            "openSpace — Open space (открытое пространство)"
        ],
        "InputType": [
            "commonFromStreet — Общий с улицы",
            "commonFromYard — Общий со двора",
            "separateFromStreet — Отдельный с улицы",
            "separateFromYard — Отдельный со двора"
        ],
        "Building.ClassType": [
            "aPlus — Класс A+",
            "a — Класс A",
            "bPlus — Класс B+",
            "b — Класс B",
            "bMinus — Класс B-",
            "cPlus — Класс C+",
            "c — Класс C",
            "cMinus — Класс C-",
            "d — Класс D"
        ],
        "Building.AccessType": [
            "free — Свободный доступ",
            "passSystem — Пропускной режим"
        ],
        "Building.HouseLineType": [
            "first — Первая линия",
            "second — Вторая линия",
            "other — Внутри квартала"
        ],
        "Building.StatusType": [
            "operational — Действующее",
            "project — Проект",
            "underConstruction — Строящееся"
        ],
        "Building.MaterialType": [
            "brick — Кирпичный",
            "monolith — Монолитный",
            "panel — Панельный",
            "wood — Деревянный",
            "metal — Металлоконструкции",
            "foamConcrete — Газобетон"
        ],
        "Building.ExtinguishingSystemType": [
            "alarm — Сигнализация",
            "gas — Газовая",
            "hydrant — Гидрантная",
            "no — Нет",
            "powder — Порошковая",
            "sprinkler — Спринклерная"
        ],
        "Building.ConditioningType": [
            "central — Центральное",
            "local — Местное (сплит-системы)",
            "no — Нет"
        ],
        "Building.VentilationType": [
            "forced — Приточная",
            "natural — Естественная",
            "no — Нет"
        ],
        "Building.HeatingType": [
            "autonomousGas — Автономное газовое",
            "central — Центральное",
            "electric — Электрическое",
            "diesel — Дизельное",
            "solidFuel — Твердотопливное",
            "no — Нет"
        ],
        "Building.Parking.ParkingType": [
            "ground — Наземная",
            "multilevel — Многоуровневая",
            "open — Открытая во дворе",
            "roof — На крыше",
            "underground — Подземный паркинг"
        ],
        "Building.Parking.IsFree": [
            "true — Бесплатная",
            "false — Платная"
        ],
        "Building.Parking.PlacesCount": [
            "Количество машиномест (например, 25)"
        ],
        "Building.Parking.PriceMonthly": [
            "Стоимость парковочного места в месяц (руб)"
        ],
        "Building.Lifts.Type": [
            "passenger — Пассажирские",
            "cargo — Грузовые",
            "cargoAndPassenger — Пассажирские и грузовые"
        ],
        "Building.Lifts.Count": [
            "Количество лифтов (например, 4)"
        ],
        "Building.Lifts.LoadCapacity": [
            "Грузоподъёмность лифтов в кг (например, 1000)"
        ],
        "Building.Name": [
            "Название БЦ / ТЦ (например, БЦ «Сенатор»)"
        ],
        "Building.TotalArea": [
            "Общая площадь всего здания в м² (например, 12500)"
        ],
        "Building.BuiltYear": [
            "Год постройки здания (например, 2021)"
        ],
        "Building.CeilingHeight": [
            "Высота потолков в метрах (например, 3.8)"
        ],
        "Building.PowerGridCapacity": [
            "Электрическая мощность в кВт (например, 200)"
        ],
        "Building.Developer": [
            "Название застройщика / девелопера"
        ],
        "Building.ManagementCompany": [
            "Название управляющей компании"
        ],
        "FloorMaterialTypeType": [
            "asphalt — Асфальт",
            "concrete — Бетон (антипыль)",
            "laminate — Ламинат",
            "linoleum — Линолеум",
            "polymeric — Полимерный пол",
            "reinforcedConcrete — Ж/б плиты",
            "selfLeveling — Наливной пол",
            "tile — Плитка / керамогранит",
            "wood — Дерево"
        ],
        "ColumnGrid": [
            "Сетка колонн в метрах (например, 6x12 или 12x18)"
        ],
        "GatesType": [
            "atZero — На нулевой отметке",
            "dockType — Докового типа",
            "onRamp — На пандусе"
        ],
        "HasSafeCustody": [
            "true — Есть ответственное хранение (3PL)",
            "false — Нет"
        ],
        "IsCustoms": [
            "true — Таможенный пост (СВХ)",
            "false — Нет"
        ],
        "HasTransportServices": [
            "true — Есть транспортные услуги",
            "false — Нет"
        ],
        "PlacementType": [
            "shoppingCenter — В торговом центре",
            "streetRetail — Стрит-ритейл",
            "free — Отдельно стоящее здание",
            "residential — В жилом доме",
            "businessCenter — В бизнес-центре"
        ],
        "HasShopWindows": [
            "true — Есть витринные окна",
            "false — Нет"
        ],
        "ShoppingCenterName": [
            "Название ТРЦ (например, ТРЦ «Авиапарк»)"
        ],
        "ShoppingCenterScale": [
            "district — Районный",
            "microdistrict — Микрорайонный",
            "regional — Региональный",
            "superRegional — Суперрегиональный",
            "specialized — Специализированный"
        ],
        "WorkingDays": [
            "everyday — Ежедневно",
            "workdays — Будние дни",
            "weekends — Выходные"
        ],
        "WorkingHoursFrom": [
            "Время открытия (например, 09:00)"
        ],
        "WorkingHoursTo": [
            "Время закрытия (например, 21:00)"
        ],
        "Specialty.Types": [
            "bank — Банк",
            "cafe — Кафе/Ресторан",
            "beauty — Салон красоты",
            "medical — Медцентр",
            "pharmacy — Аптека",
            "shop — Магазин",
            "autoService — Автосервис",
            "fitness — Фитнес-клуб"
        ],
        "ReadyBusinessType": [
            "auto — Автобизнес",
            "beauty — Салон красоты",
            "catering — Общепит",
            "hotel — Гостиница",
            "production — Производство",
            "retail — Торговля",
            "service — Услуги"
        ],
        "MonthlyIncome.Income": [
            "Месячная прибыль в рублях (например, 350000)"
        ],
        "MonthlyIncome.Currency": [
            "rur — Рубль",
            "eur — Евро",
            "usd — Доллар"
        ],
        "Garage.Type": [
            "box — Бокс",
            "garage — Гараж",
            "parkingPlace — Машиноместо"
        ],
        "Garage.GarageType": [
            "builtIn — Встроенный в здание",
            "capital — Капитальный",
            "metal — Металлический"
        ],
        "Garage.Status": [
            "byProxy — По доверенности",
            "cooperative — Кооператив (ГСК)",
            "ownership — Собственность"
        ],
        "Garage.HasElectricity": [
            "true — Есть электричество",
            "false — Нет"
        ],
        "Garage.HasWater": [
            "true — Есть водопровод",
            "false — Нет"
        ],
        "Garage.HasHeating": [
            "true — Есть отопление",
            "false — Нет"
        ],
        "Garage.HasAutomaticGates": [
            "true — Автоматические ворота",
            "false — Ручные"
        ],
        "Garage.HasEntryByPass": [
            "true — Въезд по пропускам / шлагбаум",
            "false — Свободный"
        ],
        "Garage.HasVideoSurveillance": [
            "true — Видеонаблюдение",
            "false — Нет"
        ],
        "Garage.HasHourSecurity": [
            "true — Круглосуточная охрана (КПП)",
            "false — Нет"
        ],
        "Garage.HasBasement": [
            "true — Есть подвал",
            "false — Нет"
        ],
        "Garage.HasInspectionPit": [
            "true — Есть смотровая яма",
            "false — Нет"
        ],
        "Land.Area": [
            "Площадь участка (например, 15.5)"
        ],
        "Land.AreaUnitType": [
            "sotka — Сотка",
            "hectare — Гектар"
        ],
        "Land.Status": [
            "owned — В собственности",
            "rent — В аренде"
        ],
        "Land.PermittedUseType": [
            "commercial — Коммерческое",
            "industry — Производственное",
            "retail — Торговое",
            "office — Офисно-деловое",
            "recreation — Рекреационное"
        ],
        "Land.DrivewayType": [
            "asphalt — Асфальт",
            "ground — Грунт",
            "concrete — Бетонные плиты",
            "no — Нет"
        ],
        "Land.Electricity": [
            "location — На участке",
            "border — По границе",
            "no — Нет"
        ],
        "Land.Gas": [
            "location — На участке",
            "border — По границе",
            "no — Нет"
        ],
        "Land.Water": [
            "location — На участке",
            "border — По границе",
            "well — Скважина",
            "no — Нет"
        ],
        "Land.Sewerage": [
            "location — На участке",
            "border — По границе",
            "septic — Септик",
            "no — Нет"
        ],
        "Photos.PhotoSchema.FullUrl": [
            "Прямая ссылка на фото (например, https://example.com/photo.jpg)"
        ],
        "Photos.PhotoSchema.IsDefault": [
            "true — Главное фото (обложка)",
            "false — Дополнительное фото"
        ],
        "LayoutPhoto.FullUrl": [
            "Прямая ссылка на планировку (например, https://example.com/plan.jpg)"
        ],
        "LayoutPhoto.IsDefault": [
            "true — Главная планировка",
            "false — Дополнительная"
        ],
        "Videos.VideoSchema.Url": [
            "Ссылка на видео (VK / Rutube)"
        ],
        "ObjectTour.FullUrl": [
            "Ссылка на 3D-тур"
        ],
        "CadastralNumber": [
            "Кадастровый номер: 77:01:0001001:1234"
        ],
        "Coordinates.Lat": [
            "Широта (например, 55.751244)"
        ],
        "Coordinates.Lng": [
            "Долгота (например, 37.618423)"
        ],
        "WaterPipesCount": [
            "Количество мокрых точек (например, 2)"
        ],
        "IsOccupied": [
            "true — Помещение занято арендатором",
            "false — Свободно"
        ],
        "AvailableFrom": [
            "Дата освобождения (например, 2026-09-01)"
        ],
        "IsLegalAddressProvided": [
            "true — Предоставляется юрадрес",
            "false — Нет"
        ],
        "HasFurniture": [
            "true — С мебелью",
            "false — Без мебели"
        ],
        "HasEquipment": [
            "true — С оборудованием",
            "false — Без оборудования"
        ],
        "IsInHiddenBase": [
            "true — В закрытой базе",
            "false — В открытом доступе"
        ],
        "PublishTerms.Terms.PublishTermSchema.PromotionType": [
            "noPromotion — Без продвижения",
            "standard — Стандарт",
            "premium — Премиум",
            "top — Топ"
        ],
        "Auction.Bet": [
            "Ставка аукциона (например, 10, 20, 30)"
        ]
    },
    "commercial_avito": {
        "Category": [
            "Коммерческая недвижимость"
        ],
        "OperationType": [
            "Продам",
            "Сдам"
        ],
        "ObjectType": [
            "Офисное помещение",
            "Торговое помещение",
            "Помещение свободного назначения",
            "Складское помещение",
            "Производственное помещение",
            "Гостиница",
            "Автосервис",
            "Здание",
            "Земельный участок",
            "Кладовая",
            "Гараж / Машиноместо"
        ],
        "Id": [
            "Уникальный ID объекта (например, COMM-10294)"
        ],
        "Description": [
            "Подробное коммерческое описание объекта"
        ],
        "Address": [
            "Полный адрес объекта (например, г. Москва, Пресненская наб., д. 8, стр. 1)"
        ],
        "Price": [
            "Стоимость в рублях (например, 45000000)"
        ],
        "Square": [
            "Общая площадь в м² (например, 240.0)"
        ],
        "Floor": [
            "Номер этажа (например, 4; подвал: -1, цоколь: 0)"
        ],
        "Floors": [
            "Этажность здания (например, 16)"
        ],
        "PropertyRights": [
            "Собственник",
            "Посредник (агентство)",
            "Застройщик (девелопер)"
        ],
        "TransactionType": [
            "Продажа",
            "Прямая аренда",
            "Субаренда",
            "Продажа права аренды"
        ],
        "PriceType": [
            "За всё",
            "За м²",
            "За сотку",
            "За гектар"
        ],
        "PriceWithVAT": [
            "Да — НДС включен в стоимость",
            "Нет — Без НДС (УСН)"
        ],
        "Decoration": [
            "Без отделки",
            "Черновая",
            "Чистовая",
            "Офисная отделка",
            "Требуется косметический ремонт",
            "Требуется капитальный ремонт"
        ],
        "Layout": [
            "Кабинетная",
            "Open space (открытая)",
            "Смешанная",
            "Коридорная",
            "Свободная планировка"
        ],
        "Entrance": [
            "Отдельный с улицы",
            "Отдельный со двора",
            "Общий с улицы",
            "Общий со двора"
        ],
        "BuildingClass": [
            "A+",
            "A",
            "B+",
            "B",
            "C"
        ],
        "BuildingType": [
            "Бизнес-центр",
            "Торговый центр",
            "Жилой дом",
            "Административное здание",
            "Складской комплекс",
            "Производственный комплекс",
            "Отдельно стоящее здание"
        ],
        "ParkingType": [
            "Подземная",
            "Наземная многоуровневая",
            "Открытая во дворе",
            "На крыше",
            "Бесплатная гостевая"
        ],
        "ParkingAdditionally": [
            "Закрытая территория",
            "Шлагбаум",
            "Охрана парковки",
            "Видеонаблюдение"
        ],
        "ParkingSpaces": [
            "Количество машиномест (например, 15)"
        ],
        "PowerGridCapacity": [
            "Электрическая мощность в кВт (например, 100)"
        ],
        "PowerGridAdditionally": [
            "Возможно увеличение мощности",
            "Своя ТП (трансформаторная подстанция)"
        ],
        "Heating": [
            "Центральное",
            "Индивидуальное газовое",
            "Электрическое",
            "Автономное",
            "Нет отопления"
        ],
        "ReadinessStatus": [
            "Построено (введено в эксплуатацию)",
            "Строится"
        ],
        "PlaceIsRented": [
            "Да — Помещение сдано арендатору (ГАБ)",
            "Нет — Помещение свободно"
        ],
        "RenterName": [
            "Название / бренд арендатора (например, «ВкусВилл»)"
        ],
        "RenterMonthPayment": [
            "Ежемесячный арендный платёж (руб)"
        ],
        "RentContractExpireDate": [
            "Дата окончания аренды (например, 2030-12-31)"
        ],
        "PaymentIndexation": [
            "Ежегодная индексация аренды в % (например, 5%)"
        ],
        "PercentOfTrade": [
            "Процент с товарооборота (например, 4%)"
        ],
        "StorageRoomType": [
            "В жилом доме",
            "В отдельном здании",
            "В паркинге",
            "На цокольном этаже"
        ],
        "Volume": [
            "Объем кладовой в м³ (например, 12.5)"
        ],
        "CeilingHeight": [
            "Высота потолков в метрах (например, 3.80)"
        ],
        "Security": [
            "Круглосуточная охрана (КПП)",
            "Видеонаблюдение",
            "Доступ по картам",
            "Нет"
        ],
        "AccessSchedule": [
            "Круглосуточно 24/7",
            "По графику (с 08:00 до 22:00)"
        ],
        "CarAccess": [
            "Прямой подъезд к входу",
            "Подъезд через грузовой лифт",
            "Подъезд во двор"
        ],
        "Lighting": [
            "Есть освещение",
            "Нет"
        ],
        "PowerSockets": [
            "Есть розетки 220V",
            "Нет"
        ],
        "Images": [
            "Ссылки на фото через <Image url=\"...\" />"
        ],
        "VideoURL": [
            "Ссылка на видео (YouTube / Rutube)"
        ],
        "EgrnExtractionLink": [
            "Ссылка на выписку из ЕГРН"
        ],
        "ManagerName": [
            "ФИО менеджера объекта"
        ],
        "ContactPhone": [
            "Телефон в формате +79991234567"
        ],
        "SaleOptions": [
            "Прямая продажа",
            "Возможна ипотека",
            "Аукцион / торги",
            "Рассрочка"
        ],
        "ObjectBooked": [
            "Да — Объект забронирован",
            "Нет — Доступен к покупке"
        ]
    },
    "commercial_yandex": {
        "offer@internal-id": [
            "Уникальный ID офера (например, YNDX-OFF-91)"
        ],
        "type": [
            "продажа",
            "аренда"
        ],
        "category": [
            "коммерческая"
        ],
        "commercial-type": [
            "office — Офис",
            "retail — Торговая площадь",
            "free purpose — ПСН",
            "warehouse — Склад",
            "manufacturing — Производство",
            "public catering — Общепит",
            "auto repair — Автосервис",
            "business — Готовый бизнес",
            "land — Земля",
            "hotel — Гостиница",
            "legal address — Юридический адрес"
        ],
        "commercial-building-type": [
            "business-center — Бизнес-центр",
            "shopping-center — Торговый центр",
            "warehouse — Складской комплекс",
            "residential — В жилом доме",
            "freestanding — Отдельно стоящее здание",
            "industrial — Производственный комплекс"
        ],
        "creation-date": [
            "Дата в формате ISO (например, 2026-08-17T10:00:00+03:00)"
        ],
        "location.address": [
            "Адрес объекта (например, Москва, Дербеневская наб., 7)"
        ],
        "location.latitude": [
            "Широта (например, 55.723145)"
        ],
        "location.longitude": [
            "Долгота (например, 37.649201)"
        ],
        "sales-agent.phone": [
            "Телефон в формате +79991234567"
        ],
        "sales-agent.category": [
            "agency — Агентство",
            "developer — Застройщик",
            "owner — Собственник"
        ],
        "price.value": [
            "Стоимость в рублях (например, 32000000)"
        ],
        "price.currency": [
            "RUB — Рубль",
            "EUR — Евро",
            "USD — Доллар"
        ],
        "price.period": [
            "month — В месяц",
            "day — В день"
        ],
        "deal-status": [
            "direct-rent — Прямая аренда",
            "subrent — Субаренда",
            "sale-of-lease-rights — Переуступка права аренды",
            "primary-sale — Первичная продажа",
            "re-sale — Вторичная продажа"
        ],
        "taxation-form": [
            "NDS — НДС включен",
            "USN — УСН (без НДС)",
            "without-NDS — Без НДС"
        ],
        "area.value": [
            "Общая площадь в м² (например, 185.0)"
        ],
        "floor": [
            "Этаж (например, 3; цоколь: -1)"
        ],
        "floors-total": [
            "Этажность здания (например, 9)"
        ],
        "entrance-type": [
            "separate — Отдельный вход",
            "common — Общий вход"
        ],
        "open-plan": [
            "true — Open space",
            "false — Кабинетная"
        ],
        "renovation": [
            "cosmetic-done — Косметический",
            "designer-renovation — Дизайнерский",
            "euro — Евроремонт",
            "needs-renovation — Требует ремонта",
            "rough-finish — Черновая",
            "fine-finish — Чистовая"
        ],
        "office-class": [
            "A+",
            "A",
            "B+",
            "B",
            "C+",
            "C"
        ],
        "ceiling-height": [
            "Высота потолков в метрах (например, 3.60)"
        ],
        "electric-capacity": [
            "Электрическая мощность в кВт (например, 75)"
        ],
        "water-supply": [
            "true — Водопровод есть",
            "false — Нет"
        ],
        "sewerage-supply": [
            "true — Канализация есть",
            "false — Нет"
        ],
        "heating-supply": [
            "true — Отопление есть",
            "false — Нет"
        ],
        "gas-supply": [
            "true — Газ есть",
            "false — Нет"
        ],
        "air-conditioner": [
            "true — Кондиционирование есть",
            "false — Нет"
        ],
        "ventilation": [
            "true — Приточная вентиляция",
            "false — Естественная / нет"
        ],
        "fire-alarm": [
            "true — Пожарная сигнализация",
            "false — Нет"
        ],
        "twenty-four-seven": [
            "true — Круглосуточный доступ 24/7",
            "false — По часам"
        ],
        "access-control-system": [
            "true — Пропускная система",
            "false — Свободный вход"
        ],
        "guarded-building": [
            "true — Охраняемое здание (ЧОП)",
            "false — Нет"
        ],
        "parking": [
            "true — Есть парковка",
            "false — Нет"
        ],
        "parking-places": [
            "Количество машиномест (например, 20)"
        ],
        "parking-guest": [
            "true — Гостевая парковка",
            "false — Нет"
        ],
        "ramp": [
            "true — Погрузочный пандус",
            "false — Нет"
        ],
        "truck-entrance": [
            "true — Подъезд еврофур",
            "false — Только легковой"
        ],
        "freight-elevator": [
            "true — Грузовой лифт",
            "false — Нет"
        ],
        "railway": [
            "true — Ж/д ветка",
            "false — Нет"
        ],
        "responsible-storage": [
            "true — Ответхранение 3PL",
            "false — Нет"
        ],
        "cadastral-number": [
            "Кадастровый номер: 77:01:0001001:1234"
        ],
        "image": [
            "Прямая ссылка на фото (например, https://example.com/photo.jpg)"
        ]
    }
};

var RAW_EXCEL_DATA = {
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

if (typeof window !== 'undefined') {
    window.PLATFORM_COMMERCIAL_TYPES = PLATFORM_COMMERCIAL_TYPES;
    window.SAMPLE_FILL_EXAMPLES = SAMPLE_FILL_EXAMPLES;
    window.PARAM_OPTIONS_MAP = PARAM_OPTIONS_MAP;
    window.RAW_EXCEL_DATA = RAW_EXCEL_DATA;
}
