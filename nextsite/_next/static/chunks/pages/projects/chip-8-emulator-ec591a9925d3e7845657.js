_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"8tzt":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"default",(function(){return u}));var a=n("rePB"),i=n("Ff2n"),o=(n("q1tI"),n("7ljp")),r=n("rSqB");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={title:"Chip-8 Emulator",description:"My maiden voyage into emulation development",githubLink:"https://github.com/Svaught598/Chip8Emulator",imageLink:"/images/chip8.png",layout:"ProjectLayout",__resourcePath:"projects/chip-8-emulator.mdx",__scans:{}},c={frontMatter:h},p=r.a;function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)(p,l(l(l({},c),n),{},{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",null,"Code is just data"),Object(o.a)("p",null,"and nothing makes that more clear than working on an emulator. The CHIP-8 emulator is the 'Hello World!' of emulation development, and writing the code to get pong running showed me sooooo much about how computers work at a lower level. Unlike many systems, the CHIP-8 is actually an abstract machine (not unlike a language interpreter) that is capable of fetching & executing opcodes and manipulating data stored in memory. Here's what really shocked me: the opcodes are just bytes! the data is just bytes! IT'S ALL BYTES!"),Object(o.a)("p",null,"So yeah, I was bewildered. Not sure what I expected, but the elegance of interpretting chunks of data in different contexts really surprised me. And after writing some really simple bitwise operations and one complex one (curse you DXYN), I had the emulator up and running. It was a blast to code this project up, and something I may take up again in the future to learn new programming languages. "),Object(o.a)("p",null,"The real difficulty in the project was learning Java & OOP fundamentals alongside the CHIP-8 spec itself. Challenging might not be the right description, but research-intensive? Definitely. "),Object(o.a)("h2",null,"Problems"),Object(o.a)("p",null,"I haven\u2019t used Java extensively, and this project hardly made me an expert, but I have become much more familiar with the language as a result. There were some pretty complex parts to making this emulator, the most challenging of which had to do with the Event dispatch thread and the opcode 0xFX0A. Anyone familiar enough with the CHIP-8 to recognize opcodes might see where this is going: any time the CPU interpreted 0xFX0A, it paused the thread, which meant that input couldn\u2019t be read."),Object(o.a)("p",null,'Opcode 0xFX0A is pretty simple. At least, my implementation is. It tells the CPU \u201chey, why don\u2019t you sleep() until a key is pressed?". This becomes a problem in a single threaded application since continuous calls of sleep() end up blocking IO, so the program is never able to tell when a key is pressed. So in plainspeak, an infitite loop. I ended up fixing the issue by dispatching UI/IO events on the Event Dispatch Thread provided by swing, while running other logic on a separate thread. This was a pretty nice solution, but I do wish I would\u2019ve spent more time planning the implementation before jumping right into the code. This brings us to the biggest thing I learned:'),Object(o.a)("h2",null,"The Importance of Planning"),Object(o.a)("p",null,"As a Physics graduate (now aspiring developer) I haven\u2019t had the proper training in computer science fundamentals and best practices for Object-Oriented Programming (OOP). This isn\u2019t to say I suck (I mean, I could be better), but that I didn\u2019t even know what to consider while building this application. This lack of planning - in a Java project, mind you - resulted in a mess of everything being public. This wasn\u2019t a huge issue for this small project, but in a larger project it could manifest as having pieces of code that are insanely complex."),Object(o.a)("p",null,"For example, say there is a method in CPU called initializeMemory() that does the heavy lifting of setting the memory, register, timers, etc\u2026 all to 0. Now we make the method public and call it from the CPU constructor upon startup AND call it from the GUI panel anytime someone presses reset. Seems like a win-win. Some time passes, and it is decided that the current implementation of reset is not what is needed; the application actually needs to preserve some memory upon resetting the system! now there are two options, neither of which are super enticing:"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Option 1.")," Expose a new method in CPU called reset(). If the CPU and GUI panel are the only objects using initializeMemory(), great! That means this was caught early, and the code isn\u2019t all tangly and gross. But imagine every single one of your test cases calls initializeMemory(). We can\u2019t just make the old method private, or we can\u2019t run the tests! Now there are two public methods that are confusingly similar. This branches into a subdecision of refactoring tests or deal with ambiguity. The former makes the code maintainable but takes a lot longer and the second is a quick fix that makes additional changes more complex, but a little bit of planning would have circumvented this entire fiasco. Needless to say, I have become acquainted with the concept of technical debt. Oh yeah, and option two\u2026"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Option 2.")," There is no option two. I lied. Sorry. The two options are really just one option in a trenchcoat that will either mug you or make you balance their checkbook. Just do things right & plan."))}u.isMDXComponent=!0},BI97:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/chip-8-emulator",function(){return n("8tzt")}])}},[["BI97",0,2,1,4]]]);