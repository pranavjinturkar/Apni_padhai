"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/(routes)/layout",{

/***/ "(app-pages-browser)/./app/(home)/_components/SideBarNav.jsx":
/*!***********************************************!*\
  !*** ./app/(home)/_components/SideBarNav.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Mail,Search,Shield!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Mail,Search,Shield!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/panels-top-left.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Mail,Search,Shield!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/shield.js\");\n/* harmony import */ var _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Layout,Mail,Search,Shield!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/mail.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SideBarNav() {\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    console.log(pathName);\n    const menuList = [\n        {\n            id: 1,\n            name: \"Browsee\",\n            icon: _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            path: \"/browse\"\n        },\n        {\n            id: 2,\n            name: \"Dashboard\",\n            icon: _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            path: \"/dashboard\"\n        },\n        {\n            id: 3,\n            name: \"Upgrade\",\n            icon: _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            path: \"/membership\"\n        },\n        {\n            id: 4,\n            name: \"NewsLetter\",\n            icon: _barrel_optimize_names_Layout_Mail_Search_Shield_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            path: \"/newsletter\"\n        }\n    ];\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full bg-white border-r flex-col overflow-y-auto shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 border-b\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"logo.svg\",\n                    alt: \"logo\",\n                    width: 170,\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-black \",\n                children: menuList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: item.path,\n                        className: \"flex gap-2 items-center\\n          p-[0] px-6 text-gray-500\\n          hover:bg-gray-100 cursor-pointer\\n          \".concat(pathName == item.path ? \"bg-purple-50 text-purple-800\" : null),\n                        onClick: ()=>{\n                            setActiveIndex(index);\n                            toggleSideBar(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer    \".concat(pathName == item.path ? \"bg-purple-50 text-purple-800\" : null),\n                            onClick: ()=>setActiveIndex(index),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {}, void 0, false, {\n                                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Pranav\\\\Dev\\\\Projects\\\\meri-padhai\\\\app\\\\(home)\\\\_components\\\\SideBarNav.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBarNav, \"KNRt+1nMRGH93TOjTV2Cn5xgSZs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = SideBarNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBarNav);\nvar _c;\n$RefreshReg$(_c, \"SideBarNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvX2NvbXBvbmVudHMvU2lkZUJhck5hdi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV5RDtBQUNsQjtBQUNUO0FBQ2U7QUFDakI7QUFFNUIsU0FBU1M7O0lBQ1AsTUFBTUMsV0FBV0gsNERBQVdBO0lBQzVCSSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTUcsV0FBVztRQUNmO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxNQUFLaEIscUdBQU1BO1lBQ1hpQixNQUFNO1FBQ1I7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBS2YscUdBQU1BO1lBQ1hnQixNQUFNO1FBQ1I7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsTUFBS2QscUdBQU1BO1lBQ1hlLE1BQU07UUFDUjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsTUFBTTtZQUNOQyxNQUFLYixxR0FBSUE7WUFDVGMsTUFBTTtRQUNSO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFFL0MscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZiw0RUFBQ2Ysa0RBQUtBO29CQUFDZ0IsS0FBSTtvQkFDWEMsS0FBSztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNaUixTQUFTYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDcEIsaURBQUlBO3dCQUFDcUIsTUFBTUYsS0FBS1YsSUFBSTt3QkFBY0ksV0FBVyxzSEFHWSxPQUF4RFgsWUFBVWlCLEtBQUtWLElBQUksR0FBQyxpQ0FBK0I7d0JBQ3JEYSxTQUFTOzRCQUFLWCxlQUFlUzs0QkFBT0csY0FBYzt3QkFBTTtrQ0FDeEQsNEVBQUNYOzRCQUFJQyxXQUFXLHNGQUErSSxPQUF6RFgsWUFBVWlCLEtBQUtWLElBQUksR0FBQyxpQ0FBZ0M7NEJBQzFKYSxTQUFTLElBQUlYLGVBQWVTOzs4Q0FDMUIsOERBQUNELEtBQUtYLElBQUk7Ozs7OzhDQUNWLDhEQUFDZ0I7OENBQUlMLEtBQUtaLElBQUk7Ozs7Ozs7Ozs7Ozt1QkFSWWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnRDO0dBM0RTbkI7O1FBQ1VGLHdEQUFXQTs7O0tBRHJCRTtBQTZEVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGhvbWUpL19jb21wb25lbnRzL1NpZGVCYXJOYXYuanN4P2MxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7U2VhcmNoLCBMYXlvdXQsIFNoaWVsZCwgTWFpbH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBTaWRlQmFyTmF2KCkge1xyXG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zb2xlLmxvZyhwYXRoTmFtZSlcclxuICBjb25zdCBtZW51TGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdCcm93c2VlJyxcclxuICAgICAgaWNvbjpTZWFyY2gsXHJcbiAgICAgIHBhdGg6ICcvYnJvd3NlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gICAgICBpY29uOkxheW91dCxcclxuICAgICAgcGF0aDogJy9kYXNoYm9hcmQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmFtZTogJ1VwZ3JhZGUnLFxyXG4gICAgICBpY29uOlNoaWVsZCxcclxuICAgICAgcGF0aDogJy9tZW1iZXJzaGlwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6ICdOZXdzTGV0dGVyJyxcclxuICAgICAgaWNvbjpNYWlsLFxyXG4gICAgICBwYXRoOiAnL25ld3NsZXR0ZXInXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1mdWxsIGJnLXdoaXRlIGJvcmRlci1yIGZsZXgtY29sIG92ZXJmbG93LXktYXV0byBzaGFkb3ctbWQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01IGJvcmRlci1iJz5cclxuICAgICAgPEltYWdlIHNyYz0nbG9nby5zdmcnXHJcbiAgICAgIGFsdD0gJ2xvZ28nXHJcbiAgICAgIHdpZHRoPXsxNzB9XHJcbiAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdGV4dC1ibGFjayAnPiBcclxuICAgICAgICB7bWVudUxpc3QubWFwKChpdGVtLCBpbmRleCk9PihcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ucGF0aH0ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcclxuICAgICAgICAgIHAtWzBdIHB4LTYgdGV4dC1ncmF5LTUwMFxyXG4gICAgICAgICAgaG92ZXI6YmctZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgICAgICR7cGF0aE5hbWU9PWl0ZW0ucGF0aD8nYmctcHVycGxlLTUwIHRleHQtcHVycGxlLTgwMCc6bnVsbH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCk9PntzZXRBY3RpdmVJbmRleChpbmRleCk7dG9nZ2xlU2lkZUJhcihmYWxzZSl9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgcC00IHB4LTYgdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlciAgICAke3BhdGhOYW1lPT1pdGVtLnBhdGg/J2JnLXB1cnBsZS01MCB0ZXh0LXB1cnBsZS04MDAnOiBudWxsfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0QWN0aXZlSW5kZXgoaW5kZXgpfT5cclxuICAgICAgICAgICAgPGl0ZW0uaWNvbiAvPlxyXG4gICAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyTmF2Il0sIm5hbWVzIjpbIlNlYXJjaCIsIkxheW91dCIsIlNoaWVsZCIsIk1haWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VQYXRobmFtZSIsIkxpbmsiLCJTaWRlQmFyTmF2IiwicGF0aE5hbWUiLCJjb25zb2xlIiwibG9nIiwibWVudUxpc3QiLCJpZCIsIm5hbWUiLCJpY29uIiwicGF0aCIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhyZWYiLCJvbkNsaWNrIiwidG9nZ2xlU2lkZUJhciIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/_components/SideBarNav.jsx\n"));

/***/ })

});