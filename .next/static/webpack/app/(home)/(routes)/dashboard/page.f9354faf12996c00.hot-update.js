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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_services */ \"(app-pages-browser)/./app/_services/index.jsx\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CategoryItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_components/CategoryItem */ \"(app-pages-browser)/./app/(home)/_components/CategoryItem.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    const [userCourseList, setUserCourseList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // Corrected useState usage\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        user ? GetUserCourse() : null;\n    }, [\n        user\n    ]);\n    const GetUserCourse = async ()=>{\n        await (0,_app_services__WEBPACK_IMPORTED_MODULE_1__.GetUserCourseList)(user.primaryEmailAddress.emailAddress).then((resp)=>{\n            console.log(resp === null || resp === void 0 ? void 0 : resp.userEnrollCourses);\n            if (resp) {\n                setUserCourseList(resp === null || resp === void 0 ? void 0 : resp.userEnrollCourses);\n            }\n        });\n        console.log(\"line number 24 in paget.tsx \");\n    };\n    console.log(userCourseList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: userCourseList ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-[20px] font-medium\",\n                    children: \"My Enrolled Courses\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 10\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5\",\n                    children: userCourseList && userCourseList.map((course, index)=>{\n                        if (course.courseList) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"hua\"\n                            }, void 0, false);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: \"ni hua\"\n                        }, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center text-[20px] mt-20 text-gray-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"You don't have any course Enrolled.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n            lineNumber: 43,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\(routes)\\\\dashboard\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(Dashboard, \"bLrTIEoPA9us0/cm1hkzaiKxSPs=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvKHJvdXRlcykvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNaO0FBQ1c7QUFDUTtBQUcxRCxTQUFTTTs7SUFDTixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTixzREFBT0E7SUFDeEIsTUFBTSxDQUFDTyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsMkJBQTJCO0lBQ3JGRCxnREFBU0EsQ0FBQztRQUNQSSxPQUFPRyxrQkFBa0I7SUFDNUIsR0FBRztRQUFDSDtLQUFLO0lBRVQsTUFBTUcsZ0JBQWdCO1FBRW5CLE1BQU1WLGdFQUFpQkEsQ0FBQ08sS0FBS0ksbUJBQW1CLENBQUNDLFlBQVksRUFBRUMsSUFBSSxDQUFDQyxDQUFBQTtZQUNqRUMsUUFBUUMsR0FBRyxDQUFDRixpQkFBQUEsMkJBQUFBLEtBQU1HLGlCQUFpQjtZQUNuQyxJQUFJSCxNQUFNO2dCQUNQTCxrQkFBa0JLLGlCQUFBQSwyQkFBQUEsS0FBTUcsaUJBQWlCO1lBQzVDO1FBQ0g7UUFHQUYsUUFBUUMsR0FBRyxDQUFDO0lBQ2Y7SUFDQUQsUUFBUUMsR0FBRyxDQUFDUjtJQUVaLHFCQUNHLDhEQUFDVTtrQkFDR1YsK0JBQWdCOzs4QkFDakIsOERBQUNXO29CQUFHQyxXQUFVOzhCQUEwQjs7Ozs7OzhCQUd4Qyw4REFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ1haLGtCQUFpQkEsZUFBZWEsR0FBRyxDQUFDLENBQUNDLFFBQVFDO3dCQUVyRCxJQUFHRCxPQUFPRSxVQUFVLEVBQUM7NEJBQUMscUJBQVE7MENBQUU7O3dCQUFPLE9BQ2xDLHFCQUFRO3NDQUFFOztvQkFDUjs7Ozs7Ozt5Q0FHSCw4REFBQ047WUFBSUUsV0FBVTtzQkFDWiw0RUFBQ0Q7MEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0F4Q1NiOztRQUNXTCxrREFBT0E7OztLQURsQks7QUEwQ1QsK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhob21lKS8ocm91dGVzKS9kYXNoYm9hcmQvcGFnZS5qc3g/YzVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBHZXRVc2VyQ291cnNlTGlzdCB9IGZyb20gJ0AvYXBwL19zZXJ2aWNlcydcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BjbGVyay9uZXh0anMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXRlZ29yeUl0ZW0gZnJvbSAnLi4vLi4vX2NvbXBvbmVudHMvQ2F0ZWdvcnlJdGVtJztcclxuXHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gICBjb25zdCBbdXNlckNvdXJzZUxpc3QsIHNldFVzZXJDb3Vyc2VMaXN0XSA9IHVzZVN0YXRlKFtdKTsgLy8gQ29ycmVjdGVkIHVzZVN0YXRlIHVzYWdlXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHVzZXIgPyBHZXRVc2VyQ291cnNlKCkgOiBudWxsO1xyXG4gICB9LCBbdXNlcl0pXHJcblxyXG4gICBjb25zdCBHZXRVc2VyQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgIFxyXG4gICAgICBhd2FpdCBHZXRVc2VyQ291cnNlTGlzdCh1c2VyLnByaW1hcnlFbWFpbEFkZHJlc3MuZW1haWxBZGRyZXNzKS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXNwPy51c2VyRW5yb2xsQ291cnNlcyk7XHJcbiAgICAgICAgIGlmIChyZXNwKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJDb3Vyc2VMaXN0KHJlc3A/LnVzZXJFbnJvbGxDb3Vyc2VzKVxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJsaW5lIG51bWJlciAyNCBpbiBwYWdldC50c3ggXCIpXHJcbiAgIH1cclxuICAgY29uc29sZS5sb2codXNlckNvdXJzZUxpc3QpXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICB7dXNlckNvdXJzZUxpc3Q/IDw+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtWzIwcHhdIGZvbnQtbWVkaXVtJz5cclxuICAgICAgICAgICAgTXkgRW5yb2xsZWQgQ291cnNlc1xyXG4gICAgICAgICA8L2gyPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBtdC01IGdhcC01Jz5cclxuICAgICAgICAgICAge3VzZXJDb3Vyc2VMaXN0ICYmdXNlckNvdXJzZUxpc3QubWFwKChjb3Vyc2UsIGluZGV4KT0+e1xyXG4gICAgICAgXHJcbiAgICAgaWYoY291cnNlLmNvdXJzZUxpc3Qpe3JldHVybiAoPD5odWE8Lz4pfVxyXG4gICAgIGVsc2UgcmV0dXJuICg8Pm5pIGh1YTwvPilcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgPC8+OlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1bMjBweF0gbXQtMjAgdGV4dC1ncmF5LTUwMCc+XHJcbiAgICAgICAgICAgIDxoMj5Zb3UgZG9uJ3QgaGF2ZSBhbnkgY291cnNlIEVucm9sbGVkLjwvaDI+XHJcbiAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiJdLCJuYW1lcyI6WyJHZXRVc2VyQ291cnNlTGlzdCIsInVzZVVzZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2F0ZWdvcnlJdGVtIiwiRGFzaGJvYXJkIiwidXNlciIsInVzZXJDb3Vyc2VMaXN0Iiwic2V0VXNlckNvdXJzZUxpc3QiLCJHZXRVc2VyQ291cnNlIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsInRoZW4iLCJyZXNwIiwiY29uc29sZSIsImxvZyIsInVzZXJFbnJvbGxDb3Vyc2VzIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJtYXAiLCJjb3Vyc2UiLCJpbmRleCIsImNvdXJzZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/(routes)/dashboard/page.jsx\n"));

/***/ })

});