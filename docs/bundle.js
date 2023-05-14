/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

var hamburger = document.querySelector('.toggle');
var navbar = document.querySelector('.nav-list');
hamburger.addEventListener('click', function () {
  navbar.classList.toggle('nav-list-active');
  hamburger.classList.toggle('active');
});

// document.querySelectoAll('.nav-link').forEach(n => n.addEventListener('click', () => {
//   hamburger.classList.remove('active');
//   navbar.classList.remove('active');
// }));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n  letter-spacing: 0.1rem;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n.container {\n  max-width: 1100px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title {\n  font-weight: 800;\n  font-size: 3rem;\n}\n\n.lead {\n  text-align: center;\n  font-weight: lighter;\n}\n\n#navbar {\n  background: hsl(2, 99%, 65%);\n  height: 60px;\n}\n#navbar .row {\n  height: 100%;\n}\n\n.toggle {\n  display: none;\n  border: 0;\n  background: hsl(2, 99%, 65%);\n  cursor: pointer;\n}\n\n.line {\n  display: block;\n  background: #f4ece0;\n  height: 3px;\n  width: 2rem;\n  margin: 6px auto;\n  transition: 250ms ease-in-out;\n}\n\n.nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n.nav-link {\n  color: #f4ece0;\n  text-transform: uppercase;\n}\n.nav-link:hover {\n  color: #e7d5ba;\n}\n\n.hero {\n  background: #f4ece0;\n  padding: 4rem;\n}\n\n.logo-img {\n  width: 180px;\n}\n\n@media (max-width: 900px) {\n  .toggle {\n    display: block;\n  }\n  .nav-list {\n    position: fixed;\n    top: 60px;\n    right: -100%;\n    gap: 0;\n    width: 70%;\n    height: 70%;\n    background: hsl(2, 99%, 65%);\n    flex-direction: column;\n    align-items: center;\n    transition: all 0.6s ease-in-out;\n  }\n  .nav-item {\n    margin: 20px 0;\n  }\n  .nav-list.nav-list-active {\n    right: 0;\n  }\n  .toggle.active .line:nth-child(2) {\n    opacity: 0;\n  }\n  .toggle.active .line:first-child {\n    transform: translateY(8px) rotate(45deg);\n  }\n  .toggle.active .line:nth-child(3) {\n    transform: translateY(-10px) rotate(-45deg);\n  }\n}\n.content-header {\n  background: #f4ece0;\n}\n\n.content-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.home-title {\n  text-align: center;\n  padding-top: 2rem;\n}\n.home-title span {\n  color: hsl(2, 99%, 65%);\n}\n\n.video {\n  padding: 2rem 0;\n}\n.video-img {\n  border-radius: 20px;\n}\n\n.btn-primary {\n  text-align: center;\n  display: inline-block;\n  padding: 1rem 2rem;\n  background: hsl(2, 99%, 65%);\n  color: #f4ece0;\n  border-radius: 30px;\n  font-weight: 700;\n}\n.btn-primary:hover {\n  background: #fe221b;\n}\n\n@media (min-width: 900px) {\n  .content-text {\n    gap: 3rem;\n  }\n  .home-title {\n    font-size: 4rem;\n    padding-top: 4rem;\n  }\n  .video {\n    padding: 3rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/utilities/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/pages/_navbar.scss","webpack://./src/styles/utilities/_variables.scss","webpack://./src/styles/pages/_home.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACJF;;ADOA;EACE,uBAAA;ACJF;;ADOA;EACE,kBAAA;EACA,sBAAA;EACA,oCAjBa;ACaf;;ADOA;EACE,gBAAA;ACJF;;ADOA;EACE,qBAAA;ACJF;;ADOA;EACE,eAAA;EACA,cAAA;ACJF;;ADOA;EACE,iBAAA;EACA,UAAA;EACA,cAAA;ACJF;;ADOA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;ACJF;;ADOA;EACE,gBAAA;EACA,eAAA;ACJF;;ADOA;EACE,kBAAA;EACA,oBAAA;ACJF;;AClDA;EACE,4BAAA;EACA,YAAA;ADqDF;ACnDE;EACE,YAAA;ADqDJ;;ACjDA;EACE,aAAA;EACA,SAAA;EACA,4BCXQ;EDYR,eAAA;ADoDF;;ACjDA;EACE,cAAA;EACA,mBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,6BAAA;ADoDF;;ACjDA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;ADoDF;;ACjDA;EACE,cAAA;EACA,yBAAA;ADoDF;AClDE;EACE,cAAA;ADoDJ;;AChDA;EACE,mBAAA;EACA,aAAA;ADmDF;;AChDA;EACE,YAAA;ADmDF;;AChDA;EACE;IACE,cAAA;EDmDF;EChDA;IACE,eAAA;IACA,SAAA;IACA,YAAA;IACA,MAAA;IACA,UAAA;IACA,WAAA;IACA,4BAAA;IACA,sBAAA;IACA,mBAAA;IACA,gCAAA;EDkDF;EC/CA;IACE,cAAA;EDiDF;EC9CA;IACE,QAAA;EDgDF;EC7CA;IACE,UAAA;ED+CF;EC5CA;IACE,wCAAA;ED8CF;EC3CA;IACE,2CAAA;ED6CF;AACF;AGjIA;EACI,mBDEO;AFiIX;;AGhIA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;AHmIJ;;AGhIA;EACI,kBAAA;EACA,iBAAA;AHmIJ;AGjII;EACI,uBDjBE;AFoJV;;AG/HA;EACI,eAAA;AHkIJ;AGhII;EACI,mBAAA;AHkIR;;AG9HA;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,4BDjCM;ECkCN,cD/BO;ECgCP,mBAAA;EACA,gBAAA;AHiIJ;AG/HI;EACI,mBAAA;AHiIR;;AG5HA;EAEI;IACI,SAAA;EH8HN;EG5HE;IACI,eAAA;IACA,iBAAA;EH8HN;EG3HE;IACI,aAAA;EH6HN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');\r\n\r\n$font-primary: 'Open Sans', sans-serif;\r\n$font-secondary: 'Baloo Tammudu 2', cursive;\r\n\r\n\r\n*, *::before, *::after{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml{\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody{\r\n  overflow-x: hidden;\r\n  letter-spacing: .1rem;\r\n  font-family: $font-primary ;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n.container {\r\n  max-width: 1100px;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title {\r\n  font-weight: 800;\r\n  font-size: 3rem;\r\n}\r\n\r\n.lead {\r\n  text-align: center;\r\n  font-weight: lighter;\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap\");\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n  letter-spacing: 0.1rem;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n.container {\n  max-width: 1100px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.title {\n  font-weight: 800;\n  font-size: 3rem;\n}\n\n.lead {\n  text-align: center;\n  font-weight: lighter;\n}\n\n#navbar {\n  background: hsl(2, 99%, 65%);\n  height: 60px;\n}\n#navbar .row {\n  height: 100%;\n}\n\n.toggle {\n  display: none;\n  border: 0;\n  background: hsl(2, 99%, 65%);\n  cursor: pointer;\n}\n\n.line {\n  display: block;\n  background: #f4ece0;\n  height: 3px;\n  width: 2rem;\n  margin: 6px auto;\n  transition: 250ms ease-in-out;\n}\n\n.nav-list {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n.nav-link {\n  color: #f4ece0;\n  text-transform: uppercase;\n}\n.nav-link:hover {\n  color: #e7d5ba;\n}\n\n.hero {\n  background: #f4ece0;\n  padding: 4rem;\n}\n\n.logo-img {\n  width: 180px;\n}\n\n@media (max-width: 900px) {\n  .toggle {\n    display: block;\n  }\n  .nav-list {\n    position: fixed;\n    top: 60px;\n    right: -100%;\n    gap: 0;\n    width: 70%;\n    height: 70%;\n    background: hsl(2, 99%, 65%);\n    flex-direction: column;\n    align-items: center;\n    transition: all 0.6s ease-in-out;\n  }\n  .nav-item {\n    margin: 20px 0;\n  }\n  .nav-list.nav-list-active {\n    right: 0;\n  }\n  .toggle.active .line:nth-child(2) {\n    opacity: 0;\n  }\n  .toggle.active .line:first-child {\n    transform: translateY(8px) rotate(45deg);\n  }\n  .toggle.active .line:nth-child(3) {\n    transform: translateY(-10px) rotate(-45deg);\n  }\n}\n.content-header {\n  background: #f4ece0;\n}\n\n.content-text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n.home-title {\n  text-align: center;\n  padding-top: 2rem;\n}\n.home-title span {\n  color: hsl(2, 99%, 65%);\n}\n\n.video {\n  padding: 2rem 0;\n}\n.video-img {\n  border-radius: 20px;\n}\n\n.btn-primary {\n  text-align: center;\n  display: inline-block;\n  padding: 1rem 2rem;\n  background: hsl(2, 99%, 65%);\n  color: #f4ece0;\n  border-radius: 30px;\n  font-weight: 700;\n}\n.btn-primary:hover {\n  background: #fe221b;\n}\n\n@media (min-width: 900px) {\n  .content-text {\n    gap: 3rem;\n  }\n  .home-title {\n    font-size: 4rem;\n    padding-top: 4rem;\n  }\n  .video {\n    padding: 3rem;\n  }\n}","#navbar {\r\n  background:  hsl(2, 99%, 65%);\r\n  height: 60px;\r\n\r\n  .row {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.toggle {\r\n  display: none;\r\n  border: 0;\r\n  background:  $primary;\r\n  cursor: pointer; \r\n}\r\n\r\n.line {\r\n  display: block;\r\n  background: #f4ece0;\r\n  height: 3px;\r\n  width: 2rem;\r\n  margin: 6px auto;\r\n  transition:  250ms ease-in-out;\r\n}\r\n\r\n.nav-list {\r\n  display:flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n}\r\n\r\n.nav-link {\r\n  color: #f4ece0;\r\n  text-transform: uppercase;\r\n\r\n  &:hover {\r\n    color: darken($bg-color, 10);\r\n  }\r\n}\r\n\r\n.hero {\r\n  background: #f4ece0;\r\n  padding: 4rem;\r\n}\r\n\r\n.logo-img {\r\n  width: 180px;\r\n}\r\n\r\n@media(max-width: 900px){\r\n  .toggle {\r\n    display: block;\r\n  }\r\n\r\n  .nav-list {\r\n    position: fixed;\r\n    top: 60px;\r\n    right: -100%;\r\n    gap: 0;\r\n    width: 70%;\r\n    height: 70%;\r\n    background: hsl(2, 99%, 65%);\r\n    flex-direction: column; \r\n    align-items: center;\r\n    transition: all .6s ease-in-out;\r\n  }\r\n \r\n  .nav-item {\r\n    margin: 20px 0;\r\n  }\r\n  \r\n  .nav-list.nav-list-active {\r\n    right: 0;\r\n  }\r\n  \r\n  .toggle.active .line:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .toggle.active .line:first-child {\r\n    transform: translateY(8px) rotate(45deg);\r\n  }\r\n\r\n  .toggle.active .line:nth-child(3)  {\r\n    transform: translateY(-10px) rotate(-45deg);\r\n  }\r\n\r\n  \r\n}\r\n ","//theme colors\r\n$primary: hsl(2, 99%, 65%);\r\n$secondary: #4e75d0;\r\n$danger: #ffc050;\r\n$bg-color: #f4ece0;","\r\n.content-header {\r\n    background: $bg-color;\r\n}\r\n\r\n.content-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.home-title {\r\n    text-align: center;\r\n    padding-top: 2rem;\r\n   \r\n    span {\r\n        color: $primary;\r\n    }\r\n}\r\n\r\n.video {\r\n    padding: 2rem 0;\r\n\r\n    &-img {\r\n        border-radius: 20px;\r\n    }\r\n}\r\n\r\n.btn-primary {\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding: 1rem 2rem;\r\n    background: $primary;\r\n    color: $bg-color;\r\n    border-radius: 30px;\r\n    font-weight: 700;\r\n\r\n    &:hover{\r\n        background: darken($primary, 10);\r\n    }\r\n}\r\n\r\n\r\n@media(min-width: 900px){\r\n\r\n    .content-text{\r\n        gap: 3rem;\r\n    }\r\n    .home-title{\r\n        font-size: 4rem;\r\n        padding-top: 4rem;\r\n    }\r\n\r\n    .video{\r\n        padding: 3rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/videoImg.jpg":
/*!*********************************!*\
  !*** ./src/assets/videoImg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "videoImg.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navbar */ "./src/js/navbar.js");
/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_videoImg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/videoImg.jpg */ "./src/assets/videoImg.jpg");



var logo = document.querySelector('.logo-img');
logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__;

var imgVideo = document.querySelector('.video-img');
imgVideo.src = _assets_videoImg_jpg__WEBPACK_IMPORTED_MODULE_3__;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map