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
  var cardClass = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])("bg-1 shadow-2xl rounded-xl projectCard flex flex-col justify-between");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cardClass,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "rounded-t-xl w-100 object-contain",
        src: __webpack_require__("./ sync recursive ^\\.\\/public.*$")("./public".concat(imageLink)),
        width: "400",
        height: "300"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-3 text-xl xl:text-4xl p-3",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-3 text-md xl:text-2xl px-3 pb-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUHJvamVjdENhcmQuanN4Il0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VMaW5rIiwiZ2l0aHViTGluayIsImNhcmRDbGFzcyIsImNsc3giLCJyZXF1aXJlIiwiZmFHaXRodWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBLE1BQ2xDQyxLQURrQyxHQUNXRCxLQURYLENBQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxXQUQyQixHQUNXRixLQURYLENBQzNCRSxXQUQyQjtBQUFBLE1BQ2RDLFNBRGMsR0FDV0gsS0FEWCxDQUNkRyxTQURjO0FBQUEsTUFDSEMsVUFERyxHQUNXSixLQURYLENBQ0hJLFVBREc7QUFJekMsTUFBTUMsU0FBUyxHQUFHQyxvREFBSSxDQUNwQixzRUFEb0IsQ0FBdEI7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBR0QsU0FBakI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBQyxtQ0FEWjtBQUVFLFdBQUcsRUFBR0UsMERBQVEsa0JBQWdCSixTQUFqQixFQUZmO0FBR0UsYUFBSyxFQUFDLEtBSFI7QUFHYyxjQUFNLEVBQUM7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUEsb0JBQWdERjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBRyxjQUFJLEVBQUdHLFVBQVY7QUFBdUIsbUJBQVMsRUFBQyw4QkFBakM7QUFBQSxpQ0FDRSxxRUFBQyw4RUFBRDtBQUFpQixnQkFBSSxFQUFHSSwyRUFBeEI7QUFBbUMscUJBQVMsRUFBQyxRQUE3QztBQUFzRCxnQkFBSSxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZ0JFO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLHNDQUFiO0FBQUEsa0JBQXNETjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQTlCdUJILFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMGRjMGRjOGU3NDkwYjQzZDM2MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENhcmQocHJvcHMpIHtcclxuICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZUxpbmssIGdpdGh1Ykxpbmt9ID0gcHJvcHNcclxuXHJcblxyXG4gIGNvbnN0IGNhcmRDbGFzcyA9IGNsc3goXHJcbiAgICBcImJnLTEgc2hhZG93LTJ4bCByb3VuZGVkLXhsIHByb2plY3RDYXJkIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGNhcmRDbGFzcyB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bCB3LTEwMCBvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICBzcmM9eyByZXF1aXJlKGAuLi8uLi9wdWJsaWMkeyBpbWFnZUxpbmsgfWApfVxyXG4gICAgICAgICAgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLXQteGxcIiBzcmM9eyBpbWFnZUxpbmsgfSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjE1MFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTMgdGV4dC14bCB4bDp0ZXh0LTR4bCBwLTNcIj57IHRpdGxlIH08L3A+XHJcbiAgICAgICAgICA8YSBocmVmPXsgZ2l0aHViTGluayB9IGNsYXNzTmFtZT1cInhsOm1heC1oLTEwIG1heC1oLTggbS0zIHctMTBcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFHaXRodWIgfSBjbGFzc05hbWU9XCJoLWZ1bGxcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTMgdGV4dC1tZCB4bDp0ZXh0LTJ4bCBweC0zIHBiLTNcIj57IGRlc2NyaXB0aW9uIH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==