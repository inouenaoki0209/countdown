/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Count.ts":
/*!**********************!*\
  !*** ./src/Count.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Count = void 0;\nconst Timer_1 = __webpack_require__(/*! ./Timer */ \"./src/Timer.js\");\nconst button_1 = __webpack_require__(/*! ./button */ \"./src/button.js\");\nconst display_1 = __webpack_require__(/*! ./display */ \"./src/display.js\");\nclass Count {\n    constructor() {\n        this.root = document.getElementById('root');\n        this.timer = new Timer_1.Timer();\n        this.button = new button_1.Button();\n        this.display = new display_1.Display(this.root);\n    }\n    run() {\n        this.timer.setIntervalRun();\n        this.button.start(this.timer.setIntervalRun());\n        this.button.stop(this.timer.setIntervalRun());\n        this.button.reset(this.timer.setIntervalRun());\n        this.display.displayText();\n    }\n}\nexports.Count = Count;\nconst count = new Count();\ncount.run();\n\n\n//# sourceURL=webpack://timer/./src/Count.ts?");

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Timer = void 0;\nclass Timer {\n    constructor() {\n        this.baseMin = 4;\n        this.baseSec = 60;\n        this.min = 0;\n        this.sec = 0;\n    }\n    setIntervalRun() {\n        const startTime = new Date().getTime();\n        return setInterval(() => {\n            const base = new Date().getTime() - startTime;\n            this.min = Math.floor(this.baseMin - (base / 1000 / 60));\n            this.sec = Math.floor(this.baseSec - (base / 1000)) % 60;\n            if (this.sec === 0) {\n                this.baseSec += 60;\n            }\n        }, 100);\n    }\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack://timer/./src/Timer.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Button = void 0;\nconst Timer_1 = __webpack_require__(/*! ./Timer */ \"./src/Timer.js\");\nclass Button extends Timer_1.Timer {\n    constructor() {\n        super();\n        this.startBtn = document.getElementById('start');\n        this.stopBtn = document.getElementById('stop');\n        this.resetBtn = document.getElementById('reset');\n    }\n    start(start) {\n        if (this.startBtn) {\n            this.startBtn.onclick = () => start;\n            console.log('start');\n        }\n    }\n    stop(stop) {\n        if (this.stopBtn) {\n            this.stopBtn.onclick = () => clearInterval(stop);\n        }\n    }\n    reset(reset) {\n        if (this.resetBtn) {\n            this.resetBtn.onclick = () => {\n                clearInterval(reset);\n                this.baseMin = 4;\n                this.baseSec = 60;\n                this.min = 0;\n                this.sec = 0;\n            };\n        }\n    }\n}\nexports.Button = Button;\n\n\n//# sourceURL=webpack://timer/./src/button.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nconst Timer_1 = __webpack_require__(/*! ./Timer */ \"./src/Timer.js\");\nclass Display extends Timer_1.Timer {\n    constructor(text) {\n        super();\n        this.displaySec = () => {\n            return this.sec < 10 ? '0' + this.sec : this.sec;\n        };\n        this.text = text;\n    }\n    displayText() {\n        if (this.text) {\n            this.text.innerText = `0${this.min}:${this.displaySec()}`;\n        }\n    }\n}\nexports.Display = Display;\n\n\n//# sourceURL=webpack://timer/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Count.ts");
/******/ 	
/******/ })()
;