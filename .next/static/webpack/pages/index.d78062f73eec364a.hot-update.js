"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/withAuth.js":
/*!************************************!*\
  !*** ./src/components/withAuth.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\n\n\n\n\nfunction withAuth(Component) {\n    var _s = $RefreshSig$();\n    return _s(function(props) {\n        _s();\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext), loggedInUser = ref.loggedInUser, SetLoggedInUser = ref.SetLoggedInUser;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            loggedInUser: loggedInUser,\n            setLoggedInUser: setLoggedInUser\n        }, props), void 0, false, {\n            fileName: \"/Users/AAE16/Documents/repos/conferenceApp/src/components/withAuth.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    }, \"2L15YCmCAgGE+OWjfaiU1tprGjQ=\");\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (withAuth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93aXRoQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW1DO0FBQ21CO0FBRXRELFNBQVNFLFFBQVEsQ0FBQ0MsU0FBUyxFQUFFOztJQUMzQixVQUFPLFNBQVVDLEtBQUssRUFBRTs7UUFDdEIsSUFBMENKLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDQyw4REFBVyxDQUFDLEVBQXpESSxZQUFZLEdBQXNCTCxHQUF1QixDQUF6REssWUFBWSxFQUFFQyxlQUFlLEdBQUtOLEdBQXVCLENBQTNDTSxlQUFlO1FBQ3JDLHFCQUNFLDhEQUFDSCxTQUFTO1lBQ1JFLFlBQVksRUFBRUEsWUFBWTtZQUMxQkUsZUFBZSxFQUFFQSxlQUFlO1dBQzVCSCxLQUFLOzs7O2dCQUNFLENBQ2I7SUFDSixDQUFDLGtDQUFDO0FBQ0osQ0FBQztBQUVELCtEQUFlRixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2l0aEF1dGguanM/NTQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuXG5mdW5jdGlvbiB3aXRoQXV0aChDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW5Vc2VyLCBTZXRMb2dnZWRJblVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIGxvZ2dlZEluVXNlcj17bG9nZ2VkSW5Vc2VyfVxuICAgICAgICBzZXRMb2dnZWRJblVzZXI9e3NldExvZ2dlZEluVXNlcn1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPjwvQ29tcG9uZW50PlxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIndpdGhBdXRoIiwiQ29tcG9uZW50IiwicHJvcHMiLCJsb2dnZWRJblVzZXIiLCJTZXRMb2dnZWRJblVzZXIiLCJzZXRMb2dnZWRJblVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/withAuth.js\n"));

/***/ })

});