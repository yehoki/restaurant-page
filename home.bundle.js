/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*----------------------------------------------------
                Home page factory
----------------------------------------------------*/
const makeHomePage = () => {
  const main = document.createElement("main");
  const content = document.createElement("div");
  content.classList.add("home-page");
  content.innerHTML += "<h1>Plank's fine dining</h1>";
  content.innerHTML += "<h3>Think. Imagine. Receive.</h3>";
  content.innerHTML += "<h4>Flavours, like you never experienced before</h4>";
  content.innerHTML +=
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at eros eu sapien feugiat mattis. Maecenas sit amet lobortis orci. Quisque id sem a leo tempor dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent placerat ipsum vitae odio varius egestas. Aliquam sagittis, nulla quis eleifend faucibus, ante nisl pellentesque erat, et interdum velit quam at sapien. Phasellus eget lobortis mauris, et feugiat est.</p>";
  content.innerHTML +=
    "<a href='https://www.freepik.com/free-photo/golden-cutlery-with-textile-plate-dark-background-top-view_19182711.htm#query=restaurant&position=18&from_view=keyword&track=sph'>Background image by valeria_aksakova on Freepik</a>";
  main.appendChild(content);
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHomePage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgSG9tZSBwYWdlIGZhY3Rvcnlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuY29uc3QgbWFrZUhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2VcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IFwiPGgxPlBsYW5rJ3MgZmluZSBkaW5pbmc8L2gxPlwiO1xuICBjb250ZW50LmlubmVySFRNTCArPSBcIjxoMz5UaGluay4gSW1hZ2luZS4gUmVjZWl2ZS48L2gzPlwiO1xuICBjb250ZW50LmlubmVySFRNTCArPSBcIjxoND5GbGF2b3VycywgbGlrZSB5b3UgbmV2ZXIgZXhwZXJpZW5jZWQgYmVmb3JlPC9oND5cIjtcbiAgY29udGVudC5pbm5lckhUTUwgKz1cbiAgICBcIjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGF0IGVyb3MgZXUgc2FwaWVuIGZldWdpYXQgbWF0dGlzLiBNYWVjZW5hcyBzaXQgYW1ldCBsb2JvcnRpcyBvcmNpLiBRdWlzcXVlIGlkIHNlbSBhIGxlbyB0ZW1wb3IgZGljdHVtLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFByYWVzZW50IHBsYWNlcmF0IGlwc3VtIHZpdGFlIG9kaW8gdmFyaXVzIGVnZXN0YXMuIEFsaXF1YW0gc2FnaXR0aXMsIG51bGxhIHF1aXMgZWxlaWZlbmQgZmF1Y2lidXMsIGFudGUgbmlzbCBwZWxsZW50ZXNxdWUgZXJhdCwgZXQgaW50ZXJkdW0gdmVsaXQgcXVhbSBhdCBzYXBpZW4uIFBoYXNlbGx1cyBlZ2V0IGxvYm9ydGlzIG1hdXJpcywgZXQgZmV1Z2lhdCBlc3QuPC9wPlwiO1xuICBjb250ZW50LmlubmVySFRNTCArPVxuICAgIFwiPGEgaHJlZj0naHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by9nb2xkZW4tY3V0bGVyeS13aXRoLXRleHRpbGUtcGxhdGUtZGFyay1iYWNrZ3JvdW5kLXRvcC12aWV3XzE5MTgyNzExLmh0bSNxdWVyeT1yZXN0YXVyYW50JnBvc2l0aW9uPTE4JmZyb21fdmlldz1rZXl3b3JkJnRyYWNrPXNwaCc+QmFja2dyb3VuZCBpbWFnZSBieSB2YWxlcmlhX2Frc2Frb3ZhIG9uIEZyZWVwaWs8L2E+XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9