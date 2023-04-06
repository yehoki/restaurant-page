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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenuPage": () => (/* binding */ makeMenuPage)
/* harmony export */ });
const makeMenuItem = (heading, menuPrice, menuDescription) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  const menuHeading = document.createElement("h3");
  menuHeading.textContent = heading + " " + menuPrice;
  menuItem.append(menuHeading);
  const description = document.createElement("p");
  description.textContent = menuDescription;
  menuItem.appendChild(description);
  return menuItem;
};

const makeMenuPage = () => {
  const main = document.createElement("main");
  main.classList.add("menu-page");
  main.appendChild(
    makeMenuItem(
      "Salmon & Vegetables",
      "£11.25",
      "Fried Salmon with fresh vegetables and variety of sauces."
    )
  );
  main.appendChild(
    makeMenuItem(
      "Cod & Fries",
      "£8.90",
      "U.K. style 'Fish & Chips' served with mushy peas and curry sauce."
    )
  );
  main.appendChild(
    makeMenuItem(
      "Vegeterian Grain & Bean Bowl",
      "£12.90",
      "Vegetarian bowl of grains and beans, served with a variety of fresh vegetables."
    )
  );
  return main;
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtYWtlTWVudUl0ZW0gPSAoaGVhZGluZywgbWVudVByaWNlLCBtZW51RGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSBoZWFkaW5nICsgXCIgXCIgKyBtZW51UHJpY2U7XG4gIG1lbnVJdGVtLmFwcGVuZChtZW51SGVhZGluZyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudURlc2NyaXB0aW9uO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHJldHVybiBtZW51SXRlbTtcbn07XG5cbmNvbnN0IG1ha2VNZW51UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtZW51LXBhZ2VcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoXG4gICAgbWFrZU1lbnVJdGVtKFxuICAgICAgXCJTYWxtb24gJiBWZWdldGFibGVzXCIsXG4gICAgICBcIsKjMTEuMjVcIixcbiAgICAgIFwiRnJpZWQgU2FsbW9uIHdpdGggZnJlc2ggdmVnZXRhYmxlcyBhbmQgdmFyaWV0eSBvZiBzYXVjZXMuXCJcbiAgICApXG4gICk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoXG4gICAgbWFrZU1lbnVJdGVtKFxuICAgICAgXCJDb2QgJiBGcmllc1wiLFxuICAgICAgXCLCozguOTBcIixcbiAgICAgIFwiVS5LLiBzdHlsZSAnRmlzaCAmIENoaXBzJyBzZXJ2ZWQgd2l0aCBtdXNoeSBwZWFzIGFuZCBjdXJyeSBzYXVjZS5cIlxuICAgIClcbiAgKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICBtYWtlTWVudUl0ZW0oXG4gICAgICBcIlZlZ2V0ZXJpYW4gR3JhaW4gJiBCZWFuIEJvd2xcIixcbiAgICAgIFwiwqMxMi45MFwiLFxuICAgICAgXCJWZWdldGFyaWFuIGJvd2wgb2YgZ3JhaW5zIGFuZCBiZWFucywgc2VydmVkIHdpdGggYSB2YXJpZXR5IG9mIGZyZXNoIHZlZ2V0YWJsZXMuXCJcbiAgICApXG4gICk7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IHsgbWFrZU1lbnVQYWdlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=