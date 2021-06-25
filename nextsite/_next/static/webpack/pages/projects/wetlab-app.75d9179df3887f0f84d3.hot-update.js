webpackHotUpdate_N_E("pages/projects/wetlab-app",{

/***/ "./components/ui/Link.jsx":
/*!********************************!*\
  !*** ./components/ui/Link.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\components\\ui\\Link.jsx",
    _s = $RefreshSig$();




function Link(_ref) {
  _s();

  var content = _ref.content,
      destination = _ref.destination,
      animated = _ref.animated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      mouseOver = _useState[0],
      setMouseOver = _useState[1];

  function handleMouseOver(e) {
    if (e.type === "mouseover") return setMouseOver(true);
    return setMouseOver(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: destination,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseOver,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])("link my-0", "leading-normal lg:leading-normal xl:leading-normal", "text-5xl lg:text-5xl xl:text-7xl", animated && mouseOver && "animate__animated animate__headShake"),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(Link, "WGkgYAF/KHjgYvhoRBbHveckBQU=");

_c = Link;

var _c;

$RefreshReg$(_c, "Link");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./templates/ProjectLayout.jsx":
/*!*************************************!*\
  !*** ./templates/ProjectLayout.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectLayout; });
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/HeaderLayout */ "./components/layout/HeaderLayout.jsx");
/* harmony import */ var components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/HeroLayout */ "./components/layout/HeroLayout.jsx");
/* harmony import */ var components_ui_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ui/Link */ "./components/ui/Link.jsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_ProjectLayout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ProjectLayout.module.css */ "./styles/ProjectLayout.module.css");
/* harmony import */ var _styles_ProjectLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectLayout_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\templates\\ProjectLayout.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function ProjectLayout(props) {
  var children = props.children,
      frontMatter = props.frontMatter;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "main container mx-auto",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_ui_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Projects.",
      destination: "/projects",
      animated: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "md:my-48 sm:my-36 w-11/12 mx-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
        className: "container mx-auto w-full md:w-9/12 lg:w-6/12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_3__["HeroLayout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeroLayout__WEBPACK_IMPORTED_MODULE_3__["HeroHeader"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: frontMatter.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: "max-h-full rounded-xl rounded-tr-xl object-scale-down mx-auto w-full",
            src: __webpack_require__("./ sync recursive ^\\.\\/public.*$")("./public".concat(frontMatter.imageLink)),
            width: "330",
            height: "250"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])("text-3 text-xl", _styles_ProjectLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content),
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9MaW5rLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1Byb2plY3RMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJjb250ZW50IiwiZGVzdGluYXRpb24iLCJhbmltYXRlZCIsInVzZVN0YXRlIiwibW91c2VPdmVyIiwic2V0TW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdmVyIiwiZSIsInR5cGUiLCJjbHN4IiwiUHJvamVjdExheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJmcm9udE1hdHRlciIsInRpdGxlIiwicmVxdWlyZSIsImltYWdlTGluayIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUM3QkMsc0RBQVEsQ0FBQyxLQUFELENBRHFCO0FBQUEsTUFDeERDLFNBRHdEO0FBQUEsTUFDN0NDLFlBRDZDOztBQUcvRCxXQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMxQixRQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxXQUFmLEVBQTRCLE9BQU9ILFlBQVksQ0FBQyxJQUFELENBQW5CO0FBQzVCLFdBQU9BLFlBQVksQ0FBQyxLQUFELENBQW5CO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBVSxRQUFJLEVBQUVKLFdBQWhCO0FBQUEsMkJBQ0U7QUFDRSxpQkFBVyxFQUFHSyxlQURoQjtBQUVFLGtCQUFZLEVBQUdBLGVBRmpCO0FBR0UsZUFBUyxFQUFFRyxvREFBSSxDQUNiLFdBRGEsRUFFYixvREFGYSxFQUdiLGtDQUhhLEVBSWJQLFFBQVEsSUFBSUUsU0FBWixJQUF5QixzQ0FKWixDQUhqQjtBQUFBLGdCQVVLSjtBQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBeEJ1QkQsSTs7S0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNXLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUEsTUFDckNDLFFBRHFDLEdBQ1hELEtBRFcsQ0FDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCLEdBQ1hGLEtBRFcsQ0FDM0JFLFdBRDJCO0FBR3pDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFDUSxhQUFPLEVBQUMsV0FEaEI7QUFFUSxpQkFBVyxFQUFDLFdBRnBCO0FBR1EsY0FBUSxFQUFFO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLHNFQUFELG9CQUFtQkYsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBTSxlQUFTLEVBQUMsbUNBQWhCO0FBQUEsNkJBQ0U7QUFBUyxpQkFBUyxFQUFDLDhDQUFuQjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQUEsaUNBQ0UscUVBQUMsdUVBQUQ7QUFBQSxtQ0FDRTtBQUFBLHdCQUFRRSxXQUFXLENBQUNDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLHNFQURaO0FBRUUsZUFBRyxFQUFHQywwREFBUSxrQkFBYUYsV0FBVyxDQUFDRyxTQUExQixFQUZmO0FBR0UsaUJBQUssRUFBQyxLQUhSO0FBR2Msa0JBQU0sRUFBQztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQWVFO0FBQUssbUJBQVMsRUFBRVAsb0RBQUksQ0FBQyxnQkFBRCxFQUFtQlEsdUVBQU0sQ0FBQ2pCLE9BQTFCLENBQXBCO0FBQUEsb0JBQ0lZO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkg7S0FsQ3VCRixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL3dldGxhYi1hcHAuNzVkOTE3OWRmMzg4N2YwZjg0ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmsoeyBjb250ZW50LCBkZXN0aW5hdGlvbiwgYW5pbWF0ZWQgfSkge1xyXG4gIGNvbnN0IFttb3VzZU92ZXIsIHNldE1vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKGUpIHtcclxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VvdmVyXCIpIHJldHVybiBzZXRNb3VzZU92ZXIodHJ1ZSlcclxuICAgIHJldHVybiBzZXRNb3VzZU92ZXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2Rlc3RpbmF0aW9ufT5cclxuICAgICAgPGFcclxuICAgICAgICBvbk1vdXNlT3Zlcj17IGhhbmRsZU1vdXNlT3ZlciB9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsgaGFuZGxlTW91c2VPdmVyIH1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICBcImxpbmsgbXktMFwiLCBcclxuICAgICAgICAgIFwibGVhZGluZy1ub3JtYWwgbGc6bGVhZGluZy1ub3JtYWwgeGw6bGVhZGluZy1ub3JtYWxcIixcclxuICAgICAgICAgIFwidGV4dC01eGwgbGc6dGV4dC01eGwgeGw6dGV4dC03eGxcIixcclxuICAgICAgICAgIGFuaW1hdGVkICYmIG1vdXNlT3ZlciAmJiBcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2hlYWRTaGFrZVwiLFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gIClcclxufSIsImltcG9ydCBIZWFkZXJMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0hlYWRlckxheW91dFwiXHJcbmltcG9ydCB7IEhlcm9IZWFkZXIsIEhlcm9MYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvSGVyb0xheW91dFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJjb21wb25lbnRzL3VpL0xpbmtcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9qZWN0TGF5b3V0Lm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TGF5b3V0KHByb3BzKSB7XHJcbiAgbGV0IHsgY2hpbGRyZW4sIGZyb250TWF0dGVyIH0gPSBwcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbiBjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUHJvamVjdHMuXCJcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uPVwiL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPEhlYWRlckxheW91dCB7IC4uLnByb3BzIH0gLz5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZDpteS00OCBzbTpteS0zNiB3LTExLzEyIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHctZnVsbCBtZDp3LTkvMTIgbGc6dy02LzEyXCI+XHJcbiAgICAgICAgICAgIDxIZXJvTGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxIZXJvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+eyBmcm9udE1hdHRlci50aXRsZSB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvSGVyb0hlYWRlcj5cclxuICAgICAgICAgICAgPC9IZXJvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtZnVsbCByb3VuZGVkLXhsIHJvdW5kZWQtdHIteGwgb2JqZWN0LXNjYWxlLWRvd24gbXgtYXV0byB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXsgcmVxdWlyZShgLi4vcHVibGljJHsgZnJvbnRNYXR0ZXIuaW1hZ2VMaW5rIH1gKX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzMwXCIgaGVpZ2h0PVwiMjUwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwidGV4dC0zIHRleHQteGxcIiwgc3R5bGVzLmNvbnRlbnQpfT5cclxuICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=