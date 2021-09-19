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

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_MediaPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/MediaPlayer */ \"./src/classes/MediaPlayer.js\");\n/* harmony import */ var _classes_plugins_AutoPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/plugins/AutoPlay */ \"./src/classes/plugins/AutoPlay.js\");\n\n\nconst video = document.querySelector(\"video\");\nconst button = document.querySelector(\"#playButton\");\nconst mutedButton = document.querySelector(\"#muteButton\");\nconst player = new _classes_MediaPlayer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ el: video, plugins: [/* new AutoPlay(video) */] });\n\nbutton.onclick = () => player.toggle();\nmutedButton.onclick = () => player.setMuted();\n\n\n//# sourceURL=webpack://cursojavascriptprofesional/./src/App.js?");

/***/ }),

/***/ "./src/classes/MediaPlayer.js":
/*!************************************!*\
  !*** ./src/classes/MediaPlayer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaPlayer)\n/* harmony export */ });\nclass MediaPlayer {\n  constructor(config) {\n    this.media = config.el;\n    this.plugins = config.plugins || [];\n    this.initPlugins();\n  }\n\n  initPlugins() {\n    this.plugins.forEach((plugin) => {\n      plugin.run(this);\n    });\n  }\n\n  play() {\n    this.media.play();\n  }\n\n  pause() {\n    this.media.pause();\n  }\n\n  toggle() {\n    if (this.media.paused) {\n      this.play();\n    } else {\n      this.pause();\n    }\n  }\n\n  muted() {\n    this.media.muted === true;\n  }\n\n  setMuted() {\n    if (this.media.muted === false) {\n      this.media.muted = true;\n    } else {\n      this.media.muted = false;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://cursojavascriptprofesional/./src/classes/MediaPlayer.js?");

/***/ }),

/***/ "./src/classes/plugins/AutoPlay.js":
/*!*****************************************!*\
  !*** ./src/classes/plugins/AutoPlay.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction AutoPlay() {\n  AutoPlay.prototype.run = (el) => {\n    el.muted();\n    el.play();\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoPlay);\n\n\n//# sourceURL=webpack://cursojavascriptprofesional/./src/classes/plugins/AutoPlay.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;