/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _navigationMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _services_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _services_eventListener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);







_services_eventListener_service__WEBPACK_IMPORTED_MODULE_4__["menuEventListener"].showHideMenuListener();




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domElements", function() { return domElements; });
const domElements = {
    buttons: {
        btnMenu: document.getElementById("btn-menu")
    },
    menuElements: {
        navigationMenu: document.getElementById("navigation-menu"),
        menuListContainer: document.getElementsByClassName("menu-list-container")[0],
        listOfLiElements: document.getElementsByClassName("menu-list-container-li")
    },
    renderElements: {
        title: document.getElementById("title"),
        mainContainer: document.getElementById("response-container"),
        codeExampleOne: document.getElementById("code-example-one")
    }
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNavigationMenuStyles", function() { return removeNavigationMenuStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNavigationMenuStyles", function() { return addNavigationMenuStyles; });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const toggleMenu = (function () {
    "use strict";
    let isOpen = false;
    let instance;

    function openMenu() {
        isOpen = !isOpen;
        addNavigationMenuStyles();
    }

    function closeMenu() {
        isOpen = !isOpen;
        removeNavigationMenuStyles();
    }

    function toggle() {
        if (isOpen) {
            closeMenu();
        } else if (!isOpen) {
            openMenu();
        }
    }

    function createInstance() {
        return {
            toggle: toggle
        };
    }

    return {
        instance: function () {
            if (instance) {
                return instance;
            } else {
                instance = createInstance();
                return instance;
            }
        }
    };
}());


function removeNavigationMenuStyles() {
    "use strict";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.navigationMenu.classList.remove("menu-opened");
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.menuListContainer.style.display = "none";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.innerText = ">";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.style.left = "0px";
}

function addNavigationMenuStyles() {
    "use strict";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.navigationMenu.classList.add("menu-opened");
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.innerText = "<";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.menuListContainer.style.display = "block";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.style.left = "220px";
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLectureInfo", function() { return getLectureInfo; });
function getLectureInfo(lectureId) {
    "use strict";
    let url = `https://api.npoint.io/${lectureId}`;
    return fetch(url)
        .then((res) => res.json())
        .then((result) => Promise.resolve(result))
        .catch(function (error) {
            throw {
                name: "Can't fetch data from server",
                message: error
            };
        });
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _navigationMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function render(response) {
    "use strict";
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].renderElements.title.innerText = response.title;
    _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].renderElements.mainContainer.innerText = response.description;
    _navigationMenu__WEBPACK_IMPORTED_MODULE_1__["toggleMenu"].instance().toggle();
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuEventListener", function() { return menuEventListener; });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _navigationMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);





const menuEventListener = {
    showHideMenuListener: function () {
        return _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.addEventListener("click", _navigationMenu__WEBPACK_IMPORTED_MODULE_1__["toggleMenu"].instance().toggle);
    },
    deleteShowHideMenuListener: function () {
        return _domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.removeEventListener("click", _navigationMenu__WEBPACK_IMPORTED_MODULE_1__["toggleMenu"].instance().toggle);
    }
};



/***/ })
/******/ ]);