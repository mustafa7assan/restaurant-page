/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/Poppins-Regular.ttf */ "./src/assets/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg.jpg */ "./src/assets/images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: 'Poppins';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed;\n  background-size: cover;\n  color: white;\n  font-family: Poppins, sans-serif;\n  font-size: 16px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.navbar,\n.footer {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.404);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.navbar {\n  position: fixed;\n  top: 0;\n  padding: 20px;\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n.navbar .logo {\n  cursor: pointer;\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links a {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n}\n.navbar .links a:hover {\n  color: rgb(170, 0, 0);\n}\n.welcome {\n  width: 600px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 15px;\n  margin: 200px auto;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.welcome h2 {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.menu,\n.contact,\n.about {\n  width: 70%;\n  margin: 120px auto;\n  padding: 10px;\n}\n.menu .card {\n  background-color: rgba(26, 25, 25, 0.699);\n  color: rgb(255, 255, 255);\n  width: 100%;\n  margin: auto;\n  height: 200px;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.menu .card .img {\n  width: 300px;\n  background-color: black;\n  overflow: hidden;\n}\n.menu .card .img img {\n  width: 100%;\n  height: 100%;\n}\n.menu .card .text {\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.menu .card .text p {\n  text-align: left;\n}\n.menu .card .text p:last-child {\n  margin-left: auto;\n  font-size: large;\n  font-weight: 700;\n  color: rgb(170, 0, 0);\n}\n\n.contact h3 {\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n.contact form {\n  padding: 20px;\n  width: 65%;\n  margin: auto;\n  background-color: rgba(26, 25, 25, 0.699);\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.contact form ul {\n  list-style: none;\n}\n.contact form ul li {\n  margin-bottom: 20px;\n}\n.contact form ul li input:active {\n  background-color: transparent;\n}\n.contact form ul li input,\n.contact form ul li textarea {\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid rgb(170, 0, 0);\n  background-color: transparent;\n  padding: 8px 16px;\n  color: white;\n  font-family: inherit;\n}\n.contact form ul li textarea::placeholder,\n.contact form ul li input::placeholder {\n  color: white;\n}\n.contact form button {\n  display: block;\n  border: none;\n  margin: auto;\n  background-color: rgb(170, 0, 0);\n  color: white;\n  font-family: inherit;\n  text-transform: uppercase;\n  padding: 8px 32px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.about {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.about .img img {\n  width: 100%;\n  height: 100%;\n}\n.about .text {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 19px;\n}\n.about .text h2,\n.about .text h3 {\n  margin-bottom: 10px;\n}\n.about .text p {\n  text-align: justify;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,4CAA4C;AAC9C;AACA;EACE,YAAY;EACZ,aAAa;EACb,iFAAuE;EACvE,sBAAsB;EACtB,YAAY;EACZ,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,sCAAsC;EACtC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,MAAM;EACN,aAAa;AACf;AACA;EACE,eAAe;EACf,SAAS;EACT,aAAa;AACf;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,qDAAqD;AACvD;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;;EAGE,UAAU;EACV,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,qDAAqD;AACvD;AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,yCAAyC;EACzC,qDAAqD;AACvD;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,6BAA6B;AAC/B;AACA;;EAEE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,uCAAuC;EACvC,6BAA6B;EAC7B,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;AACtB;AACA;;EAEE,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,gCAAgC;EAChC,YAAY;EACZ,oBAAoB;EACpB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,qDAAqD;AACvD;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,kBAAkB;AACpB;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: 'Poppins';\n  src: url('assets/fonts/Poppins-Regular.ttf');\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  background: url('./assets/images/bg.jpg') no-repeat center center fixed;\n  background-size: cover;\n  color: white;\n  font-family: Poppins, sans-serif;\n  font-size: 16px;\n  position: relative;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.navbar,\n.footer {\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.404);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.navbar {\n  position: fixed;\n  top: 0;\n  padding: 20px;\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n}\n.footer a {\n  text-decoration: none;\n  color: white;\n}\n.navbar .logo {\n  cursor: pointer;\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links a {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n}\n.navbar .links a:hover {\n  color: rgb(170, 0, 0);\n}\n.welcome {\n  width: 600px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 15px;\n  margin: 200px auto;\n  text-align: justify;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.welcome h2 {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.menu,\n.contact,\n.about {\n  width: 70%;\n  margin: 120px auto;\n  padding: 10px;\n}\n.menu .card {\n  background-color: rgba(26, 25, 25, 0.699);\n  color: rgb(255, 255, 255);\n  width: 100%;\n  margin: auto;\n  height: 200px;\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.menu .card .img {\n  width: 300px;\n  background-color: black;\n  overflow: hidden;\n}\n.menu .card .img img {\n  width: 100%;\n  height: 100%;\n}\n.menu .card .text {\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.menu .card .text p {\n  text-align: left;\n}\n.menu .card .text p:last-child {\n  margin-left: auto;\n  font-size: large;\n  font-weight: 700;\n  color: rgb(170, 0, 0);\n}\n\n.contact h3 {\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n.contact form {\n  padding: 20px;\n  width: 65%;\n  margin: auto;\n  background-color: rgba(26, 25, 25, 0.699);\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.contact form ul {\n  list-style: none;\n}\n.contact form ul li {\n  margin-bottom: 20px;\n}\n.contact form ul li input:active {\n  background-color: transparent;\n}\n.contact form ul li input,\n.contact form ul li textarea {\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid rgb(170, 0, 0);\n  background-color: transparent;\n  padding: 8px 16px;\n  color: white;\n  font-family: inherit;\n}\n.contact form ul li textarea::placeholder,\n.contact form ul li input::placeholder {\n  color: white;\n}\n.contact form button {\n  display: block;\n  border: none;\n  margin: auto;\n  background-color: rgb(170, 0, 0);\n  color: white;\n  font-family: inherit;\n  text-transform: uppercase;\n  padding: 8px 32px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.about {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.about .img img {\n  width: 100%;\n  height: 100%;\n}\n.about .text {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 19px;\n}\n.about .text h2,\n.about .text h3 {\n  margin-bottom: 10px;\n}\n.about .text p {\n  text-align: justify;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/compoents/about.js":
/*!********************************!*\
  !*** ./src/compoents/about.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _assets_images_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/chef.jpeg */ "./src/assets/images/chef.jpeg");




const about = () => {
  const container = document.createElement('div');
  container.classList.add('about');
  const html = `<div class="img">
  <img src="${_assets_images_chef_jpeg__WEBPACK_IMPORTED_MODULE_0__}" alt="" />
</div>
<div class="text">
  <h2>About Us</h2>
  <h3>World Of Pizza</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
    soluta voluptatum quia quidem laudantium exercitationem culpa.
    Pariatur vitae optio natus obcaecati asperiores fugit dolorum at
    nesciunt dolores sequi molestias debitis, laudantium eos officiis
    nemo eaque nulla repellat? Molestiae, eius laboriosam nobis quidem
    autem quas. Molestiae iure excepturi laudantium nisi doloremque?
  </p>
</div>
</div>`;
  container.insertAdjacentHTML('afterbegin', html);
  return container;
};




/***/ }),

/***/ "./src/compoents/contact.js":
/*!**********************************!*\
  !*** ./src/compoents/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });


const contact = () => {
  const container = document.createElement('div');
  container.classList.add('contact');
  const form = document.createElement('form');
  const html = `<h3>Contact us</h3>
  <ul>
    <li>
      <input type="text" id="user-name" placeholder="Your Name">
    </li>
    <li>
      <input type="email" id="user-email" placeholder="Your Email">
    </li>
    <li>
      <textarea name="user-message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
    </li>
  </ul>
  <button>Submit</button>`;
  form.insertAdjacentHTML('afterbegin', html);
  container.appendChild(form);
  return container;
};




/***/ }),

/***/ "./src/compoents/footer.js":
/*!*********************************!*\
  !*** ./src/compoents/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });


const footer = () => {
  const container = document.createElement('div');
  container.classList.add('footer');
  const html = `<p><a href="">Mustafa Hassan &copy; 2022</a></p>`;
  container.insertAdjacentHTML('afterbegin', html);
  return container;
};




/***/ }),

/***/ "./src/compoents/menu.js":
/*!*******************************!*\
  !*** ./src/compoents/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/1.jpg */ "./src/assets/images/1.jpg");
/* harmony import */ var _assets_images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/images/2.jpg */ "./src/assets/images/2.jpg");
/* harmony import */ var _assets_images_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/images/3.jpg */ "./src/assets/images/3.jpg");
/* harmony import */ var _assets_images_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/images/4.jpg */ "./src/assets/images/4.jpg");







const images = [_assets_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_images_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_4_jpg__WEBPACK_IMPORTED_MODULE_3__];
const toppings = ['Pepperoni', 'Sausage', 'Mushrooms', 'Bacon'];
const menu = () => {
  const container = document.createElement('div');
  container.classList.add('menu');
  for (let i = 0; i < 4; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const html = `<div class="img"><img src="${
      images[i]
    }" alt="pizza img" /></div>
    <div class="text">
      <h3>${toppings[i]}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo
        eveniet non odit culpa mollitia molestias facere officiis, qui
        dolorum dolor debitis placeat eius voluptate sit iste cum quasi
        ducimus.
      </p>
      <p>${(i + 1) * (i + 1 * 10)}$</p>
    </div>`;
    card.insertAdjacentHTML('afterbegin', html);
    container.appendChild(card);
  }
  return container;
};




/***/ }),

/***/ "./src/compoents/navbar.js":
/*!*********************************!*\
  !*** ./src/compoents/navbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });


const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  const html = `<div class="logo">
  <h1>World of Pizza</h1>
</div>
<ul class="links">
  <li><a href="#" data-name="menu" >Menu</a></li>
  <li><a href="#" data-name="contact">Contact</a></li>
  <li><a href="#" data-name="about">About</a></li>
</ul>`;
  nav.insertAdjacentHTML('afterbegin', html);
  return nav;
};




/***/ }),

/***/ "./src/compoents/welcome.js":
/*!**********************************!*\
  !*** ./src/compoents/welcome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcome": () => (/* binding */ welcome)
/* harmony export */ });


const welcome = () => {
  const container = document.createElement('div');
  container.classList.add('welcome');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = 'World of Pizza';
  p.textContent = `We believe in the commitment to our community and in fostering long
  term relationships with local farmers and fishermen. Our menus reflect
  these connections, featuring local, seasonal produce and sustainably
  sourced seafood and meats.`;
  container.appendChild(h2);
  container.appendChild(p);
  return container;
};




/***/ }),

/***/ "./src/assets/fonts/Poppins-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Poppins-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/assets/images/1.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66d2317b8e1c2e6e9f76.jpg";

/***/ }),

/***/ "./src/assets/images/2.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33447b05fae64ef0abfa.jpg";

/***/ }),

/***/ "./src/assets/images/3.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1697c812abbd93d2c258.jpg";

/***/ }),

/***/ "./src/assets/images/4.jpg":
/*!*********************************!*\
  !*** ./src/assets/images/4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "267073fa38feb6506206.jpg";

/***/ }),

/***/ "./src/assets/images/bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b11791d6f233892c252.jpg";

/***/ }),

/***/ "./src/assets/images/chef.jpeg":
/*!*************************************!*\
  !*** ./src/assets/images/chef.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96499ef5231ca0d13de9.jpeg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/bg.jpg */ "./src/assets/images/bg.jpg");
/* harmony import */ var _compoents_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compoents/navbar */ "./src/compoents/navbar.js");
/* harmony import */ var _compoents_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoents/welcome */ "./src/compoents/welcome.js");
/* harmony import */ var _compoents_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compoents/menu */ "./src/compoents/menu.js");
/* harmony import */ var _compoents_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compoents/contact */ "./src/compoents/contact.js");
/* harmony import */ var _compoents_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compoents/about */ "./src/compoents/about.js");
/* harmony import */ var _compoents_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoents/footer */ "./src/compoents/footer.js");










const content = document.querySelector('#content');
content.insertAdjacentElement('afterbegin', (0,_compoents_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar)());
content.appendChild((0,_compoents_welcome__WEBPACK_IMPORTED_MODULE_3__.welcome)());
content.appendChild((0,_compoents_footer__WEBPACK_IMPORTED_MODULE_7__.footer)());

document.querySelectorAll('.links li a').forEach(link => {
  link.addEventListener('click', () => {
    const tab = link.dataset.name;
    console.log('Click');
    switchTab(tab);
  });
});

const switchTab = name => {
  content.innerHTML = '';
  content.insertAdjacentElement('afterbegin', (0,_compoents_navbar__WEBPACK_IMPORTED_MODULE_2__.navbar)());
  switch (name) {
    case 'menu':
      content.appendChild((0,_compoents_menu__WEBPACK_IMPORTED_MODULE_4__.menu)());
      break;
    case 'about':
      content.appendChild((0,_compoents_about__WEBPACK_IMPORTED_MODULE_6__.about)());
      break;
    case 'contact':
      content.appendChild((0,_compoents_contact__WEBPACK_IMPORTED_MODULE_5__.contact)());
      break;
    case 'welcome':
      content.appendChild((0,_compoents_welcome__WEBPACK_IMPORTED_MODULE_3__.welcome)());
      break;
  }
  content.appendChild((0,_compoents_footer__WEBPACK_IMPORTED_MODULE_7__.footer)());
  document.querySelectorAll('.links li a').forEach(link => {
    link.addEventListener('click', () => {
      const tab = link.dataset.name;
      switchTab(tab);
    });
  });
  document.querySelector('.logo').addEventListener('click', () => {
    switchTab('welcome');
  });
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDUTtBQUNXO0FBQ1k7QUFDRTtBQUNOO0FBQ007QUFDSjtBQUNFOztBQUU1QztBQUNBLDRDQUE0Qyx5REFBTTtBQUNsRCxvQkFBb0IsMkRBQU87QUFDM0Isb0JBQW9CLHlEQUFNOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhDQUE4Qyx5REFBTTtBQUNwRDtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFJO0FBQzlCO0FBQ0E7QUFDQSwwQkFBMEIsdURBQUs7QUFDL0I7QUFDQTtBQUNBLDBCQUEwQiwyREFBTztBQUNqQztBQUNBO0FBQ0EsMEJBQTBCLDJEQUFPO0FBQ2pDO0FBQ0E7QUFDQSxzQkFBc0IseURBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb2VudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvZW50cy93ZWxjb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm5hdmJhcixcXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdmJhciAubG9nbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZiYXIgLmxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubmF2YmFyIC5saW5rcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ubmF2YmFyIC5saW5rcyBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTcwLCAwLCAwKTtcXG59XFxuLndlbGNvbWUge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMjAwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG59XFxuLndlbGNvbWUgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1lbnUsXFxuLmNvbnRhY3QsXFxuLmFib3V0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDEyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ubWVudSAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAyNSwgMjUsIDAuNjk5KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcbn1cXG4ubWVudSAuY2FyZCAuaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1lbnUgLmNhcmQgLmltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5tZW51IC5jYXJkIC50ZXh0IHtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWVudSAuY2FyZCAudGV4dCBwIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5tZW51IC5jYXJkIC50ZXh0IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xcbn1cXG5cXG4uY29udGFjdCBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uY29udGFjdCBmb3JtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjY5OSk7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG59XFxuLmNvbnRhY3QgZm9ybSB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uY29udGFjdCBmb3JtIHVsIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5jb250YWN0IGZvcm0gdWwgbGkgaW5wdXQ6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGFjdCBmb3JtIHVsIGxpIGlucHV0LFxcbi5jb250YWN0IGZvcm0gdWwgbGkgdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxNzAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4uY29udGFjdCBmb3JtIHVsIGxpIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcXG4uY29udGFjdCBmb3JtIHVsIGxpIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb250YWN0IGZvcm0gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMCwgMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiA4cHggMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxufVxcbi5hYm91dCAuaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmFib3V0IC50ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBhZGRpbmc6IDIwcHggMTlweDtcXG59XFxuLmFib3V0IC50ZXh0IGgyLFxcbi5hYm91dCAudGV4dCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYWJvdXQgLnRleHQgcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUZBQXVFO0VBQ3ZFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIHNyYzogdXJsKCdhc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9iZy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5uYXZiYXIsXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MDQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdmJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5uYXZiYXIgLmxvZ28ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YmFyIC5saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuLm5hdmJhciAubGlua3MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm5hdmJhciAubGlua3MgYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDE3MCwgMCwgMCk7XFxufVxcbi53ZWxjb21lIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDIwMHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxufVxcbi53ZWxjb21lIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tZW51LFxcbi5jb250YWN0LFxcbi5hYm91dCB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxMjBweCBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLm1lbnUgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjUsIDI1LCAwLjY5OSk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG59XFxuLm1lbnUgLmNhcmQgLmltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZW51IC5jYXJkIC5pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubWVudSAuY2FyZCAudGV4dCB7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1lbnUgLmNhcmQgLnRleHQgcCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubWVudSAuY2FyZCAudGV4dCBwOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiByZ2IoMTcwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRhY3QgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmNvbnRhY3QgZm9ybSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDY1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDI1LCAyNSwgMC42OTkpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxufVxcbi5jb250YWN0IGZvcm0gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmNvbnRhY3QgZm9ybSB1bCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uY29udGFjdCBmb3JtIHVsIGxpIGlucHV0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRhY3QgZm9ybSB1bCBsaSBpbnB1dCxcXG4uY29udGFjdCBmb3JtIHVsIGxpIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMTcwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLmNvbnRhY3QgZm9ybSB1bCBsaSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXFxuLmNvbnRhY3QgZm9ybSB1bCBsaSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29udGFjdCBmb3JtIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDAsIDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogOHB4IDMycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcbn1cXG4uYWJvdXQgLmltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5hYm91dCAudGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwYWRkaW5nOiAyMHB4IDE5cHg7XFxufVxcbi5hYm91dCAudGV4dCBoMixcXG4uYWJvdXQgLnRleHQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmFib3V0IC50ZXh0IHAge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNoZWYgZnJvbSAnLi8uLi9hc3NldHMvaW1hZ2VzL2NoZWYuanBlZyc7XG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImltZ1wiPlxuICA8aW1nIHNyYz1cIiR7Y2hlZn1cIiBhbHQ9XCJcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidGV4dFwiPlxuICA8aDI+QWJvdXQgVXM8L2gyPlxuICA8aDM+V29ybGQgT2YgUGl6emE8L2gzPlxuICA8cD5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3JpYnVzXG4gICAgc29sdXRhIHZvbHVwdGF0dW0gcXVpYSBxdWlkZW0gbGF1ZGFudGl1bSBleGVyY2l0YXRpb25lbSBjdWxwYS5cbiAgICBQYXJpYXR1ciB2aXRhZSBvcHRpbyBuYXR1cyBvYmNhZWNhdGkgYXNwZXJpb3JlcyBmdWdpdCBkb2xvcnVtIGF0XG4gICAgbmVzY2l1bnQgZG9sb3JlcyBzZXF1aSBtb2xlc3RpYXMgZGViaXRpcywgbGF1ZGFudGl1bSBlb3Mgb2ZmaWNpaXNcbiAgICBuZW1vIGVhcXVlIG51bGxhIHJlcGVsbGF0PyBNb2xlc3RpYWUsIGVpdXMgbGFib3Jpb3NhbSBub2JpcyBxdWlkZW1cbiAgICBhdXRlbSBxdWFzLiBNb2xlc3RpYWUgaXVyZSBleGNlcHR1cmkgbGF1ZGFudGl1bSBuaXNpIGRvbG9yZW1xdWU/XG4gIDwvcD5cbjwvZGl2PlxuPC9kaXY+YDtcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgYWJvdXQgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGh0bWwgPSBgPGgzPkNvbnRhY3QgdXM8L2gzPlxuICA8dWw+XG4gICAgPGxpPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlci1lbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJ1c2VyLW1lc3NhZ2VcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCI+PC90ZXh0YXJlYT5cbiAgICA8L2xpPlxuICA8L3VsPlxuICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPmA7XG4gIGZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGNvbnRhY3QgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb25zdCBodG1sID0gYDxwPjxhIGhyZWY9XCJcIj5NdXN0YWZhIEhhc3NhbiAmY29weTsgMjAyMjwvYT48L3A+YDtcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgZm9vdGVyIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpbWcxIGZyb20gJy4vLi4vYXNzZXRzL2ltYWdlcy8xLmpwZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuLy4uL2Fzc2V0cy9pbWFnZXMvMi5qcGcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi8uLi9hc3NldHMvaW1hZ2VzLzMuanBnJztcbmltcG9ydCBpbWc0IGZyb20gJy4vLi4vYXNzZXRzL2ltYWdlcy80LmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcbmNvbnN0IHRvcHBpbmdzID0gWydQZXBwZXJvbmknLCAnU2F1c2FnZScsICdNdXNocm9vbXMnLCAnQmFjb24nXTtcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBjb25zdCBodG1sID0gYDxkaXYgY2xhc3M9XCJpbWdcIj48aW1nIHNyYz1cIiR7XG4gICAgICBpbWFnZXNbaV1cbiAgICB9XCIgYWx0PVwicGl6emEgaW1nXCIgLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgPGgzPiR7dG9wcGluZ3NbaV19PC9oMz5cbiAgICAgIDxwPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWZWxpdCBxdW9cbiAgICAgICAgZXZlbmlldCBub24gb2RpdCBjdWxwYSBtb2xsaXRpYSBtb2xlc3RpYXMgZmFjZXJlIG9mZmljaWlzLCBxdWlcbiAgICAgICAgZG9sb3J1bSBkb2xvciBkZWJpdGlzIHBsYWNlYXQgZWl1cyB2b2x1cHRhdGUgc2l0IGlzdGUgY3VtIHF1YXNpXG4gICAgICAgIGR1Y2ltdXMuXG4gICAgICA8L3A+XG4gICAgICA8cD4keyhpICsgMSkgKiAoaSArIDEgKiAxMCl9JDwvcD5cbiAgICA8L2Rpdj5gO1xuICAgIGNhcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICA8aDE+V29ybGQgb2YgUGl6emE8L2gxPlxuPC9kaXY+XG48dWwgY2xhc3M9XCJsaW5rc1wiPlxuICA8bGk+PGEgaHJlZj1cIiNcIiBkYXRhLW5hbWU9XCJtZW51XCIgPk1lbnU8L2E+PC9saT5cbiAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1uYW1lPVwiY29udGFjdFwiPkNvbnRhY3Q8L2E+PC9saT5cbiAgPGxpPjxhIGhyZWY9XCIjXCIgZGF0YS1uYW1lPVwiYWJvdXRcIj5BYm91dDwvYT48L2xpPlxuPC91bD5gO1xuICBuYXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG4gIHJldHVybiBuYXY7XG59O1xuXG5leHBvcnQgeyBuYXZiYXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgd2VsY29tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnV29ybGQgb2YgUGl6emEnO1xuICBwLnRleHRDb250ZW50ID0gYFdlIGJlbGlldmUgaW4gdGhlIGNvbW1pdG1lbnQgdG8gb3VyIGNvbW11bml0eSBhbmQgaW4gZm9zdGVyaW5nIGxvbmdcbiAgdGVybSByZWxhdGlvbnNoaXBzIHdpdGggbG9jYWwgZmFybWVycyBhbmQgZmlzaGVybWVuLiBPdXIgbWVudXMgcmVmbGVjdFxuICB0aGVzZSBjb25uZWN0aW9ucywgZmVhdHVyaW5nIGxvY2FsLCBzZWFzb25hbCBwcm9kdWNlIGFuZCBzdXN0YWluYWJseVxuICBzb3VyY2VkIHNlYWZvb2QgYW5kIG1lYXRzLmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IHdlbGNvbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1hZ2VzL2JnLmpwZyc7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tICcuL2NvbXBvZW50cy9uYXZiYXInO1xuaW1wb3J0IHsgd2VsY29tZSB9IGZyb20gJy4vY29tcG9lbnRzL3dlbGNvbWUnO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vY29tcG9lbnRzL21lbnUnO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29tcG9lbnRzL2NvbnRhY3QnO1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2NvbXBvZW50cy9hYm91dCc7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2NvbXBvZW50cy9mb290ZXInO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbmF2YmFyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rcyBsaSBhJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YWIgPSBsaW5rLmRhdGFzZXQubmFtZTtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2snKTtcbiAgICBzd2l0Y2hUYWIodGFiKTtcbiAgfSk7XG59KTtcblxuY29uc3Qgc3dpdGNoVGFiID0gbmFtZSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbmF2YmFyKCkpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdtZW51JzpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb250YWN0JzpcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3dlbGNvbWUnOlxuICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lKCkpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rcyBsaSBhJykuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFiID0gbGluay5kYXRhc2V0Lm5hbWU7XG4gICAgICBzd2l0Y2hUYWIodGFiKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3dpdGNoVGFiKCd3ZWxjb21lJyk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==