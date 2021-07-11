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
/* harmony import */ var C_Users_Svaug_Documents_Projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout/HeaderLayout */ "./components/layout/HeaderLayout.jsx");
/* harmony import */ var components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/layout/HeroLayout */ "./components/layout/HeroLayout.jsx");
/* harmony import */ var _styles_PostLayout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/PostLayout.module.css */ "./styles/PostLayout.module.css");
/* harmony import */ var _styles_PostLayout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_PostLayout_module_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\Projects\\portfolio\\templates\\PostLayout.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_Projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function ProjectLayout(props) {
  var children = props.children,
      frontMatter = props.frontMatter,
      darkBackground = props.darkBackground;
  var delayEntrance = "animate__animated animate__fadeInUp delay04";
  var cardBackground = darkBackground ? "bg-gray" : "bg-charcoal";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: frontMatter.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: frontMatter.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/images/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "main container mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        className: "md:my-48 sm:my-36 w-11/12 mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
          className: "container mx-auto w-full md:w-9/12 lg:w-9/12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_6__["HeroLayout"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_6__["HeroHeader"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                children: frontMatter.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "flex text-base mt-5",
                children: ["By ", frontMatter.author]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                className: "flex text-base",
                children: frontMatter.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(cardBackground, delayEntrance, "p-5 rounded-xl shadow-xl color-transition mb-5"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])("text-orange-yellow-crayola text-xl", _styles_PostLayout_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content),
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1Bvc3RMYXlvdXQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnJvbnRNYXR0ZXIiLCJkYXJrQmFja2dyb3VuZCIsImRlbGF5RW50cmFuY2UiLCJjYXJkQmFja2dyb3VuZCIsInRpdGxlIiwiYXV0aG9yIiwiZGF0ZSIsImNsc3giLCJzdHlsZXMiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUEsTUFDckNDLFFBRHFDLEdBQ0tELEtBREwsQ0FDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCLEdBQ0tGLEtBREwsQ0FDM0JFLFdBRDJCO0FBQUEsTUFDZEMsY0FEYyxHQUNLSCxLQURMLENBQ2RHLGNBRGM7QUFFM0MsTUFBTUMsYUFBYSxHQUFFLDZDQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBSUYsY0FBRCxHQUFtQixTQUFuQixHQUErQixhQUF0RDtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFTRCxXQUFXLENBQUNJO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFHSixXQUFXLENBQUNJO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBQ0UscUVBQUMsc0VBQUQsb0JBQW1CTixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGlCQUFTLEVBQUMsbUNBQWhCO0FBQUEsK0JBQ0U7QUFBUyxtQkFBUyxFQUFDLDhDQUFuQjtBQUFBLGtDQUNFLHFFQUFDLHVFQUFEO0FBQUEsbUNBQ0UscUVBQUMsdUVBQUQ7QUFBQSxzQ0FDRTtBQUFBLDBCQUFRRSxXQUFXLENBQUNJO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFNLHlCQUFTLEVBQUMscUJBQWhCO0FBQUEsa0NBQTJDSixXQUFXLENBQUNLLE1BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQU0seUJBQVMsRUFBQyxnQkFBaEI7QUFBQSwwQkFBbUNMLFdBQVcsQ0FBQ007QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFHQyxvREFBSSxDQUFDSixjQUFELEVBQWlCRCxhQUFqQixFQUFnQyxnREFBaEMsQ0FBckI7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUVLLG9EQUFJLENBQUMsb0NBQUQsRUFBdUNDLG9FQUFNLENBQUNDLE9BQTlDLENBQXBCO0FBQUEsd0JBQ0lWO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEO0tBbkN1QkYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9hZGRyLW1vZGVzLTY1MDIuMjhhYzAwODQxMTdlNDgzZWYxNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmltcG9ydCBIZWFkZXJMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0hlYWRlckxheW91dFwiXHJcbmltcG9ydCB7IEhlcm9IZWFkZXIsIEhlcm9MYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvSGVyb0xheW91dFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Bvc3RMYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMYXlvdXQocHJvcHMpIHtcclxuICBsZXQgeyBjaGlsZHJlbiwgZnJvbnRNYXR0ZXIsIGRhcmtCYWNrZ3JvdW5kIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGRlbGF5RW50cmFuY2UgPVwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluVXAgZGVsYXkwNFwiXHJcbiAgY29uc3QgY2FyZEJhY2tncm91bmQgPSAoZGFya0JhY2tncm91bmQpID8gXCJiZy1ncmF5XCIgOiBcImJnLWNoYXJjb2FsXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57IGZyb250TWF0dGVyLnRpdGxlIH08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9eyBmcm9udE1hdHRlci50aXRsZSB9IC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgPEhlYWRlckxheW91dCB7IC4uLnByb3BzIH0gLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZDpteS00OCBzbTpteS0zNiB3LTExLzEyIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctZnVsbCBtZDp3LTkvMTIgbGc6dy05LzEyXCI+XHJcbiAgICAgICAgICAgIDxIZXJvTGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxIZXJvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+eyBmcm9udE1hdHRlci50aXRsZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWJhc2UgbXQtNVwiPkJ5IHsgZnJvbnRNYXR0ZXIuYXV0aG9yIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IHRleHQtYmFzZVwiPnsgZnJvbnRNYXR0ZXIuZGF0ZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvSGVyb0hlYWRlcj5cclxuICAgICAgICAgICAgPC9IZXJvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbHN4KGNhcmRCYWNrZ3JvdW5kLCBkZWxheUVudHJhbmNlLCBcInAtNSByb3VuZGVkLXhsIHNoYWRvdy14bCBjb2xvci10cmFuc2l0aW9uIG1iLTVcIikgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInRleHQtb3JhbmdlLXllbGxvdy1jcmF5b2xhIHRleHQteGxcIiwgc3R5bGVzLmNvbnRlbnQpfT5cclxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==