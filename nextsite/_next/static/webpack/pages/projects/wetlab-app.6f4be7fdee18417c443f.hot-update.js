webpackHotUpdate_N_E("pages/projects/wetlab-app",{

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_layout_HeaderLayout__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "md:my-48 sm:my-36 w-11/12 mx-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_ui_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        content: "Projects.",
        destination: "/projects",
        animated: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL1Byb2plY3RMYXlvdXQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZnJvbnRNYXR0ZXIiLCJ0aXRsZSIsInJlcXVpcmUiLCJpbWFnZUxpbmsiLCJjbHN4Iiwic3R5bGVzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQSxNQUNyQ0MsUUFEcUMsR0FDWEQsS0FEVyxDQUNyQ0MsUUFEcUM7QUFBQSxNQUMzQkMsV0FEMkIsR0FDWEYsS0FEVyxDQUMzQkUsV0FEMkI7QUFHekMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQSw0QkFDRSxxRUFBQyxzRUFBRCxvQkFBbUJGLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sZUFBUyxFQUFDLG1DQUFoQjtBQUFBLDhCQUNBLHFFQUFDLDBEQUFEO0FBQ0UsZUFBTyxFQUFDLFdBRFY7QUFFRSxtQkFBVyxFQUFDLFdBRmQ7QUFHRSxnQkFBUSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBTUU7QUFBUyxpQkFBUyxFQUFDLDhDQUFuQjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQUEsaUNBQ0UscUVBQUMsdUVBQUQ7QUFBQSxtQ0FDRTtBQUFBLHdCQUFRRSxXQUFXLENBQUNDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLHNFQURaO0FBRUUsZUFBRyxFQUFHQywwREFBUSxrQkFBYUYsV0FBVyxDQUFDRyxTQUExQixFQUZmO0FBR0UsaUJBQUssRUFBQyxLQUhSO0FBR2Msa0JBQU0sRUFBQztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQWVFO0FBQUssbUJBQVMsRUFBRUMsb0RBQUksQ0FBQyxnQkFBRCxFQUFtQkMsdUVBQU0sQ0FBQ0MsT0FBMUIsQ0FBcEI7QUFBQSxvQkFDSVA7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JIO0tBbEN1QkYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy93ZXRsYWItYXBwLjZmNGJlN2ZkZWUxODQxN2M0NDNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9IZWFkZXJMYXlvdXRcIlxyXG5pbXBvcnQgeyBIZXJvSGVhZGVyLCBIZXJvTGF5b3V0IH0gZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0hlcm9MYXlvdXRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwiY29tcG9uZW50cy91aS9MaW5rXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvamVjdExheW91dC5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdExheW91dChwcm9wcykge1xyXG4gIGxldCB7IGNoaWxkcmVuLCBmcm9udE1hdHRlciB9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICA8SGVhZGVyTGF5b3V0IHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kOm15LTQ4IHNtOm15LTM2IHctMTEvMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBjb250ZW50PVwiUHJvamVjdHMuXCJcclxuICAgICAgICAgIGRlc3RpbmF0aW9uPVwiL3Byb2plY3RzXCJcclxuICAgICAgICAgIGFuaW1hdGVkPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB3LWZ1bGwgbWQ6dy05LzEyIGxnOnctNi8xMlwiPlxyXG4gICAgICAgICAgICA8SGVyb0xheW91dD5cclxuICAgICAgICAgICAgICA8SGVyb0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnsgZnJvbnRNYXR0ZXIudGl0bGUgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0hlcm9IZWFkZXI+XHJcbiAgICAgICAgICAgIDwvSGVyb0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLWZ1bGwgcm91bmRlZC14bCByb3VuZGVkLXRyLXhsIG9iamVjdC1zY2FsZS1kb3duIG14LWF1dG8gdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIHNyYz17IHJlcXVpcmUoYC4uL3B1YmxpYyR7IGZyb250TWF0dGVyLmltYWdlTGluayB9YCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMzMFwiIGhlaWdodD1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInRleHQtMyB0ZXh0LXhsXCIsIHN0eWxlcy5jb250ZW50KX0+XHJcbiAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9