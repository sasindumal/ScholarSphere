module.exports = {

"[project]/src/lib/data/scholarships.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/data/applications.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllApplications": (()=>getAllApplications),
    "getApplicationWithScholarship": (()=>getApplicationWithScholarship),
    "getRecentApplications": (()=>getRecentApplications),
    "statusConfig": (()=>statusConfig),
    "userApplications": (()=>userApplications)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$scholarships$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/scholarships.ts [app-ssr] (ecmascript)");
;
const userApplications = [
    {
        application_id: '1',
        student_id: 'user1',
        scholarship_id: '1',
        submission_date: '2024-03-15T10:00:00Z',
        status: 'under-review',
        reviewer_comments: 'Documents under review by the scholarship committee.',
        review_date: '2024-03-16T14:30:00Z',
        total_points: 85
    },
    {
        application_id: '2',
        student_id: 'user1',
        scholarship_id: '2',
        submission_date: '2024-02-20T09:15:00Z',
        status: 'approved',
        reviewer_comments: 'Congratulations! Your application has been approved.',
        review_date: '2024-03-10T16:45:00Z',
        total_points: 92
    },
    {
        application_id: '3',
        student_id: 'user1',
        scholarship_id: '3',
        submission_date: '2024-01-05T11:30:00Z',
        status: 'rejected',
        reviewer_comments: 'Unfortunately, your application was not selected for this scholarship.',
        review_date: '2024-02-01T13:20:00Z',
        total_points: 60
    },
    {
        application_id: '4',
        student_id: 'user1',
        scholarship_id: '4',
        submission_date: '2024-03-18T08:45:00Z',
        status: 'pending'
    },
    {
        application_id: '5',
        student_id: 'user1',
        scholarship_id: '1',
        submission_date: '',
        status: 'draft'
    }
];
function getApplicationWithScholarship(application) {
    const scholarship = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$scholarships$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scholarships"].find((s)=>s.scholarship_id === application.scholarship_id);
    return {
        ...application,
        scholarship
    };
}
function getRecentApplications(limit = 5) {
    return userApplications.filter((app)=>app.status !== 'draft').sort((a, b)=>new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime()).slice(0, limit).map(getApplicationWithScholarship);
}
function getAllApplications() {
    return userApplications.sort((a, b)=>new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime()).map(getApplicationWithScholarship);
}
const statusConfig = {
    'pending': {
        label: 'Pending',
        color: 'bg-blue-500/10 text-blue-500'
    },
    'under-review': {
        label: 'Under Review',
        color: 'bg-yellow-500/10 text-yellow-500'
    },
    'approved': {
        label: 'Approved',
        color: 'bg-green-500/10 text-green-500'
    },
    'rejected': {
        label: 'Rejected',
        color: 'bg-red-500/10 text-red-500'
    },
    'draft': {
        label: 'Draft',
        color: 'bg-gray-500/10 text-gray-500'
    }
};
}}),
"[project]/src/app/my-applications/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MyApplicationsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$applications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/applications.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function MyApplicationsPage() {
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('date');
    // Get applications and filter out any with missing scholarship data
    const applications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$applications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllApplications"])().filter((app)=>app.scholarship !== undefined);
    const filteredApplications = applications.filter((app)=>statusFilter === 'all' || app.status === statusFilter).sort((a, b)=>{
        if (sortBy === 'date') {
            return new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime();
        }
        // Sort by status priority: draft -> pending -> under-review -> approved -> rejected
        const statusPriority = {
            draft: 0,
            pending: 1,
            'under-review': 2,
            approved: 3,
            rejected: 4
        };
        return statusPriority[a.status] - statusPriority[b.status];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-2",
                        children: "My Applications"
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Track and manage your scholarship applications."
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-applications/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "border rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "draft",
                                        children: "Draft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pending",
                                        children: "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "under-review",
                                        children: "Under Review"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "approved",
                                        children: "Approved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "rejected",
                                        children: "Rejected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                className: "border rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "date",
                                        children: "Sort by Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "status",
                                        children: "Sort by Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Showing ",
                            filteredApplications.length,
                            " applications"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/my-applications/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                children: filteredApplications.length > 0 ? filteredApplications.map((application)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4 bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: application.scholarship?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-1 rounded font-bold {statusConfig[application.status].color}",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$applications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statusConfig"][application.status].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/my-applications/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mb-1",
                                children: [
                                    "Submitted: ",
                                    application.submission_date ? new Date(application.submission_date).toLocaleDateString() : 'Not submitted'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mb-1",
                                children: [
                                    "Total Points: ",
                                    application.total_points ?? '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mb-1",
                                children: [
                                    "Review Date: ",
                                    application.review_date ? new Date(application.review_date).toLocaleDateString() : '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm mb-1",
                                children: [
                                    "Reviewer Comments: ",
                                    application.reviewer_comments ?? '-'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/my-applications/page.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, application.application_id, true, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground",
                        children: "No applications found matching your criteria."
                    }, void 0, false, {
                        fileName: "[project]/src/app/my-applications/page.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/my-applications/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/my-applications/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/my-applications/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_676549a2._.js.map