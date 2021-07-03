webpackHotUpdate_N_E("pages/posts/addr-modes-6502",{

/***/ "./pages/posts/addr-modes-6502.mdx":
/*!*****************************************!*\
  !*** ./pages/posts/addr-modes-6502.mdx ***!
  \*****************************************/
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
/* harmony import */ var C_Users_Svaug_Documents_projects_portfolio_templates_PostLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/PostLayout */ "./templates/PostLayout.jsx");
/* harmony import */ var components_layout_CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout/CodeBlock */ "./components/layout/CodeBlock.jsx");


var _jsxFileName = "C:\\Users\\Svaug\\Documents\\projects\\portfolio\\pages\\posts\\addr-modes-6502.mdx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */



var frontMatter = {
  title: 'Addressing Modes in the NES 6502',
  description: 'Everything I\'ve discovered about the addressing modes of the 6502 processor used in the NES',
  layout: 'PostLayout',
  __resourcePath: 'posts/addr-modes-6502.mdx',
  __scans: {}
};
var layoutProps = {
  frontMatter: frontMatter
};
var MDXLayout = C_Users_Svaug_Documents_projects_portfolio_templates_PostLayout__WEBPACK_IMPORTED_MODULE_4__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(C_Users_Svaug_Documents_projects_portfolio_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Flappy Bird - SNES Edition"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "It was probably about a year ago when I learned that it was possible to inject code into the SNES by manipulating CPU registers with complex actions in Super Mario World. It is insane that someone was able to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.youtube.com/watch?v=hB6eY73sLV0"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 221
    }
  }), "recreate Flappy Bird in SMW"), " reusing assets from the the original game. You read that right. Go watch the video, it\u2019s awesome. I had to learn more about this stuff. Who wouldn\u2019t want to know how Flappy Bird was successfully injected into a 1990 title with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 277
    }
  }, "nothing but a controller"), "? That stuff is interesting, but SNES is a huge undertaking for a first emulator, so I opted to build the much friendlier father: the NES. I plan on writing a few posts to detail areas I found confusing. Maybe some more documentation on this stuff out there will prevent the all-too common questions of \u201CWhy is flag 4 always set?\u201D and \u201CWhy does the stack pointer start at 0xFD\u201D from popping up on r/EmuDev. Questions like these actually have incredibly straightforward answers, but the absolute mass of confusing documentation makes it hard to pin down something tangible. My goal here is to create a documentation akin to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "http://www.obelisk.me.uk/6502/reference.html"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 960
    }
  }), "6502 Documentation at obelisk.me.uk"), " strictly for areas I found confusing. And it\u2019s not like the documentation was bad! It just seems like most of it is meant as a reference for writing 6502 assembly, not for writing something that will read 6502 bytecode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "Addressing Modes in the 6502"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "Ahh, now for the meat and potatoes of it all: Addressing modes! Well, what is an addressing mode? The 6502 has actually has a fairly minimal number of instructions, and most are very simple operations (left/right bitshift, set/clear flags, load to accumulator, etc\u2026). In order to get the most out of this relatively small instruction set, the 6502 provides multiple ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 378
    }
  }, "addressing modes"), " to target different sections of memory. Some modes use less cycles than others and were preferable since speed was (and to some degree still is) a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 574
    }
  }, "big deal"), ". But before we get into the addressing modes, maybe we should consider how the 6502 works at a high level. Essentially, the CPU does the following things over and over again:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "fetch byte from address pointed to by program counter"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "decode and execute that byte. I mean, it\u2019s actually more complicated than that, but this is a distilled truth of the CPU. Since the instructions (or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 180
    }
  }, "Opcodes"), ") are a single byte, that gives us 256 different instructions. But some of those bytes are unused, so we only have 151 opcodes, 56 of which are unique. After taking out the opcodes with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 406
    }
  }, "Implied"), " addressing (which is tantamount to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 482
    }
  }, "no"), " addressing), you get something like 32 instructions that can operate according to various addressing modes.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "Implied"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "This is probably the simplest addressing mode to talk about. You know how CPU\u2019s have flags, and some instructions simply set/clear a particular flag? Those instructions don\u2019t target memory addresses, but rather a specific component of the CPU, and use Implied Mode Addressing. Some opcodes using this mode are INX, PHA, and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 336
    }
  }, "SEC"), ". No additional data is read upon execution of opcodes with this addressing mode; the program counter is incremented by 1 and the next opcode is fetched."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "0x18 (CLC)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "&carryFlag")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "Accumulator"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "This is another easy addressing mode to talk about! Basically, any opcode using this addressing mode does all of its work on the accumulator. ROR, an opcode that uses this addressing mode to rotate the accumulator to the right (i.e., bitshifting 1 place to the right, and wrapping bit 0 around to fill the void left by bit 7). Similar to Implied, this mode doesn\u2019t read any extra data after the opcode, and you can make the argument that the target address is the \u201Caddress\u201D of the accumulator."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "0x0A (ASL)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "&accumulator")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, "Immediate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Ok, this bad boy is where we start reading in data! Basically, the byte that immediately follows the opcode in memory is our \u201Ctarget\u201D. So the target address is PC + 1, where PC (Program Counter) is the location of the executing opcode. The following table shows 0xFF being loaded into the accumulator."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Next Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "0xA9 (LDA)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "0xFF"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "PC + 1")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, "Relative"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, "Relative addressing is used predominantly (entirely?) in branching instructions to skip over segments of code conditionally. These instructions take the byte following the opcode, and add it to the program counter to produce a target address. The only catch is that signed arithmetic is used, so the program counter can also jump backwards depending on the value of the next byte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Next Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "0x90 (BCC)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "0x02"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "PC + 0x02")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, "Zero Page"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, "Zero Page Addressing always accesses the 0x00 page of the address space, meaning it never undergoes a page break and only requires a single byte to specify. This makes it really performant, but also very limited. The byte immediately following the opcode makes up the lower byte of the \u201Ctarget address\u201D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, "Zero Page X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "Zero Page, X ", "&", " Zero Page, Y are both just the regular Zero Page addressing mode with the contents of register X or Y being added to the \u201CTarget Address\u201D. If the addition causes the \u201CTarget Address\u201D to cross a page boundary, the upper byte is discarded such that the final address is still on the zero page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Next Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Y Register"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "0xB6 (LDX)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "0xEA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "0x60"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "0x004A")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, "Absolute"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "Absolute addressing takes the two bytes after the opcode and use them to construct a target address. The first byte is the lower byte, and the second byte is the higher byte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "Lower Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Upper Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "0xED (SBC)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "0xB3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "0x21"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "0x21B3")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, "Absolute, X & Absolute Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, "These two addressing modes are so similar they might as well be the same. Both of them find the Absolute Target Address (detailed just above) and add either register X or Y to it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "Opcode\tLower Byte\tUpper Byte\tX Register\tABS Address\tTarget Address\n0xFD (SBC)\t0x13\t0x4B\t0x20\t0x4B13\t0x4B33"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, "Indirect"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, "So far, none of the addressing modes have been very complicated: that starts change with Indirect Addressing. You know how a lot of beginner programmers get hung up on pointers? Well, Indirect addressing uses pointers. A first address is obtained similarly to Absolute, and is used as a pointer to a second space in memory, where the \u201CTarget Address\u201D is read from. The 6502 - an 8 bit machine with 16 bit address space - has no way of supporting 16 bit arithmetic, so crossing page boundaries (e.g. reading 0x01FF and then reading 0x0200 takes an additional cycle. Be it intentional or a bug, this extra cycle isn\u2019t taken when loading the \u201Ctarget address\u201D, so the address wraps around to the same page. Clear as mud? Maybe the following table will be easier to understand."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, "Opcode\tLower Byte\tUpper Byte\tABS Address\tTarget Lower Byte\tTarget Upper Byte\n0x6C (JMP)\t0xFF\t0x34\t0x34FF\tread from 0x34FF\tread from 0x3400"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, "Indirect, X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, "This addressing mode is kind of like a combination of Zero Page X & Indirect. First, the Zero Page X address is read. Afterwards, this address is used to find the \u201CTarget Address\u201D. And in the spirit of the original Indirect bug/feature, if the Zero Page X address is 0x00FF, the second byte is loaded from 0x0000 instead of 0x0100"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tX Register\tZero Page X\tTarget Lower Byte\tTarget Upper Byte\n0x81 (STA)\t0x55\t0x35\t0x0090\tread from 0x0090\tread from 0x0091"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, "Indirect, Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, "This addressing mode is kind of like a combination of Zero Page & Indirect. With an extra Y Register Addition. After a Zero Page address is read, it is used to find the \u201CTarget Address\u201D. Finally, the contents of the Y Register are added to this \u201CTarget Address\u201D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tZero Page\tTarget Lower Byte\tTarget Upper Byte\n0x11 (ORA)\t0x76\t0x0076\tread from 0x0076\tread from 0x0077"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, "Sample Code"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, "Below are my implementations of these addressing modes in C++. I chose to treat each mode as a function that returns the target address and have handling of reading/writing local to the opcode function."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_layout_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lang: "C++",
    mdxType: "CodeBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 10
    }
  }), "// Immediate\nu16 CPU::IMM(){\n    u16 temp = PC + 1;\n    PC += 2;\n    return temp;\n}\n\n// Accumulator\nu16 CPU::ACC(){\n    PC += 1;\n    return ACCUMULATOR_ADDRESS;\n}\n\n// Relative\nu16 CPU::REL(){\n    s16 address = PC;\n    s8 offset = read(PC + 1);\n    address += offset + 2;\n    return (u16) address;\n}\n\n// Zero Page\nu16 CPU::ZPG(){\n    u8 address = read(PC + 1);\n    PC += 2;\n    return (u16) address;\n}\n\n// Zero Page X\nu16 CPU::ZPX(){\n    u16 address = read(PC + 1);\n    address = (address + X) & 0xFF;\n    PC += 2;\n    return address;\n}\n\n// Zero Page Y\nu16 CPU::ZPY(){\n    u16 address = read(PC + 1);\n    address = (address + Y) & 0xFF;\n    PC += 2;\n    return address;\n}\n\n// Absolute\nu16 CPU::ABS(){\n    u16 LSN = read(PC + 1);\n    u16 MSN = read(PC + 2);\n    u32 address = LSN + (MSN << 8);\n    PC += 3;\n    return address;\n}\n\n// Absolute X\nu16 CPU::ABX(){\n    u32 address = ABS();\n    return address + X;\n}\n\n// Absolute Y\nu16 CPU::ABY(){\n    u32 address = ABS();\n    return address + Y;\n}\n\n// Indirect\nu16 CPU::IND(){\n    u16 ABS_LSN = read(PC + 1);\n    u16 ABS_MSN = read(PC + 2);\n    u16 ABS_address = (ABS_MSN << 8) + ABS_LSN;\n\n    // AN INDIRECT JUMP MUST NEVER USE A VECTOR BEGINNING ON THE LAST BYTE OF A PAGE\n    u16 address, LSN, MSN;\n    if ((ABS_address & 0xFF) == 0xFF){\n        LSN = read(ABS_address);\n        MSN = read(ABS_address & 0xFF00);\n        address = (MSN << 8) + LSN;\n    } else {\n        LSN = read(ABS_address);\n        MSN = read(ABS_address + 1);\n        address = (MSN << 8) + LSN;\n    }\n    PC += 2;\n    return address;\n}\n\n// Indirect X\nu16 CPU::IDX(){\n    u16 address = (read(PC + 1) + X) & 0xFF;\n    u16 LSN = read(address);\n    u16 MSN = read((address + 1) & 0xFF);\n    address = (MSN << 8) + LSN;\n    PC += 2;\n    return address;\n}\n\n// Indirect Y\nu16 CPU::IDY(){\n    u16 temp = read(PC + 1);\n    u16 LSN = read(temp);\n    u16 MSN = read((temp + 1) & 0xFF);\n    u16 address = LSN + (MSN << 8) + Y;\n    PC += 2;\n    return address;\n}\n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYWRkci1tb2Rlcy02NTAyLm1keCJdLCJuYW1lcyI6WyJmcm9udE1hdHRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsYXlvdXQiLCJfX3Jlc291cmNlUGF0aCIsIl9fc2NhbnMiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ08sSUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxPQUFLLEVBQUUsa0NBRGtCO0FBRXpCQyxhQUFXLEVBQUUsOEZBRlk7QUFHekJDLFFBQU0sRUFBRSxZQUhpQjtBQUl6QkMsZ0JBQWMsRUFBRSwyQkFKUztBQUt6QkMsU0FBTyxFQUFFO0FBTGdCLENBQXBCO0FBUVAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTixhQUFXLEVBQVhBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU8sU0FBUyxHQUFHQyx1R0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBOQUF3TjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzFPLFlBQVE7QUFEa08sR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBeE4sb1BBRWdSO0FBQUksY0FBVSxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGaFIsNm9CQUUyN0I7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUM3OEIsWUFBUTtBQURxOEIsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FGMzdCLHNPQU5LLEVBV0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FYSyxFQVlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFhBQXFYO0FBQUksY0FBVSxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBclgsMEpBQXlqQjtBQUFRLGNBQVUsRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF6akIsb0xBWkssRUFhTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQURGLEVBRUU7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUE2SztBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0ssZ01BQStZO0FBQUksY0FBVSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEvWSwwQ0FBMmQ7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTNkLGlIQUZGLENBYkssRUFpQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSyxFQWtCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVWQUEyVTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTNVLDhKQWxCSyxFQW1CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosQ0FMSixDQURBLENBbkJLLEVBK0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JLLEVBZ0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb2dCQWhDSyxFQWlDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosQ0FMSixDQURBLENBakNLLEVB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QUFBO0FBQUE7QUFBQSxxeUJBMUhLLEVBMkhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkpBM0hLLEVBNkhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0hLLEVBOEhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFZBOUhLLEVBK0hMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBL0hLLEVBaUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaklLLEVBa0lMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa1NBbElLLEVBbUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0lBbklLLEVBcUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcklLLEVBc0lMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa05BdElLLEVBdUlMLDBEQUFDLG1FQUFEO0FBQVcsUUFBSSxFQUFDLEtBQWhCO0FBQXNCLFdBQU8sRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdklLLEVBd0lMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1pRUFBTCxDQXhJSyxDQUFQO0FBbVBEO0tBdlB1QkQsVTtBQXlQeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2FkZHItbW9kZXMtNjUwMi43NTE3NWQxMTYyY2Y4Y2JkYTM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IExheW91dCwgeyAgfSBmcm9tICdDOi9Vc2Vycy9TdmF1Zy9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvL3RlbXBsYXRlcy9Qb3N0TGF5b3V0J1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICdjb21wb25lbnRzL2xheW91dC9Db2RlQmxvY2snXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7XG4gIHRpdGxlOiAnQWRkcmVzc2luZyBNb2RlcyBpbiB0aGUgTkVTIDY1MDInLFxuICBkZXNjcmlwdGlvbjogJ0V2ZXJ5dGhpbmcgSVxcJ3ZlIGRpc2NvdmVyZWQgYWJvdXQgdGhlIGFkZHJlc3NpbmcgbW9kZXMgb2YgdGhlIDY1MDIgcHJvY2Vzc29yIHVzZWQgaW4gdGhlIE5FUycsXG4gIGxheW91dDogJ1Bvc3RMYXlvdXQnLFxuICBfX3Jlc291cmNlUGF0aDogJ3Bvc3RzL2FkZHItbW9kZXMtNjUwMi5tZHgnLFxuICBfX3NjYW5zOiB7fVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIGZyb250TWF0dGVyXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuICAgIDxoMj57YEZsYXBweSBCaXJkIC0gU05FUyBFZGl0aW9uYH08L2gyPlxuICAgIDxwPntgSXQgd2FzIHByb2JhYmx5IGFib3V0IGEgeWVhciBhZ28gd2hlbiBJIGxlYXJuZWQgdGhhdCBpdCB3YXMgcG9zc2libGUgdG8gaW5qZWN0IGNvZGUgaW50byB0aGUgU05FUyBieSBtYW5pcHVsYXRpbmcgQ1BVIHJlZ2lzdGVycyB3aXRoIGNvbXBsZXggYWN0aW9ucyBpbiBTdXBlciBNYXJpbyBXb3JsZC4gSXQgaXMgaW5zYW5lIHRoYXQgc29tZW9uZSB3YXMgYWJsZSB0byBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1oQjZlWTczc0xWMFwiXG4gICAgICB9fT57YHJlY3JlYXRlIEZsYXBweSBCaXJkIGluIFNNV2B9PC9hPntgIHJldXNpbmcgYXNzZXRzIGZyb20gdGhlIHRoZSBvcmlnaW5hbCBnYW1lLiBZb3UgcmVhZCB0aGF0IHJpZ2h0LiBHbyB3YXRjaCB0aGUgdmlkZW8sIGl04oCZcyBhd2Vzb21lLiBJIGhhZCB0byBsZWFybiBtb3JlIGFib3V0IHRoaXMgc3R1ZmYuIFdobyB3b3VsZG7igJl0IHdhbnQgdG8ga25vdyBob3cgRmxhcHB5IEJpcmQgd2FzIHN1Y2Nlc3NmdWxseSBpbmplY3RlZCBpbnRvIGEgMTk5MCB0aXRsZSB3aXRoIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bub3RoaW5nIGJ1dCBhIGNvbnRyb2xsZXJgfTwvZW0+e2A/IFRoYXQgc3R1ZmYgaXMgaW50ZXJlc3RpbmcsIGJ1dCBTTkVTIGlzIGEgaHVnZSB1bmRlcnRha2luZyBmb3IgYSBmaXJzdCBlbXVsYXRvciwgc28gSSBvcHRlZCB0byBidWlsZCB0aGUgbXVjaCBmcmllbmRsaWVyIGZhdGhlcjogdGhlIE5FUy4gSSBwbGFuIG9uIHdyaXRpbmcgYSBmZXcgcG9zdHMgdG8gZGV0YWlsIGFyZWFzIEkgZm91bmQgY29uZnVzaW5nLiBNYXliZSBzb21lIG1vcmUgZG9jdW1lbnRhdGlvbiBvbiB0aGlzIHN0dWZmIG91dCB0aGVyZSB3aWxsIHByZXZlbnQgdGhlIGFsbC10b28gY29tbW9uIHF1ZXN0aW9ucyBvZiDigJxXaHkgaXMgZmxhZyA0IGFsd2F5cyBzZXQ/4oCdIGFuZCDigJxXaHkgZG9lcyB0aGUgc3RhY2sgcG9pbnRlciBzdGFydCBhdCAweEZE4oCdIGZyb20gcG9wcGluZyB1cCBvbiByL0VtdURldi4gUXVlc3Rpb25zIGxpa2UgdGhlc2UgYWN0dWFsbHkgaGF2ZSBpbmNyZWRpYmx5IHN0cmFpZ2h0Zm9yd2FyZCBhbnN3ZXJzLCBidXQgdGhlIGFic29sdXRlIG1hc3Mgb2YgY29uZnVzaW5nIGRvY3VtZW50YXRpb24gbWFrZXMgaXQgaGFyZCB0byBwaW4gZG93biBzb21ldGhpbmcgdGFuZ2libGUuIE15IGdvYWwgaGVyZSBpcyB0byBjcmVhdGUgYSBkb2N1bWVudGF0aW9uIGFraW4gdG8gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vd3d3Lm9iZWxpc2subWUudWsvNjUwMi9yZWZlcmVuY2UuaHRtbFwiXG4gICAgICB9fT57YDY1MDIgRG9jdW1lbnRhdGlvbiBhdCBvYmVsaXNrLm1lLnVrYH08L2E+e2Agc3RyaWN0bHkgZm9yIGFyZWFzIEkgZm91bmQgY29uZnVzaW5nLiBBbmQgaXTigJlzIG5vdCBsaWtlIHRoZSBkb2N1bWVudGF0aW9uIHdhcyBiYWQhIEl0IGp1c3Qgc2VlbXMgbGlrZSBtb3N0IG9mIGl0IGlzIG1lYW50IGFzIGEgcmVmZXJlbmNlIGZvciB3cml0aW5nIDY1MDIgYXNzZW1ibHksIG5vdCBmb3Igd3JpdGluZyBzb21ldGhpbmcgdGhhdCB3aWxsIHJlYWQgNjUwMiBieXRlY29kZS5gfTwvcD5cbiAgICA8aDI+e2BBZGRyZXNzaW5nIE1vZGVzIGluIHRoZSA2NTAyYH08L2gyPlxuICAgIDxwPntgQWhoLCBub3cgZm9yIHRoZSBtZWF0IGFuZCBwb3RhdG9lcyBvZiBpdCBhbGw6IEFkZHJlc3NpbmcgbW9kZXMhIFdlbGwsIHdoYXQgaXMgYW4gYWRkcmVzc2luZyBtb2RlPyBUaGUgNjUwMiBoYXMgYWN0dWFsbHkgaGFzIGEgZmFpcmx5IG1pbmltYWwgbnVtYmVyIG9mIGluc3RydWN0aW9ucywgYW5kIG1vc3QgYXJlIHZlcnkgc2ltcGxlIG9wZXJhdGlvbnMgKGxlZnQvcmlnaHQgYml0c2hpZnQsIHNldC9jbGVhciBmbGFncywgbG9hZCB0byBhY2N1bXVsYXRvciwgZXRj4oCmKS4gSW4gb3JkZXIgdG8gZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGlzIHJlbGF0aXZlbHkgc21hbGwgaW5zdHJ1Y3Rpb24gc2V0LCB0aGUgNjUwMiBwcm92aWRlcyBtdWx0aXBsZSBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgYWRkcmVzc2luZyBtb2Rlc2B9PC9lbT57YCB0byB0YXJnZXQgZGlmZmVyZW50IHNlY3Rpb25zIG9mIG1lbW9yeS4gU29tZSBtb2RlcyB1c2UgbGVzcyBjeWNsZXMgdGhhbiBvdGhlcnMgYW5kIHdlcmUgcHJlZmVyYWJsZSBzaW5jZSBzcGVlZCB3YXMgKGFuZCB0byBzb21lIGRlZ3JlZSBzdGlsbCBpcykgYSBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGJpZyBkZWFsYH08L3N0cm9uZz57YC4gQnV0IGJlZm9yZSB3ZSBnZXQgaW50byB0aGUgYWRkcmVzc2luZyBtb2RlcywgbWF5YmUgd2Ugc2hvdWxkIGNvbnNpZGVyIGhvdyB0aGUgNjUwMiB3b3JrcyBhdCBhIGhpZ2ggbGV2ZWwuIEVzc2VudGlhbGx5LCB0aGUgQ1BVIGRvZXMgdGhlIGZvbGxvd2luZyB0aGluZ3Mgb3ZlciBhbmQgb3ZlciBhZ2FpbjpgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BmZXRjaCBieXRlIGZyb20gYWRkcmVzcyBwb2ludGVkIHRvIGJ5IHByb2dyYW0gY291bnRlcmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YGRlY29kZSBhbmQgZXhlY3V0ZSB0aGF0IGJ5dGUuIEkgbWVhbiwgaXTigJlzIGFjdHVhbGx5IG1vcmUgY29tcGxpY2F0ZWQgdGhhbiB0aGF0LCBidXQgdGhpcyBpcyBhIGRpc3RpbGxlZCB0cnV0aCBvZiB0aGUgQ1BVLiBTaW5jZSB0aGUgaW5zdHJ1Y3Rpb25zIChvciBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YE9wY29kZXNgfTwvZW0+e2ApIGFyZSBhIHNpbmdsZSBieXRlLCB0aGF0IGdpdmVzIHVzIDI1NiBkaWZmZXJlbnQgaW5zdHJ1Y3Rpb25zLiBCdXQgc29tZSBvZiB0aG9zZSBieXRlcyBhcmUgdW51c2VkLCBzbyB3ZSBvbmx5IGhhdmUgMTUxIG9wY29kZXMsIDU2IG9mIHdoaWNoIGFyZSB1bmlxdWUuIEFmdGVyIHRha2luZyBvdXQgdGhlIG9wY29kZXMgd2l0aCBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YEltcGxpZWRgfTwvZW0+e2AgYWRkcmVzc2luZyAod2hpY2ggaXMgdGFudGFtb3VudCB0byBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YG5vYH08L2VtPntgIGFkZHJlc3NpbmcpLCB5b3UgZ2V0IHNvbWV0aGluZyBsaWtlIDMyIGluc3RydWN0aW9ucyB0aGF0IGNhbiBvcGVyYXRlIGFjY29yZGluZyB0byB2YXJpb3VzIGFkZHJlc3NpbmcgbW9kZXMuYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPGgyPntgSW1wbGllZGB9PC9oMj5cbiAgICA8cD57YFRoaXMgaXMgcHJvYmFibHkgdGhlIHNpbXBsZXN0IGFkZHJlc3NpbmcgbW9kZSB0byB0YWxrIGFib3V0LiBZb3Uga25vdyBob3cgQ1BV4oCZcyBoYXZlIGZsYWdzLCBhbmQgc29tZSBpbnN0cnVjdGlvbnMgc2ltcGx5IHNldC9jbGVhciBhIHBhcnRpY3VsYXIgZmxhZz8gVGhvc2UgaW5zdHJ1Y3Rpb25zIGRvbuKAmXQgdGFyZ2V0IG1lbW9yeSBhZGRyZXNzZXMsIGJ1dCByYXRoZXIgYSBzcGVjaWZpYyBjb21wb25lbnQgb2YgdGhlIENQVSwgYW5kIHVzZSBJbXBsaWVkIE1vZGUgQWRkcmVzc2luZy4gU29tZSBvcGNvZGVzIHVzaW5nIHRoaXMgbW9kZSBhcmUgSU5YLCBQSEEsIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BTRUNgfTwvaW5saW5lQ29kZT57YC4gTm8gYWRkaXRpb25hbCBkYXRhIGlzIHJlYWQgdXBvbiBleGVjdXRpb24gb2Ygb3Bjb2RlcyB3aXRoIHRoaXMgYWRkcmVzc2luZyBtb2RlOyB0aGUgcHJvZ3JhbSBjb3VudGVyIGlzIGluY3JlbWVudGVkIGJ5IDEgYW5kIHRoZSBuZXh0IG9wY29kZSBpcyBmZXRjaGVkLmB9PC9wPlxuICAgIDxkaXY+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+T3Bjb2RlPC90aD5cbiAgICAgICAgICAgIDx0aD5UYXJnZXQgQWRkcmVzczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD4weDE4IChDTEMpPC90ZD5cbiAgICAgICAgICAgIDx0ZD4mYW1wO2NhcnJ5RmxhZzwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2BBY2N1bXVsYXRvcmB9PC9oMj5cbiAgICA8cD57YFRoaXMgaXMgYW5vdGhlciBlYXN5IGFkZHJlc3NpbmcgbW9kZSB0byB0YWxrIGFib3V0ISBCYXNpY2FsbHksIGFueSBvcGNvZGUgdXNpbmcgdGhpcyBhZGRyZXNzaW5nIG1vZGUgZG9lcyBhbGwgb2YgaXRzIHdvcmsgb24gdGhlIGFjY3VtdWxhdG9yLiBST1IsIGFuIG9wY29kZSB0aGF0IHVzZXMgdGhpcyBhZGRyZXNzaW5nIG1vZGUgdG8gcm90YXRlIHRoZSBhY2N1bXVsYXRvciB0byB0aGUgcmlnaHQgKGkuZS4sIGJpdHNoaWZ0aW5nIDEgcGxhY2UgdG8gdGhlIHJpZ2h0LCBhbmQgd3JhcHBpbmcgYml0IDAgYXJvdW5kIHRvIGZpbGwgdGhlIHZvaWQgbGVmdCBieSBiaXQgNykuIFNpbWlsYXIgdG8gSW1wbGllZCwgdGhpcyBtb2RlIGRvZXNu4oCZdCByZWFkIGFueSBleHRyYSBkYXRhIGFmdGVyIHRoZSBvcGNvZGUsIGFuZCB5b3UgY2FuIG1ha2UgdGhlIGFyZ3VtZW50IHRoYXQgdGhlIHRhcmdldCBhZGRyZXNzIGlzIHRoZSDigJxhZGRyZXNz4oCdIG9mIHRoZSBhY2N1bXVsYXRvci5gfTwvcD5cbiAgICA8ZGl2PlxuICAgIDx0YWJsZT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk9wY29kZTwvdGg+XG4gICAgICAgICAgICA8dGg+VGFyZ2V0IEFkZHJlc3M8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+MHgwQSAoQVNMKTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JmFtcDthY2N1bXVsYXRvcjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2BJbW1lZGlhdGVgfTwvaDI+XG4gICAgPHA+e2BPaywgdGhpcyBiYWQgYm95IGlzIHdoZXJlIHdlIHN0YXJ0IHJlYWRpbmcgaW4gZGF0YSEgQmFzaWNhbGx5LCB0aGUgYnl0ZSB0aGF0IGltbWVkaWF0ZWx5IGZvbGxvd3MgdGhlIG9wY29kZSBpbiBtZW1vcnkgaXMgb3VyIOKAnHRhcmdldOKAnS4gU28gdGhlIHRhcmdldCBhZGRyZXNzIGlzIFBDICsgMSwgd2hlcmUgUEMgKFByb2dyYW0gQ291bnRlcikgaXMgdGhlIGxvY2F0aW9uIG9mIHRoZSBleGVjdXRpbmcgb3Bjb2RlLiBUaGUgZm9sbG93aW5nIHRhYmxlIHNob3dzIDB4RkYgYmVpbmcgbG9hZGVkIGludG8gdGhlIGFjY3VtdWxhdG9yLmB9PC9wPlxuICAgIDxkaXY+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+T3Bjb2RlPC90aD5cbiAgICAgICAgICAgIDx0aD5OZXh0IEJ5dGU8L3RoPlxuICAgICAgICAgICAgPHRoPlRhcmdldCBBZGRyZXNzPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjB4QTkgKExEQSk8L3RkPlxuICAgICAgICAgICAgPHRkPjB4RkY8L3RkPlxuICAgICAgICAgICAgPHRkPlBDICsgMTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2BSZWxhdGl2ZWB9PC9oMj5cbiAgICA8cD57YFJlbGF0aXZlIGFkZHJlc3NpbmcgaXMgdXNlZCBwcmVkb21pbmFudGx5IChlbnRpcmVseT8pIGluIGJyYW5jaGluZyBpbnN0cnVjdGlvbnMgdG8gc2tpcCBvdmVyIHNlZ21lbnRzIG9mIGNvZGUgY29uZGl0aW9uYWxseS4gVGhlc2UgaW5zdHJ1Y3Rpb25zIHRha2UgdGhlIGJ5dGUgZm9sbG93aW5nIHRoZSBvcGNvZGUsIGFuZCBhZGQgaXQgdG8gdGhlIHByb2dyYW0gY291bnRlciB0byBwcm9kdWNlIGEgdGFyZ2V0IGFkZHJlc3MuIFRoZSBvbmx5IGNhdGNoIGlzIHRoYXQgc2lnbmVkIGFyaXRobWV0aWMgaXMgdXNlZCwgc28gdGhlIHByb2dyYW0gY291bnRlciBjYW4gYWxzbyBqdW1wIGJhY2t3YXJkcyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIHRoZSBuZXh0IGJ5dGUuYH08L3A+XG4gICAgPGRpdj5cbiAgICA8dGFibGU+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5PcGNvZGU8L3RoPlxuICAgICAgICAgICAgPHRoPk5leHQgQnl0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VGFyZ2V0IEFkZHJlc3M8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+MHg5MCAoQkNDKTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHgwMjwvdGQ+XG4gICAgICAgICAgICA8dGQ+UEMgKyAweDAyPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIDxoMj57YFplcm8gUGFnZWB9PC9oMj5cbiAgICA8cD57YFplcm8gUGFnZSBBZGRyZXNzaW5nIGFsd2F5cyBhY2Nlc3NlcyB0aGUgMHgwMCBwYWdlIG9mIHRoZSBhZGRyZXNzIHNwYWNlLCBtZWFuaW5nIGl0IG5ldmVyIHVuZGVyZ29lcyBhIHBhZ2UgYnJlYWsgYW5kIG9ubHkgcmVxdWlyZXMgYSBzaW5nbGUgYnl0ZSB0byBzcGVjaWZ5LiBUaGlzIG1ha2VzIGl0IHJlYWxseSBwZXJmb3JtYW50LCBidXQgYWxzbyB2ZXJ5IGxpbWl0ZWQuIFRoZSBieXRlIGltbWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgb3Bjb2RlIG1ha2VzIHVwIHRoZSBsb3dlciBieXRlIG9mIHRoZSDigJx0YXJnZXQgYWRkcmVzc+KAnS5gfTwvcD5cbiAgICA8aDI+e2BaZXJvIFBhZ2UgWGB9PC9oMj5cbiAgICA8cD57YFplcm8gUGFnZSwgWCBgfXtgJmB9e2AgWmVybyBQYWdlLCBZIGFyZSBib3RoIGp1c3QgdGhlIHJlZ3VsYXIgWmVybyBQYWdlIGFkZHJlc3NpbmcgbW9kZSB3aXRoIHRoZSBjb250ZW50cyBvZiByZWdpc3RlciBYIG9yIFkgYmVpbmcgYWRkZWQgdG8gdGhlIOKAnFRhcmdldCBBZGRyZXNz4oCdLiBJZiB0aGUgYWRkaXRpb24gY2F1c2VzIHRoZSDigJxUYXJnZXQgQWRkcmVzc+KAnSB0byBjcm9zcyBhIHBhZ2UgYm91bmRhcnksIHRoZSB1cHBlciBieXRlIGlzIGRpc2NhcmRlZCBzdWNoIHRoYXQgdGhlIGZpbmFsIGFkZHJlc3MgaXMgc3RpbGwgb24gdGhlIHplcm8gcGFnZS5gfTwvcD5cbiAgICA8ZGl2PlxuICAgIDx0YWJsZT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk9wY29kZTwvdGg+XG4gICAgICAgICAgICA8dGg+TmV4dCBCeXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5ZIFJlZ2lzdGVyPC90aD5cbiAgICAgICAgICAgIDx0aD5UYXJnZXQgQWRkcmVzczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD4weEI2IChMRFgpPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weEVBPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weDYwPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weDAwNEE8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICAgPGgyPntgQWJzb2x1dGVgfTwvaDI+XG4gICAgPHA+e2BBYnNvbHV0ZSBhZGRyZXNzaW5nIHRha2VzIHRoZSB0d28gYnl0ZXMgYWZ0ZXIgdGhlIG9wY29kZSBhbmQgdXNlIHRoZW0gdG8gY29uc3RydWN0IGEgdGFyZ2V0IGFkZHJlc3MuIFRoZSBmaXJzdCBieXRlIGlzIHRoZSBsb3dlciBieXRlLCBhbmQgdGhlIHNlY29uZCBieXRlIGlzIHRoZSBoaWdoZXIgYnl0ZS5gfTwvcD5cbiAgICA8ZGl2PlxuICAgIDx0YWJsZT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk9wY29kZTwvdGg+XG4gICAgICAgICAgICA8dGg+TG93ZXIgQnl0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VXBwZXIgQnl0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VGFyZ2V0IEFkZHJlc3M8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+MHhFRCAoU0JDKTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHhCMzwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHgyMTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHgyMUIzPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuXHRcdFx0XG5cdFx0XHRcbiAgICA8aDI+e2BBYnNvbHV0ZSwgWCAmIEFic29sdXRlIFlgfTwvaDI+XG4gICAgPHA+e2BUaGVzZSB0d28gYWRkcmVzc2luZyBtb2RlcyBhcmUgc28gc2ltaWxhciB0aGV5IG1pZ2h0IGFzIHdlbGwgYmUgdGhlIHNhbWUuIEJvdGggb2YgdGhlbSBmaW5kIHRoZSBBYnNvbHV0ZSBUYXJnZXQgQWRkcmVzcyAoZGV0YWlsZWQganVzdCBhYm92ZSkgYW5kIGFkZCBlaXRoZXIgcmVnaXN0ZXIgWCBvciBZIHRvIGl0LmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHRMb3dlciBCeXRlXHRVcHBlciBCeXRlXHRYIFJlZ2lzdGVyXHRBQlMgQWRkcmVzc1x0VGFyZ2V0IEFkZHJlc3NcbjB4RkQgKFNCQylcdDB4MTNcdDB4NEJcdDB4MjBcdDB4NEIxM1x0MHg0QjMzYH08L3A+XG4gICAgPGgyPntgSW5kaXJlY3RgfTwvaDI+XG4gICAgPHA+e2BTbyBmYXIsIG5vbmUgb2YgdGhlIGFkZHJlc3NpbmcgbW9kZXMgaGF2ZSBiZWVuIHZlcnkgY29tcGxpY2F0ZWQ6IHRoYXQgc3RhcnRzIGNoYW5nZSB3aXRoIEluZGlyZWN0IEFkZHJlc3NpbmcuIFlvdSBrbm93IGhvdyBhIGxvdCBvZiBiZWdpbm5lciBwcm9ncmFtbWVycyBnZXQgaHVuZyB1cCBvbiBwb2ludGVycz8gV2VsbCwgSW5kaXJlY3QgYWRkcmVzc2luZyB1c2VzIHBvaW50ZXJzLiBBIGZpcnN0IGFkZHJlc3MgaXMgb2J0YWluZWQgc2ltaWxhcmx5IHRvIEFic29sdXRlLCBhbmQgaXMgdXNlZCBhcyBhIHBvaW50ZXIgdG8gYSBzZWNvbmQgc3BhY2UgaW4gbWVtb3J5LCB3aGVyZSB0aGUg4oCcVGFyZ2V0IEFkZHJlc3PigJ0gaXMgcmVhZCBmcm9tLiBUaGUgNjUwMiAtIGFuIDggYml0IG1hY2hpbmUgd2l0aCAxNiBiaXQgYWRkcmVzcyBzcGFjZSAtIGhhcyBubyB3YXkgb2Ygc3VwcG9ydGluZyAxNiBiaXQgYXJpdGhtZXRpYywgc28gY3Jvc3NpbmcgcGFnZSBib3VuZGFyaWVzIChlLmcuIHJlYWRpbmcgMHgwMUZGIGFuZCB0aGVuIHJlYWRpbmcgMHgwMjAwIHRha2VzIGFuIGFkZGl0aW9uYWwgY3ljbGUuIEJlIGl0IGludGVudGlvbmFsIG9yIGEgYnVnLCB0aGlzIGV4dHJhIGN5Y2xlIGlzbuKAmXQgdGFrZW4gd2hlbiBsb2FkaW5nIHRoZSDigJx0YXJnZXQgYWRkcmVzc+KAnSwgc28gdGhlIGFkZHJlc3Mgd3JhcHMgYXJvdW5kIHRvIHRoZSBzYW1lIHBhZ2UuIENsZWFyIGFzIG11ZD8gTWF5YmUgdGhlIGZvbGxvd2luZyB0YWJsZSB3aWxsIGJlIGVhc2llciB0byB1bmRlcnN0YW5kLmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHRMb3dlciBCeXRlXHRVcHBlciBCeXRlXHRBQlMgQWRkcmVzc1x0VGFyZ2V0IExvd2VyIEJ5dGVcdFRhcmdldCBVcHBlciBCeXRlXG4weDZDIChKTVApXHQweEZGXHQweDM0XHQweDM0RkZcdHJlYWQgZnJvbSAweDM0RkZcdHJlYWQgZnJvbSAweDM0MDBgfTwvcD5cbiAgICA8aDI+e2BJbmRpcmVjdCwgWGB9PC9oMj5cbiAgICA8cD57YFRoaXMgYWRkcmVzc2luZyBtb2RlIGlzIGtpbmQgb2YgbGlrZSBhIGNvbWJpbmF0aW9uIG9mIFplcm8gUGFnZSBYICYgSW5kaXJlY3QuIEZpcnN0LCB0aGUgWmVybyBQYWdlIFggYWRkcmVzcyBpcyByZWFkLiBBZnRlcndhcmRzLCB0aGlzIGFkZHJlc3MgaXMgdXNlZCB0byBmaW5kIHRoZSDigJxUYXJnZXQgQWRkcmVzc+KAnS4gQW5kIGluIHRoZSBzcGlyaXQgb2YgdGhlIG9yaWdpbmFsIEluZGlyZWN0IGJ1Zy9mZWF0dXJlLCBpZiB0aGUgWmVybyBQYWdlIFggYWRkcmVzcyBpcyAweDAwRkYsIHRoZSBzZWNvbmQgYnl0ZSBpcyBsb2FkZWQgZnJvbSAweDAwMDAgaW5zdGVhZCBvZiAweDAxMDBgfTwvcD5cbiAgICA8cD57YE9wY29kZVx0TmV4dCBCeXRlXHRYIFJlZ2lzdGVyXHRaZXJvIFBhZ2UgWFx0VGFyZ2V0IExvd2VyIEJ5dGVcdFRhcmdldCBVcHBlciBCeXRlXG4weDgxIChTVEEpXHQweDU1XHQweDM1XHQweDAwOTBcdHJlYWQgZnJvbSAweDAwOTBcdHJlYWQgZnJvbSAweDAwOTFgfTwvcD5cbiAgICA8aDI+e2BJbmRpcmVjdCwgWWB9PC9oMj5cbiAgICA8cD57YFRoaXMgYWRkcmVzc2luZyBtb2RlIGlzIGtpbmQgb2YgbGlrZSBhIGNvbWJpbmF0aW9uIG9mIFplcm8gUGFnZSAmIEluZGlyZWN0LiBXaXRoIGFuIGV4dHJhIFkgUmVnaXN0ZXIgQWRkaXRpb24uIEFmdGVyIGEgWmVybyBQYWdlIGFkZHJlc3MgaXMgcmVhZCwgaXQgaXMgdXNlZCB0byBmaW5kIHRoZSDigJxUYXJnZXQgQWRkcmVzc+KAnS4gRmluYWxseSwgdGhlIGNvbnRlbnRzIG9mIHRoZSBZIFJlZ2lzdGVyIGFyZSBhZGRlZCB0byB0aGlzIOKAnFRhcmdldCBBZGRyZXNz4oCdLmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHROZXh0IEJ5dGVcdFplcm8gUGFnZVx0VGFyZ2V0IExvd2VyIEJ5dGVcdFRhcmdldCBVcHBlciBCeXRlXG4weDExIChPUkEpXHQweDc2XHQweDAwNzZcdHJlYWQgZnJvbSAweDAwNzZcdHJlYWQgZnJvbSAweDAwNzdgfTwvcD5cbiAgICA8aDI+e2BTYW1wbGUgQ29kZWB9PC9oMj5cbiAgICA8cD57YEJlbG93IGFyZSBteSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2UgYWRkcmVzc2luZyBtb2RlcyBpbiBDKysuIEkgY2hvc2UgdG8gdHJlYXQgZWFjaCBtb2RlIGFzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB0YXJnZXQgYWRkcmVzcyBhbmQgaGF2ZSBoYW5kbGluZyBvZiByZWFkaW5nL3dyaXRpbmcgbG9jYWwgdG8gdGhlIG9wY29kZSBmdW5jdGlvbi5gfTwvcD5cbiAgICA8Q29kZUJsb2NrIGxhbmc9XCJDKytcIiBtZHhUeXBlPVwiQ29kZUJsb2NrXCIgLz5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue319PntgLy8gSW1tZWRpYXRlXG51MTYgQ1BVOjpJTU0oKXtcbiAgICB1MTYgdGVtcCA9IFBDICsgMTtcbiAgICBQQyArPSAyO1xuICAgIHJldHVybiB0ZW1wO1xufVxuXG4vLyBBY2N1bXVsYXRvclxudTE2IENQVTo6QUNDKCl7XG4gICAgUEMgKz0gMTtcbiAgICByZXR1cm4gQUNDVU1VTEFUT1JfQUREUkVTUztcbn1cblxuLy8gUmVsYXRpdmVcbnUxNiBDUFU6OlJFTCgpe1xuICAgIHMxNiBhZGRyZXNzID0gUEM7XG4gICAgczggb2Zmc2V0ID0gcmVhZChQQyArIDEpO1xuICAgIGFkZHJlc3MgKz0gb2Zmc2V0ICsgMjtcbiAgICByZXR1cm4gKHUxNikgYWRkcmVzcztcbn1cblxuLy8gWmVybyBQYWdlXG51MTYgQ1BVOjpaUEcoKXtcbiAgICB1OCBhZGRyZXNzID0gcmVhZChQQyArIDEpO1xuICAgIFBDICs9IDI7XG4gICAgcmV0dXJuICh1MTYpIGFkZHJlc3M7XG59XG5cbi8vIFplcm8gUGFnZSBYXG51MTYgQ1BVOjpaUFgoKXtcbiAgICB1MTYgYWRkcmVzcyA9IHJlYWQoUEMgKyAxKTtcbiAgICBhZGRyZXNzID0gKGFkZHJlc3MgKyBYKSAmIDB4RkY7XG4gICAgUEMgKz0gMjtcbiAgICByZXR1cm4gYWRkcmVzcztcbn1cblxuLy8gWmVybyBQYWdlIFlcbnUxNiBDUFU6OlpQWSgpe1xuICAgIHUxNiBhZGRyZXNzID0gcmVhZChQQyArIDEpO1xuICAgIGFkZHJlc3MgPSAoYWRkcmVzcyArIFkpICYgMHhGRjtcbiAgICBQQyArPSAyO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuXG4vLyBBYnNvbHV0ZVxudTE2IENQVTo6QUJTKCl7XG4gICAgdTE2IExTTiA9IHJlYWQoUEMgKyAxKTtcbiAgICB1MTYgTVNOID0gcmVhZChQQyArIDIpO1xuICAgIHUzMiBhZGRyZXNzID0gTFNOICsgKE1TTiA8PCA4KTtcbiAgICBQQyArPSAzO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuXG4vLyBBYnNvbHV0ZSBYXG51MTYgQ1BVOjpBQlgoKXtcbiAgICB1MzIgYWRkcmVzcyA9IEFCUygpO1xuICAgIHJldHVybiBhZGRyZXNzICsgWDtcbn1cblxuLy8gQWJzb2x1dGUgWVxudTE2IENQVTo6QUJZKCl7XG4gICAgdTMyIGFkZHJlc3MgPSBBQlMoKTtcbiAgICByZXR1cm4gYWRkcmVzcyArIFk7XG59XG5cbi8vIEluZGlyZWN0XG51MTYgQ1BVOjpJTkQoKXtcbiAgICB1MTYgQUJTX0xTTiA9IHJlYWQoUEMgKyAxKTtcbiAgICB1MTYgQUJTX01TTiA9IHJlYWQoUEMgKyAyKTtcbiAgICB1MTYgQUJTX2FkZHJlc3MgPSAoQUJTX01TTiA8PCA4KSArIEFCU19MU047XG5cbiAgICAvLyBBTiBJTkRJUkVDVCBKVU1QIE1VU1QgTkVWRVIgVVNFIEEgVkVDVE9SIEJFR0lOTklORyBPTiBUSEUgTEFTVCBCWVRFIE9GIEEgUEFHRVxuICAgIHUxNiBhZGRyZXNzLCBMU04sIE1TTjtcbiAgICBpZiAoKEFCU19hZGRyZXNzICYgMHhGRikgPT0gMHhGRil7XG4gICAgICAgIExTTiA9IHJlYWQoQUJTX2FkZHJlc3MpO1xuICAgICAgICBNU04gPSByZWFkKEFCU19hZGRyZXNzICYgMHhGRjAwKTtcbiAgICAgICAgYWRkcmVzcyA9IChNU04gPDwgOCkgKyBMU047XG4gICAgfSBlbHNlIHtcbiAgICAgICAgTFNOID0gcmVhZChBQlNfYWRkcmVzcyk7XG4gICAgICAgIE1TTiA9IHJlYWQoQUJTX2FkZHJlc3MgKyAxKTtcbiAgICAgICAgYWRkcmVzcyA9IChNU04gPDwgOCkgKyBMU047XG4gICAgfVxuICAgIFBDICs9IDI7XG4gICAgcmV0dXJuIGFkZHJlc3M7XG59XG5cbi8vIEluZGlyZWN0IFhcbnUxNiBDUFU6OklEWCgpe1xuICAgIHUxNiBhZGRyZXNzID0gKHJlYWQoUEMgKyAxKSArIFgpICYgMHhGRjtcbiAgICB1MTYgTFNOID0gcmVhZChhZGRyZXNzKTtcbiAgICB1MTYgTVNOID0gcmVhZCgoYWRkcmVzcyArIDEpICYgMHhGRik7XG4gICAgYWRkcmVzcyA9IChNU04gPDwgOCkgKyBMU047XG4gICAgUEMgKz0gMjtcbiAgICByZXR1cm4gYWRkcmVzcztcbn1cblxuLy8gSW5kaXJlY3QgWVxudTE2IENQVTo6SURZKCl7XG4gICAgdTE2IHRlbXAgPSByZWFkKFBDICsgMSk7XG4gICAgdTE2IExTTiA9IHJlYWQodGVtcCk7XG4gICAgdTE2IE1TTiA9IHJlYWQoKHRlbXAgKyAxKSAmIDB4RkYpO1xuICAgIHUxNiBhZGRyZXNzID0gTFNOICsgKE1TTiA8PCA4KSArIFk7XG4gICAgUEMgKz0gMjtcbiAgICByZXR1cm4gYWRkcmVzcztcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==