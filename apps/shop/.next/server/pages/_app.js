/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,IconButton!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,IconButton!=!../../node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Brightness4 */ \"../../node_modules/@mui/icons-material/Brightness4.js\");\n/* harmony import */ var _mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Brightness7 */ \"../../node_modules/@mui/icons-material/Brightness7.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Submenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Submenu */ \"./src/components/Submenu.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ \"./src/components/Navbar.tsx\");\n\n\n\n\n\n\n\n\nconst Layout = ({ children })=>{\n    const { theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const toggleTheme = ()=>{\n        setTheme(theme === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        className: \"bg-white dark:bg-gray-800 min-h-screen text-black dark:text-hint-of-red \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Submenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                className: \"p-3\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                bottom: 16,\n                position: \"fixed\",\n                right: 16,\n                zIndex: 1000,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                    color: \"inherit\",\n                    onClick: toggleTheme,\n                    children: theme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 41\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 63\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Layout.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDaUM7QUFDRztBQUNBO0FBQ3ZCO0FBQ1A7QUFDRjtBQUs3QixNQUFNUyxTQUFnQyxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMvQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdOLHFEQUFRQTtJQUVwQyxNQUFNTyxjQUFjO1FBQ2hCRCxTQUFTRCxVQUFVLFVBQVUsU0FBUztJQUMxQztJQUVBLHFCQUNJLDhEQUFDVCw2RkFBR0E7UUFBQ1ksV0FBVTs7MEJBQ1gsOERBQUNOLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNELGdEQUFPQTs7Ozs7MEJBQ1IsOERBQUNOLG1HQUFTQTtnQkFBQ2EsV0FBVTswQkFDaEJKOzs7Ozs7MEJBRUwsOERBQUNSLDZGQUFHQTtnQkFDQWEsUUFBUTtnQkFDUkMsVUFBUztnQkFDVEMsT0FBTztnQkFDUEMsUUFBUTswQkFFUiw0RUFBQ2Ysb0dBQVVBO29CQUFDZ0IsT0FBTTtvQkFBVUMsU0FBU1A7OEJBQ2hDRixVQUFVLHVCQUFTLDhEQUFDTix1RUFBZUE7Ozs7a0RBQU0sOERBQUNELHVFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlFO0FBRUEsaUVBQWVLLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeD9kZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBCcmlnaHRuZXNzNEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9CcmlnaHRuZXNzNCdcbmltcG9ydCBCcmlnaHRuZXNzN0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9CcmlnaHRuZXNzNydcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5pbXBvcnQgU3VibWVudSBmcm9tICcuL1N1Ym1lbnUnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cbmNvbnN0IExheW91dDogUmVhY3QuRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG5cbiAgICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgc2V0VGhlbWUodGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBtaW4taC1zY3JlZW4gdGV4dC1ibGFjayBkYXJrOnRleHQtaGludC1vZi1yZWQgXCI+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8U3VibWVudSAvPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3AtMyc+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgYm90dG9tPXsxNn1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICByaWdodD17MTZ9XG4gICAgICAgICAgICAgICAgekluZGV4PXsxMDAwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyA8QnJpZ2h0bmVzczdJY29uIC8+IDogPEJyaWdodG5lc3M0SWNvbiAvPn1cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkJveCIsIkljb25CdXR0b24iLCJCcmlnaHRuZXNzNEljb24iLCJCcmlnaHRuZXNzN0ljb24iLCJ1c2VUaGVtZSIsIlN1Ym1lbnUiLCJOYXZiYXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRoZW1lIiwic2V0VGhlbWUiLCJ0b2dnbGVUaGVtZSIsImNsYXNzTmFtZSIsImJvdHRvbSIsInBvc2l0aW9uIiwicmlnaHQiLCJ6SW5kZXgiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n");

/***/ }),

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!../../node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Navbar = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const theme = (0,_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar, {\n        position: \"static\",\n        className: `bg-[#ffffff] dark:bg-slate-800 text-black dark:text-white`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            className: \"px-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"SHOP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/recipes\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"RECIPES\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/learn\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"LEARN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/about\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"ABOUT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/blog\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"BLOG\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dEO0FBQzFDO0FBQ1g7QUFFNUIsTUFBTVEsU0FBbUI7SUFDckIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLFFBQVFOLHNIQUFRQTtJQUV0QixxQkFDSSw4REFBQ0gsZ0hBQU1BO1FBQUNVLFVBQVM7UUFBU0MsV0FBVyxDQUFDLHlEQUF5RCxDQUFDO2tCQUM1Riw0RUFBQ1AsbUhBQVNBO1lBQUNPLFdBQVU7c0JBQ2pCLDRFQUFDVixpSEFBT0E7MEJBQ0osNEVBQUNXO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0wsa0RBQUlBOzRCQUFDTyxNQUFLOzRCQUFJQyxRQUFRO3NDQUNuQiw0RUFBQ1osZ0hBQU1BO2dDQUNIYSxPQUFNOzBDQUNUOzs7Ozs7Ozs7OztzQ0FJTCw4REFBQ1Qsa0RBQUlBOzRCQUFDTyxNQUFLOzRCQUFXQyxRQUFRO3NDQUMxQiw0RUFBQ1osZ0hBQU1BO2dDQUNIYSxPQUFNOzBDQUNUOzs7Ozs7Ozs7OztzQ0FJTCw4REFBQ1Qsa0RBQUlBOzRCQUFDTyxNQUFLOzRCQUFTQyxRQUFRO3NDQUN4Qiw0RUFBQ1osZ0hBQU1BO2dDQUNIYSxPQUFNOzBDQUNUOzs7Ozs7Ozs7OztzQ0FJTCw4REFBQ1Qsa0RBQUlBOzRCQUFDTyxNQUFLOzRCQUFTQyxRQUFRO3NDQUN4Qiw0RUFBQ1osZ0hBQU1BO2dDQUNIYSxPQUFNOzBDQUNUOzs7Ozs7Ozs7OztzQ0FJTCw4REFBQ1Qsa0RBQUlBOzRCQUFDTyxNQUFLOzRCQUFRQyxRQUFRO3NDQUN2Qiw0RUFBQ1osZ0hBQU1BO2dDQUNIYSxPQUFNOzBDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc3QjtBQUVBLGlFQUFlUixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3g/OWE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIEJ1dHRvbiwgdXNlVGhlbWUsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtgYmctWyNmZmZmZmZdIGRhcms6Ymctc2xhdGUtODAwIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT0ncHgtMjAnPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTSE9QXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlY2lwZXNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRUNJUEVTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xlYXJuXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTEVBUk5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQk9VVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQkxPR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDwvQXBwQmFyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiQnV0dG9uIiwidXNlVGhlbWUiLCJDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTmF2YmFyIiwicm91dGVyIiwidGhlbWUiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ }),

/***/ "./src/components/Submenu.tsx":
/*!************************************!*\
  !*** ./src/components/Submenu.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!../../node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Submenu = ()=>{\n    const theme = (0,_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {\n        position: \"static\",\n        className: `bg-hint-of-red dark:bg-[#22365a] text-black dark:text-hint-of-red`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            className: \"px-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/recipes/categories\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"inherit\",\n                                children: \"CATEGORIES\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/recipes/collections\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"inherit\",\n                                children: \"COLLECTIONS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/recipes/resources\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Button_Container_Toolbar_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                color: \"inherit\",\n                                children: \"RESOURCES\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/components/Submenu.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Submenu);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJtZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDbUQ7QUFDaEQ7QUFFNUIsTUFBTU8sVUFBb0I7SUFDdEIsTUFBTUMsUUFBUUosc0hBQVFBO0lBRXRCLHFCQUNJLDhEQUFDSCxnSEFBTUE7UUFBQ1EsVUFBUztRQUFTQyxXQUFXLENBQUMsaUVBQWlFLENBQUM7a0JBQ3BHLDRFQUFDTCxtSEFBU0E7WUFBQ0ssV0FBVTtzQkFDakIsNEVBQUNSLGlIQUFPQTswQkFDSiw0RUFBQ1M7b0JBQUlELFdBQVU7O3NDQUNYLDhEQUFDSixrREFBSUE7NEJBQUNNLE1BQUs7NEJBQXNCQyxRQUFRO3NDQUNyQyw0RUFBQ1YsZ0hBQU1BO2dDQUFDVyxPQUFNOzBDQUFXOzs7Ozs7Ozs7OztzQ0FFN0IsOERBQUNSLGtEQUFJQTs0QkFBQ00sTUFBSzs0QkFBdUJDLFFBQVE7c0NBQ3RDLDRFQUFDVixnSEFBTUE7Z0NBQUNXLE9BQU07MENBQVc7Ozs7Ozs7Ozs7O3NDQUU3Qiw4REFBQ1Isa0RBQUlBOzRCQUFDTSxNQUFLOzRCQUFxQkMsUUFBUTtzQ0FDcEMsNEVBQUNWLGdIQUFNQTtnQ0FBQ1csT0FBTTswQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckQ7QUFFQSxpRUFBZVAsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3AvLi9zcmMvY29tcG9uZW50cy9TdWJtZW51LnRzeD81NTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgQnV0dG9uLCB1c2VUaGVtZSwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgU3VibWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtgYmctaGludC1vZi1yZWQgZGFyazpiZy1bIzIyMzY1YV0gdGV4dC1ibGFjayBkYXJrOnRleHQtaGludC1vZi1yZWRgfT5cbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdweC0yMCc+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVjaXBlcy9jYXRlZ29yaWVzXCIgcGFzc0hyZWYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgPkNBVEVHT1JJRVM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVjaXBlcy9jb2xsZWN0aW9uc1wiIHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiID5DT0xMRUNUSU9OUzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWNpcGVzL3Jlc291cmNlc1wiIHBhc3NIcmVmID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiID5SRVNPVVJDRVM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VibWVudVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiVG9vbGJhciIsIkJ1dHRvbiIsInVzZVRoZW1lIiwiQ29udGFpbmVyIiwiTGluayIsIlN1Ym1lbnUiLCJ0aGVtZSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInBhc3NIcmVmIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Submenu.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.tsx\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        attribute: \"class\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vuminhkhoi1802/Documents/TakeHomeTests/scentronix-frontend-application/apps/shop/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCO0FBRWE7QUFDSDtBQUV4QyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLHFCQUNJLDhEQUFDSixzREFBYUE7UUFBQ0ssV0FBVTtrQkFDckIsNEVBQUNKLDBEQUFNQTtzQkFDSCw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QztBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICduZXh0LXRoZW1lcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCI+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "__barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!../../node_modules/@mui/material/index.js":
/*!**********************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!../../node_modules/@mui/material/index.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport default from dynamic */ _AppBar__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Button: () => (/* reexport default from dynamic */ _Button__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Toolbar: () => (/* reexport default from dynamic */ _Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_vuminhkhoi1802_Documents_TakeHomeTests_scentronix_frontend_application_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_4__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ \"../../node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"../../node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ \"../../node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar */ \"../../node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_vuminhkhoi1802_Documents_TakeHomeTests_scentronix_frontend_application_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@mui/material/styles/index.js */ \"../../node_modules/@mui/material/styles/index.js\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQnV0dG9uLENvbnRhaW5lcixUb29sYmFyLHVzZVRoZW1lIT0hLi4vLi4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDQTtBQUNNO0FBQ0o7QUFDcUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wLy4uLy4uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzPzc1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gXCIuL0NvbnRhaW5lclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCJcbmV4cG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi9Vc2Vycy92dW1pbmhraG9pMTgwMi9Eb2N1bWVudHMvVGFrZUhvbWVUZXN0cy9zY2VudHJvbml4LWZyb250ZW5kLWFwcGxpY2F0aW9uL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJBcHBCYXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJUb29sYmFyIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Button,Container,Toolbar,useTheme!=!../../node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,Container,IconButton!=!../../node_modules/@mui/material/index.js":
/*!******************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Container,IconButton!=!../../node_modules/@mui/material/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   IconButton: () => (/* reexport default from dynamic */ _IconButton__WEBPACK_IMPORTED_MODULE_2___default.a)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"../../node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"../../node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconButton */ \"../../node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsQ29udGFpbmVyLEljb25CdXR0b24hPSEuLi8uLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0M7QUFDWTtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcC8uLi8uLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz83NTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tIFwiLi9Cb3hcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQnV0dG9uIH0gZnJvbSBcIi4vSWNvbkJ1dHRvblwiIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJCb3giLCJDb250YWluZXIiLCJJY29uQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Container,IconButton!=!../../node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/base/ClassNameGenerator":
/*!***********************************************!*\
  !*** external "@mui/base/ClassNameGenerator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/ClassNameGenerator");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useIsFocusVisible":
/*!***********************************************!*\
  !*** external "@mui/utils/useIsFocusVisible" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useIsFocusVisible");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();