module.exports = [
"[project]/.next-internal/server/app/cases/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/types/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/works/work/works.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "works",
    ()=>works
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/types.ts [app-rsc] (ecmascript)");
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].MOBILE,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].FIN
        ]
    },
    {
        name: "KingPay",
        image: "/kingpay.png",
        description: "Интернет эквайринг для приема и обработки платежей. Реализованное решение поддерживает следующие методы оплаты: СБП, Карта, Электронные кошельки, Мобильная коммерция. Используются, современные методы защиты информации",
        domain: "kingpay.space",
        stack: [
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"].NEXT,
                image: "/next.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"].SQL,
                image: "/postgres.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"].Django,
                image: "/django.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"].FIGMA,
                image: "/figma.png"
            },
            {
                name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stack"].REACT,
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].FIN
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].DES,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].ECOM
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].GAME
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].DES
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].BRAND
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].LAND,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].BRAND
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].FIN
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].GAME
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].EVENT
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
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].WEBAPP,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tags"].GOV
        ]
    }
];
}),
"[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/cases/[id]/workPageClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/cases/[id]/workPageClient.tsx <module evaluation>", "default");
}),
"[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/cases/[id]/workPageClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/cases/[id]/workPageClient.tsx", "default");
}),
"[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cases$2f5b$id$5d2f$workPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cases$2f5b$id$5d2f$workPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cases$2f5b$id$5d2f$workPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/cases/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/cases/[id]/page.tsx
__turbopack_context__.s([
    "default",
    ()=>CasePage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/works/work/works.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cases$2f5b$id$5d2f$workPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cases/[id]/workPageClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["works"].map((work)=>({
            id: work.id.toString()
        }));
}
async function CasePage({ params }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$works$2f$work$2f$works$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["works"].find((work)=>work.id.toString() === id);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cases$2f5b$id$5d2f$workPageClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        id: id
    }, void 0, false, {
        fileName: "[project]/src/app/cases/[id]/page.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/cases/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/cases/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f69fb9ca._.js.map