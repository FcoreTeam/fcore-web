(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/works/works.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "background": "works-module-scss-module__A5RI2q__background",
  "backgroundBlur": "works-module-scss-module__A5RI2q__backgroundBlur",
  "background__dark": "works-module-scss-module__A5RI2q__background__dark",
  "blur": "works-module-scss-module__A5RI2q__blur",
  "blurCircle1": "works-module-scss-module__A5RI2q__blurCircle1",
  "blurCircle2": "works-module-scss-module__A5RI2q__blurCircle2",
  "blurCircle3": "works-module-scss-module__A5RI2q__blurCircle3",
  "colorShift1": "works-module-scss-module__A5RI2q__colorShift1",
  "colorShift3": "works-module-scss-module__A5RI2q__colorShift3",
  "float": "works-module-scss-module__A5RI2q__float",
  "invert": "works-module-scss-module__A5RI2q__invert",
  "promo": "works-module-scss-module__A5RI2q__promo",
  "works": "works-module-scss-module__A5RI2q__works",
  "works__grid": "works-module-scss-module__A5RI2q__works__grid",
  "works__map": "works-module-scss-module__A5RI2q__works__map",
  "works__title": "works-module-scss-module__A5RI2q__works__title",
});
}),
"[project]/src/types/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BriefTypes",
    ()=>BriefTypes,
    "Stack",
    ()=>Stack,
    "Tags",
    ()=>Tags
]);
var Tags = /*#__PURE__*/ function(Tags) {
    Tags["MOBILE"] = "Мобильное приложение";
    Tags["WEBAPP"] = "Веб-приложение";
    Tags["WEB"] = "Веб-сайт";
    Tags["FIN"] = "Финтех";
    Tags["GAME"] = "Игровая платформа";
    Tags["LAND"] = "Одностраничный сайт";
    Tags["GOV"] = "Государство";
    Tags["EVENT"] = "Мероприятие";
    Tags["BRAND"] = "Бренд";
    Tags["DES"] = "Веб-дизайн";
    Tags["ECOM"] = "Интернет-магазин";
    return Tags;
}({});
var Stack = /*#__PURE__*/ function(Stack) {
    Stack["REACT"] = "React";
    Stack["RN"] = "React Native";
    Stack["TypeScript"] = "TypeScript";
    Stack["EXPO"] = "Expo";
    Stack["FIGMA"] = "Figma";
    Stack["GIT"] = "Git";
    Stack["GITHUB"] = "Github";
    Stack["HTML"] = "HTML";
    Stack["CSS"] = "CSS";
    Stack["JS"] = "JavaScript";
    Stack["AXIOS"] = "Axios";
    Stack["SASS"] = "Sass";
    Stack["NEXT"] = "Next JS";
    Stack["Django"] = "Django";
    Stack["SQL"] = "PostgreSQL";
    return Stack;
}({});
var BriefTypes = /*#__PURE__*/ function(BriefTypes) {
    BriefTypes[BriefTypes["CONTACTS"] = 1] = "CONTACTS";
    BriefTypes[BriefTypes["PROJECT"] = 2] = "PROJECT";
    BriefTypes[BriefTypes["AGREEMENTS"] = 3] = "AGREEMENTS";
    return BriefTypes;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/works/work/works.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "works",
    ()=>works
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
;
const works = [
    {
        name: "Ecobit",
        image: "/ecobit.png",
        description: "Экосистема для криптоинвесторов, с геймификацией токена. Крупный финтех сервис имеет личный кабинет, информацию о токенах, поддерживает чаты и транзакциями между пользователями. Используются современнейшие алгоритмы защиты",
        domain: "www.rustore.ru/catalog/app/com.fcore.ecobit",
        stack: [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].EXPO,
                image: "/expo.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].SQL,
                image: "/postgres.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].Django,
                image: "/django.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].FIGMA,
                image: "/figma.png"
            }
        ],
        screenshots: [],
        video: [],
        id: 1,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].MOBILE,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].FIN
        ],
        designed: "Задизайнено и разработано в Фкор",
        image1: "/post_three.png",
        image2: "/ecobit1.png",
        name1: "месяца работ",
        stat1: "3",
        stat2: "RSA",
        stat3: "5.0",
        stat4: ">50",
        name4: "токенов",
        name3: "оценка клиента",
        name2: "надежная защита",
        first_desc: "Клиент поставил перед нами амбициозную задачу:  <span>разработать не просто личный кабинет, а единую социально-финансовую экосистему</span> для криптоинвесторов нового поколения. Продукт должен стать цифровым хабом, где управление активами, анализ рынка и взаимодействие комьюнити объединены в захватывающий опыт с элементами геймификации.\n<br><br> \nОсновной бизнес-целью было увеличение времени удержания пользователя (retention) на 40% и повышение частоты совершаемых транзакций за счёт вовлекающих механик и бесшовного пользовательского пути.\n<span>Маркетинговой</span> — формирование позиции флагмана в нише «социального трейдинга», создание продукта, который станет предметом обсуждения и точкой притяжения для крипто-аудитории.\n<span>Пользовательской</span> — создание интуитивно понятной и многомерной среды, где новичок чувствует поддержку и простоту, а опытный инвестор получает мощные инструменты для анализа, общения и быстрых операций.\n<br><br>\nИменно этот вызов — построить не интерфейс, а целую цифровую экономику с собственной динамикой — <span>мы и приняли.</span>",
        second_desc: "Проект начался с исследования: мы проанализировали аудиторию и механику геймификации, чтобы заложить основу для будущей экосистемы. Результатом стал детальный план, утверждённый с клиентом.\n<br><br>\nОсновной этап включал проектирование пользовательских потоков, где финансовая аналитика и транзакции органично сочетались с элементами игры. Мы уделили особое внимание интерфейсной безопасности, чтобы сложные операции были защищены и интуитивно понятны.\n<br><br>\nВ результате мы создали готовый к разработке дизайн-комплект: адаптивные макеты, интерактивные прототипы и полную дизайн-систему, которые позволяют реализовать безопасную и вовлекающую крипто-экосистему."
    },
    {
        name: "KingPay",
        image: "/kingpay.png",
        description: "Интернет эквайринг для приема и обработки платежей. Реализованное решение поддерживает следующие методы оплаты: СБП, Карта, Электронные кошельки, Мобильная коммерция. Используются, современные методы защиты информации",
        domain: "kingpay.space",
        stack: [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].NEXT,
                image: "/next.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].SQL,
                image: "/postgres.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].Django,
                image: "/django.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].FIGMA,
                image: "/figma.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].REACT,
                image: "/react.png"
            }
        ],
        screenshots: [
            "/kingpay/first.png",
            "/kingpay/second.png",
            "/kingpay/third.png"
        ],
        video: [],
        id: 2,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].FIN
        ],
        stat1: "4",
        name1: "месяца работ",
        stat2: ">1000",
        name2: "довольных юзеров",
        stat3: "5.0",
        name3: "оценка клиента",
        stat4: "200k+",
        name4: "платежей",
        first_desc: "Клиент пришел с задачей: разработать с нуля <span>Современный, безопасный и клиентоориентированный сайт</span> — это основной инструмент для привлечения, конвертации и удержания мерчантов в высококонкурентной нише fintech. <br/><br/>Основной бизнес-целью было увеличение конверсии в заявку на 25%.<br/> Маркетинговой — усиление позиционирования как безопасного и современного решения. <br>Пользовательской — создание ясного пути для разных типов клиентов. И<span> Именно Фкор<span/> взялась за реализацию этой идеи!",
        second_desc: "С первых дней, наше агентство начало прорабатывать всю документацию будущего проекта, от и до. После утверждения технического задания, мы незамедлительно приступили к разработке макета и созднию серверной части,  <span>используя самые современные технологии </span> <br><br> Важнейшей частью работы являлась безопасность, важно, чтобы проект имел <span> максимальные стандарты безопасности </span>, а пользователи не теряли свои деньги в резульатате хакерских атак. Мы использовали различные алгоритмы защиты на проекте: PCI DSS, HTTPS, UUID-V4, SecretKeys. <br><br> В конце разработки <span>клиент был макисмально доволен преоктом</span>, наше агентство завершило работу над платежной системой с опережением срока и успешно запустило её!",
        image1: "/lk_kingpay.png",
        image2: "/lk_kingpay2.png",
        video_src: "https://disk.yandex.ru/d/FjFt6P7lmmrJZw",
        image_src: "https://disk.yandex.ru/d/OXEJ5jCcPAnY4g",
        designed: "Задизайнено и разработано в Фкор"
    },
    {
        name: "LiteStore",
        image: "/litestore.png",
        description: "Веб-дизайн интернет-магазина для презентации товаров и стимулирования покупок. Реализованное решение поддерживает: Галереи товаров, видеообзоры, отзывы покупателей и блок сопутствующих товаров. Используется визуальная иерархия, направляющая внимание клиента.",
        domain: "это дизайн",
        stack: [],
        screenshots: [],
        video: [],
        stat1: "1.5",
        name1: "месяца работ",
        id: 3,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].DES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].ECOM
        ],
        name2: "оценка клиента",
        stat2: "5.0",
        stat3: ">500",
        name3: "товаров на сайте",
        first_desc: "Клиент пришел с задачей: разработать с нуля <span> современный, технологичный и конверсионный</span>  интернет-магазин — это основной инструмент для привлечения, конвертации и удержания покупателей в высококонкурентной нише электроники. <br><br>\n\nМы сфокусировались на трёх ключевых уровнях:\n<br>\n<span>Бизнес-результат:</span>  Повысить финансовую эффективность сайта. Наша цель — сократить путь от «понравилось» до «куплено», что прямо ведёт к увеличению конверсии в завершённый заказ.\n<br><span>Рыночная позиция:</span> Сформировать репутацию навигатора в мире технологий. Мы стремились к тому, чтобы магазин воспринимался не как безликий каталог, а как авторитетный проводник, который помогает сделать осознанный выбор.\n<br><span>Опыт клиента:</span> Построить адаптивную логику взаимодействия. Сайт должен одинаково эффективно работать для спешащего клиента, который ищет по коду модели, и для вдумчивого исследователя, сравнивающего десятки характеристик.",
        image1: "/lite1.png",
        image2: "/lite2.png",
        second_desc: "С первых дней мы погрузились не в код, а в логику выбора и поведения покупателя техники. Наша работа стартовала с стратегического анализа — <span>мы изучили рынок, конкурентов </span> и главное: сценарии принятия решений нашей аудитории. Этот фундамент лег в основу детального креативного и технического брифа, который стал нашей дорожной картой.\n<br>\n<br>\nОсновной этап был посвящен проектированию пользовательского опыта (UX).<span> Мы выстроили интуитивную архитектуру сайта</span>, где каждый шаг — от попадания на главную до подтверждения заказа — вел к покупке. Особое внимание уделили информационному дизайну: сложные характеристики техники были представлены наглядно и понятно, а фильтры и сравнение стали мощными инструментами помощи в выборе.\n<br>\n<br>\nКульминацией стала визуализация (UI) и прототипирование. <span>Мы создали современный, технологичный и чистый визуальный язык</span>, который усиливает позиционирование бренда как эксперта. Интерактивные прототипы позволили «пощупать» будущий магазин, провести юзабилити-тесты и отточить каждый интерфейсный элемент до совершенства.\n<br>\n<br>\nВ финале мы передали клиенту не просто набор картинок, а полноценный дизайн-комплект — готовый к передаче в разработку, продуманный до мелочей и гарантирующий достижение поставленных бизнес-целей.",
        name4: "регистраций",
        stat4: "50000+",
        designed: "Задизайнено в Фкор",
        image_src: "https://www.behance.net/gallery/240137207/LiteStore-internet-magazin/modules/1383168789"
    },
    {
        name: "StonTactics",
        image: "/stontactics.png",
        description: "Интерактивная доска — созданная для построения стратегий в шутере. Доска поддерживает режим рисования, перемещения элементов, а также сохранение стратегий в личном кабинете. Имеется возможность авторизоваться через VK.",
        domain: "stontactics.ru",
        stack: [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].FIGMA,
                image: "/figma.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].REACT,
                image: "/react.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"].Django,
                image: "/django.png"
            }
        ],
        stat1: "5",
        name1: "месяцев работ",
        stat2: "4.7",
        name2: "оценка клиента",
        stat3: ">3000",
        name3: "довольных юзеров",
        name4: "года на рынке",
        stat4: "2",
        screenshots: [],
        designed: "Разработано в Фкор",
        video: [],
        id: 4,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].GAME
        ]
    },
    {
        name: "CityHome",
        image: "/cityhome.png",
        description: "",
        domain: "это дизайн",
        stack: [],
        screenshots: [],
        video: [],
        id: 5,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].DES
        ]
    },
    {
        name: "Najd",
        image: "/parfume.png",
        description: "",
        domain: "mylabparfume.com",
        stack: [],
        screenshots: [],
        video: [],
        id: 6,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].BRAND
        ]
    },
    {
        name: "PicLoad",
        image: "/picload.png",
        description: "",
        domain: "@picload_bot",
        stack: [],
        screenshots: [],
        video: [],
        id: 7,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].BRAND
        ]
    },
    {
        name: "Тройка групп",
        image: "/troika.png",
        description: "",
        domain: "troikagroup.pro",
        stack: [],
        screenshots: [],
        video: [],
        id: 8,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].FIN
        ]
    },
    {
        name: "Игра Золтана",
        image: "/zoltansgame.png",
        description: "",
        domain: "igrazoltana.ru",
        stack: [],
        screenshots: [],
        video: [],
        id: 9,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].GAME
        ]
    },
    {
        name: "Бал Кекина",
        image: "/kekin.png",
        description: "",
        domain: "bal-kekina.ru",
        stack: [],
        screenshots: [],
        video: [],
        id: 10,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].EVENT
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/works/work/work.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "work-module-scss-module__hf9odq__app",
  "overlay": "work-module-scss-module__hf9odq__overlay",
  "overlay__title": "work-module-scss-module__hf9odq__overlay__title",
  "rustore": "work-module-scss-module__hf9odq__rustore",
  "tag": "work-module-scss-module__hf9odq__tag",
  "work": "work-module-scss-module__hf9odq__work",
  "work__domain": "work-module-scss-module__hf9odq__work__domain",
  "work__footer": "work-module-scss-module__hf9odq__work__footer",
  "work__image": "work-module-scss-module__hf9odq__work__image",
  "work__name": "work-module-scss-module__hf9odq__work__name",
  "work__tags": "work-module-scss-module__hf9odq__work__tags",
});
}),
"[project]/src/components/works/work/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/works/work/work.module.scss [app-client] (css module)");
"use client";
;
;
;
;
;
;
const Work = (param)=>{
    let { name, image, tags, domain, id } = param;
    const isApp = tags.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].MOBILE);
    const handleDomainClick = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        window.open("https://" + domain);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/cases/".concat(id),
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: domain,
                onClick: handleDomainClick,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work__domain, isApp && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].app),
                children: [
                    isApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/rustore.svg",
                        height: 120,
                        width: 60,
                        alt: "rustore",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rustore
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/work/Work.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isApp && domain
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/works/work/Work.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: name,
                width: 1920,
                height: 1080,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work__image
            }, void 0, false, {
                fileName: "[project]/src/components/works/work/Work.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work__footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work__name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/work/Work.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work__tags,
                        children: tags.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                children: item
                            }, index, false, {
                                fileName: "[project]/src/components/works/work/Work.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/work/Work.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/works/work/Work.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/works/work/Work.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Work;
const __TURBOPACK__default__export__ = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/works/Works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/works/works.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/works.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$Work$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/Work.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStartWeb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const fadeIn = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};
const backgroundAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};
const Works = ()=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStartWeb"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].works, theme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].background : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].background__dark),
        children: [
            theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundBlur,
                initial: "hidden",
                whileInView: "visible",
                variants: backgroundAnimation
            }, void 0, false, {
                fileName: "[project]/src/components/works/Works.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].works__map,
                initial: "hidden",
                whileInView: "visible",
                variants: fadeIn,
                transition: {
                    delay: 0.2
                },
                children: [
                    ">",
                    " Главная / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "лучшие кейсы"
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/Works.tsx",
                        lineNumber: 64,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/works/Works.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].works__title,
                initial: "hidden",
                whileInView: "visible",
                variants: fadeIn,
                transition: {
                    delay: 0.3
                },
                children: [
                    "#Кейсы —",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: theme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invert : "",
                        children: "которым"
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/Works.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    "доверяют"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/works/Works.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].works__grid,
                initial: "hidden",
                whileInView: "visible",
                variants: staggerContainer,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["works"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$Work$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...item
                    }, index, false, {
                        fileName: "[project]/src/components/works/Works.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/works/Works.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/works/Works.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Works, "QMVIWtSg/ItG5yaEVoQFElGYkTs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStartWeb"]
    ];
});
_c = Works;
const __TURBOPACK__default__export__ = Works;
var _c;
__turbopack_context__.k.register(_c, "Works");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_015d071a._.js.map