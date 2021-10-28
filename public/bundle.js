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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Render__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Move__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ReturnFocus__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NewList__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localStorage_LocalStorageWork__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RemoveError__ = __webpack_require__(4);
// it might be said:







var todoAdd = document.getElementsByClassName('todo_add')[0];
var newListBtn = document.getElementsByClassName('new_list')[0];
var todoCont = document.getElementById('todo_cont');
var doneCont = document.getElementById('done_cont');
var todoInput = document.getElementById('main-input');

todoCont.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__Move__["a" /* default */]);

doneCont.addEventListener('click', __WEBPACK_IMPORTED_MODULE_1__Move__["a" /* default */]);

todoAdd.addEventListener('click', __WEBPACK_IMPORTED_MODULE_0__Render__["a" /* default */]);
todoAdd.addEventListener('click', __WEBPACK_IMPORTED_MODULE_2__ReturnFocus__["a" /* default */]);

newListBtn.addEventListener('click', __WEBPACK_IMPORTED_MODULE_3__NewList__["a" /* default */]);

todoInput.addEventListener('keypress', __WEBPACK_IMPORTED_MODULE_5__RemoveError__["a" /* default */]);

window.onLoad = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__localStorage_LocalStorageWork__["a" /* default */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// it might be said:

var doneCont = document.getElementsByClassName('done_cont')[0];
var todoCont = document.getElementsByClassName('todo_cont')[0];

var Delete = function Delete(element) {
  var elementParentNode = element.target.parentNode;
  if (element.target && element.target.matches('.move')) {
    var elementContainerSwitch = elementParentNode.parentNode.id === 'todo_cont' ? doneCont : todoCont;
    elementContainerSwitch.appendChild(elementParentNode); // check if appendChild removes the node too
  } else if (element.target && element.target.matches('.delete')) {
    elementParentNode.remove();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Delete);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Delete__ = __webpack_require__(1);
// it might be said:


var Move = function Move(element) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Delete__["a" /* default */])(element);
  var elementParentNode = element.target.parentNode;
  if (elementParentNode.parentNode != null && elementParentNode.parentNode.id === 'done_cont') {
    elementParentNode.firstChild.nextSibling.innerHTML = 'add_circle_outline';
  } else if (elementParentNode.parentNode != null && elementParentNode.parentNode.id === 'todo_cont') {
    elementParentNode.firstChild.nextSibling.innerHTML = 'remove_circle_outline';
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Move);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// it might be said:
var buttonContainer = document.getElementsByClassName('button_container')[0];

var newInput = document.createElement('input');
newInput.className = 'form-control add_new_list_val';

var newButton = document.createElement('button');
var newButtonTextNode = document.createTextNode('Click to add list');
newButton.appendChild(newButtonTextNode);
newButton.className = 'btn btn-primary add_new_list';

var colDiv = document.createElement('div');
colDiv.className = 'col-12 col-md-9';

var rowDiv = document.createElement('div');
rowDiv.className = 'row';

colDiv.appendChild(rowDiv);
rowDiv.appendChild(newInput);
rowDiv.appendChild(newButton);

var NewList = function NewList() {
  buttonContainer.appendChild(colDiv);
  // once button is shown, grey out the '+' button
};

/* harmony default export */ __webpack_exports__["a"] = (NewList);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// it might be said:
var RemoveError = function RemoveError(event) {
  if (event.currentTarget.classList.contains('is-invalid')) {
    event.currentTarget.classList.remove('is-invalid');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (RemoveError);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// it might be said
var todoInput = document.getElementById('main-input');

var printError = function printError() {
  if (!todoInput.value) {
    todoInput.className += ' is-invalid';
  }
};

var Render = function Render(element) {
  element.preventDefault(); // stops page refresh - add button is type submit
  var todoInputVal = document.getElementsByClassName('todo_input')[0].value ? document.getElementsByClassName('todo_input')[0].value : printError();
  var todoCont = document.getElementsByClassName('todo_cont')[0];
  if (todoInput.value) {
    todoInput.classList.remove('is-invalid');
    todoCont.innerHTML += '<li class="todoListItem">\n                            <i class="move material-icons">remove_circle_outline</i>\n                            <i class="delete material-icons">delete</i>\n                            ' + todoInputVal + '\n                         </li>';
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Render);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// it might be said:

var todoInput = document.getElementById('main-input');

var ReturnFocus = function ReturnFocus() {
  todoInput.value = '';
  todoInput.focus();
};

/* harmony default export */ __webpack_exports__["a"] = (ReturnFocus);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import MakeSelectList from './MakeSelectList'

// it might be said:

var LocalStorageWork = function LocalStorageWork() {
  // const listName = 'New list' // this should be dynamic, from an input
  // const newListVal = newList.value
  // const localStorageArray = []
  var localArray = [];
  Object.keys(localStorage).forEach(function (element, index) {
    var newObj = {
      index: index,
      name: element,
      mainData: JSON.parse(localStorage.getItem(element))
    };
    localArray.push(newObj);
  });

  var localListItems = localArray.map(function (element) {
    var listItem = document.createElement('option');
    var textNode = document.createTextNode(element.name);
    listItem.appendChild(textNode);
    return listItem;
  }).join();

  console.log(localListItems, document.getElementsByClassName('todoLists'));
  // next step is to stick the options into a select *****here******

  // if other lists are available, option to select and load that list through a select
  // Function to make a select, populated with options from Object keys in localStorage

  // check if localstorage has a todo object
  // if it does,
  // const addNewList = document.getElementsByClassName('add_new_list')[0]
  // it might be said:

  // - for each list, populate the todo_cont with list items in the array of the list object
  // if it doesn't,
  //  - if the list is empty,
  // - add a new object
  // - add the list items to the array in that object
};

/* harmony default export */ __webpack_exports__["a"] = (LocalStorageWork);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
(function webpackMissingModule() { throw new Error("Cannot find module \"run\""); }());


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map