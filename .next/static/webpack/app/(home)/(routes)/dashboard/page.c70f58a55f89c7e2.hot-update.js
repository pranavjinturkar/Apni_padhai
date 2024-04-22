"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/(routes)/dashboard/page",{

/***/ "(app-pages-browser)/./app/(home)/(routes)/dashboard/page.jsx":
/*!************************************************!*\
  !*** ./app/(home)/(routes)/dashboard/page.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_services */ \"(app-pages-browser)/./app/_services/index.jsx\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CategoryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_components/CategoryItem */ \"(app-pages-browser)/./app/(home)/_components/CategoryItem.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [userCourseList, setUserCourseList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // Corrected useState usage\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        user ? GetUserCourse() : null;\n    }, [\n        user\n    ]);\n    const GetUserCourse = async ()=>{\n        console.log(user.primaryEmailAddress.emailAddress);\n        await (0,_app_services__WEBPACK_IMPORTED_MODULE_1__.GetUserCourseList)(user.primaryEmailAddress.emailAddress).then((resp)=>{\n            console.log(resp === null || resp === void 0 ? void 0 : resp.userEnrollCourses);\n            if (resp) {\n                setUserCourseList(resp === null || resp === void 0 ? void 0 : resp.userEnrollCourses);\n            }\n        });\n        console.log(\"line number 24 in paget.tsx \");\n    };\n    console.log(userCourseList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: userCourseList ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-[20px] font-medium\",\n                    children: \"My Enrolled Courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 10\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5\",\n                    children: userCourseList && userCourseList.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                course: course === null || course === void 0 ? void 0 : course.courseList\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 19\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 16\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center text-[20px] mt-20 text-gray-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"You don't have any course Enrolled.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n            lineNumber: 43,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(Dashboard, \"bLrTIEoPA9us0/cm1hkzaiKxSPs=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvKHJvdXRlcykvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNaO0FBQ1c7QUFDUTtBQUcxRCxTQUFTTTs7SUFDTixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTixzREFBT0E7SUFDeEIsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsMkJBQTJCO0lBQ3JGRCxnREFBU0EsQ0FBQztRQUNQSSxPQUFPRyxrQkFBa0I7SUFDNUIsR0FBRztRQUFDSDtLQUFLO0lBRVQsTUFBTUcsZ0JBQWdCO1FBQ25CQyxRQUFRQyxHQUFHLENBQUNMLEtBQUtNLG1CQUFtQixDQUFDQyxZQUFZO1FBQ2pELE1BQU1kLGdFQUFpQkEsQ0FBQ08sS0FBS00sbUJBQW1CLENBQUNDLFlBQVksRUFBRUMsSUFBSSxDQUFDQyxDQUFBQTtZQUNqRUwsUUFBUUMsR0FBRyxDQUFDSSxpQkFBQUEsMkJBQUFBLEtBQU1DLGlCQUFpQjtZQUNuQyxJQUFJRCxNQUFNO2dCQUNQUCxrQkFBa0JPLGlCQUFBQSwyQkFBQUEsS0FBTUMsaUJBQWlCO1lBQzVDO1FBQ0g7UUFHQU4sUUFBUUMsR0FBRyxDQUFDO0lBQ2Y7SUFDQUQsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLHFCQUNHLDhEQUFDVTtrQkFDR1YsK0JBQWdCOzs4QkFDakIsOERBQUNXO29CQUFHQyxXQUFVOzhCQUEwQjs7Ozs7OzhCQUd4Qyw4REFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ1haLGtCQUFpQkEsZUFBZWEsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUMzQyw4REFBQ0w7c0NBQ0UsNEVBQUNiLGdFQUFZQTtnQ0FBQ2lCLE1BQU0sRUFBRUEsbUJBQUFBLDZCQUFBQSxPQUFRRSxVQUFVOzs7Ozs7MkJBRGpDRDs7Ozs7Ozs7Ozs7eUNBTWhCLDhEQUFDTDtZQUFJRSxXQUFVO3NCQUNaLDRFQUFDRDswQkFBRzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtHQXhDU2I7O1FBQ1dMLGtEQUFPQTs7O0tBRGxCSztBQTBDVCwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGhvbWUpLyhyb3V0ZXMpL2Rhc2hib2FyZC9wYWdlLmpzeD9jNWM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEdldFVzZXJDb3Vyc2VMaXN0IH0gZnJvbSAnQC9hcHAvX3NlcnZpY2VzJ1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGNsZXJrL25leHRqcydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhdGVnb3J5SXRlbSBmcm9tICcuLi8uLi9fY29tcG9uZW50cy9DYXRlZ29yeUl0ZW0nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICAgY29uc3QgeyB1c2VyIH0gPSB1c2VVc2VyKCk7XHJcbiAgIGNvbnN0IFt1c2VyQ291cnNlTGlzdCwgc2V0VXNlckNvdXJzZUxpc3RdID0gdXNlU3RhdGUoW10pOyAvLyBDb3JyZWN0ZWQgdXNlU3RhdGUgdXNhZ2VcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgdXNlciA/IEdldFVzZXJDb3Vyc2UoKSA6IG51bGw7XHJcbiAgIH0sIFt1c2VyXSlcclxuXHJcbiAgIGNvbnN0IEdldFVzZXJDb3Vyc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIucHJpbWFyeUVtYWlsQWRkcmVzcy5lbWFpbEFkZHJlc3MpXHJcbiAgICAgIGF3YWl0IEdldFVzZXJDb3Vyc2VMaXN0KHVzZXIucHJpbWFyeUVtYWlsQWRkcmVzcy5lbWFpbEFkZHJlc3MpLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHJlc3A/LnVzZXJFbnJvbGxDb3Vyc2VzKTtcclxuICAgICAgICAgaWYgKHJlc3ApIHtcclxuICAgICAgICAgICAgc2V0VXNlckNvdXJzZUxpc3QocmVzcD8udXNlckVucm9sbENvdXJzZXMpXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcImxpbmUgbnVtYmVyIDI0IGluIHBhZ2V0LnRzeCBcIilcclxuICAgfVxyXG4gICBjb25zb2xlLmxvZyh1c2VyQ291cnNlTGlzdClcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIHt1c2VyQ291cnNlTGlzdD8gPD5cclxuICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1bMjBweF0gZm9udC1tZWRpdW0nPlxyXG4gICAgICAgICAgICBNeSBFbnJvbGxlZCBDb3Vyc2VzXHJcbiAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IG10LTUgZ2FwLTUnPlxyXG4gICAgICAgICAgICB7dXNlckNvdXJzZUxpc3QgJiZ1c2VyQ291cnNlTGlzdC5tYXAoKGNvdXJzZSwgaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUl0ZW0gY291cnNlPXtjb3Vyc2U/LmNvdXJzZUxpc3R9Lz5cclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICA8Lz46XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LVsyMHB4XSBtdC0yMCB0ZXh0LWdyYXktNTAwJz5cclxuICAgICAgICAgICAgPGgyPllvdSBkb24ndCBoYXZlIGFueSBjb3Vyc2UgRW5yb2xsZWQuPC9oMj5cclxuICAgICAgICAgPC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcclxuIl0sIm5hbWVzIjpbIkdldFVzZXJDb3Vyc2VMaXN0IiwidXNlVXNlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXRlZ29yeUl0ZW0iLCJEYXNoYm9hcmQiLCJ1c2VyIiwidXNlckNvdXJzZUxpc3QiLCJzZXRVc2VyQ291cnNlTGlzdCIsIkdldFVzZXJDb3Vyc2UiLCJjb25zb2xlIiwibG9nIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsInRoZW4iLCJyZXNwIiwidXNlckVucm9sbENvdXJzZXMiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsIm1hcCIsImNvdXJzZSIsImluZGV4IiwiY291cnNlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/(routes)/dashboard/page.jsx\n"));

/***/ })

});