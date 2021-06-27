webpackHotUpdate_N_E("pages/projects/chip-8-emulator",{

/***/ "./pages/projects/chip-8-emulator.mdx":
/*!********************************************!*\
  !*** ./pages/projects/chip-8-emulator.mdx ***!
  \********************************************/
/*! exports provided: frontMatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontMatter", function() { return frontMatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_templates_ProjectLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/ProjectLayout */ "./templates/ProjectLayout.jsx");


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\pages\\projects\\chip-8-emulator.mdx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


var frontMatter = {
  title: 'Chip-8 Emulator',
  description: 'My maiden voyage into emulation development',
  githubLink: 'https://github.com/Svaught598/Chip8Emulator',
  imageLink: '/images/chip8.png',
  layout: 'ProjectLayout',
  __resourcePath: 'projects/chip-8-emulator.mdx',
  __scans: {}
};
var layoutProps = {
  frontMatter: frontMatter
};
var MDXLayout = C_Users_Svaug_Documents_projects_portfolio_templates_ProjectLayout__WEBPACK_IMPORTED_MODULE_4__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Code is just data"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "and nothing makes that more clear than working on an emulator. The CHIP-8 emulator is the 'Hello World!' of emulation development, and writing the code to get pong running showed me sooooo much about how computers work at a lower level. Unlike many systems, the CHIP-8 is actually an abstract machine (not unlike a language interpreter) that is capable of fetching & executing opcodes and manipulating data stored in memory. Here's what really shocked me: the opcodes are just bytes! the data is just bytes! IT'S ALL BYTES!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "So yeah, I was bewildered. Not sure what I expected, but the elegance of interpretting chunks of data in different contexts really surprised me. And after writing some really simple bitwise operations and one complex one (curse you DXYN), I had the emulator up and running. It was a blast to code this project up, and something I may take up again in the future to learn new programming languages. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "The real difficulty in the project was learning Java & OOP fundamentals alongside the CHIP-8 spec itself. Challenging might not be the right description, but research-intensive? Definitely. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "Problems"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "I haven\u2019t used Java extensively, and this project hardly made me an expert, but I have become much more familiar with the language as a result. There were some pretty complex parts to making this emulator, the most challenging of which had to do with the Event dispatch thread and the opcode 0xFX0A. Anyone familiar enough with the CHIP-8 to recognize opcodes might see where this is going: any time the CPU interpreted 0xFX0A, it paused the thread, which meant that input couldn\u2019t be read."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "Opcode 0xFX0A is pretty simple. At least, my implementation is. It tells the CPU \u201Chey, why don\u2019t you sleep() until a key is pressed?\". This becomes a problem in a single threaded application since continuous calls of sleep() end up blocking IO, so the program is never able to tell when a key is pressed. So in plainspeak, an infitite loop. I ended up fixing the issue by dispatching UI/IO events on the Event Dispatch Thread provided by swing, while running other logic on a separate thread. This was a pretty nice solution, but I do wish I would\u2019ve spent more time planning the implementation before jumping right into the code. This brings us to the biggest thing I learned:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "The Importance of Planning"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "As a Physics graduate (now aspiring developer) I haven\u2019t had the proper training in computer science fundamentals and best practices for Object-Oriented Programming (OOP). This isn\u2019t to say I suck (I mean, I could be better), but that I didn\u2019t even know what to consider while building this application. This lack of planning - in a Java project, mind you - resulted in a mess of everything being public. This wasn\u2019t a huge issue for this small project, but in a larger project it could manifest as having pieces of code that are insanely complex."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "For example, say there is a method in CPU called initializeMemory() that does the heavy lifting of setting the memory, register, timers, etc\u2026 all to 0. Now we make the method public and call it from the CPU constructor upon startup AND call it from the GUI panel anytime someone presses reset. Seems like a win-win. Some time passes, and it is decided that the current implementation of reset is not what is needed; the application actually needs to preserve some memory upon resetting the system! now there are two options, neither of which are super enticing:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, "Option 1."), " Expose a new method in CPU called reset(). If the CPU and GUI panel are the only objects using initializeMemory(), great! That means this was caught early, and the code isn\u2019t all tangly and gross. But imagine every single one of your test cases calls initializeMemory(). We can\u2019t just make the old method private, or we can\u2019t run the tests! Now there are two public methods that are confusingly similar. This branches into a subdecision of refactoring tests or deal with ambiguity. The former makes the code maintainable but takes a lot longer and the second is a quick fix that makes additional changes more complex, but a little bit of planning would have circumvented this entire fiasco. Needless to say, I have become acquainted with the concept of technical debt. Oh yeah, and option two\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, "Option 2."), " There is no option two. I lied. Sorry. The two options are really just one option in a trenchcoat that will either mug you or make you balance their checkbook. Just do things right & plan."));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c;

$RefreshReg$(_c, "MDXContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvY2hpcC04LWVtdWxhdG9yLm1keCJdLCJuYW1lcyI6WyJmcm9udE1hdHRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnaXRodWJMaW5rIiwiaW1hZ2VMaW5rIiwibGF5b3V0IiwiX19yZXNvdXJjZVBhdGgiLCJfX3NjYW5zIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNPLElBQU1BLFdBQVcsR0FBRztBQUN6QkMsT0FBSyxFQUFFLGlCQURrQjtBQUV6QkMsYUFBVyxFQUFFLDZDQUZZO0FBR3pCQyxZQUFVLEVBQUUsNkNBSGE7QUFJekJDLFdBQVMsRUFBRSxtQkFKYztBQUt6QkMsUUFBTSxFQUFFLGVBTGlCO0FBTXpCQyxnQkFBYyxFQUFFLDhCQU5TO0FBT3pCQyxTQUFPLEVBQUU7QUFQZ0IsQ0FBcEI7QUFVUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJSLGFBQVcsRUFBWEE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNUyxTQUFTLEdBQUdDLDBHQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGdEQUFlTCxXQUFmLEdBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbWhCQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzWkFOSyxFQU9MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc01BUEssRUFRTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJLLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0ZkFUSyxFQVVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNnJCQVZLLEVBV0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FYSyxFQVlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2pCQVpLLEVBYUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4akJBYkssRUFjTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxtekJBZEssRUFlTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxrTUFmSyxDQUFQO0FBaUJEO0tBckJ1QkQsVTtBQXVCeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL2NoaXAtOC1lbXVsYXRvci44NmMyNzBkMDY4NDM0OTcyN2M3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IExheW91dCwgeyAgfSBmcm9tICdDOi9Vc2Vycy9TdmF1Zy9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvL3RlbXBsYXRlcy9Qcm9qZWN0TGF5b3V0J1xuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuICB0aXRsZTogJ0NoaXAtOCBFbXVsYXRvcicsXG4gIGRlc2NyaXB0aW9uOiAnTXkgbWFpZGVuIHZveWFnZSBpbnRvIGVtdWxhdGlvbiBkZXZlbG9wbWVudCcsXG4gIGdpdGh1Ykxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vU3ZhdWdodDU5OC9DaGlwOEVtdWxhdG9yJyxcbiAgaW1hZ2VMaW5rOiAnL2ltYWdlcy9jaGlwOC5wbmcnLFxuICBsYXlvdXQ6ICdQcm9qZWN0TGF5b3V0JyxcbiAgX19yZXNvdXJjZVBhdGg6ICdwcm9qZWN0cy9jaGlwLTgtZW11bGF0b3IubWR4JyxcbiAgX19zY2Fuczoge31cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBmcm9udE1hdHRlclxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgyPntgQ29kZSBpcyBqdXN0IGRhdGFgfTwvaDI+XG4gICAgPHA+e2BhbmQgbm90aGluZyBtYWtlcyB0aGF0IG1vcmUgY2xlYXIgdGhhbiB3b3JraW5nIG9uIGFuIGVtdWxhdG9yLiBUaGUgQ0hJUC04IGVtdWxhdG9yIGlzIHRoZSAnSGVsbG8gV29ybGQhJyBvZiBlbXVsYXRpb24gZGV2ZWxvcG1lbnQsIGFuZCB3cml0aW5nIHRoZSBjb2RlIHRvIGdldCBwb25nIHJ1bm5pbmcgc2hvd2VkIG1lIHNvb29vbyBtdWNoIGFib3V0IGhvdyBjb21wdXRlcnMgd29yayBhdCBhIGxvd2VyIGxldmVsLiBVbmxpa2UgbWFueSBzeXN0ZW1zLCB0aGUgQ0hJUC04IGlzIGFjdHVhbGx5IGFuIGFic3RyYWN0IG1hY2hpbmUgKG5vdCB1bmxpa2UgYSBsYW5ndWFnZSBpbnRlcnByZXRlcikgdGhhdCBpcyBjYXBhYmxlIG9mIGZldGNoaW5nICYgZXhlY3V0aW5nIG9wY29kZXMgYW5kIG1hbmlwdWxhdGluZyBkYXRhIHN0b3JlZCBpbiBtZW1vcnkuIEhlcmUncyB3aGF0IHJlYWxseSBzaG9ja2VkIG1lOiB0aGUgb3Bjb2RlcyBhcmUganVzdCBieXRlcyEgdGhlIGRhdGEgaXMganVzdCBieXRlcyEgSVQnUyBBTEwgQllURVMhYH08L3A+XG4gICAgPHA+e2BTbyB5ZWFoLCBJIHdhcyBiZXdpbGRlcmVkLiBOb3Qgc3VyZSB3aGF0IEkgZXhwZWN0ZWQsIGJ1dCB0aGUgZWxlZ2FuY2Ugb2YgaW50ZXJwcmV0dGluZyBjaHVua3Mgb2YgZGF0YSBpbiBkaWZmZXJlbnQgY29udGV4dHMgcmVhbGx5IHN1cnByaXNlZCBtZS4gQW5kIGFmdGVyIHdyaXRpbmcgc29tZSByZWFsbHkgc2ltcGxlIGJpdHdpc2Ugb3BlcmF0aW9ucyBhbmQgb25lIGNvbXBsZXggb25lIChjdXJzZSB5b3UgRFhZTiksIEkgaGFkIHRoZSBlbXVsYXRvciB1cCBhbmQgcnVubmluZy4gSXQgd2FzIGEgYmxhc3QgdG8gY29kZSB0aGlzIHByb2plY3QgdXAsIGFuZCBzb21ldGhpbmcgSSBtYXkgdGFrZSB1cCBhZ2FpbiBpbiB0aGUgZnV0dXJlIHRvIGxlYXJuIG5ldyBwcm9ncmFtbWluZyBsYW5ndWFnZXMuIGB9PC9wPlxuICAgIDxwPntgVGhlIHJlYWwgZGlmZmljdWx0eSBpbiB0aGUgcHJvamVjdCB3YXMgbGVhcm5pbmcgSmF2YSAmIE9PUCBmdW5kYW1lbnRhbHMgYWxvbmdzaWRlIHRoZSBDSElQLTggc3BlYyBpdHNlbGYuIENoYWxsZW5naW5nIG1pZ2h0IG5vdCBiZSB0aGUgcmlnaHQgZGVzY3JpcHRpb24sIGJ1dCByZXNlYXJjaC1pbnRlbnNpdmU/IERlZmluaXRlbHkuIGB9PC9wPlxuICAgIDxoMj57YFByb2JsZW1zYH08L2gyPlxuICAgIDxwPntgSSBoYXZlbuKAmXQgdXNlZCBKYXZhIGV4dGVuc2l2ZWx5LCBhbmQgdGhpcyBwcm9qZWN0IGhhcmRseSBtYWRlIG1lIGFuIGV4cGVydCwgYnV0IEkgaGF2ZSBiZWNvbWUgbXVjaCBtb3JlIGZhbWlsaWFyIHdpdGggdGhlIGxhbmd1YWdlIGFzIGEgcmVzdWx0LiBUaGVyZSB3ZXJlIHNvbWUgcHJldHR5IGNvbXBsZXggcGFydHMgdG8gbWFraW5nIHRoaXMgZW11bGF0b3IsIHRoZSBtb3N0IGNoYWxsZW5naW5nIG9mIHdoaWNoIGhhZCB0byBkbyB3aXRoIHRoZSBFdmVudCBkaXNwYXRjaCB0aHJlYWQgYW5kIHRoZSBvcGNvZGUgMHhGWDBBLiBBbnlvbmUgZmFtaWxpYXIgZW5vdWdoIHdpdGggdGhlIENISVAtOCB0byByZWNvZ25pemUgb3Bjb2RlcyBtaWdodCBzZWUgd2hlcmUgdGhpcyBpcyBnb2luZzogYW55IHRpbWUgdGhlIENQVSBpbnRlcnByZXRlZCAweEZYMEEsIGl0IHBhdXNlZCB0aGUgdGhyZWFkLCB3aGljaCBtZWFudCB0aGF0IGlucHV0IGNvdWxkbuKAmXQgYmUgcmVhZC5gfTwvcD5cbiAgICA8cD57YE9wY29kZSAweEZYMEEgaXMgcHJldHR5IHNpbXBsZS4gQXQgbGVhc3QsIG15IGltcGxlbWVudGF0aW9uIGlzLiBJdCB0ZWxscyB0aGUgQ1BVIOKAnGhleSwgd2h5IGRvbuKAmXQgeW91IHNsZWVwKCkgdW50aWwgYSBrZXkgaXMgcHJlc3NlZD9cIi4gVGhpcyBiZWNvbWVzIGEgcHJvYmxlbSBpbiBhIHNpbmdsZSB0aHJlYWRlZCBhcHBsaWNhdGlvbiBzaW5jZSBjb250aW51b3VzIGNhbGxzIG9mIHNsZWVwKCkgZW5kIHVwIGJsb2NraW5nIElPLCBzbyB0aGUgcHJvZ3JhbSBpcyBuZXZlciBhYmxlIHRvIHRlbGwgd2hlbiBhIGtleSBpcyBwcmVzc2VkLiBTbyBpbiBwbGFpbnNwZWFrLCBhbiBpbmZpdGl0ZSBsb29wLiBJIGVuZGVkIHVwIGZpeGluZyB0aGUgaXNzdWUgYnkgZGlzcGF0Y2hpbmcgVUkvSU8gZXZlbnRzIG9uIHRoZSBFdmVudCBEaXNwYXRjaCBUaHJlYWQgcHJvdmlkZWQgYnkgc3dpbmcsIHdoaWxlIHJ1bm5pbmcgb3RoZXIgbG9naWMgb24gYSBzZXBhcmF0ZSB0aHJlYWQuIFRoaXMgd2FzIGEgcHJldHR5IG5pY2Ugc29sdXRpb24sIGJ1dCBJIGRvIHdpc2ggSSB3b3VsZOKAmXZlIHNwZW50IG1vcmUgdGltZSBwbGFubmluZyB0aGUgaW1wbGVtZW50YXRpb24gYmVmb3JlIGp1bXBpbmcgcmlnaHQgaW50byB0aGUgY29kZS4gVGhpcyBicmluZ3MgdXMgdG8gdGhlIGJpZ2dlc3QgdGhpbmcgSSBsZWFybmVkOmB9PC9wPlxuICAgIDxoMj57YFRoZSBJbXBvcnRhbmNlIG9mIFBsYW5uaW5nYH08L2gyPlxuICAgIDxwPntgQXMgYSBQaHlzaWNzIGdyYWR1YXRlIChub3cgYXNwaXJpbmcgZGV2ZWxvcGVyKSBJIGhhdmVu4oCZdCBoYWQgdGhlIHByb3BlciB0cmFpbmluZyBpbiBjb21wdXRlciBzY2llbmNlIGZ1bmRhbWVudGFscyBhbmQgYmVzdCBwcmFjdGljZXMgZm9yIE9iamVjdC1PcmllbnRlZCBQcm9ncmFtbWluZyAoT09QKS4gVGhpcyBpc27igJl0IHRvIHNheSBJIHN1Y2sgKEkgbWVhbiwgSSBjb3VsZCBiZSBiZXR0ZXIpLCBidXQgdGhhdCBJIGRpZG7igJl0IGV2ZW4ga25vdyB3aGF0IHRvIGNvbnNpZGVyIHdoaWxlIGJ1aWxkaW5nIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbGFjayBvZiBwbGFubmluZyAtIGluIGEgSmF2YSBwcm9qZWN0LCBtaW5kIHlvdSAtIHJlc3VsdGVkIGluIGEgbWVzcyBvZiBldmVyeXRoaW5nIGJlaW5nIHB1YmxpYy4gVGhpcyB3YXNu4oCZdCBhIGh1Z2UgaXNzdWUgZm9yIHRoaXMgc21hbGwgcHJvamVjdCwgYnV0IGluIGEgbGFyZ2VyIHByb2plY3QgaXQgY291bGQgbWFuaWZlc3QgYXMgaGF2aW5nIHBpZWNlcyBvZiBjb2RlIHRoYXQgYXJlIGluc2FuZWx5IGNvbXBsZXguYH08L3A+XG4gICAgPHA+e2BGb3IgZXhhbXBsZSwgc2F5IHRoZXJlIGlzIGEgbWV0aG9kIGluIENQVSBjYWxsZWQgaW5pdGlhbGl6ZU1lbW9yeSgpIHRoYXQgZG9lcyB0aGUgaGVhdnkgbGlmdGluZyBvZiBzZXR0aW5nIHRoZSBtZW1vcnksIHJlZ2lzdGVyLCB0aW1lcnMsIGV0Y+KApiBhbGwgdG8gMC4gTm93IHdlIG1ha2UgdGhlIG1ldGhvZCBwdWJsaWMgYW5kIGNhbGwgaXQgZnJvbSB0aGUgQ1BVIGNvbnN0cnVjdG9yIHVwb24gc3RhcnR1cCBBTkQgY2FsbCBpdCBmcm9tIHRoZSBHVUkgcGFuZWwgYW55dGltZSBzb21lb25lIHByZXNzZXMgcmVzZXQuIFNlZW1zIGxpa2UgYSB3aW4td2luLiBTb21lIHRpbWUgcGFzc2VzLCBhbmQgaXQgaXMgZGVjaWRlZCB0aGF0IHRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHJlc2V0IGlzIG5vdCB3aGF0IGlzIG5lZWRlZDsgdGhlIGFwcGxpY2F0aW9uIGFjdHVhbGx5IG5lZWRzIHRvIHByZXNlcnZlIHNvbWUgbWVtb3J5IHVwb24gcmVzZXR0aW5nIHRoZSBzeXN0ZW0hIG5vdyB0aGVyZSBhcmUgdHdvIG9wdGlvbnMsIG5laXRoZXIgb2Ygd2hpY2ggYXJlIHN1cGVyIGVudGljaW5nOmB9PC9wPlxuICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YE9wdGlvbiAxLmB9PC9zdHJvbmc+e2AgRXhwb3NlIGEgbmV3IG1ldGhvZCBpbiBDUFUgY2FsbGVkIHJlc2V0KCkuIElmIHRoZSBDUFUgYW5kIEdVSSBwYW5lbCBhcmUgdGhlIG9ubHkgb2JqZWN0cyB1c2luZyBpbml0aWFsaXplTWVtb3J5KCksIGdyZWF0ISBUaGF0IG1lYW5zIHRoaXMgd2FzIGNhdWdodCBlYXJseSwgYW5kIHRoZSBjb2RlIGlzbuKAmXQgYWxsIHRhbmdseSBhbmQgZ3Jvc3MuIEJ1dCBpbWFnaW5lIGV2ZXJ5IHNpbmdsZSBvbmUgb2YgeW91ciB0ZXN0IGNhc2VzIGNhbGxzIGluaXRpYWxpemVNZW1vcnkoKS4gV2UgY2Fu4oCZdCBqdXN0IG1ha2UgdGhlIG9sZCBtZXRob2QgcHJpdmF0ZSwgb3Igd2UgY2Fu4oCZdCBydW4gdGhlIHRlc3RzISBOb3cgdGhlcmUgYXJlIHR3byBwdWJsaWMgbWV0aG9kcyB0aGF0IGFyZSBjb25mdXNpbmdseSBzaW1pbGFyLiBUaGlzIGJyYW5jaGVzIGludG8gYSBzdWJkZWNpc2lvbiBvZiByZWZhY3RvcmluZyB0ZXN0cyBvciBkZWFsIHdpdGggYW1iaWd1aXR5LiBUaGUgZm9ybWVyIG1ha2VzIHRoZSBjb2RlIG1haW50YWluYWJsZSBidXQgdGFrZXMgYSBsb3QgbG9uZ2VyIGFuZCB0aGUgc2Vjb25kIGlzIGEgcXVpY2sgZml4IHRoYXQgbWFrZXMgYWRkaXRpb25hbCBjaGFuZ2VzIG1vcmUgY29tcGxleCwgYnV0IGEgbGl0dGxlIGJpdCBvZiBwbGFubmluZyB3b3VsZCBoYXZlIGNpcmN1bXZlbnRlZCB0aGlzIGVudGlyZSBmaWFzY28uIE5lZWRsZXNzIHRvIHNheSwgSSBoYXZlIGJlY29tZSBhY3F1YWludGVkIHdpdGggdGhlIGNvbmNlcHQgb2YgdGVjaG5pY2FsIGRlYnQuIE9oIHllYWgsIGFuZCBvcHRpb24gdHdv4oCmYH08L3A+XG4gICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgT3B0aW9uIDIuYH08L3N0cm9uZz57YCBUaGVyZSBpcyBubyBvcHRpb24gdHdvLiBJIGxpZWQuIFNvcnJ5LiBUaGUgdHdvIG9wdGlvbnMgYXJlIHJlYWxseSBqdXN0IG9uZSBvcHRpb24gaW4gYSB0cmVuY2hjb2F0IHRoYXQgd2lsbCBlaXRoZXIgbXVnIHlvdSBvciBtYWtlIHlvdSBiYWxhbmNlIHRoZWlyIGNoZWNrYm9vay4gSnVzdCBkbyB0aGluZ3MgcmlnaHQgJiBwbGFuLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==