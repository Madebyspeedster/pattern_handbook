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
/* harmony import */ var _services_eventListener_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/**
 * INIT APPLICATION
 */

_services_eventListener_service__WEBPACK_IMPORTED_MODULE_0__["menuEventListeners"].initShowHideMenuListener();
_services_eventListener_service__WEBPACK_IMPORTED_MODULE_0__["menuEventListeners"].initClickOnLiElement();



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
        menuListContainer: document.getElementById("menu-list-container"),
        listOfLiElements: document.querySelectorAll(".menu-list-container-li")
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
/* harmony import */ var _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.navigationMenu.classList.remove("menu-opened");
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.menuListContainer.style.display = "none";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.innerText = ">";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.style.left = "0px";
}

function addNavigationMenuStyles() {
    "use strict";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.navigationMenu.classList.add("menu-opened");
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.innerText = "<";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.menuListContainer.style.display = "block";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu.style.left = "220px";
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataBasedOnId", function() { return fetchDataBasedOnId; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _domElements_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




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


function fetchDataBasedOnId(id) {
    let lectureId = _utils__WEBPACK_IMPORTED_MODULE_0__["idOfLectures"][id];
    if(lectureId) {
        _domElements_spinner__WEBPACK_IMPORTED_MODULE_2__["spinner"].instance().showSpinner();
        return getLectureInfo(lectureId)
            .then((result) => {
                Object(_render__WEBPACK_IMPORTED_MODULE_1__["render"])(result);
                _domElements_spinner__WEBPACK_IMPORTED_MODULE_2__["spinner"].instance().hideSpinner();
                console.log("end  Spinner");
            })
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _services_navigationMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function render(response) {
    "use strict";
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].renderElements.title.innerText = response.title;
    _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].renderElements.mainContainer.innerText = response.description;
    _services_navigationMenu__WEBPACK_IMPORTED_MODULE_1__["toggleMenu"].instance().toggle();
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuEventListeners", function() { return menuEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteListener", function() { return deleteListener; });
/* harmony import */ var _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _navigationMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





const menuEventListeners = {
    initShowHideMenuListener: function () {
        return createListener(_domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].buttons.btnMenu, "click", _navigationMenu__WEBPACK_IMPORTED_MODULE_1__["toggleMenu"].instance().toggle, null);
    },
    initClickOnLiElement: function () {
        _domElements_domElements__WEBPACK_IMPORTED_MODULE_0__["domElements"].menuElements.listOfLiElements.forEach(item => {
            createListener(item, "click", (event) => Object(_information_service__WEBPACK_IMPORTED_MODULE_2__["fetchDataBasedOnId"])(event.target.value))
        });
    }
};

/**
 *
 * @param element  => DOM element
 * @param listenerType => "click", "blur" etc..
 * @param functionName => name of function what need to bind with event
 * @param options
 * @returns {*} returns listener
 */

function createListener(element, listenerType, functionName, ...options) {
    try {
        return element.addEventListener(listenerType, functionName, options);
    } catch (e) {
        console.warn(e);
    }
}


/**
 *
 * If need to remove some listener in future:
 * @param element => DOM element
 * @param listenerType "click", "blur" etc..
 * @param functionName name of function what need to bind with event
 * @returns {*} returns true if deleted;
 */

function deleteListener(element, listenerType, functionName) {
    try {
        return element.removeEventListener(listenerType, functionName);
    } catch (e) {
        console.warn(e);
    }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idOfLectures", function() { return idOfLectures; });
const idOfLectures = [
    "1eb57b3784b0f61767a6"
];



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spinner", function() { return spinner; });
/**
 * Spinner implementation
 */

const spinner = (function () {
    "use strict";
    let spinnerElement;
    let loaderText;
    let instance;

    function showSpinner() {
        loaderText = document.createElement("h1");
        loaderText.innerText = "Please wait...";
        loaderText.style.cssText =
            "font-size: 20px;\n" +
            "color: #ffffff;\n" +
            "text-align: center;";
        spinnerElement = document.createElement("div");
        spinnerElement.setAttribute("id", "ng-spinner");
        spinnerElement.style.cssText =
            "position: fixed;\n" +
            "background: rgba(0,0,1,0.7);\n" +
            "height: 100vh;\n" +
            "width: 100%;\n" +
            "z-index: 100500;\n" +
            "top: 0;\n" +
            "left: 0;";
        spinnerElement.appendChild(loaderText);
        document.body.appendChild(spinnerElement);
    }

    function hideSpinner() {
        try {
            document.body.removeChild(spinnerElement);
        } catch (e) {
            throw {
                name: "Remove html element error",
                message: e
            }
        }
    }

    function createInstance() {
        return {
            hideSpinner: hideSpinner,
            showSpinner: showSpinner
        }
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


/***/ })
/******/ ]);