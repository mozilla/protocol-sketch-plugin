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
    var colorPocketLight1 = makeColor("#333333");
    var colorPocketLight2 = makeColor("#4F4F4F");
    var colorPocketLight3 = makeColor("#828282");
    var colorPocketLight4 = makeColor("#BDBDBD");
    var colorPocketLight5 = makeColor("#E0E0E0");
    var colorPocketLight6 = makeColor("#F2F2F2");
    var colorPocketLight7 = makeColor("#FFFFFF");
    var colorPocketLight8 = makeColor("#F2F8F8");

    // Row 2
    var colorPocketLight9 = makeColor("#EF4056");
    var colorPocketLight10 = makeColor("#FCB643");
    var colorPocketLight11 = makeColor("#83EDB8");
    var colorPocketLight12 = makeColor("#1CB0A8");
    var colorPocketLight13 = makeColor("#007A73");
    var colorPocketLight14 = makeColor("#1EABF9");
    var colorPocketLight15 = makeColor("#A240EF");
    var colorPocketLight16 = makeColor("#FFFFFF");

    // Row 3
    var colorPocketLight17 = makeColor("#FBCFD5");
    var colorPocketLight18 = makeColor("#FEEDD0");
    var colorPocketLight19 = makeColor("#E0FBED");
    var colorPocketLight20 = makeColor("#BBE7E5");
    var colorPocketLight21 = makeColor("#BFDDDC");
    var colorPocketLight22 = makeColor("#8FD5FC");
    var colorPocketLight23 = makeColor("#E7CFFB");
    var colorPocketLight24 = makeColor("#FFFFFF");

    // Row 4
    var colorPocketLight25 = makeColor("#FDECEE");
    var colorPocketLight26 = makeColor("#FFF8EC");
    var colorPocketLight27 = makeColor("#F3F8EC");
    var colorPocketLight28 = makeColor("#E8F7F6");
    var colorPocketLight29 = makeColor("#E5F2F1");
    var colorPocketLight30 = makeColor("#E8F7FE");
    var colorPocketLight31 = makeColor("#F6ECFD");
    var colorPocketLight32 = makeColor("#FFFFFF");

    // Row 5
    var colorPocketLight33 = makeColor("#913A44");
    var colorPocketLight34 = makeColor("#97743B");
    var colorPocketLight35 = makeColor("#5B9075");
    var colorPocketLight36 = makeColor("#27716D");
    var colorPocketLight37 = makeColor("#195653");
    var colorPocketLight38 = makeColor("#286F96");
    var colorPocketLight39 = makeColor("#6A3991");
    var colorPocketLight40 = makeColor("#FFFFFF");

    app.globalAssets().setColors([colorPocketLight1, colorPocketLight2, colorPocketLight3, colorPocketLight4, colorPocketLight5, colorPocketLight6, colorPocketLight7, colorPocketLight8, colorPocketLight9, colorPocketLight10, colorPocketLight11, colorPocketLight12, colorPocketLight13, colorPocketLight14, colorPocketLight15, colorPocketLight16, colorPocketLight17, colorPocketLight18, colorPocketLight19, colorPocketLight20, colorPocketLight21, colorPocketLight22, colorPocketLight23, colorPocketLight24, colorPocketLight25, colorPocketLight26, colorPocketLight27, colorPocketLight28, colorPocketLight29, colorPocketLight30, colorPocketLight31, colorPocketLight32, colorPocketLight33, colorPocketLight34, colorPocketLight35, colorPocketLight36, colorPocketLight37, colorPocketLight38, colorPocketLight39, colorPocketLight40]);

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
