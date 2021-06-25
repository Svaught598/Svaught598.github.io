webpackHotUpdate_N_E("pages/projects/chip-8-emulator",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9MaW5rLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1Byb2plY3RMYXlvdXQuanN4Il0sIm5hbWVzIjpbIkxpbmsiLCJjb250ZW50IiwiZGVzdGluYXRpb24iLCJhbmltYXRlZCIsInVzZVN0YXRlIiwibW91c2VPdmVyIiwic2V0TW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdmVyIiwiZSIsInR5cGUiLCJjbHN4IiwiUHJvamVjdExheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJmcm9udE1hdHRlciIsInRpdGxlIiwicmVxdWlyZSIsImltYWdlTGluayIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUM3QkMsc0RBQVEsQ0FBQyxLQUFELENBRHFCO0FBQUEsTUFDeERDLFNBRHdEO0FBQUEsTUFDN0NDLFlBRDZDOztBQUcvRCxXQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMxQixRQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxXQUFmLEVBQTRCLE9BQU9ILFlBQVksQ0FBQyxJQUFELENBQW5CO0FBQzVCLFdBQU9BLFlBQVksQ0FBQyxLQUFELENBQW5CO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBVSxRQUFJLEVBQUVKLFdBQWhCO0FBQUEsMkJBQ0U7QUFDRSxpQkFBVyxFQUFHSyxlQURoQjtBQUVFLGtCQUFZLEVBQUdBLGVBRmpCO0FBR0UsZUFBUyxFQUFFRyxvREFBSSxDQUNiLFdBRGEsRUFFYixvREFGYSxFQUdiLGtDQUhhLEVBSWJQLFFBQVEsSUFBSUUsU0FBWixJQUF5QixzQ0FKWixDQUhqQjtBQUFBLGdCQVVLSjtBQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBeEJ1QkQsSTs7S0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNXLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUEsTUFDckNDLFFBRHFDLEdBQ1hELEtBRFcsQ0FDckNDLFFBRHFDO0FBQUEsTUFDM0JDLFdBRDJCLEdBQ1hGLEtBRFcsQ0FDM0JFLFdBRDJCO0FBR3pDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFDUSxhQUFPLEVBQUMsV0FEaEI7QUFFUSxpQkFBVyxFQUFDLFdBRnBCO0FBR1EsY0FBUSxFQUFFO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLHNFQUFELG9CQUFtQkYsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBTSxlQUFTLEVBQUMsbUNBQWhCO0FBQUEsNkJBQ0U7QUFBUyxpQkFBUyxFQUFDLDhDQUFuQjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQUEsaUNBQ0UscUVBQUMsdUVBQUQ7QUFBQSxtQ0FDRTtBQUFBLHdCQUFRRSxXQUFXLENBQUNDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLHNFQURaO0FBRUUsZUFBRyxFQUFHQywwREFBUSxrQkFBYUYsV0FBVyxDQUFDRyxTQUExQixFQUZmO0FBR0UsaUJBQUssRUFBQyxLQUhSO0FBR2Msa0JBQU0sRUFBQztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQWVFO0FBQUssbUJBQVMsRUFBRVAsb0RBQUksQ0FBQyxnQkFBRCxFQUFtQlEsdUVBQU0sQ0FBQ2pCLE9BQTFCLENBQXBCO0FBQUEsb0JBQ0lZO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkg7S0FsQ3VCRixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL2NoaXAtOC1lbXVsYXRvci43NWQ5MTc5ZGYzODg3ZjBmODRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayh7IGNvbnRlbnQsIGRlc3RpbmF0aW9uLCBhbmltYXRlZCB9KSB7XHJcbiAgY29uc3QgW21vdXNlT3Zlciwgc2V0TW91c2VPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoZSkge1xyXG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZW92ZXJcIikgcmV0dXJuIHNldE1vdXNlT3Zlcih0cnVlKVxyXG4gICAgcmV0dXJuIHNldE1vdXNlT3ZlcihmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17ZGVzdGluYXRpb259PlxyXG4gICAgICA8YVxyXG4gICAgICAgIG9uTW91c2VPdmVyPXsgaGFuZGxlTW91c2VPdmVyIH1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eyBoYW5kbGVNb3VzZU92ZXIgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgIFwibGluayBteS0wXCIsIFxyXG4gICAgICAgICAgXCJsZWFkaW5nLW5vcm1hbCBsZzpsZWFkaW5nLW5vcm1hbCB4bDpsZWFkaW5nLW5vcm1hbFwiLFxyXG4gICAgICAgICAgXCJ0ZXh0LTV4bCBsZzp0ZXh0LTV4bCB4bDp0ZXh0LTd4bFwiLFxyXG4gICAgICAgICAgYW5pbWF0ZWQgJiYgbW91c2VPdmVyICYmIFwiYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9faGVhZFNoYWtlXCIsXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKVxyXG59IiwiaW1wb3J0IEhlYWRlckxheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyTGF5b3V0XCJcclxuaW1wb3J0IHsgSGVyb0hlYWRlciwgSGVyb0xheW91dCB9IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9IZXJvTGF5b3V0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvdWkvTGlua1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2plY3RMYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMYXlvdXQocHJvcHMpIHtcclxuICBsZXQgeyBjaGlsZHJlbiwgZnJvbnRNYXR0ZXIgfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluIGNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJQcm9qZWN0cy5cIlxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb249XCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8SGVhZGVyTGF5b3V0IHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kOm15LTQ4IHNtOm15LTM2IHctMTEvMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdy1mdWxsIG1kOnctOS8xMiBsZzp3LTYvMTJcIj5cclxuICAgICAgICAgICAgPEhlcm9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPEhlcm9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZyb250TWF0dGVyLnRpdGxlIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9IZXJvSGVhZGVyPlxyXG4gICAgICAgICAgICA8L0hlcm9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtaC1mdWxsIHJvdW5kZWQteGwgcm91bmRlZC10ci14bCBvYmplY3Qtc2NhbGUtZG93biBteC1hdXRvIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9eyByZXF1aXJlKGAuLi9wdWJsaWMkeyBmcm9udE1hdHRlci5pbWFnZUxpbmsgfWApfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMzBcIiBoZWlnaHQ9XCIyNTBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ0ZXh0LTMgdGV4dC14bFwiLCBzdHlsZXMuY29udGVudCl9PlxyXG4gICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==