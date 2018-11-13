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
    var colorPocketSepia1 = makeColor("#3B3934");
    var colorPocketSepia2 = makeColor("#565248");
    var colorPocketSepia3 = makeColor("#736C5E");
    var colorPocketSepia4 = makeColor("#A29B8D");
    var colorPocketSepia5 = makeColor("#C7C0B2");
    var colorPocketSepia6 = makeColor("#DFD8CA");
    var colorPocketSepia7 = makeColor("#F5EDDD");
    var colorPocketSepia8 = makeColor("#DDE2D2");

    // Row 2
    var colorPocketSepia9 = makeColor("#EF4056");
    var colorPocketSepia10 = makeColor("#FCB643");
    var colorPocketSepia11 = makeColor("#83EDB8");
    var colorPocketSepia12 = makeColor("#1CB0A8");
    var colorPocketSepia13 = makeColor("#007A73");
    var colorPocketSepia14 = makeColor("#1EABF9");
    var colorPocketSepia15 = makeColor("#A240EF");
    var colorPocketSepia16 = makeColor("#FFFFFF");

    // Row 3
    var colorPocketSepia17 = makeColor("#F3999C");
    var colorPocketSepia18 = makeColor("#FAD393");
    var colorPocketSepia19 = makeColor("#BEEFCD");
    var colorPocketSepia20 = makeColor("#8AD1C5");
    var colorPocketSepia21 = makeColor("#7CB6AB");
    var colorPocketSepia22 = makeColor("#8BCEEE");
    var colorPocketSepia23 = makeColor("#CD99E9");
    var colorPocketSepia24 = makeColor("#FFFFFF");

    // Row 4
    var colorPocketSepia25 = makeColor("#913A44");
    var colorPocketSepia26 = makeColor("#97743B");
    var colorPocketSepia27 = makeColor("#5B9075");
    var colorPocketSepia28 = makeColor("#27716D");
    var colorPocketSepia29 = makeColor("#195653");
    var colorPocketSepia30 = makeColor("#286F96");
    var colorPocketSepia31 = makeColor("#6A3991");
    var colorPocketSepia32 = makeColor("#FFFFFF");

    app.globalAssets().setColors([colorPocketSepia1, colorPocketSepia2, colorPocketSepia3, colorPocketSepia4, colorPocketSepia5, colorPocketSepia6, colorPocketSepia7, colorPocketSepia8, colorPocketSepia9, colorPocketSepia10, colorPocketSepia11, colorPocketSepia12, colorPocketSepia13, colorPocketSepia14, colorPocketSepia15, colorPocketSepia16, colorPocketSepia17, colorPocketSepia18, colorPocketSepia19, colorPocketSepia20, colorPocketSepia21, colorPocketSepia22, colorPocketSepia23, colorPocketSepia24, colorPocketSepia25, colorPocketSepia26, colorPocketSepia27, colorPocketSepia28, colorPocketSepia29, colorPocketSepia30, colorPocketSepia31, colorPocketSepia32]);

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
