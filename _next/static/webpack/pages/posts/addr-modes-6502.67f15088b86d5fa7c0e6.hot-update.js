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
  }, "SEC"), ". No additional data is read upon execution of opcodes with this addressing mode; the program counter is incremented by 1 and the next opcode is fetched."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "Opcode\tTarget Address\n0x18 (CLC)\t&carryFlag"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "Accumulator"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "This is another easy addressing mode to talk about! Basically, any opcode using this addressing mode does all of its work on the accumulator. ROR, an opcode that uses this addressing mode to rotate the accumulator to the right (i.e., bitshifting 1 place to the right, and wrapping bit 0 around to fill the void left by bit 7). Similar to Implied, this mode doesn\u2019t read any extra data after the opcode, and you can make the argument that the target address is the \u201Caddress\u201D of the accumulator."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "Opcode\tTarget Address\n0x0A (ASL)\t&accumulator"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "Immediate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Ok, this bad boy is where we start reading in data! Basically, the byte that immediately follows the opcode in memory is our \u201Ctarget\u201D. So the target address is PC + 1, where PC (Program Counter) is the location of the executing opcode. The following table shows 0xFF being loaded into the accumulator."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tTarget Address\n0xA9 (LDA)\t0xFF\tPC + 1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, "Relative"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "Relative addressing is used predominantly (entirely?) in branching instructions to skip over segments of code conditionally. These instructions take the byte following the opcode, and add it to the program counter to produce a target address. The only catch is that signed arithmetic is used, so the program counter can also jump backwards depending on the value of the next byte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tTarget Address\n0x90 (BCC)\t0x02\tPC + 0x02"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "Zero Page"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, "Zero Page Addressing always accesses the 0x00 page of the address space, meaning it never undergoes a page break and only requires a single byte to specify. This makes it really performant, but also very limited. The byte immediately following the opcode makes up the lower byte of the \u201Ctarget address\u201D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    "class": "table-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Next Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "0x84 (STY)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "0xC2"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "0x00C2")))), "## Zero Page, X & Zero Page, Y Zero Page, X & Zero Page, Y are both just the regular Zero Page addressing mode with the contents of register X or Y being added to the \u201CTarget Address\u201D. If the addition causes the \u201CTarget Address\u201D to cross a page boundary, the upper byte is discarded such that the final address is still on the zero page.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    "class": "table-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Next Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Y Register"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "0xB6 (LDX)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "0xEA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "0x60"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "0x004A")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, "Absolute"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "Absolute addressing takes the two bytes after the opcode and use them to construct a target address. The first byte is the lower byte, and the second byte is the higher byte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    "class": "table-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Opcode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "Lower Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Upper Byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Target Address")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "0xED (SBC)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "0xB3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "0x21"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "0x21B3")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, "Absolute, X & Absolute Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, "These two addressing modes are so similar they might as well be the same. Both of them find the Absolute Target Address (detailed just above) and add either register X or Y to it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, "Opcode\tLower Byte\tUpper Byte\tX Register\tABS Address\tTarget Address\n0xFD (SBC)\t0x13\t0x4B\t0x20\t0x4B13\t0x4B33"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "Indirect"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, "So far, none of the addressing modes have been very complicated: that starts change with Indirect Addressing. You know how a lot of beginner programmers get hung up on pointers? Well, Indirect addressing uses pointers. A first address is obtained similarly to Absolute, and is used as a pointer to a second space in memory, where the \u201CTarget Address\u201D is read from. The 6502 - an 8 bit machine with 16 bit address space - has no way of supporting 16 bit arithmetic, so crossing page boundaries (e.g. reading 0x01FF and then reading 0x0200 takes an additional cycle. Be it intentional or a bug, this extra cycle isn\u2019t taken when loading the \u201Ctarget address\u201D, so the address wraps around to the same page. Clear as mud? Maybe the following table will be easier to understand."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, "Opcode\tLower Byte\tUpper Byte\tABS Address\tTarget Lower Byte\tTarget Upper Byte\n0x6C (JMP)\t0xFF\t0x34\t0x34FF\tread from 0x34FF\tread from 0x3400"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, "Indirect, X"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, "This addressing mode is kind of like a combination of Zero Page X & Indirect. First, the Zero Page X address is read. Afterwards, this address is used to find the \u201CTarget Address\u201D. And in the spirit of the original Indirect bug/feature, if the Zero Page X address is 0x00FF, the second byte is loaded from 0x0000 instead of 0x0100"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tX Register\tZero Page X\tTarget Lower Byte\tTarget Upper Byte\n0x81 (STA)\t0x55\t0x35\t0x0090\tread from 0x0090\tread from 0x0091"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, "Indirect, Y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, "This addressing mode is kind of like a combination of Zero Page & Indirect. With an extra Y Register Addition. After a Zero Page address is read, it is used to find the \u201CTarget Address\u201D. Finally, the contents of the Y Register are added to this \u201CTarget Address\u201D."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, "Opcode\tNext Byte\tZero Page\tTarget Lower Byte\tTarget Upper Byte\n0x11 (ORA)\t0x76\t0x0076\tread from 0x0076\tread from 0x0077"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, "Sample Code"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, "Below are my implementations of these addressing modes in C++. I chose to treat each mode as a function that returns the target address and have handling of reading/writing local to the opcode function."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_layout_CodeBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lang: "C++",
    mdxType: "CodeBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {}), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYWRkci1tb2Rlcy02NTAyLm1keCJdLCJuYW1lcyI6WyJmcm9udE1hdHRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsYXlvdXQiLCJfX3Jlc291cmNlUGF0aCIsIl9fc2NhbnMiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ08sSUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxPQUFLLEVBQUUsa0NBRGtCO0FBRXpCQyxhQUFXLEVBQUUsOEZBRlk7QUFHekJDLFFBQU0sRUFBRSxZQUhpQjtBQUl6QkMsZ0JBQWMsRUFBRSwyQkFKUztBQUt6QkMsU0FBTyxFQUFFO0FBTGdCLENBQXBCO0FBUVAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTixhQUFXLEVBQVhBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU8sU0FBUyxHQUFHQyx1R0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUwsV0FBZixHQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBTEssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBOQUF3TjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzFPLFlBQVE7QUFEa08sR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUEsNFZBakdLLEVBa0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEpBbEdLLEVBb0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEdLLEVBcUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa1NBckdLLEVBc0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0lBdEdLLEVBd0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEdLLEVBeUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa05BekdLLEVBMEdMLDBEQUFDLG1FQUFEO0FBQVcsUUFBSSxFQUFDLEtBQWhCO0FBQXNCLFdBQU8sRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUdLLEVBMkdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQixFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1pRUFBTCxDQTNHSyxDQUFQO0FBc05EO0tBMU51QkQsVTtBQTROeEI7QUFDQUEsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL2FkZHItbW9kZXMtNjUwMi42N2YxNTA4OGI4NmQ1ZmE3YzBlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IExheW91dCwgeyAgfSBmcm9tICdDOi9Vc2Vycy9TdmF1Zy9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvL3RlbXBsYXRlcy9Qb3N0TGF5b3V0J1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICdjb21wb25lbnRzL2xheW91dC9Db2RlQmxvY2snXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7XG4gIHRpdGxlOiAnQWRkcmVzc2luZyBNb2RlcyBpbiB0aGUgTkVTIDY1MDInLFxuICBkZXNjcmlwdGlvbjogJ0V2ZXJ5dGhpbmcgSVxcJ3ZlIGRpc2NvdmVyZWQgYWJvdXQgdGhlIGFkZHJlc3NpbmcgbW9kZXMgb2YgdGhlIDY1MDIgcHJvY2Vzc29yIHVzZWQgaW4gdGhlIE5FUycsXG4gIGxheW91dDogJ1Bvc3RMYXlvdXQnLFxuICBfX3Jlc291cmNlUGF0aDogJ3Bvc3RzL2FkZHItbW9kZXMtNjUwMi5tZHgnLFxuICBfX3NjYW5zOiB7fVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIGZyb250TWF0dGVyXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cblxuICAgIDxoMj57YEZsYXBweSBCaXJkIC0gU05FUyBFZGl0aW9uYH08L2gyPlxuICAgIDxwPntgSXQgd2FzIHByb2JhYmx5IGFib3V0IGEgeWVhciBhZ28gd2hlbiBJIGxlYXJuZWQgdGhhdCBpdCB3YXMgcG9zc2libGUgdG8gaW5qZWN0IGNvZGUgaW50byB0aGUgU05FUyBieSBtYW5pcHVsYXRpbmcgQ1BVIHJlZ2lzdGVycyB3aXRoIGNvbXBsZXggYWN0aW9ucyBpbiBTdXBlciBNYXJpbyBXb3JsZC4gSXQgaXMgaW5zYW5lIHRoYXQgc29tZW9uZSB3YXMgYWJsZSB0byBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1oQjZlWTczc0xWMFwiXG4gICAgICB9fT57YHJlY3JlYXRlIEZsYXBweSBCaXJkIGluIFNNV2B9PC9hPntgIHJldXNpbmcgYXNzZXRzIGZyb20gdGhlIHRoZSBvcmlnaW5hbCBnYW1lLiBZb3UgcmVhZCB0aGF0IHJpZ2h0LiBHbyB3YXRjaCB0aGUgdmlkZW8sIGl04oCZcyBhd2Vzb21lLiBJIGhhZCB0byBsZWFybiBtb3JlIGFib3V0IHRoaXMgc3R1ZmYuIFdobyB3b3VsZG7igJl0IHdhbnQgdG8ga25vdyBob3cgRmxhcHB5IEJpcmQgd2FzIHN1Y2Nlc3NmdWxseSBpbmplY3RlZCBpbnRvIGEgMTk5MCB0aXRsZSB3aXRoIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bub3RoaW5nIGJ1dCBhIGNvbnRyb2xsZXJgfTwvZW0+e2A/IFRoYXQgc3R1ZmYgaXMgaW50ZXJlc3RpbmcsIGJ1dCBTTkVTIGlzIGEgaHVnZSB1bmRlcnRha2luZyBmb3IgYSBmaXJzdCBlbXVsYXRvciwgc28gSSBvcHRlZCB0byBidWlsZCB0aGUgbXVjaCBmcmllbmRsaWVyIGZhdGhlcjogdGhlIE5FUy4gSSBwbGFuIG9uIHdyaXRpbmcgYSBmZXcgcG9zdHMgdG8gZGV0YWlsIGFyZWFzIEkgZm91bmQgY29uZnVzaW5nLiBNYXliZSBzb21lIG1vcmUgZG9jdW1lbnRhdGlvbiBvbiB0aGlzIHN0dWZmIG91dCB0aGVyZSB3aWxsIHByZXZlbnQgdGhlIGFsbC10b28gY29tbW9uIHF1ZXN0aW9ucyBvZiDigJxXaHkgaXMgZmxhZyA0IGFsd2F5cyBzZXQ/4oCdIGFuZCDigJxXaHkgZG9lcyB0aGUgc3RhY2sgcG9pbnRlciBzdGFydCBhdCAweEZE4oCdIGZyb20gcG9wcGluZyB1cCBvbiByL0VtdURldi4gUXVlc3Rpb25zIGxpa2UgdGhlc2UgYWN0dWFsbHkgaGF2ZSBpbmNyZWRpYmx5IHN0cmFpZ2h0Zm9yd2FyZCBhbnN3ZXJzLCBidXQgdGhlIGFic29sdXRlIG1hc3Mgb2YgY29uZnVzaW5nIGRvY3VtZW50YXRpb24gbWFrZXMgaXQgaGFyZCB0byBwaW4gZG93biBzb21ldGhpbmcgdGFuZ2libGUuIE15IGdvYWwgaGVyZSBpcyB0byBjcmVhdGUgYSBkb2N1bWVudGF0aW9uIGFraW4gdG8gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vd3d3Lm9iZWxpc2subWUudWsvNjUwMi9yZWZlcmVuY2UuaHRtbFwiXG4gICAgICB9fT57YDY1MDIgRG9jdW1lbnRhdGlvbiBhdCBvYmVsaXNrLm1lLnVrYH08L2E+e2Agc3RyaWN0bHkgZm9yIGFyZWFzIEkgZm91bmQgY29uZnVzaW5nLiBBbmQgaXTigJlzIG5vdCBsaWtlIHRoZSBkb2N1bWVudGF0aW9uIHdhcyBiYWQhIEl0IGp1c3Qgc2VlbXMgbGlrZSBtb3N0IG9mIGl0IGlzIG1lYW50IGFzIGEgcmVmZXJlbmNlIGZvciB3cml0aW5nIDY1MDIgYXNzZW1ibHksIG5vdCBmb3Igd3JpdGluZyBzb21ldGhpbmcgdGhhdCB3aWxsIHJlYWQgNjUwMiBieXRlY29kZS5gfTwvcD5cbiAgICA8aDI+e2BBZGRyZXNzaW5nIE1vZGVzIGluIHRoZSA2NTAyYH08L2gyPlxuICAgIDxwPntgQWhoLCBub3cgZm9yIHRoZSBtZWF0IGFuZCBwb3RhdG9lcyBvZiBpdCBhbGw6IEFkZHJlc3NpbmcgbW9kZXMhIFdlbGwsIHdoYXQgaXMgYW4gYWRkcmVzc2luZyBtb2RlPyBUaGUgNjUwMiBoYXMgYWN0dWFsbHkgaGFzIGEgZmFpcmx5IG1pbmltYWwgbnVtYmVyIG9mIGluc3RydWN0aW9ucywgYW5kIG1vc3QgYXJlIHZlcnkgc2ltcGxlIG9wZXJhdGlvbnMgKGxlZnQvcmlnaHQgYml0c2hpZnQsIHNldC9jbGVhciBmbGFncywgbG9hZCB0byBhY2N1bXVsYXRvciwgZXRj4oCmKS4gSW4gb3JkZXIgdG8gZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGlzIHJlbGF0aXZlbHkgc21hbGwgaW5zdHJ1Y3Rpb24gc2V0LCB0aGUgNjUwMiBwcm92aWRlcyBtdWx0aXBsZSBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgYWRkcmVzc2luZyBtb2Rlc2B9PC9lbT57YCB0byB0YXJnZXQgZGlmZmVyZW50IHNlY3Rpb25zIG9mIG1lbW9yeS4gU29tZSBtb2RlcyB1c2UgbGVzcyBjeWNsZXMgdGhhbiBvdGhlcnMgYW5kIHdlcmUgcHJlZmVyYWJsZSBzaW5jZSBzcGVlZCB3YXMgKGFuZCB0byBzb21lIGRlZ3JlZSBzdGlsbCBpcykgYSBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGJpZyBkZWFsYH08L3N0cm9uZz57YC4gQnV0IGJlZm9yZSB3ZSBnZXQgaW50byB0aGUgYWRkcmVzc2luZyBtb2RlcywgbWF5YmUgd2Ugc2hvdWxkIGNvbnNpZGVyIGhvdyB0aGUgNjUwMiB3b3JrcyBhdCBhIGhpZ2ggbGV2ZWwuIEVzc2VudGlhbGx5LCB0aGUgQ1BVIGRvZXMgdGhlIGZvbGxvd2luZyB0aGluZ3Mgb3ZlciBhbmQgb3ZlciBhZ2FpbjpgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+e2BmZXRjaCBieXRlIGZyb20gYWRkcmVzcyBwb2ludGVkIHRvIGJ5IHByb2dyYW0gY291bnRlcmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YGRlY29kZSBhbmQgZXhlY3V0ZSB0aGF0IGJ5dGUuIEkgbWVhbiwgaXTigJlzIGFjdHVhbGx5IG1vcmUgY29tcGxpY2F0ZWQgdGhhbiB0aGF0LCBidXQgdGhpcyBpcyBhIGRpc3RpbGxlZCB0cnV0aCBvZiB0aGUgQ1BVLiBTaW5jZSB0aGUgaW5zdHJ1Y3Rpb25zIChvciBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YE9wY29kZXNgfTwvZW0+e2ApIGFyZSBhIHNpbmdsZSBieXRlLCB0aGF0IGdpdmVzIHVzIDI1NiBkaWZmZXJlbnQgaW5zdHJ1Y3Rpb25zLiBCdXQgc29tZSBvZiB0aG9zZSBieXRlcyBhcmUgdW51c2VkLCBzbyB3ZSBvbmx5IGhhdmUgMTUxIG9wY29kZXMsIDU2IG9mIHdoaWNoIGFyZSB1bmlxdWUuIEFmdGVyIHRha2luZyBvdXQgdGhlIG9wY29kZXMgd2l0aCBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YEltcGxpZWRgfTwvZW0+e2AgYWRkcmVzc2luZyAod2hpY2ggaXMgdGFudGFtb3VudCB0byBgfTxlbSBwYXJlbnROYW1lPVwibGlcIj57YG5vYH08L2VtPntgIGFkZHJlc3NpbmcpLCB5b3UgZ2V0IHNvbWV0aGluZyBsaWtlIDMyIGluc3RydWN0aW9ucyB0aGF0IGNhbiBvcGVyYXRlIGFjY29yZGluZyB0byB2YXJpb3VzIGFkZHJlc3NpbmcgbW9kZXMuYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPGgyPntgSW1wbGllZGB9PC9oMj5cbiAgICA8cD57YFRoaXMgaXMgcHJvYmFibHkgdGhlIHNpbXBsZXN0IGFkZHJlc3NpbmcgbW9kZSB0byB0YWxrIGFib3V0LiBZb3Uga25vdyBob3cgQ1BV4oCZcyBoYXZlIGZsYWdzLCBhbmQgc29tZSBpbnN0cnVjdGlvbnMgc2ltcGx5IHNldC9jbGVhciBhIHBhcnRpY3VsYXIgZmxhZz8gVGhvc2UgaW5zdHJ1Y3Rpb25zIGRvbuKAmXQgdGFyZ2V0IG1lbW9yeSBhZGRyZXNzZXMsIGJ1dCByYXRoZXIgYSBzcGVjaWZpYyBjb21wb25lbnQgb2YgdGhlIENQVSwgYW5kIHVzZSBJbXBsaWVkIE1vZGUgQWRkcmVzc2luZy4gU29tZSBvcGNvZGVzIHVzaW5nIHRoaXMgbW9kZSBhcmUgSU5YLCBQSEEsIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BTRUNgfTwvaW5saW5lQ29kZT57YC4gTm8gYWRkaXRpb25hbCBkYXRhIGlzIHJlYWQgdXBvbiBleGVjdXRpb24gb2Ygb3Bjb2RlcyB3aXRoIHRoaXMgYWRkcmVzc2luZyBtb2RlOyB0aGUgcHJvZ3JhbSBjb3VudGVyIGlzIGluY3JlbWVudGVkIGJ5IDEgYW5kIHRoZSBuZXh0IG9wY29kZSBpcyBmZXRjaGVkLmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHRUYXJnZXQgQWRkcmVzc1xuMHgxOCAoQ0xDKVx0JmNhcnJ5RmxhZ2B9PC9wPlxuICAgIDxoMj57YEFjY3VtdWxhdG9yYH08L2gyPlxuICAgIDxwPntgVGhpcyBpcyBhbm90aGVyIGVhc3kgYWRkcmVzc2luZyBtb2RlIHRvIHRhbGsgYWJvdXQhIEJhc2ljYWxseSwgYW55IG9wY29kZSB1c2luZyB0aGlzIGFkZHJlc3NpbmcgbW9kZSBkb2VzIGFsbCBvZiBpdHMgd29yayBvbiB0aGUgYWNjdW11bGF0b3IuIFJPUiwgYW4gb3Bjb2RlIHRoYXQgdXNlcyB0aGlzIGFkZHJlc3NpbmcgbW9kZSB0byByb3RhdGUgdGhlIGFjY3VtdWxhdG9yIHRvIHRoZSByaWdodCAoaS5lLiwgYml0c2hpZnRpbmcgMSBwbGFjZSB0byB0aGUgcmlnaHQsIGFuZCB3cmFwcGluZyBiaXQgMCBhcm91bmQgdG8gZmlsbCB0aGUgdm9pZCBsZWZ0IGJ5IGJpdCA3KS4gU2ltaWxhciB0byBJbXBsaWVkLCB0aGlzIG1vZGUgZG9lc27igJl0IHJlYWQgYW55IGV4dHJhIGRhdGEgYWZ0ZXIgdGhlIG9wY29kZSwgYW5kIHlvdSBjYW4gbWFrZSB0aGUgYXJndW1lbnQgdGhhdCB0aGUgdGFyZ2V0IGFkZHJlc3MgaXMgdGhlIOKAnGFkZHJlc3PigJ0gb2YgdGhlIGFjY3VtdWxhdG9yLmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHRUYXJnZXQgQWRkcmVzc1xuMHgwQSAoQVNMKVx0JmFjY3VtdWxhdG9yYH08L3A+XG4gICAgPGgyPntgSW1tZWRpYXRlYH08L2gyPlxuICAgIDxwPntgT2ssIHRoaXMgYmFkIGJveSBpcyB3aGVyZSB3ZSBzdGFydCByZWFkaW5nIGluIGRhdGEhIEJhc2ljYWxseSwgdGhlIGJ5dGUgdGhhdCBpbW1lZGlhdGVseSBmb2xsb3dzIHRoZSBvcGNvZGUgaW4gbWVtb3J5IGlzIG91ciDigJx0YXJnZXTigJ0uIFNvIHRoZSB0YXJnZXQgYWRkcmVzcyBpcyBQQyArIDEsIHdoZXJlIFBDIChQcm9ncmFtIENvdW50ZXIpIGlzIHRoZSBsb2NhdGlvbiBvZiB0aGUgZXhlY3V0aW5nIG9wY29kZS4gVGhlIGZvbGxvd2luZyB0YWJsZSBzaG93cyAweEZGIGJlaW5nIGxvYWRlZCBpbnRvIHRoZSBhY2N1bXVsYXRvci5gfTwvcD5cbiAgICA8cD57YE9wY29kZVx0TmV4dCBCeXRlXHRUYXJnZXQgQWRkcmVzc1xuMHhBOSAoTERBKVx0MHhGRlx0UEMgKyAxYH08L3A+XG4gICAgPGgyPntgUmVsYXRpdmVgfTwvaDI+XG4gICAgPHA+e2BSZWxhdGl2ZSBhZGRyZXNzaW5nIGlzIHVzZWQgcHJlZG9taW5hbnRseSAoZW50aXJlbHk/KSBpbiBicmFuY2hpbmcgaW5zdHJ1Y3Rpb25zIHRvIHNraXAgb3ZlciBzZWdtZW50cyBvZiBjb2RlIGNvbmRpdGlvbmFsbHkuIFRoZXNlIGluc3RydWN0aW9ucyB0YWtlIHRoZSBieXRlIGZvbGxvd2luZyB0aGUgb3Bjb2RlLCBhbmQgYWRkIGl0IHRvIHRoZSBwcm9ncmFtIGNvdW50ZXIgdG8gcHJvZHVjZSBhIHRhcmdldCBhZGRyZXNzLiBUaGUgb25seSBjYXRjaCBpcyB0aGF0IHNpZ25lZCBhcml0aG1ldGljIGlzIHVzZWQsIHNvIHRoZSBwcm9ncmFtIGNvdW50ZXIgY2FuIGFsc28ganVtcCBiYWNrd2FyZHMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiB0aGUgbmV4dCBieXRlLmB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHROZXh0IEJ5dGVcdFRhcmdldCBBZGRyZXNzXG4weDkwIChCQ0MpXHQweDAyXHRQQyArIDB4MDJgfTwvcD5cbiAgICA8aDI+e2BaZXJvIFBhZ2VgfTwvaDI+XG4gICAgPHA+e2BaZXJvIFBhZ2UgQWRkcmVzc2luZyBhbHdheXMgYWNjZXNzZXMgdGhlIDB4MDAgcGFnZSBvZiB0aGUgYWRkcmVzcyBzcGFjZSwgbWVhbmluZyBpdCBuZXZlciB1bmRlcmdvZXMgYSBwYWdlIGJyZWFrIGFuZCBvbmx5IHJlcXVpcmVzIGEgc2luZ2xlIGJ5dGUgdG8gc3BlY2lmeS4gVGhpcyBtYWtlcyBpdCByZWFsbHkgcGVyZm9ybWFudCwgYnV0IGFsc28gdmVyeSBsaW1pdGVkLiBUaGUgYnl0ZSBpbW1lZGlhdGVseSBmb2xsb3dpbmcgdGhlIG9wY29kZSBtYWtlcyB1cCB0aGUgbG93ZXIgYnl0ZSBvZiB0aGUg4oCcdGFyZ2V0IGFkZHJlc3PigJ0uYH08L3A+XG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgICA8dGFibGU+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5PcGNvZGU8L3RoPlxuICAgICAgICAgICAgPHRoPk5leHQgQnl0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+VGFyZ2V0IEFkZHJlc3M8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+MHg4NCAoU1RZKTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHhDMjwvdGQ+XG4gICAgICAgICAgICA8dGQ+MHgwMEMyPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuIFxuIyMgWmVybyBQYWdlLCBYICYgWmVybyBQYWdlLCBZXG5aZXJvIFBhZ2UsIFggJiBaZXJvIFBhZ2UsIFkgYXJlIGJvdGgganVzdCB0aGUgcmVndWxhciBaZXJvIFBhZ2UgYWRkcmVzc2luZyBtb2RlIHdpdGggdGhlIGNvbnRlbnRzIG9mIHJlZ2lzdGVyIFggb3IgWSBiZWluZyBhZGRlZCB0byB0aGUg4oCcVGFyZ2V0IEFkZHJlc3PigJ0uIElmIHRoZSBhZGRpdGlvbiBjYXVzZXMgdGhlIOKAnFRhcmdldCBBZGRyZXNz4oCdIHRvIGNyb3NzIGEgcGFnZSBib3VuZGFyeSwgdGhlIHVwcGVyIGJ5dGUgaXMgZGlzY2FyZGVkIHN1Y2ggdGhhdCB0aGUgZmluYWwgYWRkcmVzcyBpcyBzdGlsbCBvbiB0aGUgemVybyBwYWdlLlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+T3Bjb2RlPC90aD5cbiAgICAgICAgICAgIDx0aD5OZXh0IEJ5dGU8L3RoPlxuICAgICAgICAgICAgPHRoPlkgUmVnaXN0ZXI8L3RoPlxuICAgICAgICAgICAgPHRoPlRhcmdldCBBZGRyZXNzPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjB4QjYgKExEWCk8L3RkPlxuICAgICAgICAgICAgPHRkPjB4RUE8L3RkPlxuICAgICAgICAgICAgPHRkPjB4NjA8L3RkPlxuICAgICAgICAgICAgPHRkPjB4MDA0QTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2BBYnNvbHV0ZWB9PC9oMj5cbiAgICA8cD57YEFic29sdXRlIGFkZHJlc3NpbmcgdGFrZXMgdGhlIHR3byBieXRlcyBhZnRlciB0aGUgb3Bjb2RlIGFuZCB1c2UgdGhlbSB0byBjb25zdHJ1Y3QgYSB0YXJnZXQgYWRkcmVzcy4gVGhlIGZpcnN0IGJ5dGUgaXMgdGhlIGxvd2VyIGJ5dGUsIGFuZCB0aGUgc2Vjb25kIGJ5dGUgaXMgdGhlIGhpZ2hlciBieXRlLmB9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+T3Bjb2RlPC90aD5cbiAgICAgICAgICAgIDx0aD5Mb3dlciBCeXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5VcHBlciBCeXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5UYXJnZXQgQWRkcmVzczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD4weEVEIChTQkMpPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weEIzPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weDIxPC90ZD5cbiAgICAgICAgICAgIDx0ZD4weDIxQjM8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG5cdFx0XHRcblx0XHRcdFxuICAgIDxoMj57YEFic29sdXRlLCBYICYgQWJzb2x1dGUgWWB9PC9oMj5cbiAgICA8cD57YFRoZXNlIHR3byBhZGRyZXNzaW5nIG1vZGVzIGFyZSBzbyBzaW1pbGFyIHRoZXkgbWlnaHQgYXMgd2VsbCBiZSB0aGUgc2FtZS4gQm90aCBvZiB0aGVtIGZpbmQgdGhlIEFic29sdXRlIFRhcmdldCBBZGRyZXNzIChkZXRhaWxlZCBqdXN0IGFib3ZlKSBhbmQgYWRkIGVpdGhlciByZWdpc3RlciBYIG9yIFkgdG8gaXQuYH08L3A+XG4gICAgPHA+e2BPcGNvZGVcdExvd2VyIEJ5dGVcdFVwcGVyIEJ5dGVcdFggUmVnaXN0ZXJcdEFCUyBBZGRyZXNzXHRUYXJnZXQgQWRkcmVzc1xuMHhGRCAoU0JDKVx0MHgxM1x0MHg0Qlx0MHgyMFx0MHg0QjEzXHQweDRCMzNgfTwvcD5cbiAgICA8aDI+e2BJbmRpcmVjdGB9PC9oMj5cbiAgICA8cD57YFNvIGZhciwgbm9uZSBvZiB0aGUgYWRkcmVzc2luZyBtb2RlcyBoYXZlIGJlZW4gdmVyeSBjb21wbGljYXRlZDogdGhhdCBzdGFydHMgY2hhbmdlIHdpdGggSW5kaXJlY3QgQWRkcmVzc2luZy4gWW91IGtub3cgaG93IGEgbG90IG9mIGJlZ2lubmVyIHByb2dyYW1tZXJzIGdldCBodW5nIHVwIG9uIHBvaW50ZXJzPyBXZWxsLCBJbmRpcmVjdCBhZGRyZXNzaW5nIHVzZXMgcG9pbnRlcnMuIEEgZmlyc3QgYWRkcmVzcyBpcyBvYnRhaW5lZCBzaW1pbGFybHkgdG8gQWJzb2x1dGUsIGFuZCBpcyB1c2VkIGFzIGEgcG9pbnRlciB0byBhIHNlY29uZCBzcGFjZSBpbiBtZW1vcnksIHdoZXJlIHRoZSDigJxUYXJnZXQgQWRkcmVzc+KAnSBpcyByZWFkIGZyb20uIFRoZSA2NTAyIC0gYW4gOCBiaXQgbWFjaGluZSB3aXRoIDE2IGJpdCBhZGRyZXNzIHNwYWNlIC0gaGFzIG5vIHdheSBvZiBzdXBwb3J0aW5nIDE2IGJpdCBhcml0aG1ldGljLCBzbyBjcm9zc2luZyBwYWdlIGJvdW5kYXJpZXMgKGUuZy4gcmVhZGluZyAweDAxRkYgYW5kIHRoZW4gcmVhZGluZyAweDAyMDAgdGFrZXMgYW4gYWRkaXRpb25hbCBjeWNsZS4gQmUgaXQgaW50ZW50aW9uYWwgb3IgYSBidWcsIHRoaXMgZXh0cmEgY3ljbGUgaXNu4oCZdCB0YWtlbiB3aGVuIGxvYWRpbmcgdGhlIOKAnHRhcmdldCBhZGRyZXNz4oCdLCBzbyB0aGUgYWRkcmVzcyB3cmFwcyBhcm91bmQgdG8gdGhlIHNhbWUgcGFnZS4gQ2xlYXIgYXMgbXVkPyBNYXliZSB0aGUgZm9sbG93aW5nIHRhYmxlIHdpbGwgYmUgZWFzaWVyIHRvIHVuZGVyc3RhbmQuYH08L3A+XG4gICAgPHA+e2BPcGNvZGVcdExvd2VyIEJ5dGVcdFVwcGVyIEJ5dGVcdEFCUyBBZGRyZXNzXHRUYXJnZXQgTG93ZXIgQnl0ZVx0VGFyZ2V0IFVwcGVyIEJ5dGVcbjB4NkMgKEpNUClcdDB4RkZcdDB4MzRcdDB4MzRGRlx0cmVhZCBmcm9tIDB4MzRGRlx0cmVhZCBmcm9tIDB4MzQwMGB9PC9wPlxuICAgIDxoMj57YEluZGlyZWN0LCBYYH08L2gyPlxuICAgIDxwPntgVGhpcyBhZGRyZXNzaW5nIG1vZGUgaXMga2luZCBvZiBsaWtlIGEgY29tYmluYXRpb24gb2YgWmVybyBQYWdlIFggJiBJbmRpcmVjdC4gRmlyc3QsIHRoZSBaZXJvIFBhZ2UgWCBhZGRyZXNzIGlzIHJlYWQuIEFmdGVyd2FyZHMsIHRoaXMgYWRkcmVzcyBpcyB1c2VkIHRvIGZpbmQgdGhlIOKAnFRhcmdldCBBZGRyZXNz4oCdLiBBbmQgaW4gdGhlIHNwaXJpdCBvZiB0aGUgb3JpZ2luYWwgSW5kaXJlY3QgYnVnL2ZlYXR1cmUsIGlmIHRoZSBaZXJvIFBhZ2UgWCBhZGRyZXNzIGlzIDB4MDBGRiwgdGhlIHNlY29uZCBieXRlIGlzIGxvYWRlZCBmcm9tIDB4MDAwMCBpbnN0ZWFkIG9mIDB4MDEwMGB9PC9wPlxuICAgIDxwPntgT3Bjb2RlXHROZXh0IEJ5dGVcdFggUmVnaXN0ZXJcdFplcm8gUGFnZSBYXHRUYXJnZXQgTG93ZXIgQnl0ZVx0VGFyZ2V0IFVwcGVyIEJ5dGVcbjB4ODEgKFNUQSlcdDB4NTVcdDB4MzVcdDB4MDA5MFx0cmVhZCBmcm9tIDB4MDA5MFx0cmVhZCBmcm9tIDB4MDA5MWB9PC9wPlxuICAgIDxoMj57YEluZGlyZWN0LCBZYH08L2gyPlxuICAgIDxwPntgVGhpcyBhZGRyZXNzaW5nIG1vZGUgaXMga2luZCBvZiBsaWtlIGEgY29tYmluYXRpb24gb2YgWmVybyBQYWdlICYgSW5kaXJlY3QuIFdpdGggYW4gZXh0cmEgWSBSZWdpc3RlciBBZGRpdGlvbi4gQWZ0ZXIgYSBaZXJvIFBhZ2UgYWRkcmVzcyBpcyByZWFkLCBpdCBpcyB1c2VkIHRvIGZpbmQgdGhlIOKAnFRhcmdldCBBZGRyZXNz4oCdLiBGaW5hbGx5LCB0aGUgY29udGVudHMgb2YgdGhlIFkgUmVnaXN0ZXIgYXJlIGFkZGVkIHRvIHRoaXMg4oCcVGFyZ2V0IEFkZHJlc3PigJ0uYH08L3A+XG4gICAgPHA+e2BPcGNvZGVcdE5leHQgQnl0ZVx0WmVybyBQYWdlXHRUYXJnZXQgTG93ZXIgQnl0ZVx0VGFyZ2V0IFVwcGVyIEJ5dGVcbjB4MTEgKE9SQSlcdDB4NzZcdDB4MDA3Nlx0cmVhZCBmcm9tIDB4MDA3Nlx0cmVhZCBmcm9tIDB4MDA3N2B9PC9wPlxuICAgIDxoMj57YFNhbXBsZSBDb2RlYH08L2gyPlxuICAgIDxwPntgQmVsb3cgYXJlIG15IGltcGxlbWVudGF0aW9ucyBvZiB0aGVzZSBhZGRyZXNzaW5nIG1vZGVzIGluIEMrKy4gSSBjaG9zZSB0byB0cmVhdCBlYWNoIG1vZGUgYXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHRhcmdldCBhZGRyZXNzIGFuZCBoYXZlIGhhbmRsaW5nIG9mIHJlYWRpbmcvd3JpdGluZyBsb2NhbCB0byB0aGUgb3Bjb2RlIGZ1bmN0aW9uLmB9PC9wPlxuICAgIDxDb2RlQmxvY2sgbGFuZz1cIkMrK1wiIG1keFR5cGU9XCJDb2RlQmxvY2tcIiAvPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57fX0+e2AvLyBJbW1lZGlhdGVcbnUxNiBDUFU6OklNTSgpe1xuICAgIHUxNiB0ZW1wID0gUEMgKyAxO1xuICAgIFBDICs9IDI7XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cbi8vIEFjY3VtdWxhdG9yXG51MTYgQ1BVOjpBQ0MoKXtcbiAgICBQQyArPSAxO1xuICAgIHJldHVybiBBQ0NVTVVMQVRPUl9BRERSRVNTO1xufVxuXG4vLyBSZWxhdGl2ZVxudTE2IENQVTo6UkVMKCl7XG4gICAgczE2IGFkZHJlc3MgPSBQQztcbiAgICBzOCBvZmZzZXQgPSByZWFkKFBDICsgMSk7XG4gICAgYWRkcmVzcyArPSBvZmZzZXQgKyAyO1xuICAgIHJldHVybiAodTE2KSBhZGRyZXNzO1xufVxuXG4vLyBaZXJvIFBhZ2VcbnUxNiBDUFU6OlpQRygpe1xuICAgIHU4IGFkZHJlc3MgPSByZWFkKFBDICsgMSk7XG4gICAgUEMgKz0gMjtcbiAgICByZXR1cm4gKHUxNikgYWRkcmVzcztcbn1cblxuLy8gWmVybyBQYWdlIFhcbnUxNiBDUFU6OlpQWCgpe1xuICAgIHUxNiBhZGRyZXNzID0gcmVhZChQQyArIDEpO1xuICAgIGFkZHJlc3MgPSAoYWRkcmVzcyArIFgpICYgMHhGRjtcbiAgICBQQyArPSAyO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuXG4vLyBaZXJvIFBhZ2UgWVxudTE2IENQVTo6WlBZKCl7XG4gICAgdTE2IGFkZHJlc3MgPSByZWFkKFBDICsgMSk7XG4gICAgYWRkcmVzcyA9IChhZGRyZXNzICsgWSkgJiAweEZGO1xuICAgIFBDICs9IDI7XG4gICAgcmV0dXJuIGFkZHJlc3M7XG59XG5cbi8vIEFic29sdXRlXG51MTYgQ1BVOjpBQlMoKXtcbiAgICB1MTYgTFNOID0gcmVhZChQQyArIDEpO1xuICAgIHUxNiBNU04gPSByZWFkKFBDICsgMik7XG4gICAgdTMyIGFkZHJlc3MgPSBMU04gKyAoTVNOIDw8IDgpO1xuICAgIFBDICs9IDM7XG4gICAgcmV0dXJuIGFkZHJlc3M7XG59XG5cbi8vIEFic29sdXRlIFhcbnUxNiBDUFU6OkFCWCgpe1xuICAgIHUzMiBhZGRyZXNzID0gQUJTKCk7XG4gICAgcmV0dXJuIGFkZHJlc3MgKyBYO1xufVxuXG4vLyBBYnNvbHV0ZSBZXG51MTYgQ1BVOjpBQlkoKXtcbiAgICB1MzIgYWRkcmVzcyA9IEFCUygpO1xuICAgIHJldHVybiBhZGRyZXNzICsgWTtcbn1cblxuLy8gSW5kaXJlY3RcbnUxNiBDUFU6OklORCgpe1xuICAgIHUxNiBBQlNfTFNOID0gcmVhZChQQyArIDEpO1xuICAgIHUxNiBBQlNfTVNOID0gcmVhZChQQyArIDIpO1xuICAgIHUxNiBBQlNfYWRkcmVzcyA9IChBQlNfTVNOIDw8IDgpICsgQUJTX0xTTjtcblxuICAgIC8vIEFOIElORElSRUNUIEpVTVAgTVVTVCBORVZFUiBVU0UgQSBWRUNUT1IgQkVHSU5OSU5HIE9OIFRIRSBMQVNUIEJZVEUgT0YgQSBQQUdFXG4gICAgdTE2IGFkZHJlc3MsIExTTiwgTVNOO1xuICAgIGlmICgoQUJTX2FkZHJlc3MgJiAweEZGKSA9PSAweEZGKXtcbiAgICAgICAgTFNOID0gcmVhZChBQlNfYWRkcmVzcyk7XG4gICAgICAgIE1TTiA9IHJlYWQoQUJTX2FkZHJlc3MgJiAweEZGMDApO1xuICAgICAgICBhZGRyZXNzID0gKE1TTiA8PCA4KSArIExTTjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBMU04gPSByZWFkKEFCU19hZGRyZXNzKTtcbiAgICAgICAgTVNOID0gcmVhZChBQlNfYWRkcmVzcyArIDEpO1xuICAgICAgICBhZGRyZXNzID0gKE1TTiA8PCA4KSArIExTTjtcbiAgICB9XG4gICAgUEMgKz0gMjtcbiAgICByZXR1cm4gYWRkcmVzcztcbn1cblxuLy8gSW5kaXJlY3QgWFxudTE2IENQVTo6SURYKCl7XG4gICAgdTE2IGFkZHJlc3MgPSAocmVhZChQQyArIDEpICsgWCkgJiAweEZGO1xuICAgIHUxNiBMU04gPSByZWFkKGFkZHJlc3MpO1xuICAgIHUxNiBNU04gPSByZWFkKChhZGRyZXNzICsgMSkgJiAweEZGKTtcbiAgICBhZGRyZXNzID0gKE1TTiA8PCA4KSArIExTTjtcbiAgICBQQyArPSAyO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuXG4vLyBJbmRpcmVjdCBZXG51MTYgQ1BVOjpJRFkoKXtcbiAgICB1MTYgdGVtcCA9IHJlYWQoUEMgKyAxKTtcbiAgICB1MTYgTFNOID0gcmVhZCh0ZW1wKTtcbiAgICB1MTYgTVNOID0gcmVhZCgodGVtcCArIDEpICYgMHhGRik7XG4gICAgdTE2IGFkZHJlc3MgPSBMU04gKyAoTVNOIDw8IDgpICsgWTtcbiAgICBQQyArPSAyO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9