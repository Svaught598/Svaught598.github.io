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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_ParticleBackground_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/ParticleBackground.jsx */ "./components/ui/ParticleBackground.jsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\pages\\_app.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import 'bootstrap/dist/css/bootstrap.css'




function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    var darkMode = window.localStorage.getItem('darkMode'); // initialize to light mode if first time visiting

    if (darkMode === null) return false; // otherwise, intialize to preference

    return darkMode;
  }),
      darkBackground = _useState[0],
      setDarkBackground = _useState[1];

  pageProps.darkBackground = darkBackground;
  pageProps.setDarkBackground = setDarkBackground;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    localStorage.setItem('darkMode', darkBackground);
  }, [darkBackground]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_ParticleBackground_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      darkMode: darkBackground
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MyApp, "BsFNmftw+2FWu7miqrYlnzRfAf4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsImRhcmtNb2RlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhcmtCYWNrZ3JvdW5kIiwic2V0RGFya0JhY2tncm91bmQiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsWUFBTTtBQUN6RCxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsQ0FBakIsQ0FEeUQsQ0FHekQ7O0FBQ0EsUUFBSUgsUUFBUSxLQUFLLElBQWpCLEVBQXVCLE9BQU8sS0FBUCxDQUprQyxDQU16RDs7QUFDQSxXQUFPQSxRQUFQO0FBQ0QsR0FSbUQsQ0FEYjtBQUFBLE1BQ2hDSSxjQURnQztBQUFBLE1BQ2hCQyxpQkFEZ0I7O0FBVXZDUCxXQUFTLENBQUNNLGNBQVYsR0FBMkJBLGNBQTNCO0FBQ0FOLFdBQVMsQ0FBQ08saUJBQVYsR0FBOEJBLGlCQUE5QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEosZ0JBQVksQ0FBQ0ssT0FBYixDQUFxQixVQUFyQixFQUFpQ0gsY0FBakM7QUFDRCxHQUZRLEVBRU4sQ0FBRUEsY0FBRixDQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLFNBQUQsb0JBQWdCTixTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2RUFBRDtBQUFvQixjQUFRLEVBQUdNO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0dBdkJRUixLOztLQUFBQSxLO0FBeUJNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAzZmNhY2U5MTY1MmUzNTYxM2RkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFydGljbGVCYWNrZ3JvdW5kIGZyb20gJy4uL2NvbXBvbmVudHMvdWkvUGFydGljbGVCYWNrZ3JvdW5kLmpzeCdcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIlxyXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2RhcmtCYWNrZ3JvdW5kLCBzZXREYXJrQmFja2dyb3VuZF0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKVxyXG5cclxuICAgIC8vIGluaXRpYWxpemUgdG8gbGlnaHQgbW9kZSBpZiBmaXJzdCB0aW1lIHZpc2l0aW5nXHJcbiAgICBpZiAoZGFya01vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSwgaW50aWFsaXplIHRvIHByZWZlcmVuY2VcclxuICAgIHJldHVybiBkYXJrTW9kZVxyXG4gIH0pXHJcbiAgcGFnZVByb3BzLmRhcmtCYWNrZ3JvdW5kID0gZGFya0JhY2tncm91bmRcclxuICBwYWdlUHJvcHMuc2V0RGFya0JhY2tncm91bmQgPSBzZXREYXJrQmFja2dyb3VuZFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgZGFya0JhY2tncm91bmQpXHJcbiAgfSwgWyBkYXJrQmFja2dyb3VuZCBdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbXBvbmVudCB7IC4uLnBhZ2VQcm9wcyB9IC8+XHJcbiAgICAgIDxQYXJ0aWNsZUJhY2tncm91bmQgZGFya01vZGU9eyBkYXJrQmFja2dyb3VuZCB9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=