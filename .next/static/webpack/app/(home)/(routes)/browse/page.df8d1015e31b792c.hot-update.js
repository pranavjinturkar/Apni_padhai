"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/(routes)/browse/page",{

/***/ "(app-pages-browser)/./app/(home)/_components/CategoryItem.jsx":
/*!*************************************************!*\
  !*** ./app/(home)/_components/CategoryItem.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_Book_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Book!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book.js\");\n\n\n\n\nfunction CategoryItem(param) {\n    let { course } = param;\n    var _course_banner;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"rounded-lg border p-2 cursor-pointer hover:border-purple-600\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: course === null || course === void 0 ? void 0 : (_course_banner = course.banner) === null || _course_banner === void 0 ? void 0 : _course_banner.url,\n                    alt: course === null || course === void 0 ? void 0 : course.name,\n                    width: 1000,\n                    height: 500,\n                    className: \"rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-[18px] md:text-[16px] font-medium\",\n                            children: course === null || course === void 0 ? void 0 : course.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        (course === null || course === void 0 ? void 0 : course.totalChapters) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Book_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-[13px] text-gray-400\",\n                                    children: [\n                                        course === null || course === void 0 ? void 0 : course.totalChapters,\n                                        \" Chapters\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mt-2 text-[14px]\",\n                            children: (course === null || course === void 0 ? void 0 : course.free) ? \"Free\" : \"Paid\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\CategoryItem.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = CategoryItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryItem);\nvar _c;\n$RefreshReg$(_c, \"CategoryItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvX2NvbXBvbmVudHMvQ2F0ZWdvcnlJdGVtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ007QUFDSztBQUdwQyxTQUFTRyxhQUFhLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjtRQVdBQTtJQVRwQixxQkFDRSw4REFBQ0M7a0JBR0MsNEVBQUNBO1lBRUdDLFdBQVU7OzhCQUdWLDhEQUFDTCxrREFBS0E7b0JBQUNNLEdBQUcsRUFBRUgsbUJBQUFBLDhCQUFBQSxpQkFBQUEsT0FBUUksTUFBTSxjQUFkSixxQ0FBQUEsZUFBZ0JLLEdBQUc7b0JBQ3pCQyxHQUFHLEVBQUVOLG1CQUFBQSw2QkFBQUEsT0FBUU8sSUFBSTtvQkFDakJDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JQLFdBQVU7Ozs7Ozs4QkFFaEIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1E7NEJBQUdSLFdBQVU7c0NBQ1hGLG1CQUFBQSw2QkFBQUEsT0FBUU8sSUFBSTs7Ozs7O3dCQUdiUCxDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFXLGFBQWEsa0JBQ3JCLDhEQUFDVjs0QkFBSUMsV0FBVTs7OENBQ2YsOERBQUNKLGdGQUFJQTtvQ0FBQ0ksV0FBVTs7Ozs7OzhDQUNoQiw4REFBQ1E7b0NBQUdSLFdBQVU7O3dDQUNYRixtQkFBQUEsNkJBQUFBLE9BQVFXLGFBQWE7d0NBQUM7Ozs7Ozs7Ozs7OzttQ0FFbEI7c0NBRVQsOERBQUNEOzRCQUFHUixXQUFVO3NDQUNYRixDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFZLElBQUksSUFBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QztLQXJDU2I7QUF1Q1QsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhob21lKS9fY29tcG9uZW50cy9DYXRlZ29yeUl0ZW0uanN4P2U1ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQm9vayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeUl0ZW0oe2NvdXJzZX0pIHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIHAtMiBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItcHVycGxlLTYwMFwiXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2NvdXJzZT8uYmFubmVyPy51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2NvdXJzZT8ubmFtZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtbGcnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsxOHB4XSBtZDp0ZXh0LVsxNnB4XSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgIHtjb3Vyc2U/Lm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb3Vyc2U/LnRvdGFsQ2hhcHRlcnM/IFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxCb29rIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1wdXJwbGUtNjAwIHJvdW5kZWQtZnVsbCBiZy1wdXJwbGUtMTAwIHAtMVwiIC8+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWzEzcHhdIHRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgIHtjb3Vyc2U/LnRvdGFsQ2hhcHRlcnN9IENoYXB0ZXJzXHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0yIHRleHQtWzE0cHhdXCI+XHJcbiAgICAgICAgICAgICAge2NvdXJzZT8uZnJlZSA/IFwiRnJlZVwiIDogXCJQYWlkXCJ9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlJdGVtIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJCb29rIiwiQ2F0ZWdvcnlJdGVtIiwiY291cnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYmFubmVyIiwidXJsIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJ0b3RhbENoYXB0ZXJzIiwiZnJlZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/_components/CategoryItem.jsx\n"));

/***/ })

});