_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"0Oaj":function(e,t){e.exports="/_next/static/images/wetlab-d4d251fd83a92b7fd398a397fd090ed8.png"},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},"8tzt":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"default",(function(){return h}));var r=n("rePB"),a=n("Ff2n"),o=(n("q1tI"),n("7ljp")),i=n("rSqB");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={title:"Chip-8 Emulator",description:"My maiden voyage into emulation development",githubLink:"https://github.com/Svaught598/Chip8Emulator",imageLink:"/images/chip8.png",layout:"ProjectLayout",__resourcePath:"projects/chip-8-emulator.mdx",__scans:{}},u={frontMatter:l},p=i.a;function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)(p,s(s(s({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",null,"Code is just data"),Object(o.a)("p",null,"and nothing makes that more clear than working on an emulator. The CHIP-8 emulator is the 'Hello World!' of emulation development, and writing the code to get pong running showed me sooooo much about how computers work at a lower level. Unlike many systems, the CHIP-8 is actually an abstract machine (not unlike a language interpreter) that is capable of fetching & executing opcodes and manipulating data stored in memory. Here's what really shocked me: the opcodes are just bytes! the data is just bytes! IT'S ALL BYTES!"),Object(o.a)("p",null,"So yeah, I was bewildered. Not sure what I expected, but the elegance of interpretting chunks of data in different contexts really surprised me. And after writing some really simple bitwise operations and one complex one (curse you DXYN), I had the emulator up and running. It was a blast to code this project up, and something I may take up again in the future to learn new programming languages. "),Object(o.a)("p",null,"The real difficulty in the project was learning Java & OOP fundamentals alongside the CHIP-8 spec itself. Challenging might not be the right description, but research-intensive? Definitely. "),Object(o.a)("h2",null,"Problems"),Object(o.a)("p",null,"I haven\u2019t used Java extensively, and this project hardly made me an expert, but I have become much more familiar with the language as a result. There were some pretty complex parts to making this emulator, the most challenging of which had to do with the Event dispatch thread and the opcode 0xFX0A. Anyone familiar enough with the CHIP-8 to recognize opcodes might see where this is going: any time the CPU interpreted 0xFX0A, it paused the thread, which meant that input couldn\u2019t be read."),Object(o.a)("p",null,'Opcode 0xFX0A is pretty simple. At least, my implementation is. It tells the CPU \u201chey, why don\u2019t you sleep() until a key is pressed?". This becomes a problem in a single threaded application since continuous calls of sleep() end up blocking IO, so the program is never able to tell when a key is pressed. So in plainspeak, an infitite loop. I ended up fixing the issue by dispatching UI/IO events on the Event Dispatch Thread provided by swing, while running other logic on a separate thread. This was a pretty nice solution, but I do wish I would\u2019ve spent more time planning the implementation before jumping right into the code. This brings us to the biggest thing I learned:'),Object(o.a)("h2",null,"The Importance of Planning"),Object(o.a)("p",null,"As a Physics graduate (now aspiring developer) I haven\u2019t had the proper training in computer science fundamentals and best practices for Object-Oriented Programming (OOP). This isn\u2019t to say I suck (I mean, I could be better), but that I didn\u2019t even know what to consider while building this application. This lack of planning - in a Java project, mind you - resulted in a mess of everything being public. This wasn\u2019t a huge issue for this small project, but in a larger project it could manifest as having pieces of code that are insanely complex."),Object(o.a)("p",null,"For example, say there is a method in CPU called initializeMemory() that does the heavy lifting of setting the memory, register, timers, etc\u2026 all to 0. Now we make the method public and call it from the CPU constructor upon startup AND call it from the GUI panel anytime someone presses reset. Seems like a win-win. Some time passes, and it is decided that the current implementation of reset is not what is needed; the application actually needs to preserve some memory upon resetting the system! now there are two options, neither of which are super enticing:"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Option 1.")," Expose a new method in CPU called reset(). If the CPU and GUI panel are the only objects using initializeMemory(), great! That means this was caught early, and the code isn\u2019t all tangly and gross. But imagine every single one of your test cases calls initializeMemory(). We can\u2019t just make the old method private, or we can\u2019t run the tests! Now there are two public methods that are confusingly similar. This branches into a subdecision of refactoring tests or deal with ambiguity. The former makes the code maintainable but takes a lot longer and the second is a quick fix that makes additional changes more complex, but a little bit of planning would have circumvented this entire fiasco. Needless to say, I have become acquainted with the concept of technical debt. Oh yeah, and option two\u2026"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Option 2.")," There is no option two. I lied. Sorry. The two options are really just one option in a trenchcoat that will either mug you or make you balance their checkbook. Just do things right & plan."))}h.isMDXComponent=!0},BI97:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/chip-8-emulator",function(){return n("8tzt")}])},BpZ7:function(e,t){throw new Error("Module parse failed: Unexpected character '\0' (1:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},E2tg:function(e,t){e.exports="/_next/static/images/flaskov-ace0e6d5c594feb35cec3226168ded21.png"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},NfvD:function(e,t){e.exports="/_next/static/images/chip8-722ff02c951755019375ac0469b6a7b8.png"},PCPg:function(e,t,n){e.exports={content:"ProjectLayout_content__23Z__"}},Phta:function(e,t){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},WsGH:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=n("q1tI"),o=n("YFqc"),i=n.n(o),c=n("iuhU");function s(e){var t=e.content,n=e.destination,o=e.animated,s=Object(a.useState)(!1),l=s[0],u=s[1];function p(e){return"mouseover"===e.type?u(!0):u(!1)}return Object(r.jsx)(i.a,{href:n,children:Object(r.jsx)("a",{onMouseOver:p,onMouseLeave:p,className:Object(c.a)("link my-0","leading-normal lg:leading-normal xl:leading-normal","text-5xl lg:text-5xl xl:text-7xl",o&&l&&"animate__animated animate__headShake"),children:t})})}},hWmI:function(e,t,n){var r={"./public/amity_jack-webfont.woff":"qlve","./public/amity_jack-webfont.woff2":"BpZ7","./public/images/chip8.png":"NfvD","./public/images/favicon.ico":"Phta","./public/images/flaskov.png":"E2tg","./public/images/wetlab.png":"0Oaj"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="hWmI"},qlve:function(e,t){throw new Error("Module parse failed: Unexpected character '\0' (1:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},rSqB:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("rePB"),a=n("nKUr"),o=(n("q1tI"),n("g4pe")),i=n.n(o),c=n("iuhU"),s=n("jsnd"),l=n("zyci"),u=(n("WsGH"),n("PCPg")),p=n.n(u);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.children,r=e.frontMatter,o=e.darkBackground?"bg-gray":"bg-charcoal";return Object(a.jsxs)("div",{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("title",{children:r.title}),Object(a.jsx)("meta",{name:"description",content:r.title}),Object(a.jsx)("link",{rel:"icon",href:"/images/favicon.ico"})]}),Object(a.jsxs)("div",{className:"main container mx-auto",children:[Object(a.jsx)(s.a,d({},e)),Object(a.jsx)("main",{className:"md:my-48 sm:my-36 w-11/12 mx-auto",children:Object(a.jsxs)("article",{className:"container mx-auto w-full md:w-9/12 lg:w-9/12",children:[Object(a.jsx)(l.b,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)("span",{children:r.title})})}),Object(a.jsxs)("div",{className:Object(c.a)(o,"animate__animated animate__fadeInUp delay04","p-5 rounded-xl shadow-xl color-transition mb-5"),children:[Object(a.jsx)("div",{className:"mb-5",children:Object(a.jsx)("img",{className:"max-h-full rounded-xl rounded-tr-xl object-scale-down mx-auto w-full",src:n("hWmI")("./public".concat(r.imageLink)),width:"330",height:"250"})}),Object(a.jsx)("div",{className:Object(c.a)("text-orange-yellow-crayola text-xl",p.a.content),children:t})]})]})})]})]})}}},[["BI97",0,2,1,3]]]);