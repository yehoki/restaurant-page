/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeAboutPage": () => (/* binding */ makeAboutPage)
/* harmony export */ });
/*----------------------------------------------------
                About page factory
----------------------------------------------------*/
const makeAboutPage = () => {
  const main = document.createElement("main");
  main.classList.add("about-page");
  main.textContent = "About Page";
  main.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus nibh. Curabitur pharetra pellentesque nibh, a facilisis sapien maximus at. Vestibulum vel pharetra libero. Etiam dictum, magna vitae faucibus imperdiet, purus diam pharetra quam, ac vehicula nulla arcu non urna. Suspendisse potenti. Morbi eu placerat erat. Morbi scelerisque quis ligula at viverra. Sed faucibus leo ac metus cursus imperdiet. Nulla quis suscipit urna, a commodo erat. Nulla id tortor at nisl feugiat bibendum eu a arcu. Pellentesque eleifend, quam sed posuere viverra, quam elit vulputate justo, in aliquet dui urna in diam. Nunc condimentum mauris nec dolor mollis gravida. Integer in eleifend mi.</p>"
  main.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus nibh. Curabitur pharetra pellentesque nibh, a facilisis sapien maximus at. Vestibulum vel pharetra libero. Etiam dictum, magna vitae faucibus imperdiet, purus diam pharetra quam, ac vehicula nulla arcu non urna. Suspendisse potenti. Morbi eu placerat erat. Morbi scelerisque quis ligula at viverra. Sed faucibus leo ac metus cursus imperdiet. Nulla quis suscipit urna, a commodo erat. Nulla id tortor at nisl feugiat bibendum eu a arcu. Pellentesque eleifend, quam sed posuere viverra, quam elit vulputate justo, in aliquet dui urna in diam. Nunc condimentum mauris nec dolor mollis gravida. Integer in eleifend mi.</p>"
  main.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus nibh. Curabitur pharetra pellentesque nibh, a facilisis sapien maximus at. Vestibulum vel pharetra libero. Etiam dictum, magna vitae faucibus imperdiet, purus diam pharetra quam, ac vehicula nulla arcu non urna. Suspendisse potenti. Morbi eu placerat erat. Morbi scelerisque quis ligula at viverra. Sed faucibus leo ac metus cursus imperdiet. Nulla quis suscipit urna, a commodo erat. Nulla id tortor at nisl feugiat bibendum eu a arcu. Pellentesque eleifend, quam sed posuere viverra, quam elit vulputate justo, in aliquet dui urna in diam. Nunc condimentum mauris nec dolor mollis gravida. Integer in eleifend mi.</p>"
  main.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus nibh. Curabitur pharetra pellentesque nibh, a facilisis sapien maximus at. Vestibulum vel pharetra libero. Etiam dictum, magna vitae faucibus imperdiet, purus diam pharetra quam, ac vehicula nulla arcu non urna. Suspendisse potenti. Morbi eu placerat erat. Morbi scelerisque quis ligula at viverra. Sed faucibus leo ac metus cursus imperdiet. Nulla quis suscipit urna, a commodo erat. Nulla id tortor at nisl feugiat bibendum eu a arcu. Pellentesque eleifend, quam sed posuere viverra, quam elit vulputate justo, in aliquet dui urna in diam. Nunc condimentum mauris nec dolor mollis gravida. Integer in eleifend mi.</p>"
  main.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet rhoncus nibh. Curabitur pharetra pellentesque nibh, a facilisis sapien maximus at. Vestibulum vel pharetra libero. Etiam dictum, magna vitae faucibus imperdiet, purus diam pharetra quam, ac vehicula nulla arcu non urna. Suspendisse potenti. Morbi eu placerat erat. Morbi scelerisque quis ligula at viverra. Sed faucibus leo ac metus cursus imperdiet. Nulla quis suscipit urna, a commodo erat. Nulla id tortor at nisl feugiat bibendum eu a arcu. Pellentesque eleifend, quam sed posuere viverra, quam elit vulputate justo, in aliquet dui urna in diam. Nunc condimentum mauris nec dolor mollis gravida. Integer in eleifend mi.</p>"
  return main;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  content.innerHTML += "<h1>Plank's fine dining</h1>"
  content.innerHTML += "<h3>Think. Imagine. Receive.</h3>"
  content.innerHTML +=
    "<p>Flavours, like you never experienced before</p>";
  content.innerHTML +=
    "<a href='https://www.freepik.com/free-photo/golden-cutlery-with-textile-plate-dark-background-top-view_19182711.htm#query=restaurant&position=18&from_view=keyword&track=sph'>Background image by valeria_aksakova on Freepik</a>";
  main.appendChild(content);
  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHomePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenuPage": () => (/* binding */ makeMenuPage)
/* harmony export */ });
const makeMenuItem = () => {
  const menuItem = document.createElement("div");
};

const makeMenuPage = () => {
  const main = document.createElement("main");
  main.classList.add("menu-page");
  main.innerHTML = "1234";

  const salmon = document.createElement("div");
  salmon.classList.add("menu-item");
  const salmonHeading = document.create;

  return main;
};




/***/ }),

/***/ "./src/github-mark.svg":
/*!*****************************!*\
  !*** ./src/github-mark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fe6486fb13b13a23173.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePage": () => (/* binding */ makePage)
/* harmony export */ });
/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ "./src/github-mark.svg");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");




/*----------------------------------------------------
                button factory
----------------------------------------------------*/
const makeButton = (className, text) => {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.id = text.toLowerCase() + "-" + className;
  btn.innerHTML = text;
  return btn;
};

// Functionality for button eventlisteners to change active tab onclick
const resetActiveButton = () => {
  document.querySelectorAll(".header-button").forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};

const onHeaderButtonClick = (btn) => {
  resetActiveButton();
  btn.classList.add("active");
};

/*----------------------------------------------------
                header factory
----------------------------------------------------*/

const makeHeader = (isHome = true) => {
  const header = document.createElement("header");
  const buttons = document.createElement("div");
  const homeButton = makeButton("header-button", "Home");
  if (isHome === true) {
    homeButton.classList.add("active");
  }
  homeButton.addEventListener("click", () => {
    if (homeButton.classList.contains("active")) return;
    onHeaderButtonClick(homeButton);
    makePage();
  });

  const menuButton = makeButton("header-button", "Menu");
  menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains("active")) return;
    onHeaderButtonClick(menuButton);
    makePage((0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenuPage)());
  });

  const aboutButton = makeButton("header-button", "About");
  aboutButton.addEventListener("click", () => {
    if (aboutButton.classList.contains("active")) return;
    onHeaderButtonClick(aboutButton);
    makePage((0,_about__WEBPACK_IMPORTED_MODULE_1__.makeAboutPage)());
  });

  buttons.classList.add("header-buttons");
  buttons.appendChild(homeButton);
  buttons.appendChild(menuButton);
  buttons.appendChild(aboutButton);
  header.appendChild(buttons);
  return header;
};

/*----------------------------------------------------
                footer factory
----------------------------------------------------*/

const makeFooter = () => {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const githubLink = document.createElement("a");
  const githubImage = new Image();
  githubImage.src = _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;
  githubImage.alt = "Github logo";
  githubImage.classList.add("svg");
  githubLink.href = "https://github.com/yehoki/";
  footerText.innerHTML = "Copyright © 2023 yehoki";
  githubLink.appendChild(githubImage);
  footer.appendChild(footerText);
  footer.appendChild(githubLink);

  return footer;
};

function makePage(whichPage = (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
  document.body.innerHTML = "";
  arguments.length === 0
    ? document.body.appendChild(makeHeader())
    : document.body.appendChild(makeHeader(false)); // Logic to by default begin with the home button as active
  document.body.appendChild(whichPage);
  document.body.appendChild(makeFooter());
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDZnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakI1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNIO0FBQ0Y7QUFDSjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtREFBWTtBQUN6QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxREFBYTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZDQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLGlEQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7O0FBRW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBBYm91dCBwYWdlIGZhY3Rvcnlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuY29uc3QgbWFrZUFib3V0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1wYWdlXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJBYm91dCBQYWdlXCI7XG4gIG1haW4uaW5uZXJIVE1MICs9IFwiPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCByaG9uY3VzIG5pYmguIEN1cmFiaXR1ciBwaGFyZXRyYSBwZWxsZW50ZXNxdWUgbmliaCwgYSBmYWNpbGlzaXMgc2FwaWVuIG1heGltdXMgYXQuIFZlc3RpYnVsdW0gdmVsIHBoYXJldHJhIGxpYmVyby4gRXRpYW0gZGljdHVtLCBtYWduYSB2aXRhZSBmYXVjaWJ1cyBpbXBlcmRpZXQsIHB1cnVzIGRpYW0gcGhhcmV0cmEgcXVhbSwgYWMgdmVoaWN1bGEgbnVsbGEgYXJjdSBub24gdXJuYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gTW9yYmkgZXUgcGxhY2VyYXQgZXJhdC4gTW9yYmkgc2NlbGVyaXNxdWUgcXVpcyBsaWd1bGEgYXQgdml2ZXJyYS4gU2VkIGZhdWNpYnVzIGxlbyBhYyBtZXR1cyBjdXJzdXMgaW1wZXJkaWV0LiBOdWxsYSBxdWlzIHN1c2NpcGl0IHVybmEsIGEgY29tbW9kbyBlcmF0LiBOdWxsYSBpZCB0b3J0b3IgYXQgbmlzbCBmZXVnaWF0IGJpYmVuZHVtIGV1IGEgYXJjdS4gUGVsbGVudGVzcXVlIGVsZWlmZW5kLCBxdWFtIHNlZCBwb3N1ZXJlIHZpdmVycmEsIHF1YW0gZWxpdCB2dWxwdXRhdGUganVzdG8sIGluIGFsaXF1ZXQgZHVpIHVybmEgaW4gZGlhbS4gTnVuYyBjb25kaW1lbnR1bSBtYXVyaXMgbmVjIGRvbG9yIG1vbGxpcyBncmF2aWRhLiBJbnRlZ2VyIGluIGVsZWlmZW5kIG1pLjwvcD5cIlxuICBtYWluLmlubmVySFRNTCArPSBcIjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgcmhvbmN1cyBuaWJoLiBDdXJhYml0dXIgcGhhcmV0cmEgcGVsbGVudGVzcXVlIG5pYmgsIGEgZmFjaWxpc2lzIHNhcGllbiBtYXhpbXVzIGF0LiBWZXN0aWJ1bHVtIHZlbCBwaGFyZXRyYSBsaWJlcm8uIEV0aWFtIGRpY3R1bSwgbWFnbmEgdml0YWUgZmF1Y2lidXMgaW1wZXJkaWV0LCBwdXJ1cyBkaWFtIHBoYXJldHJhIHF1YW0sIGFjIHZlaGljdWxhIG51bGxhIGFyY3Ugbm9uIHVybmEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIE1vcmJpIGV1IHBsYWNlcmF0IGVyYXQuIE1vcmJpIHNjZWxlcmlzcXVlIHF1aXMgbGlndWxhIGF0IHZpdmVycmEuIFNlZCBmYXVjaWJ1cyBsZW8gYWMgbWV0dXMgY3Vyc3VzIGltcGVyZGlldC4gTnVsbGEgcXVpcyBzdXNjaXBpdCB1cm5hLCBhIGNvbW1vZG8gZXJhdC4gTnVsbGEgaWQgdG9ydG9yIGF0IG5pc2wgZmV1Z2lhdCBiaWJlbmR1bSBldSBhIGFyY3UuIFBlbGxlbnRlc3F1ZSBlbGVpZmVuZCwgcXVhbSBzZWQgcG9zdWVyZSB2aXZlcnJhLCBxdWFtIGVsaXQgdnVscHV0YXRlIGp1c3RvLCBpbiBhbGlxdWV0IGR1aSB1cm5hIGluIGRpYW0uIE51bmMgY29uZGltZW50dW0gbWF1cmlzIG5lYyBkb2xvciBtb2xsaXMgZ3JhdmlkYS4gSW50ZWdlciBpbiBlbGVpZmVuZCBtaS48L3A+XCJcbiAgbWFpbi5pbm5lckhUTUwgKz0gXCI8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHNpdCBhbWV0IHJob25jdXMgbmliaC4gQ3VyYWJpdHVyIHBoYXJldHJhIHBlbGxlbnRlc3F1ZSBuaWJoLCBhIGZhY2lsaXNpcyBzYXBpZW4gbWF4aW11cyBhdC4gVmVzdGlidWx1bSB2ZWwgcGhhcmV0cmEgbGliZXJvLiBFdGlhbSBkaWN0dW0sIG1hZ25hIHZpdGFlIGZhdWNpYnVzIGltcGVyZGlldCwgcHVydXMgZGlhbSBwaGFyZXRyYSBxdWFtLCBhYyB2ZWhpY3VsYSBudWxsYSBhcmN1IG5vbiB1cm5hLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBNb3JiaSBldSBwbGFjZXJhdCBlcmF0LiBNb3JiaSBzY2VsZXJpc3F1ZSBxdWlzIGxpZ3VsYSBhdCB2aXZlcnJhLiBTZWQgZmF1Y2lidXMgbGVvIGFjIG1ldHVzIGN1cnN1cyBpbXBlcmRpZXQuIE51bGxhIHF1aXMgc3VzY2lwaXQgdXJuYSwgYSBjb21tb2RvIGVyYXQuIE51bGxhIGlkIHRvcnRvciBhdCBuaXNsIGZldWdpYXQgYmliZW5kdW0gZXUgYSBhcmN1LiBQZWxsZW50ZXNxdWUgZWxlaWZlbmQsIHF1YW0gc2VkIHBvc3VlcmUgdml2ZXJyYSwgcXVhbSBlbGl0IHZ1bHB1dGF0ZSBqdXN0bywgaW4gYWxpcXVldCBkdWkgdXJuYSBpbiBkaWFtLiBOdW5jIGNvbmRpbWVudHVtIG1hdXJpcyBuZWMgZG9sb3IgbW9sbGlzIGdyYXZpZGEuIEludGVnZXIgaW4gZWxlaWZlbmQgbWkuPC9wPlwiXG4gIG1haW4uaW5uZXJIVE1MICs9IFwiPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCByaG9uY3VzIG5pYmguIEN1cmFiaXR1ciBwaGFyZXRyYSBwZWxsZW50ZXNxdWUgbmliaCwgYSBmYWNpbGlzaXMgc2FwaWVuIG1heGltdXMgYXQuIFZlc3RpYnVsdW0gdmVsIHBoYXJldHJhIGxpYmVyby4gRXRpYW0gZGljdHVtLCBtYWduYSB2aXRhZSBmYXVjaWJ1cyBpbXBlcmRpZXQsIHB1cnVzIGRpYW0gcGhhcmV0cmEgcXVhbSwgYWMgdmVoaWN1bGEgbnVsbGEgYXJjdSBub24gdXJuYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gTW9yYmkgZXUgcGxhY2VyYXQgZXJhdC4gTW9yYmkgc2NlbGVyaXNxdWUgcXVpcyBsaWd1bGEgYXQgdml2ZXJyYS4gU2VkIGZhdWNpYnVzIGxlbyBhYyBtZXR1cyBjdXJzdXMgaW1wZXJkaWV0LiBOdWxsYSBxdWlzIHN1c2NpcGl0IHVybmEsIGEgY29tbW9kbyBlcmF0LiBOdWxsYSBpZCB0b3J0b3IgYXQgbmlzbCBmZXVnaWF0IGJpYmVuZHVtIGV1IGEgYXJjdS4gUGVsbGVudGVzcXVlIGVsZWlmZW5kLCBxdWFtIHNlZCBwb3N1ZXJlIHZpdmVycmEsIHF1YW0gZWxpdCB2dWxwdXRhdGUganVzdG8sIGluIGFsaXF1ZXQgZHVpIHVybmEgaW4gZGlhbS4gTnVuYyBjb25kaW1lbnR1bSBtYXVyaXMgbmVjIGRvbG9yIG1vbGxpcyBncmF2aWRhLiBJbnRlZ2VyIGluIGVsZWlmZW5kIG1pLjwvcD5cIlxuICBtYWluLmlubmVySFRNTCArPSBcIjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgcmhvbmN1cyBuaWJoLiBDdXJhYml0dXIgcGhhcmV0cmEgcGVsbGVudGVzcXVlIG5pYmgsIGEgZmFjaWxpc2lzIHNhcGllbiBtYXhpbXVzIGF0LiBWZXN0aWJ1bHVtIHZlbCBwaGFyZXRyYSBsaWJlcm8uIEV0aWFtIGRpY3R1bSwgbWFnbmEgdml0YWUgZmF1Y2lidXMgaW1wZXJkaWV0LCBwdXJ1cyBkaWFtIHBoYXJldHJhIHF1YW0sIGFjIHZlaGljdWxhIG51bGxhIGFyY3Ugbm9uIHVybmEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIE1vcmJpIGV1IHBsYWNlcmF0IGVyYXQuIE1vcmJpIHNjZWxlcmlzcXVlIHF1aXMgbGlndWxhIGF0IHZpdmVycmEuIFNlZCBmYXVjaWJ1cyBsZW8gYWMgbWV0dXMgY3Vyc3VzIGltcGVyZGlldC4gTnVsbGEgcXVpcyBzdXNjaXBpdCB1cm5hLCBhIGNvbW1vZG8gZXJhdC4gTnVsbGEgaWQgdG9ydG9yIGF0IG5pc2wgZmV1Z2lhdCBiaWJlbmR1bSBldSBhIGFyY3UuIFBlbGxlbnRlc3F1ZSBlbGVpZmVuZCwgcXVhbSBzZWQgcG9zdWVyZSB2aXZlcnJhLCBxdWFtIGVsaXQgdnVscHV0YXRlIGp1c3RvLCBpbiBhbGlxdWV0IGR1aSB1cm5hIGluIGRpYW0uIE51bmMgY29uZGltZW50dW0gbWF1cmlzIG5lYyBkb2xvciBtb2xsaXMgZ3JhdmlkYS4gSW50ZWdlciBpbiBlbGVpZmVuZCBtaS48L3A+XCJcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgeyBtYWtlQWJvdXRQYWdlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBIb21lIHBhZ2UgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5jb25zdCBtYWtlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgKz0gXCI8aDE+UGxhbmsncyBmaW5lIGRpbmluZzwvaDE+XCJcbiAgY29udGVudC5pbm5lckhUTUwgKz0gXCI8aDM+VGhpbmsuIEltYWdpbmUuIFJlY2VpdmUuPC9oMz5cIlxuICBjb250ZW50LmlubmVySFRNTCArPVxuICAgIFwiPHA+Rmxhdm91cnMsIGxpa2UgeW91IG5ldmVyIGV4cGVyaWVuY2VkIGJlZm9yZTwvcD5cIjtcbiAgY29udGVudC5pbm5lckhUTUwgKz1cbiAgICBcIjxhIGhyZWY9J2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vZ29sZGVuLWN1dGxlcnktd2l0aC10ZXh0aWxlLXBsYXRlLWRhcmstYmFja2dyb3VuZC10b3Atdmlld18xOTE4MjcxMS5odG0jcXVlcnk9cmVzdGF1cmFudCZwb3NpdGlvbj0xOCZmcm9tX3ZpZXc9a2V5d29yZCZ0cmFjaz1zcGgnPkJhY2tncm91bmQgaW1hZ2UgYnkgdmFsZXJpYV9ha3Nha292YSBvbiBGcmVlcGlrPC9hPlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VIb21lUGFnZTtcbiIsImNvbnN0IG1ha2VNZW51SXRlbSA9ICgpID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xufTtcblxuY29uc3QgbWFrZU1lbnVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtcGFnZVwiKTtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIjEyMzRcIjtcblxuICBjb25zdCBzYWxtb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzYWxtb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgY29uc3Qgc2FsbW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IG1ha2VNZW51UGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi1tYXJrLnN2Z1wiO1xuaW1wb3J0IHsgbWFrZUFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBtYWtlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbWFrZUhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIGJ1dHRvbiBmYWN0b3J5XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmNvbnN0IG1ha2VCdXR0b24gPSAoY2xhc3NOYW1lLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGJ0bi5pZCA9IHRleHQudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgY2xhc3NOYW1lO1xuICBidG4uaW5uZXJIVE1MID0gdGV4dDtcbiAgcmV0dXJuIGJ0bjtcbn07XG5cbi8vIEZ1bmN0aW9uYWxpdHkgZm9yIGJ1dHRvbiBldmVudGxpc3RlbmVycyB0byBjaGFuZ2UgYWN0aXZlIHRhYiBvbmNsaWNrXG5jb25zdCByZXNldEFjdGl2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnV0dG9uXCIpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgb25IZWFkZXJCdXR0b25DbGljayA9IChidG4pID0+IHtcbiAgcmVzZXRBY3RpdmVCdXR0b24oKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBoZWFkZXIgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1ha2VIZWFkZXIgPSAoaXNIb21lID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IG1ha2VCdXR0b24oXCJoZWFkZXItYnV0dG9uXCIsIFwiSG9tZVwiKTtcbiAgaWYgKGlzSG9tZSA9PT0gdHJ1ZSkge1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGhvbWVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhob21lQnV0dG9uKTtcbiAgICBtYWtlUGFnZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gbWFrZUJ1dHRvbihcImhlYWRlci1idXR0b25cIiwgXCJNZW51XCIpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhtZW51QnV0dG9uKTtcbiAgICBtYWtlUGFnZShtYWtlTWVudVBhZ2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gbWFrZUJ1dHRvbihcImhlYWRlci1idXR0b25cIiwgXCJBYm91dFwiKTtcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYWJvdXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhhYm91dEJ1dHRvbik7XG4gICAgbWFrZVBhZ2UobWFrZUFib3V0UGFnZSgpKTtcbiAgfSk7XG5cbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ1dHRvbnNcIik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBmb290ZXIgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1ha2VGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBnaXRodWJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWJJbWFnZS5zcmMgPSBHaXRodWJJY29uO1xuICBnaXRodWJJbWFnZS5hbHQgPSBcIkdpdGh1YiBsb2dvXCI7XG4gIGdpdGh1YkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3llaG9raS9cIjtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCDCqSAyMDIzIHllaG9raVwiO1xuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmZ1bmN0aW9uIG1ha2VQYWdlKHdoaWNoUGFnZSA9IG1ha2VIb21lUGFnZSgpKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgID8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpXG4gICAgOiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VIZWFkZXIoZmFsc2UpKTsgLy8gTG9naWMgdG8gYnkgZGVmYXVsdCBiZWdpbiB3aXRoIHRoZSBob21lIGJ1dHRvbiBhcyBhY3RpdmVcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aGljaFBhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IG1ha2VQYWdlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=