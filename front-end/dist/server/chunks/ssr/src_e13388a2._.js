module.exports = [
"[project]/src/types/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/works/work/works.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "works",
    ()=>works
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-ssr] (ecmascript)");
;
const works = [
    {
        name: "Ecobit",
        image: "/ecobit.png",
        description: "",
        domain: "www.rustore.ru/catalog/app/com.fcore.ecobit",
        stack: [],
        screenshots: [],
        video: [],
        id: 1,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].MOBILE,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].FIN
        ]
    },
    {
        name: "KingPay",
        image: "/kingpay.png",
        description: "Интернет эквайринг для приема и обработки платежей. Реализованное решение поддерживает следующие методы оплаты: СБП, Карта, Электронные кошельки, Мобильная коммерция. Используются, современные методы защиты информации",
        domain: "kingpay.space",
        stack: [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"].NEXT,
                image: "/next.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"].SQL,
                image: "/postgres.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"].Django,
                image: "/django.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"].FIGMA,
                image: "/figma.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"].REACT,
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].FIN
        ],
        stat1: "4",
        name1: "месяца работ",
        stat2: ">1000",
        name2: "довольных юзеров",
        stat3: "5.0",
        name3: "оценка клиента",
        stat4: "200k+",
        name4: "платежей",
        first_desc: `Клиент пришел с задачей: разработать с нуля <span>Современный, безопасный и клиентоориентированный сайт</span> — это основной инструмент для привлечения, конвертации и удержания мерчантов в высококонкурентной нише fintech. <br/><br/>Основной бизнес-целью было увеличение конверсии в заявку на 25%.<br/> Маркетинговой — усиление позиционирования как безопасного и современного решения. <br>Пользовательской — создание ясного пути для разных типов клиентов. И<span> Именно Фкор<span/> взялась за реализацию этой идеи!`,
        second_desc: `С первых дней, наше агентство начало прорабатывать всю документацию будущего проекта, от и до. После утверждения технического задания, мы незамедлительно приступили к разработке макета и созднию серверной части,  <span>используя самые современные технологии </span> <br><br> Важнейшей частью работы являлась безопасность, важно, чтобы проект имел <span> максимальные стандарты безопасности </span>, а пользователи не теряли свои деньги в резульатате хакерских атак. Мы использовали различные алгоритмы защиты на проекте: PCI DSS, HTTPS, UUID-V4, SecretKeys. <br><br> В конце разработки <span>клиент был макисмально доволен преоктом</span>, наше агентство завершило работу над платежной системой с опережением срока и успешно запустило её!`,
        image1: "/lk_kingpay.png",
        image2: "/lk_kingpay2.png"
    },
    {
        name: "LiteStore",
        image: "/litestore.png",
        description: "",
        domain: "это дизайн",
        stack: [],
        screenshots: [],
        video: [],
        id: 3,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].DES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].ECOM
        ]
    },
    {
        name: "StonTactics",
        image: "/stontactics.png",
        description: "",
        domain: "stontactics.ru",
        stack: [],
        screenshots: [],
        video: [],
        id: 4,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].GAME
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].DES
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].BRAND
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].BRAND
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].FIN
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].GAME
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].EVENT
        ]
    },
    {
        name: "Судэкспертиза Беларусь",
        image: "/sudmed.png",
        description: "",
        domain: "Недоступно",
        stack: [],
        screenshots: [],
        video: [],
        id: 11,
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].GOV
        ]
    }
];
}),
"[project]/src/components/works/work-page/work-page.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "background": "work-page-module-scss-module__-rIFrq__background",
  "bg__dark": "work-page-module-scss-module__-rIFrq__bg__dark",
  "designed": "work-page-module-scss-module__-rIFrq__designed",
  "second__btn": "work-page-module-scss-module__-rIFrq__second__btn",
  "stats": "work-page-module-scss-module__-rIFrq__stats",
  "stats__name": "work-page-module-scss-module__-rIFrq__stats__name",
  "stats__number": "work-page-module-scss-module__-rIFrq__stats__number",
  "stats__wrap": "work-page-module-scss-module__-rIFrq__stats__wrap",
  "text__description": "work-page-module-scss-module__-rIFrq__text__description",
  "text__image": "work-page-module-scss-module__-rIFrq__text__image",
  "text__wrap": "work-page-module-scss-module__-rIFrq__text__wrap",
  "type": "work-page-module-scss-module__-rIFrq__type",
  "type__image": "work-page-module-scss-module__-rIFrq__type__image",
  "work": "work-page-module-scss-module__-rIFrq__work",
  "work__btn": "work-page-module-scss-module__-rIFrq__work__btn",
  "work__btn__wrap": "work-page-module-scss-module__-rIFrq__work__btn__wrap",
  "work__description": "work-page-module-scss-module__-rIFrq__work__description",
  "work__header": "work-page-module-scss-module__-rIFrq__work__header",
  "work__image": "work-page-module-scss-module__-rIFrq__work__image",
  "work__info": "work-page-module-scss-module__-rIFrq__work__info",
  "work__name": "work-page-module-scss-module__-rIFrq__work__name",
  "work__page": "work-page-module-scss-module__-rIFrq__work__page",
  "work__types": "work-page-module-scss-module__-rIFrq__work__types",
});
}),
"[project]/src/components/works/work-page/Work-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/works.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/works/work-page/work-page.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStartWeb.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const WorkPage = ({ id })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStartWeb"])();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const foundProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["works"].find((item)=>item.id === id);
        if (foundProject) {
            setProject(foundProject);
        }
    }, [
        id
    ]);
    let isApp;
    if (project) {
        isApp = project.tags.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].MOBILE);
    }
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Проект не найден"
        }, void 0, false, {
            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
            lineNumber: 32,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__page, theme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].background : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg__dark),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: project.image,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__image,
                            height: 720,
                            width: 1280,
                            alt: "image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__info,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__name,
                                    children: `Да, это — ${project.name}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__description,
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__types,
                                    children: project.stack.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].type,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: item.image,
                                                    alt: "",
                                                    width: 30,
                                                    height: 30,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].type__image
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.name
                                            ]
                                        }, item.name, true, {
                                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].designed,
                                    children: [
                                        "//",
                                        " Разработано и задизайнено в Фкор"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Статистика проекта"
                }, void 0, false, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__wrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__number,
                                    children: project.stat1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__name,
                                    children: project.name1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__wrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__number,
                                    children: project.stat2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__name,
                                    children: project.name2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__wrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__number,
                                    children: project.stat3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__name,
                                    children: project.name3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__wrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__number,
                                    children: project.stat4
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats__name,
                                    children: project.name4
                                }, void 0, false, {
                                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Цели проекта"
                }, void 0, false, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__wrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__description,
                            dangerouslySetInnerHTML: {
                                __html: project.first_desc
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__image,
                            src: project.image1,
                            alt: "image",
                            height: 720,
                            width: 1280
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Этапы работы"
                }, void 0, false, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__wrap,
                    style: {
                        flexDirection: "row-reverse"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__description,
                            style: {
                                textAlign: "end",
                                paddingLeft: 30,
                                paddingRight: 0
                            },
                            dangerouslySetInnerHTML: {
                                __html: project.second_desc
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text__image,
                            src: project.image2,
                            alt: "image",
                            height: 720,
                            width: 1280
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Дополнительная информация"
                }, void 0, false, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__btn__wrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://disk.yandex.ru/d/FjFt6P7lmmrJZw",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__btn,
                            children: "Видео работы"
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://disk.yandex.ru/d/FjFt6P7lmmrJZw",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__btn,
                            children: "Фото работ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: project.domain.startsWith("http") ? project.domain : `https://${project.domain}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__btn, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$work$2d$page$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].second__btn),
                            children: project.domain
                        }, void 0, false, {
                            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/works/work-page/Work-page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/works/work-page/Work-page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/works/work-page/Work-page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WorkPage;
}),
"[project]/src/app/cases/[id]/workPageClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/cases/[id]/WorkPageClient.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/works.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$Work$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work-page/Work-page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const WorkPageClient = ({ id })=>{
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Преобразуем ID в число, если в works используются числовые ID
        const numericId = Number(id);
        const foundProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["works"].find((item)=>item.id === numericId);
        if (foundProject) {
            setProject(foundProject);
        }
    }, [
        id
    ]);
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Загрузка..."
        }, void 0, false, {
            fileName: "[project]/src/app/cases/[id]/workPageClient.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2d$page$2f$Work$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...project
    }, void 0, false, {
        fileName: "[project]/src/app/cases/[id]/workPageClient.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WorkPageClient;
}),
];

//# sourceMappingURL=src_e13388a2._.js.map