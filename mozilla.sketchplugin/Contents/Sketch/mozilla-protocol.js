var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (context) {
    var app = NSApp.delegate();

    // print all the global colors
    var colors = app.globalAssets().colors();
    colors.forEach(function (color) {
        log(color);
    });

    // set the global colors
    function makeColor(SVGString) {
        return MSImmutableColor.colorWithSVGString(SVGString).newMutableCounterpart();
    }

    // Row 1
    var colorUIText = makeColor("#000000");
    var colorUIBorders = makeColor("#EDEDF0");
    var colorUIBackground = makeColor("#FFFFFF");
    var colorUILink = makeColor("#0060DF");
    var colorUILinkHover = makeColor("#003eaa");
    var colorUILInkVisited = makeColor("#8000d7");
    var colorUILinkVisitedHover = makeColor("#6200A4");

    app.globalAssets().setColors([colorUIText, colorUIBorders, colorUIBackground, colorUILink, colorUILinkHover, colorUILInkVisited, colorUILinkVisitedHover]);

    // print all the global gradients
    var gradients = app.globalAssets().gradients();
    gradients.forEach(function (gradient) {
        log(gradient);
    });

    // set the global gradients
    function makeGradient(SVGStrings) {
        var stops = [];
        var numStops = SVGStrings.length - 1;
        SVGStrings.forEach(function (SVGString, index) {
            var color = makeColor(SVGString);
            var stop = MSGradientStop.stopWithPosition_color_(index / numStops, color);
            stops.push(stop);
        });

        var gradient = MSGradient["new"]();
        gradient.setStops(stops);
        return gradient;
    }
    var newGradient = makeGradient(["#FF0000", "#00FF00", "#0000FF"]);
    app.globalAssets().setGradients([newGradient]);
};

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')
