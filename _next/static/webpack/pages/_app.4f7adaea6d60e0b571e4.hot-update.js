webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_ParticleBackground_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/ParticleBackground.jsx */ "./components/ui/ParticleBackground.jsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\pages\\_app.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import 'bootstrap/dist/css/bootstrap.css'




function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      darkBackground = _useState[0],
      setDarkBackground = _useState[1];

  pageProps.darkBackground = darkBackground;
  pageProps.setDarkBackground = setDarkBackground;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var darkMode = bool(localStorage.getItem('darkMode'));

    if (darkMode === null) {
      darkMode = (Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("darkMode"), false);
    }

    setDarkBackground(darkMode);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    localStorage.setItem('darkMode', darkBackground);
  }, [darkBackground]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ParticleBackground_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      darkMode: darkBackground
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MyApp, "GcyL5KMzhjuYoWizirMA4m5qm78=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImRhcmtCYWNrZ3JvdW5kIiwic2V0RGFya0JhY2tncm91bmQiLCJ1c2VFZmZlY3QiLCJkYXJrTW9kZSIsImJvb2wiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDaENDLGNBRGdDO0FBQUEsTUFDaEJDLGlCQURnQjs7QUFFdkNILFdBQVMsQ0FBQ0UsY0FBVixHQUEyQkEsY0FBM0I7QUFDQUYsV0FBUyxDQUFDRyxpQkFBVixHQUE4QkEsaUJBQTlCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBRCxDQUFyQjs7QUFDQSxRQUFJSCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFBRUEsY0FBUSxpS0FBRyxLQUFILENBQVI7QUFBa0I7O0FBQzNDRixxQkFBaUIsQ0FBQ0UsUUFBRCxDQUFqQjtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUQseURBQVMsQ0FBQyxZQUFNO0FBQ2RHLGdCQUFZLENBQUNFLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNQLGNBQWpDO0FBQ0QsR0FGUSxFQUVOLENBQUVBLGNBQUYsQ0FGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxTQUFELG9CQUFnQkYsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNkVBQUQ7QUFBb0IsY0FBUSxFQUFHRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQU1EOztHQXJCUUosSzs7S0FBQUEsSztBQXVCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZjdhZGFlYTZkNjBlMGI1NzFlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBhcnRpY2xlQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL3VpL1BhcnRpY2xlQmFja2dyb3VuZC5qc3gnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuLy8gaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJcclxuaW1wb3J0ICdhbmltYXRlLmNzcydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFtkYXJrQmFja2dyb3VuZCwgc2V0RGFya0JhY2tncm91bmRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgcGFnZVByb3BzLmRhcmtCYWNrZ3JvdW5kID0gZGFya0JhY2tncm91bmRcclxuICBwYWdlUHJvcHMuc2V0RGFya0JhY2tncm91bmQgPSBzZXREYXJrQmFja2dyb3VuZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya01vZGUgPSBib29sKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpKVxyXG4gICAgaWYgKGRhcmtNb2RlID09PSBudWxsKSB7IGRhcmtNb2RlID0gZmFsc2UgfVxyXG4gICAgc2V0RGFya0JhY2tncm91bmQoZGFya01vZGUpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBkYXJrQmFja2dyb3VuZClcclxuICB9LCBbIGRhcmtCYWNrZ3JvdW5kIF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29tcG9uZW50IHsgLi4ucGFnZVByb3BzIH0gLz5cclxuICAgICAgPFBhcnRpY2xlQmFja2dyb3VuZCBkYXJrTW9kZT17IGRhcmtCYWNrZ3JvdW5kIH0gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==