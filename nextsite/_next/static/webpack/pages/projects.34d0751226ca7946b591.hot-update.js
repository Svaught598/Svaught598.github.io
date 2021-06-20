webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/layout/ProjectCard.jsx":
/*!*******************************************!*\
  !*** ./components/layout/ProjectCard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\components\\layout\\ProjectCard.jsx";






function ProjectCard(props) {
  var title = props.title,
      description = props.description,
      imageLink = props.imageLink,
      githubLink = props.githubLink;
  var cardClass = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])("bg-1 shadow-2xl rounded-xl flex flex-col justify-between", "grow projectCard");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cardClass,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-80",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "rounded-t-xl w-100 object-cover max-h-full",
          src: __webpack_require__("./ sync recursive ^\\.\\/public.*$")("./public".concat(imageLink)),
          width: "500",
          height: "325"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-3 text-xl xl:text-4xl p-3",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: githubLink,
          className: "xl:max-h-10 max-h-8 m-3 w-10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"],
            className: "h-full",
            fill: "black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-3 text-md xl:text-2xl px-3 pb-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = ProjectCard;

var _c;

$RefreshReg$(_c, "ProjectCard");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUHJvamVjdENhcmQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VMaW5rIiwiZ2l0aHViTGluayIsImNhcmRDbGFzcyIsImNsc3giLCJyZXF1aXJlIiwiZmFHaXRodWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBLE1BQ2xDQyxLQURrQyxHQUNXRCxLQURYLENBQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxXQUQyQixHQUNXRixLQURYLENBQzNCRSxXQUQyQjtBQUFBLE1BQ2RDLFNBRGMsR0FDV0gsS0FEWCxDQUNkRyxTQURjO0FBQUEsTUFDSEMsVUFERyxHQUNXSixLQURYLENBQ0hJLFVBREc7QUFJekMsTUFBTUMsU0FBUyxHQUFHQyxvREFBSSxDQUNwQiwwREFEb0IsRUFFcEIsa0JBRm9CLENBQXRCO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUdELFNBQWpCO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyw0Q0FEWjtBQUVFLGFBQUcsRUFBR0UsMERBQVEsa0JBQWdCSixTQUFqQixFQUZmO0FBR0UsZUFBSyxFQUFDLEtBSFI7QUFHYyxnQkFBTSxFQUFDO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsZ0NBQWI7QUFBQSxvQkFBZ0RGO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLGNBQUksRUFBR0csVUFBVjtBQUF1QixtQkFBUyxFQUFDLDhCQUFqQztBQUFBLGlDQUNFLHFFQUFDLDhFQUFEO0FBQWlCLGdCQUFJLEVBQUdJLDJFQUF4QjtBQUFtQyxxQkFBUyxFQUFDLFFBQTdDO0FBQXNELGdCQUFJLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFrQkU7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsc0NBQWI7QUFBQSxrQkFBc0ROO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEO0tBakN1QkgsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4zNGQwNzUxMjI2Y2E3OTQ2YjU5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZChwcm9wcykge1xyXG4gIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlTGluaywgZ2l0aHViTGlua30gPSBwcm9wc1xyXG5cclxuXHJcbiAgY29uc3QgY2FyZENsYXNzID0gY2xzeChcclxuICAgIFwiYmctMSBzaGFkb3ctMnhsIHJvdW5kZWQteGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIixcclxuICAgIFwiZ3JvdyBwcm9qZWN0Q2FyZFwiXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjYXJkQ2xhc3MgfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtODBcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC10LXhsIHctMTAwIG9iamVjdC1jb3ZlciBtYXgtaC1mdWxsXCJcclxuICAgICAgICAgICAgc3JjPXsgcmVxdWlyZShgLi4vLi4vcHVibGljJHsgaW1hZ2VMaW5rIH1gKX1cclxuICAgICAgICAgICAgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCIzMjVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bFwiIHNyYz17IGltYWdlTGluayB9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMTUwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMyB0ZXh0LXhsIHhsOnRleHQtNHhsIHAtM1wiPnsgdGl0bGUgfTwvcD5cclxuICAgICAgICAgIDxhIGhyZWY9eyBnaXRodWJMaW5rIH0gY2xhc3NOYW1lPVwieGw6bWF4LWgtMTAgbWF4LWgtOCBtLTMgdy0xMFwiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYUdpdGh1YiB9IGNsYXNzTmFtZT1cImgtZnVsbFwiIGZpbGw9XCJibGFja1wiLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMyB0ZXh0LW1kIHhsOnRleHQtMnhsIHB4LTMgcGItM1wiPnsgZGVzY3JpcHRpb24gfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9