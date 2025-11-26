module.exports = [
"[project]/components/StatsCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "StatsCard-module__PjJ0xW__active",
  "blue": "StatsCard-module__PjJ0xW__blue",
  "card": "StatsCard-module__PjJ0xW__card",
  "clickable": "StatsCard-module__PjJ0xW__clickable",
  "content": "StatsCard-module__PjJ0xW__content",
  "cyan": "StatsCard-module__PjJ0xW__cyan",
  "green": "StatsCard-module__PjJ0xW__green",
  "icon": "StatsCard-module__PjJ0xW__icon",
  "label": "StatsCard-module__PjJ0xW__label",
  "orange": "StatsCard-module__PjJ0xW__orange",
  "purple": "StatsCard-module__PjJ0xW__purple",
  "red": "StatsCard-module__PjJ0xW__red",
  "value": "StatsCard-module__PjJ0xW__value",
  "yellow": "StatsCard-module__PjJ0xW__yellow",
});
}),
"[project]/components/StatsCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/StatsCard.module.css [app-ssr] (css module)");
;
;
function StatsCard({ label, value, icon, color = 'blue', onClick, isActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][color]} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''} ${onClick ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].clickable : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/StatsCard.js",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].value,
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/StatsCard.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StatsCard.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/StatsCard.js",
                lineNumber: 13,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StatsCard.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/SearchBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "searchContainer": "SearchBar-module__4gEqOG__searchContainer",
  "searchIcon": "SearchBar-module__4gEqOG__searchIcon",
  "searchInput": "SearchBar-module__4gEqOG__searchInput",
});
}),
"[project]/components/SearchBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SearchBar.module.css [app-ssr] (css module)");
'use client';
;
;
;
function SearchBar({ onSearch, placeholder = 'Search...' }) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>{
        const newValue = e.target.value;
        setValue(newValue);
        onSearch(newValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: handleChange,
                placeholder: placeholder,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
            }, void 0, false, {
                fileName: "[project]/components/SearchBar.js",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchIcon,
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SearchBar.js",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SearchBar.js",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchBar.js",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/DataTable.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "DataTable-module__K4GEfq__badge",
  "badgeBlue": "DataTable-module__K4GEfq__badgeBlue",
  "badgeDanger": "DataTable-module__K4GEfq__badgeDanger",
  "badgeDefault": "DataTable-module__K4GEfq__badgeDefault",
  "badgeSuccess": "DataTable-module__K4GEfq__badgeSuccess",
  "badgeWarning": "DataTable-module__K4GEfq__badgeWarning",
  "headerContent": "DataTable-module__K4GEfq__headerContent",
  "sortIcon": "DataTable-module__K4GEfq__sortIcon",
  "sortable": "DataTable-module__K4GEfq__sortable",
  "table": "DataTable-module__K4GEfq__table",
  "tableWrapper": "DataTable-module__K4GEfq__tableWrapper",
});
}),
"[project]/components/DataTable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/DataTable.module.css [app-ssr] (css module)");
'use client';
;
;
;
function DataTable({ headers, rows }) {
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        key: null,
        direction: 'asc'
    });
    const handleSort = (index)=>{
        let direction = 'asc';
        if (sortConfig.key === index && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({
            key: index,
            direction
        });
    };
    const sortedRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (sortConfig.key === null) return rows;
        return [
            ...rows
        ].sort((a, b)=>{
            const aVal = a[sortConfig.key] || '';
            const bVal = b[sortConfig.key] || '';
            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [
        rows,
        sortConfig
    ]);
    const getStatusBadge = (status)=>{
        if (!status) return null;
        const statusLower = status.toLowerCase();
        let className = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge;
        if (statusLower.includes('in person')) {
            className += ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeBlue;
        } else if (statusLower.includes('not submitted') || statusLower.includes('not paid') || statusLower.includes('no') || statusLower.includes('not participating')) {
            className += ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeDanger;
        } else if (statusLower.includes('pending')) {
            className += ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeWarning;
        } else if (statusLower.includes('approved') || statusLower.includes('confirmed') || statusLower.includes('paid') || statusLower.includes('completed') || statusLower.includes('collected') || statusLower.includes('yes') || statusLower.includes('participating') || statusLower.includes('issued')) {
            className += ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeSuccess;
        } else {
            className += ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeDefault;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: status
        }, void 0, false, {
            fileName: "[project]/components/DataTable.js",
            lineNumber: 48,
            columnNumber: 16
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].table,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((header, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                onClick: ()=>handleSort(index),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sortable,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerContent,
                                    children: [
                                        header,
                                        sortConfig.key === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sortIcon,
                                            children: sortConfig.direction === 'asc' ? '↑' : '↓'
                                        }, void 0, false, {
                                            fileName: "[project]/components/DataTable.js",
                                            lineNumber: 61,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DataTable.js",
                                    lineNumber: 58,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/DataTable.js",
                                lineNumber: 57,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DataTable.js",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/DataTable.js",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: sortedRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: row.map((cell, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: cellIndex > 2 ? getStatusBadge(cell) || cell : cell
                                }, cellIndex, false, {
                                    fileName: "[project]/components/DataTable.js",
                                    lineNumber: 74,
                                    columnNumber: 33
                                }, this))
                        }, rowIndex, false, {
                            fileName: "[project]/components/DataTable.js",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/DataTable.js",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DataTable.js",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DataTable.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/DashboardClient.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "DashboardClient-module__MP3H1a__actions",
  "chartContainer": "DashboardClient-module__MP3H1a__chartContainer",
  "chartSection": "DashboardClient-module__MP3H1a__chartSection",
  "chartTitle": "DashboardClient-module__MP3H1a__chartTitle",
  "chartsGrid": "DashboardClient-module__MP3H1a__chartsGrid",
  "exportBtn": "DashboardClient-module__MP3H1a__exportBtn",
  "filterBadge": "DashboardClient-module__MP3H1a__filterBadge",
  "quickStatsContainer": "DashboardClient-module__MP3H1a__quickStatsContainer",
  "quickStatsGrid": "DashboardClient-module__MP3H1a__quickStatsGrid",
  "resultCount": "DashboardClient-module__MP3H1a__resultCount",
  "searchSection": "DashboardClient-module__MP3H1a__searchSection",
  "statCard": "DashboardClient-module__MP3H1a__statCard",
  "statLabel": "DashboardClient-module__MP3H1a__statLabel",
  "statRow": "DashboardClient-module__MP3H1a__statRow",
  "statValue": "DashboardClient-module__MP3H1a__statValue",
  "statsGrid": "DashboardClient-module__MP3H1a__statsGrid",
  "statsInfo": "DashboardClient-module__MP3H1a__statsInfo",
});
}),
"[project]/app/DashboardClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatsCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DataTable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/DashboardClient.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function DashboardClient({ headers: initialHeaders, rows: initialRows, stats: initialStats, fieldStats: initialFieldStats, totalStudents: initialTotalStudents }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [headers, setHeaders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialHeaders);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialRows);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStats);
    const [fieldStats, setFieldStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFieldStats);
    const [totalStudents, setTotalStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTotalStudents);
    // Auto-refresh data every 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch('/api/data');
                if (response.ok) {
                    const data = await response.json();
                    setHeaders(data.headers);
                    setRows(data.rows);
                    setStats(data.stats);
                    setFieldStats(data.fieldStats);
                    setTotalStudents(data.totalStudents);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const interval = setInterval(fetchData, 30000); // Fetch every 10 seconds
        return ()=>clearInterval(interval); // Cleanup on unmount
    }, []);
    // Define required columns for "All Approved" check
    const requiredColumns = [
        'Supplication Form',
        'SAB Alumni Registration Form',
        'Exit Interview Form',
        'Finance Clearance Form',
        'Convocation Payment'
    ];
    const filteredRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let result = rows;
        // Apply status filter
        if (activeFilter) {
            result = result.filter((row)=>{
                const rowText = row.join(' ').toLowerCase();
                const statusFields = row.slice(4); // Skip first 4 columns
                if (activeFilter === 'submitted') {
                    return rowText.includes('approved') || rowText.includes('confirmed');
                } else if (activeFilter === 'allApproved') {
                    // Check if ALL REQUIRED fields are approved/confirmed
                    return requiredColumns.every((columnName)=>{
                        const columnIndex = headers.indexOf(columnName);
                        if (columnIndex === -1) return false; // Column doesn't exist
                        const fieldValue = (row[columnIndex] || '').toLowerCase();
                        return fieldValue.includes('approved') || fieldValue.includes('confirmed') || fieldValue.includes('paid') || fieldValue.includes('completed');
                    });
                } else if (activeFilter === 'pending') {
                    return rowText.includes('pending');
                } else if (activeFilter === 'notSubmitted') {
                    return rowText.includes('not submitted') || rowText.includes('not paid');
                } else if (activeFilter === 'incomplete') {
                    // Has at least one "not submitted" and at least one other status
                    const hasNotSubmitted = statusFields.some((field)=>{
                        const fieldLower = (field || '').toLowerCase();
                        return fieldLower.includes('not submitted') || fieldLower.includes('not paid');
                    });
                    const hasOtherStatus = statusFields.some((field)=>{
                        const fieldLower = (field || '').toLowerCase();
                        return fieldLower.includes('approved') || fieldLower.includes('confirmed') || fieldLower.includes('pending');
                    });
                    return hasNotSubmitted && hasOtherStatus;
                }
                return true;
            });
        }
        // Apply search filter
        if (searchTerm) {
            result = result.filter((row)=>{
                const searchLower = searchTerm.toLowerCase();
                return row.some((cell)=>cell && cell.toString().toLowerCase().includes(searchLower));
            });
        }
        return result;
    }, [
        rows,
        searchTerm,
        activeFilter
    ]);
    const handleFilterClick = (filterType)=>{
        setActiveFilter(activeFilter === filterType ? null : filterType);
    };
    const handleExport = ()=>{
        // Create CSV content
        const csvContent = [
            headers.join(','),
            ...filteredRows.map((row)=>row.map((cell)=>`"${cell}"`).join(','))
        ].join('\n');
        // Create download link
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `convocation-status-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statsGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Total Students",
                        value: stats.total,
                        icon: "👥",
                        color: "blue",
                        onClick: ()=>setActiveFilter(null),
                        isActive: activeFilter === null
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "All Approved",
                        value: stats.allApproved,
                        icon: "✓✓",
                        color: "purple",
                        onClick: ()=>handleFilterClick('allApproved'),
                        isActive: activeFilter === 'allApproved'
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Submitted",
                        value: stats.submitted,
                        icon: "✓",
                        color: "green",
                        onClick: ()=>handleFilterClick('submitted'),
                        isActive: activeFilter === 'submitted'
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Approval Pending",
                        value: stats.pending,
                        icon: "⏳",
                        color: "orange",
                        onClick: ()=>handleFilterClick('pending'),
                        isActive: activeFilter === 'pending'
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Incomplete",
                        value: stats.incomplete,
                        icon: "⚠",
                        color: "yellow",
                        onClick: ()=>handleFilterClick('incomplete'),
                        isActive: activeFilter === 'incomplete'
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Not Submitted",
                        value: stats.notSubmitted,
                        icon: "✗",
                        color: "red",
                        onClick: ()=>handleFilterClick('notSubmitted'),
                        isActive: activeFilter === 'notSubmitted'
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatsCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        label: "Total Guests",
                        value: stats.totalGuests || 0,
                        icon: "👨‍👩‍👧‍👦",
                        color: "cyan",
                        onClick: ()=>{},
                        isActive: true
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/DashboardClient.js",
                lineNumber: 129,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSearch: setSearchTerm,
                        placeholder: "Search by name or registration number..."
                    }, void 0, false, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            activeFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBadge,
                                children: [
                                    "Filtered: ",
                                    activeFilter === 'allApproved' ? 'All Approved' : activeFilter === 'submitted' ? 'Submitted' : activeFilter === 'pending' ? 'Approval Pending' : activeFilter === 'incomplete' ? 'Incomplete' : 'Not Submitted',
                                    " •",
                                    ' '
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DashboardClient.js",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultCount,
                                children: [
                                    "Showing ",
                                    filteredRows.length,
                                    " of ",
                                    rows.length,
                                    " students"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DashboardClient.js",
                                lineNumber: 206,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exportBtn,
                                children: "📥 Export CSV"
                            }, void 0, false, {
                                fileName: "[project]/app/DashboardClient.js",
                                lineNumber: 209,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/DashboardClient.js",
                        lineNumber: 194,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/DashboardClient.js",
                lineNumber: 189,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DataTable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                headers: headers,
                rows: filteredRows
            }, void 0, false, {
                fileName: "[project]/app/DashboardClient.js",
                lineNumber: 216,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "page-module__E0kJGG__container",
  "error": "page-module__E0kJGG__error",
  "header": "page-module__E0kJGG__header",
  "loading": "page-module__E0kJGG__loading",
  "main": "page-module__E0kJGG__main",
  "spin": "page-module__E0kJGG__spin",
  "spinner": "page-module__E0kJGG__spinner",
  "subtitle": "page-module__E0kJGG__subtitle",
  "title": "page-module__E0kJGG__title",
});
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/DashboardClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/page.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
function Home() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        try {
            const response = await fetch('/api/data');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "Document Submission Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Loading data..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spinner
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Fetching latest data from Google Sheets..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 31,
            columnNumber: 13
        }, this);
    }
    if (!data || data.rows.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No data found. Please check your Google Sheet configuration."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 51,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 50,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 48,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Document Submission Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Real-time student Submission tracking & analytics"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DashboardClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    headers: data.headers,
                    rows: data.rows,
                    stats: data.stats,
                    fieldStats: data.fieldStats,
                    totalStudents: data.totalStudents
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_8dc8d848._.js.map