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
// import {makeDOM, removeDOM} from './index.js';


/*----------------------------------------------------
                About page factory
----------------------------------------------------*/

// const makeAboutPage = () => {
//     const main = document.createElement('main');
//     main.innerHTML = 'About Page';
//     return main;
// }

// const onAboutClick = () => {
//     removeDOM();
//     makeDOM(makeAboutPage());
// }

const makeAboutPage = () => {
    const main = document.createElement('main');
    main.innerHTML = 'About Page';
    main.textContent = 'hehehe'
    return main;
}




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
const makeMenuPage = () => {
    const main = document.createElement('main');
    main.innerHTML = 'Menu Page';
    main.textContent = 'hehehe MENU HEHEHE'
    return main;
}




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
/* harmony export */   "makePage": () => (/* binding */ makePage),
/* harmony export */   "removeDOM": () => (/* binding */ removeDOM)
/* harmony export */ });
/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-mark.svg */ "./src/github-mark.svg");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



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

const resetActiveButton = () => {
  document.querySelectorAll(".header-button").forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};

const makeActiveButton = (btn) => {
  btn.classList.add("active");
};

const onHeaderButtonClick = (btn) => {
  resetActiveButton();
  makeActiveButton(btn);
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

const removeDOM = () => {
  document.body.childNodes.forEach((child) => document.body.removeChild(child));
};

function makePage(whichPage = makeHomePage()) {
  document.body.innerHTML = "";
  arguments.length === 0
    ? document.body.appendChild(makeHeader())
    : document.body.appendChild(makeHeader(false)); // Logic to by default begin with the home button as active
  document.body.appendChild(whichPage);
  document.body.appendChild(makeFooter());
}

/*----------------------------------------------------
                Index page factory
----------------------------------------------------*/

const makeHomePage = () => {
  const main = document.createElement("main");
  main.innerHTML = "Test Home";
  return main;
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXLG9CQUFvQjs7O0FBRy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNIO0FBQ0Y7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVk7QUFDekIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQWE7QUFDMUIsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHttYWtlRE9NLCByZW1vdmVET019IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIEFib3V0IHBhZ2UgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIGNvbnN0IG1ha2VBYm91dFBhZ2UgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbi8vICAgICBtYWluLmlubmVySFRNTCA9ICdBYm91dCBQYWdlJztcbi8vICAgICByZXR1cm4gbWFpbjtcbi8vIH1cblxuLy8gY29uc3Qgb25BYm91dENsaWNrID0gKCkgPT4ge1xuLy8gICAgIHJlbW92ZURPTSgpO1xuLy8gICAgIG1ha2VET00obWFrZUFib3V0UGFnZSgpKTtcbi8vIH1cblxuY29uc3QgbWFrZUFib3V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJ0Fib3V0IFBhZ2UnO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnaGVoZWhlJ1xuICAgIHJldHVybiBtYWluO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgbWFrZUFib3V0UGFnZSxcbn0iLCJjb25zdCBtYWtlTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICdNZW51IFBhZ2UnO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnaGVoZWhlIE1FTlUgSEVIRUhFJ1xuICAgIHJldHVybiBtYWluO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgbWFrZU1lbnVQYWdlLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi9naXRodWItbWFyay5zdmdcIjtcbmltcG9ydCB7IG1ha2VBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgbWFrZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgYnV0dG9uIGZhY3Rvcnlcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBtYWtlQnV0dG9uID0gKGNsYXNzTmFtZSwgdGV4dCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBidG4uaWQgPSB0ZXh0LnRvTG93ZXJDYXNlKCkgKyBcIi1cIiArIGNsYXNzTmFtZTtcbiAgYnRuLmlubmVySFRNTCA9IHRleHQ7XG4gIHJldHVybiBidG47XG59O1xuXG5jb25zdCByZXNldEFjdGl2ZUJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItYnV0dG9uXCIpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZUFjdGl2ZUJ1dHRvbiA9IChidG4pID0+IHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59O1xuXG5jb25zdCBvbkhlYWRlckJ1dHRvbkNsaWNrID0gKGJ0bikgPT4ge1xuICByZXNldEFjdGl2ZUJ1dHRvbigpO1xuICBtYWtlQWN0aXZlQnV0dG9uKGJ0bik7XG59O1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBoZWFkZXIgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1ha2VIZWFkZXIgPSAoaXNIb21lID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IG1ha2VCdXR0b24oXCJoZWFkZXItYnV0dG9uXCIsIFwiSG9tZVwiKTtcbiAgaWYgKGlzSG9tZSA9PT0gdHJ1ZSkge1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGhvbWVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhob21lQnV0dG9uKTtcbiAgICBtYWtlUGFnZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gbWFrZUJ1dHRvbihcImhlYWRlci1idXR0b25cIiwgXCJNZW51XCIpO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhtZW51QnV0dG9uKTtcbiAgICBtYWtlUGFnZShtYWtlTWVudVBhZ2UoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gbWFrZUJ1dHRvbihcImhlYWRlci1idXR0b25cIiwgXCJBYm91dFwiKTtcbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYWJvdXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgb25IZWFkZXJCdXR0b25DbGljayhhYm91dEJ1dHRvbik7XG4gICAgbWFrZVBhZ2UobWFrZUFib3V0UGFnZSgpKTtcbiAgfSk7XG5cblxuICBidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnV0dG9uc1wiKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIGZvb3RlciBmYWN0b3J5XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWFrZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdpdGh1YkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1YkltYWdlLnNyYyA9IEdpdGh1Ykljb247XG4gIGdpdGh1YkltYWdlLmFsdCA9IFwiR2l0aHViIGxvZ29cIjtcbiAgZ2l0aHViSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z1wiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20veWVob2tpL1wiO1xuICBmb290ZXJUZXh0LmlubmVySFRNTCA9IFwiQ29weXJpZ2h0IMKpIDIwMjMgeWVob2tpXCI7XG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSW1hZ2UpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgcmVtb3ZlRE9NID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VQYWdlKHdoaWNoUGFnZSA9IG1ha2VIb21lUGFnZSgpKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgID8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWtlSGVhZGVyKCkpXG4gICAgOiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VIZWFkZXIoZmFsc2UpKTsgLy8gTG9naWMgdG8gYnkgZGVmYXVsdCBiZWdpbiB3aXRoIHRoZSBob21lIGJ1dHRvbiBhcyBhY3RpdmVcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aGljaFBhZ2UpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1ha2VGb290ZXIoKSk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIEluZGV4IHBhZ2UgZmFjdG9yeVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IG1ha2VIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiVGVzdCBIb21lXCI7XG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IHsgcmVtb3ZlRE9NLCBtYWtlUGFnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9