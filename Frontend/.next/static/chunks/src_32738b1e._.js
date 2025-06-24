(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/data/scholarships.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "categories": (()=>categories),
    "locations": (()=>locations),
    "scholarships": (()=>scholarships),
    "statuses": (()=>statuses)
});
const scholarships = [
    {
        scholarship_id: '1',
        name: 'Global Excellence Scholarship',
        description: 'Full scholarship for outstanding students pursuing undergraduate studies in any field.',
        amount: 25000,
        no_of_students: 10,
        application_deadline: '2024-08-15',
        start_date: '2024-09-01',
        end_date: '2025-06-30',
        provider_id: 'provider1',
        is_active: true
    },
    {
        scholarship_id: '2',
        name: 'Research Innovation Grant',
        description: 'Grant for innovative research projects in STEM fields.',
        amount: 35000,
        no_of_students: 5,
        application_deadline: '2024-07-01',
        start_date: '2024-09-01',
        end_date: '2025-06-30',
        provider_id: 'provider2',
        is_active: true
    },
    {
        scholarship_id: '3',
        name: 'Merit Scholarship Program',
        description: 'Merit-based scholarship for high-achieving students.',
        amount: 15000,
        no_of_students: 20,
        application_deadline: '2024-06-30',
        start_date: '2024-09-01',
        end_date: '2025-06-30',
        provider_id: 'provider3',
        is_active: false
    },
    {
        scholarship_id: '4',
        name: 'Graduate Studies Fellowship',
        description: 'Fellowship for outstanding graduate students in any discipline.',
        amount: 40000,
        no_of_students: 3,
        application_deadline: '2024-09-15',
        start_date: '2024-10-01',
        end_date: '2025-07-31',
        provider_id: 'provider4',
        is_active: true
    }
];
const categories = [
    {
        value: 'undergraduate',
        label: 'Undergraduate'
    },
    {
        value: 'postgraduate',
        label: 'Postgraduate'
    },
    {
        value: 'research',
        label: 'Research'
    },
    {
        value: 'merit',
        label: 'Merit Based'
    },
    {
        value: 'needs-based',
        label: 'Needs Based'
    }
];
const locations = [
    {
        value: 'worldwide',
        label: 'Worldwide'
    },
    {
        value: 'united-states',
        label: 'United States'
    },
    {
        value: 'europe',
        label: 'Europe'
    },
    {
        value: 'canada',
        label: 'Canada'
    }
];
const statuses = [
    {
        value: 'open',
        label: 'Open'
    },
    {
        value: 'closing-soon',
        label: 'Closing Soon'
    },
    {
        value: 'closed',
        label: 'Closed'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/available-applications/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AvailableApplicationsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$scholarships$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/scholarships.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AvailableApplicationsPage() {
    _s();
    // Only show active scholarships
    const [filteredScholarships, setFilteredScholarships] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$scholarships$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scholarships"].filter({
        "AvailableApplicationsPage.useState": (s)=>s.is_active
    }["AvailableApplicationsPage.useState"]));
    // Placeholder for eligibility criteria (to be implemented)
    // const eligibilityCriteria = ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2",
                        children: "Available Scholarships"
                    }, void 0, false, {
                        fileName: "[project]/src/app/available-applications/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Browse and apply for available scholarship opportunities."
                    }, void 0, false, {
                        fileName: "[project]/src/app/available-applications/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/available-applications/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: filteredScholarships.length > 0 ? filteredScholarships.map((scholarship)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4 bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold",
                                        children: scholarship.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-bold",
                                        children: [
                                            "$",
                                            scholarship.amount.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/available-applications/page.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-2",
                                children: scholarship.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/available-applications/page.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 text-sm mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Deadline: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: new Date(scholarship.application_deadline).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/available-applications/page.tsx",
                                                lineNumber: 34,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Start: ",
                                            new Date(scholarship.start_date).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "End: ",
                                            new Date(scholarship.end_date).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Number of Students: ",
                                            scholarship.no_of_students
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/available-applications/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/available-applications/page.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-3 w-full bg-primary text-white py-2 rounded hover:bg-primary/90",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/available-applications/page.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this)
                        ]
                    }, scholarship.scholarship_id, true, {
                        fileName: "[project]/src/app/available-applications/page.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground",
                        children: "No scholarships found matching your criteria."
                    }, void 0, false, {
                        fileName: "[project]/src/app/available-applications/page.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/available-applications/page.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/available-applications/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/available-applications/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AvailableApplicationsPage, "DwXvwlcTVak74xHje9gXHF3gFh0=");
_c = AvailableApplicationsPage;
var _c;
__turbopack_context__.k.register(_c, "AvailableApplicationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_32738b1e._.js.map