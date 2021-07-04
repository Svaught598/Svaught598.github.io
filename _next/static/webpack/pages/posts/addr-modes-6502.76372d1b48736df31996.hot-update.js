webpackHotUpdate_N_E("pages/posts/addr-modes-6502",{

/***/ "./templates/PostLayout.jsx":
/*!**********************************!*\
  !*** ./templates/PostLayout.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectLayout; });
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout/HeaderLayout */ "./components/layout/HeaderLayout.jsx");
/* harmony import */ var components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout/HeroLayout */ "./components/layout/HeroLayout.jsx");
/* harmony import */ var _styles_BlogLayout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/BlogLayout.module.css */ "./styles/BlogLayout.module.css");
/* harmony import */ var _styles_BlogLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogLayout_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\templates\\PostLayout.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function ProjectLayout(props) {
  var children = props.children,
      frontMatter = props.frontMatter,
      darkBackground = props.darkBackground;
  var delayEntrance = "animate__animated animate__fadeInUp delay04";
  var cardBackground = darkBackground ? "bg-gray" : "bg-charcoal";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "main container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "md:my-48 sm:my-36 w-11/12 mx-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
        className: "container mx-auto w-full md:w-9/12 lg:w-9/12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_5__["HeroLayout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_5__["HeroHeader"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: frontMatter.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "flex text-base mt-5",
              children: frontMatter.author
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "flex text-base",
              children: frontMatter.date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(cardBackground, delayEntrance, "p-5 rounded-xl shadow-xl color-transition mb-5"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("text-orange-yellow-crayola text-xl", _styles_BlogLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content),
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = ProjectLayout;

var _c;

$RefreshReg$(_c, "ProjectLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1Bvc3RMYXlvdXQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnJvbnRNYXR0ZXIiLCJkYXJrQmFja2dyb3VuZCIsImRlbGF5RW50cmFuY2UiLCJjYXJkQmFja2dyb3VuZCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsImNsc3giLCJzdHlsZXMiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQSxNQUNyQ0MsUUFEcUMsR0FDS0QsS0FETCxDQUNyQ0MsUUFEcUM7QUFBQSxNQUMzQkMsV0FEMkIsR0FDS0YsS0FETCxDQUMzQkUsV0FEMkI7QUFBQSxNQUNkQyxjQURjLEdBQ0tILEtBREwsQ0FDZEcsY0FEYztBQUUzQyxNQUFNQyxhQUFhLEdBQUUsNkNBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFJRixjQUFELEdBQW1CLFNBQW5CLEdBQStCLGFBQXREO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSw0QkFDRSxxRUFBQyxzRUFBRCxvQkFBbUJILEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sZUFBUyxFQUFDLG1DQUFoQjtBQUFBLDZCQUNFO0FBQVMsaUJBQVMsRUFBQyw4Q0FBbkI7QUFBQSxnQ0FDRSxxRUFBQyx1RUFBRDtBQUFBLGlDQUNFLHFFQUFDLHVFQUFEO0FBQUEsb0NBQ0U7QUFBQSx3QkFBUUUsV0FBVyxDQUFDSTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFDLHFCQUFoQjtBQUFBLHdCQUF3Q0osV0FBVyxDQUFDSztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBTSx1QkFBUyxFQUFDLGdCQUFoQjtBQUFBLHdCQUFtQ0wsV0FBVyxDQUFDTTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRTtBQUFLLG1CQUFTLEVBQUdDLG9EQUFJLENBQUNKLGNBQUQsRUFBaUJELGFBQWpCLEVBQWdDLGdEQUFoQyxDQUFyQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUssb0RBQUksQ0FBQyxvQ0FBRCxFQUF1Q0Msb0VBQU0sQ0FBQ0MsT0FBOUMsQ0FBcEI7QUFBQSxzQkFDSVY7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7S0EzQnVCRixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2FkZHItbW9kZXMtNjUwMi43NjM3MmQxYjQ4NzM2ZGYzMTk5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmltcG9ydCBIZWFkZXJMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0hlYWRlckxheW91dFwiXHJcbmltcG9ydCB7IEhlcm9IZWFkZXIsIEhlcm9MYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvSGVyb0xheW91dFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Jsb2dMYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMYXlvdXQocHJvcHMpIHtcclxuICBsZXQgeyBjaGlsZHJlbiwgZnJvbnRNYXR0ZXIsIGRhcmtCYWNrZ3JvdW5kIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGRlbGF5RW50cmFuY2UgPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXAgZGVsYXkwNFwiXHJcbiAgY29uc3QgY2FyZEJhY2tncm91bmQgPSAoZGFya0JhY2tncm91bmQpID8gXCJiZy1ncmF5XCIgOiBcImJnLWNoYXJjb2FsXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICA8SGVhZGVyTGF5b3V0IHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZDpteS00OCBzbTpteS0zNiB3LTExLzEyIG14LWF1dG9cIj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB3LWZ1bGwgbWQ6dy05LzEyIGxnOnctOS8xMlwiPlxyXG4gICAgICAgICAgPEhlcm9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZXJvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnsgZnJvbnRNYXR0ZXIudGl0bGUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtYmFzZSBtdC01XCI+eyBmcm9udE1hdHRlci5hdXRob3IgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtYmFzZVwiPnsgZnJvbnRNYXR0ZXIuZGF0ZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0hlcm9IZWFkZXI+XHJcbiAgICAgICAgICA8L0hlcm9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbHN4KGNhcmRCYWNrZ3JvdW5kLCBkZWxheUVudHJhbmNlLCBcInAtNSByb3VuZGVkLXhsIHNoYWRvdy14bCBjb2xvci10cmFuc2l0aW9uIG1iLTVcIikgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ0ZXh0LW9yYW5nZS15ZWxsb3ctY3JheW9sYSB0ZXh0LXhsXCIsIHN0eWxlcy5jb250ZW50KX0+XHJcbiAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9