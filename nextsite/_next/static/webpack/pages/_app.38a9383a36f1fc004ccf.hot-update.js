webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ui/ParticleBackground.jsx":
/*!**********************************************!*\
  !*** ./components/ui/ParticleBackground.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParticleBackground; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_ParticleBackground_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/ParticleBackground.module.css */ "./styles/ParticleBackground.module.css");
/* harmony import */ var _styles_ParticleBackground_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ParticleBackground_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\components\\ui\\ParticleBackground.jsx";



function ParticleBackground(_ref) {
  var darkMode = _ref.darkMode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: darkMode ? _styles_ParticleBackground_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.particlesDark : _styles_ParticleBackground_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.particlesLight,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
      params: {
        particles: {
          number: {
            density: {
              value: darkMode ? 5 : 20,
              enable: true,
              value_area: 600
            }
          },
          color: {
            value: darkMode ? '#FFFFFF' : '#e76f51'
          },
          shape: {
            stroke: {
              width: darkMode ? 5 : 10,
              color: darkMode ? '#888888' : '#e76f51'
            },
            polygon: {
              nb_sides: '7'
            },
            type: react_particles_js__WEBPACK_IMPORTED_MODULE_2__["ShapeType"].Circle
          },
          size: {
            value: darkMode ? 5 : 15,
            random: true
          },
          opacity: {
            anim: {
              enable: false
            }
          },
          lineLinked: {
            enable: !darkMode,
            distance: 200,
            color: '#f4a261',
            warp: true
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            outMode: 'bounce'
          }
        },
        polygon: {
          enable: true
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = ParticleBackground;

var _c;

$RefreshReg$(_c, "ParticleBackground");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9QYXJ0aWNsZUJhY2tncm91bmQuanN4Il0sIm5hbWVzIjpbIlBhcnRpY2xlQmFja2dyb3VuZCIsImRhcmtNb2RlIiwic3R5bGVzIiwicGFydGljbGVzRGFyayIsInBhcnRpY2xlc0xpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwiZGVuc2l0eSIsInZhbHVlIiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsInR5cGUiLCJTaGFwZVR5cGUiLCJDaXJjbGUiLCJzaXplIiwicmFuZG9tIiwib3BhY2l0eSIsImFuaW0iLCJsaW5lTGlua2VkIiwiZGlzdGFuY2UiLCJ3YXJwIiwibW92ZSIsInNwZWVkIiwib3V0TW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdlLFNBQVNBLGtCQUFULE9BQTBDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRXZELHNCQUNFO0FBQ0UsYUFBUyxFQUFJQSxRQUFELEdBQWFDLDRFQUFNLENBQUNDLGFBQXBCLEdBQW9DRCw0RUFBTSxDQUFDRSxjQUR6RDtBQUFBLDJCQUVFLHFFQUFDLHlEQUFEO0FBQ0UsWUFBTSxFQUFFO0FBQ05DLGlCQUFTLEVBQUU7QUFDVEMsZ0JBQU0sRUFBRTtBQUNOQyxtQkFBTyxFQUFFO0FBQ1BDLG1CQUFLLEVBQUVQLFFBQVEsR0FBRyxDQUFILEdBQU8sRUFEZjtBQUVQUSxvQkFBTSxFQUFFLElBRkQ7QUFHUEMsd0JBQVUsRUFBRTtBQUhMO0FBREgsV0FEQztBQVFUQyxlQUFLLEVBQUU7QUFDTEgsaUJBQUssRUFBRVAsUUFBUSxHQUFHLFNBQUgsR0FBZTtBQUR6QixXQVJFO0FBV1RXLGVBQUssRUFBRTtBQUNMQyxrQkFBTSxFQUFFO0FBQ05DLG1CQUFLLEVBQUViLFFBQVEsR0FBRyxDQUFILEdBQU8sRUFEaEI7QUFFTlUsbUJBQUssRUFBRVYsUUFBUSxHQUFHLFNBQUgsR0FBZTtBQUZ4QixhQURIO0FBS0xjLG1CQUFPLEVBQUU7QUFDUEMsc0JBQVEsRUFBRTtBQURILGFBTEo7QUFRTEMsZ0JBQUksRUFBRUMsNERBQVMsQ0FBQ0M7QUFSWCxXQVhFO0FBcUJUQyxjQUFJLEVBQUU7QUFDSlosaUJBQUssRUFBRVAsUUFBUSxHQUFHLENBQUgsR0FBTyxFQURsQjtBQUVKb0Isa0JBQU0sRUFBRTtBQUZKLFdBckJHO0FBeUJUQyxpQkFBTyxFQUFFO0FBQ1BDLGdCQUFJLEVBQUU7QUFDSmQsb0JBQU0sRUFBRTtBQURKO0FBREMsV0F6QkE7QUE4QlRlLG9CQUFVLEVBQUU7QUFDVmYsa0JBQU0sRUFBRSxDQUFDUixRQURDO0FBRVZ3QixvQkFBUSxFQUFFLEdBRkE7QUFHVmQsaUJBQUssRUFBRSxTQUhHO0FBSVZlLGdCQUFJLEVBQUU7QUFKSSxXQTlCSDtBQW9DVEMsY0FBSSxFQUFFO0FBQ0psQixrQkFBTSxFQUFFLElBREo7QUFFSlksa0JBQU0sRUFBRSxJQUZKO0FBR0pPLGlCQUFLLEVBQUUsQ0FISDtBQUlKQyxtQkFBTyxFQUFFO0FBSkw7QUFwQ0csU0FETDtBQTRDTmQsZUFBTyxFQUFFO0FBQ1BOLGdCQUFNLEVBQUU7QUFERDtBQTVDSDtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3REQ7S0ExRHVCVCxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM4YTkzODNhMzZmMWZjMDA0Y2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFydGljbGVzLCB7IFNoYXBlVHlwZSB9IGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1BhcnRpY2xlQmFja2dyb3VuZC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRpY2xlQmFja2dyb3VuZCh7IGRhcmtNb2RlIH0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXsgKGRhcmtNb2RlKSA/IHN0eWxlcy5wYXJ0aWNsZXNEYXJrIDogc3R5bGVzLnBhcnRpY2xlc0xpZ2h0IH0+XHJcbiAgICAgIDxQYXJ0aWNsZXNcclxuICAgICAgICBwYXJhbXM9e3tcclxuICAgICAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGFya01vZGUgPyA1IDogMjAsXHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA2MDAsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBkYXJrTW9kZSA/ICcjRkZGRkZGJyA6ICcjZTc2ZjUxJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGRhcmtNb2RlID8gNSA6IDEwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtNb2RlID8gJyM4ODg4ODgnIDogJyNlNzZmNTEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcG9seWdvbjoge1xyXG4gICAgICAgICAgICAgICAgbmJfc2lkZXM6ICc3JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHR5cGU6IFNoYXBlVHlwZS5DaXJjbGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBkYXJrTW9kZSA/IDUgOiAxNSxcclxuICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGluZUxpbmtlZDoge1xyXG4gICAgICAgICAgICAgIGVuYWJsZTogIWRhcmtNb2RlLFxyXG4gICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjZjRhMjYxJyxcclxuICAgICAgICAgICAgICB3YXJwOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgICBvdXRNb2RlOiAnYm91bmNlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=