module.exports = [
"[project]/src/components/works/works.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/works/work/work.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/works/work/Work.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/works/work/work.module.scss [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
const Work = ({ name, image, tags, domain, id })=>{
    const isApp = tags.includes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].MOBILE);
    const handleDomainClick = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        window.open("https://" + domain);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/cases/${id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: domain,
                onClick: handleDomainClick,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__domain, isApp && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].app),
                children: [
                    isApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/rustore.svg",
                        height: 120,
                        width: 60,
                        alt: "rustore",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rustore
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: name,
                width: 1920,
                height: 1080,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__image
            }, void 0, false, {
                fileName: "[project]/src/components/works/work/Work.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__name,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/works/work/Work.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].work__tags,
                        children: tags.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$work$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
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
const __TURBOPACK__default__export__ = Work;
}),
"[project]/src/components/works/Works.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/works/works.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/works.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/Work.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStartWeb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
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
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStartWeb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStartWeb"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].works, theme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].background : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].background__dark),
        children: [
            theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backgroundBlur,
                initial: "hidden",
                whileInView: "visible",
                variants: backgroundAnimation
            }, void 0, false, {
                fileName: "[project]/src/components/works/Works.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].works__map,
                initial: "hidden",
                whileInView: "visible",
                variants: fadeIn,
                transition: {
                    delay: 0.2
                },
                children: [
                    ">",
                    " Главная / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].works__title,
                initial: "hidden",
                whileInView: "visible",
                variants: fadeIn,
                transition: {
                    delay: 0.3
                },
                children: [
                    "#Кейсы —",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: theme === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].invert : "",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$works$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].works__grid,
                initial: "hidden",
                whileInView: "visible",
                variants: staggerContainer,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["works"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$Work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = Works;
}),
];

//# sourceMappingURL=src_1cae9b47._.js.map