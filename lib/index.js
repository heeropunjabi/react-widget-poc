(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__644__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 918:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(644),
    k = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, g) {
  var b,
      d = {},
      e = null,
      h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);

  for (b in a) {
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}

__webpack_unused_export__ = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(918);
} else {}

/***/ }),

/***/ 644:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__644__;

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CryptoList": function() { return /* reexport */ components_CryptoList; },
  "Demo2": function() { return /* reexport */ Demo2; },
  "default": function() { return /* binding */ components; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React","module":"react"}
var external_commonjs_react_commonjs2_react_amd_react_root_React_module_react_ = __webpack_require__(644);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/hooks/useCryptoData.js
var useCryptoData=function useCryptoData(){console.log("inside hook");var _useState=(0,external_commonjs_react_commonjs2_react_amd_react_root_React_module_react_.useState)([]),_useState2=_slicedToArray(_useState,2),cryptoData=_useState2[0],setCryptoData=_useState2[1];var _useState3=(0,external_commonjs_react_commonjs2_react_amd_react_root_React_module_react_.useState)(true),_useState4=_slicedToArray(_useState3,2),isLoading=_useState4[0],setLoading=_useState4[1];(0,external_commonjs_react_commonjs2_react_amd_react_root_React_module_react_.useEffect)(function(){setLoading(true);fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=11&tsym=USD").then(function(res){return res.json();}).then(function(data){console.log(data);var preparedData=[];data.Data.forEach(function(d){var _d$DISPLAY;var _d$CoinInfo=d.CoinInfo,Id=_d$CoinInfo.Id,Name=_d$CoinInfo.Name,FullName=_d$CoinInfo.FullName,ImageUrl=_d$CoinInfo.ImageUrl,Url=_d$CoinInfo.Url;if(Name==="USDT")return;var Price,Change24hr;if((_d$DISPLAY=d.DISPLAY)!==null&&_d$DISPLAY!==void 0&&_d$DISPLAY.USD){var _d$DISPLAY$USD=d.DISPLAY.USD,PRICE=_d$DISPLAY$USD.PRICE,CHANGEPCT24HOUR=_d$DISPLAY$USD.CHANGEPCT24HOUR;Price=PRICE;Change24hr=CHANGEPCT24HOUR;}preparedData.push({Id:Id,Name:Name,FullName:FullName,ImageUrl:"https://www.cryptocompare.com".concat(ImageUrl),Url:"https://www.cryptocompare.com".concat(Url),Price:Price,Change24hr:Change24hr});});setCryptoData(preparedData);}).finally(function(){return setLoading(false);});},[]);return{cryptoData:cryptoData,isLoading:isLoading};};/* harmony default export */ var hooks_useCryptoData = (useCryptoData);
;// CONCATENATED MODULE: ./src/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var src = ({});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(417);
;// CONCATENATED MODULE: ./src/components/CryptoList.jsx
var CryptoItem=function CryptoItem(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"item",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:props.ImageUrl,className:"icon",alt:props.Name}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"display-container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"name",children:props.Name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"fullname",children:props.FullName})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"price-container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"price",children:props.Price}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"price-change ".concat(parseInt(props.Change24hr)<0?"danger":"success"),children:props.Change24hr&&"".concat(props.Change24hr,"%")})]})]});};var CryptoList=function CryptoList(){var _useCryptoData=hooks_useCryptoData(),cryptoData=_useCryptoData.cryptoData,isLoading=_useCryptoData.isLoading;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:!isLoading?cryptoData.map(function(itemData){return/*#__PURE__*/(0,jsx_runtime.jsx)(CryptoItem,_objectSpread2({},itemData),itemData.Id);}):/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"loading-text",children:"Loading Data..."})})});// return <div>Hello</div>
};/* harmony default export */ var components_CryptoList = (CryptoList);
;// CONCATENATED MODULE: ./src/components/Demo.jsx
function Demo(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:"Hello World"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"This is a simple react app"})]});}
;// CONCATENATED MODULE: ./src/components/Demo2.jsx
function Demo2(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:"From Demo2"})});}
;// CONCATENATED MODULE: ./src/components/index.js
/* harmony default export */ var components = (Demo);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});