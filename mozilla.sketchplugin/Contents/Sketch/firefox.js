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
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function () {

  // Clear Color Picker
  document.colors = [];

  // Clear all layer styles except for the logos and primary colors
  var remainingLayers = document.sharedLayerStyles.length;
  if (remainingLayers >= 25) {

    // Remove Extra logos
    var i;
    for (i = 25; i < remainingLayers; i++) {
      document.sharedLayerStyles.pop();
    }

    // Update Layer Style - Color Fills
    var j;
    for (j = 0; j < 4; j++) {
      // UI Colors
      document.sharedLayerStyles[j * 2].name = 'fill / ui / ' + colorStyleData[j].name;
      document.sharedLayerStyles[j * 2].style.fills = [{
        color: colorStyleData[j].value,
        fillType: Style.FillType.Color
      }];

      // Border Colors
      document.sharedLayerStyles[j * 2 + 1].name = 'border / ui / ' + colorStyleData[j].name;
      document.sharedLayerStyles[j * 2 + 1].style.borders = [{
        color: colorStyleData[j].value,
        fillType: Style.FillType.Color,
        position: Style.BorderPosition.Inside
      }];
    }
    var k;
    for (k = 4; k < 11; k++) {
      // Brand Colors
      document.sharedLayerStyles[k * 2].name = 'fill / brand / ' + colorStyleData[k].name;
      document.sharedLayerStyles[k * 2].style.fills = [{
        color: colorStyleData[k].value,
        fillType: Style.FillType.Color
      }];

      // Border Colors
      document.sharedLayerStyles[k * 2 + 1].name = 'border / brand / ' + colorStyleData[k].name;
      document.sharedLayerStyles[k * 2 + 1].style.borders = [{
        color: colorStyleData[k].value,
        fillType: Style.FillType.Color,
        position: Style.BorderPosition.Inside
      }];
    }

    // Update Layer Style - Pattern Fill
    var l;
    for (l = 0; l < 3; l++) {
      document.sharedLayerStyles[l + 22].name = imageData[l].name;
      document.sharedLayerStyles[l + 22].style.fills = [{
        fill: Style.FillType.Pattern,
        pattern: {
          patternType: Style.PatternFillType.Fit,
          image: {
            base64: imageData[l].base64
          }
        }
      }];
    }

    // Add Layer Style - Pattern Fill
    var m;
    for (m = 3; m < imageData.length; m++) {
      var image = imageData[m].base64;

      document.sharedLayerStyles.push({
        name: imageData[m].name,
        style: {
          fills: [{
            fill: Style.FillType.Pattern,
            pattern: {
              patternType: Style.PatternFillType.Fit,
              image: {
                base64: imageData[m].base64
              }
            }
          }],
          borders: [{
            enabled: false
          }]
        }
      });
    }
  } else {
    var n;
    for (n = 0; n < 4; n++) {
      // Add Layer Style - Color Fill
      document.sharedLayerStyles.push({
        name: 'fill / ui / ' + colorStyleData[n].name,
        style: {
          fills: [{
            color: colorStyleData[n].value,
            fill: Style.FillType.Color
          }],
          borders: [{
            enabled: false
          }]
        }
      });

      // Add Layer Style - Border Fill UI
      document.sharedLayerStyles.push({
        name: 'border / ui / ' + colorStyleData[n].name,
        style: {
          fills: [{
            enabled: false
          }],
          borders: [{
            color: colorStyleData[n].value,
            fillType: Style.FillType.Color,
            position: Style.BorderPosition.Inside
          }]
        }
      });
    }
    var o;
    for (o = 4; o < 11; o++) {
      // Add Layer Style - Color Fill
      document.sharedLayerStyles.push({
        name: 'fill / brand / ' + colorStyleData[o].name,
        style: {
          fills: [{
            color: colorStyleData[o].value,
            fill: Style.FillType.Color
          }],
          borders: [{
            enabled: false
          }]
        }
      });

      // Add Layer Style - Border Fill UI
      document.sharedLayerStyles.push({
        name: 'border / brand / ' + colorStyleData[o].name,
        style: {
          fills: [{
            enabled: false
          }],
          borders: [{
            color: colorStyleData[o].value,
            fillType: Style.FillType.Color,
            position: Style.BorderPosition.Inside
          }]
        }
      });
    }

    // Add Layer Style - Pattern Fill
    var p;
    for (p = 0; p < imageData.length; p++) {
      var _image = imageData[p].base64;

      document.sharedLayerStyles.push({
        name: imageData[p].name,
        style: {
          fills: [{
            fill: Style.FillType.Pattern,
            pattern: {
              patternType: Style.PatternFillType.Fit,
              image: {
                base64: imageData[p].base64
              }
            }
          }],
          borders: [{
            enabled: false
          }]
        }
      });
    }
  }

  var q;
  for (q = 0; q < 52; q++) {
    // Color Fill
    document.colors.push({ name: String(colorData[q].name), color: String(colorData[q].value) });
  }

  // Gradient Fill
  for (r = 0; r < gradientData.length; r++) {

    var gradientStops;

    if (gradientData[r].gradient.stops.length == 2) {
      gradientStops = [{ position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color }, { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color }];
    } else if (gradientData[r].gradient.stops.length == 3) {
      gradientStops = [{ position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color }, { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color }, { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color }];
    } else if (gradientData[r].gradient.stops.length == 4) {
      gradientStops = [{ position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color }, { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color }, { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color }, { position: gradientData[r].gradient.stops[3].position, color: gradientData[r].gradient.stops[3].color }];
    } else if (gradientData[r].gradient.stops.length == 5) {
      gradientStops = [{ position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color }, { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color }, { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color }, { position: gradientData[r].gradient.stops[3].position, color: gradientData[r].gradient.stops[3].color }, { position: gradientData[r].gradient.stops[4].position, color: gradientData[r].gradient.stops[4].color }];
    }

    document.gradients.push({
      name: gradientData[r].name,
      gradient: {
        gradientType: Style.GradientType.Linear,
        from: {
          x: gradientData[r].gradient.from.x,
          y: gradientData[r].gradient.from.y
        },
        to: {
          x: gradientData[r].gradient.to.x,
          y: gradientData[r].gradient.to.y
        },
        stops: gradientStops
      }
    });
  }

  // Text Styles
  if (document.sharedTextStyles.length === 0) {
    var s;
    for (s = 0; s < textData.length; s++) {
      var text = new Text({
        text: 'my text',
        style: {
          alignment: Text.Alignment.left,
          borders: [{
            enabled: false
          }],
          fontFamily: textData[s].fontFamily,
          fontSize: textData[s].fontSize,
          fontWeight: textData[s].fontWeight,
          lineHeight: textData[s].lineHeight,
          textColor: textData[s].textColor
        }
      });

      document.sharedTextStyles.push({
        name: textData[s].name,
        style: text.style
      });
    }
  } else {
    var t;
    for (t = 0; t < textData.length; t++) {
      document.sharedTextStyles[t].style.fontFamily = textData[t].fontFamily;
      document.sharedTextStyles[t].style.fontSize = textData[t].fontSize;
      document.sharedTextStyles[t].style.fontWeight = textData[t].fontWeight;
      document.sharedTextStyles[t].style.lineHeight = textData[t].lineHeight;
      document.sharedTextStyles[t].style.textColor = textData[t].textColor;
    }
  }
};

var sketch = __webpack_require__(1);
var Style = sketch.Style;
var document = sketch.getSelectedDocument();
var UI = __webpack_require__(2);
var Text = sketch.Text;

// Import Data
var colorData;
var colorStyleData = __webpack_require__(4);
var gradientData = __webpack_require__(7);
var imageData = __webpack_require__(5);
var textData = __webpack_require__(6);

// Protocol Tokens
try {
  var url = NSURL.URLWithString("https://raw.githubusercontent.com/mozilla/protocol-tokens/master/dist/colors/colors.json");
  var data = NSData.dataWithContentsOfURL(url);
  colorData = NSJSONSerialization.JSONObjectWithData_options_error(data, 0, nil);
  log('success');
  UI.message('🔥 text styles, layer styles, and fills were updated!');
} catch (e) {
  colorData = __webpack_require__(3);
  log("Error: " + e);
  UI.message('⚠️ You are either offline or something else went wrong!');
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [{"name":"Yellow 10","value":"#ffff98","token":"$color-yellow-10"},{"name":"Orange 30","value":"#ffa266","token":"$color-orange-30"},{"name":"Red 30","value":"#ff848b","token":"$color-red-30"},{"name":"Pink 30","value":"#ff6bba","token":"$color-pink-30"},{"name":"Purple 30","value":"#f770ff","token":"$color-purple-30"},{"name":"Violet 30","value":"#c689ff","token":"$color-violet-30"},{"name":"Blue 20","value":"#00ddff","token":"$color-blue-20"},{"name":"Green 40","value":"#54ffbd","token":"$color-green-40"},{"name":"Yellow 20","value":"#ffea80","token":"$color-yellow-20"},{"name":"Orange 40","value":"#ff8a50","token":"$color-orange-40"},{"name":"Red 40","value":"#ff6a75","token":"$color-red-40"},{"name":"Pink 40","value":"#ff4aa2","token":"$color-pink-40"},{"name":"Purple 40","value":"#d74cf0","token":"$color-purple-40"},{"name":"Violet 40","value":"#ab71ff","token":"$color-violet-40"},{"name":"Blue 40","value":"#0090ed","token":"$color-blue-40"},{"name":"Green 50","value":"#3fe1b0","token":"$color-green-50"},{"name":"Yellow 30","value":"#ffd567","token":"$color-yellow-30"},{"name":"Orange 50","value":"#ff7139","token":"$color-orange-50"},{"name":"Red 50","value":"#ff4f5e","token":"$color-red-50"},{"name":"Pink 50","value":"#ff298a","token":"$color-pink-50"},{"name":"Purple 50","value":"#b833e1","token":"$color-purple-50"},{"name":"Violet 50","value":"#9059ff","token":"$color-violet-50"},{"name":"Blue 50","value":"#0060df","token":"$color-blue-50"},{"name":"Green 60","value":"#2ac3a2","token":"$color-green-60"},{"name":"Yellow 40","value":"#ffbd4f","token":"$color-yellow-40"},{"name":"Orange 60","value":"#e25920","token":"$color-orange-60"},{"name":"Red 60","value":"#e22850","token":"$color-red-60"},{"name":"Pink 60","value":"#e31587","token":"$color-pink-60"},{"name":"Purple 60","value":"#952bb9","token":"$color-purple-60"},{"name":"Violet 60","value":"#7542e5","token":"$color-violet-60"},{"name":"Blue 60","value":"#0250bb","token":"$color-blue-60"},{"name":"Green 70","value":"#008787","token":"$color-green-70"},{"name":"Yellow 50","value":"#ffa436","token":"$color-yellow-50"},{"name":"Orange 70","value":"#cc3d00","token":"$color-orange-70"},{"name":"Red 70","value":"#c50042","token":"$color-red-70"},{"name":"Pink 70","value":"#c60084","token":"$color-pink-70"},{"name":"Purple 70","value":"#722291","token":"$color-purple-70"},{"name":"Violet 70","value":"#592acb","token":"$color-violet-70"},{"name":"Blue 80","value":"#073072","token":"$color-blue-80"},{"name":"Green 80","value":"#005e5e","token":"$color-green-80"},{"name":"Black","value":"#000000","token":"$color-black"},{"name":"Off-Black","value":"#20123a","token":"$color-off-black"},{"name":"Gray 90","value":"#202340","token":"$color-gray-90"},{"name":"Gray 80","value":"#42425a","token":"$color-gray-80"},{"name":"Gray 70","value":"#5e5e72","token":"$color-gray-70"},{"name":"Gray 60","value":"#7a7a8b","token":"$color-gray-60"},{"name":"Gray 50","value":"#9595a3","token":"$color-gray-50"},{"name":"Gray 40","value":"#b1b1bc","token":"$color-gray-40"},{"name":"Gray 30","value":"#cdcdd4","token":"$color-gray-30"},{"name":"Gray 20","value":"#ededf0","token":"$color-gray-20"},{"name":"Gray 10","value":"#f9f9fa","token":"$color-gray-10"},{"name":"White","value":"#ffffff","token":"$color-white"},{"name":"Pink 5","value":"#ffdef0","token":"$color-pink-5"},{"name":"Pink 10","value":"#ffb4db","token":"$color-pink-10"},{"name":"Pink 20","value":"#ff8ac5","token":"$color-pink-20"},{"name":"Pink 80","value":"#7f145b","token":"$color-pink-80"},{"name":"Pink 90","value":"#50134b","token":"$color-pink-90"},{"name":"Red 5","value":"#ffdfe7","token":"$color-red-5"},{"name":"Red 10","value":"#ffbdc5","token":"$color-red-10"},{"name":"Red 20","value":"#ff9aa2","token":"$color-red-20"},{"name":"Red 80","value":"#810220","token":"$color-red-80"},{"name":"Red 90","value":"#440306","token":"$color-red-90"},{"name":"Orange 5","value":"#fff4de","token":"$color-orange-5"},{"name":"Orange 10","value":"#ffd5b2","token":"$color-orange-10"},{"name":"Orange 20","value":"#ffb587","token":"$color-orange-20"},{"name":"Orange 80","value":"#9e280b","token":"$color-orange-80"},{"name":"Orange 90","value":"#7c1504","token":"$color-orange-90"},{"name":"Yellow 5","value":"#ffffcc","token":"$color-yellow-5"},{"name":"Yellow 60","value":"#e27f2e","token":"$color-yellow-60"},{"name":"Yellow 70","value":"#c45a27","token":"$color-yellow-70"},{"name":"Yellow 80","value":"#a7341f","token":"$color-yellow-80"},{"name":"Yellow 90","value":"#960e18","token":"$color-yellow-90"},{"name":"Green 5","value":"#e3fff3","token":"$color-green-5"},{"name":"Green 10","value":"#d1ffee","token":"$color-green-10"},{"name":"Green 20","value":"#b3ffe3","token":"$color-green-20"},{"name":"Green 30","value":"#88ffd1","token":"$color-green-30"},{"name":"Green 90","value":"#08403f","token":"$color-green-90"},{"name":"Blue 5","value":"#aaf2ff","token":"$color-blue-5"},{"name":"Blue 10","value":"#80ebff","token":"$color-blue-10"},{"name":"Blue 30","value":"#00b3f4","token":"$color-blue-30"},{"name":"Blue 70","value":"#054096","token":"$color-blue-70"},{"name":"Blue 90","value":"#09204d","token":"$color-blue-90"},{"name":"Violet 5","value":"#e7dfff","token":"$color-violet-5"},{"name":"Violet 10","value":"#d9bfff","token":"$color-violet-10"},{"name":"Violet 20","value":"#cb9eff","token":"$color-violet-20"},{"name":"Violet 80","value":"#45278d","token":"$color-violet-80"},{"name":"Violet 90","value":"#321c64","token":"$color-violet-90"},{"name":"Purple 5","value":"#f7e2ff","token":"$color-purple-5"},{"name":"Purple 10","value":"#f6b8ff","token":"$color-purple-10"},{"name":"Purple 20","value":"#f68fff","token":"$color-purple-20"},{"name":"Purple 80","value":"#4e1a69","token":"$color-purple-80"},{"name":"Purple 90","value":"#2b1141","token":"$color-purple-90"},{"name":"Link","value":"#0060df","token":"$color-link"},{"name":"Link:Hover","value":"#0250bb","token":"$color-link-hover"},{"name":"Link:Visited","value":"#b833e1","token":"$color-link-visited"},{"name":"Link:Visited:Hover","value":"#952bb9","token":"$color-link-visited-hover"}]

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [{"name":"Text","value":"#20123A"},{"name":"Background","value":"#FFFFFF"},{"name":"Link","value":"#0060DF"},{"name":"Link (Visited)","value":"#9059FF"},{"name":"Pink 50","value":"#FF298A"},{"name":"Red 50","value":"#FF4F5E"},{"name":"Orange 50","value":"#FF7139"},{"name":"Yellow 30","value":"#FFD567"},{"name":"Blue 50","value":"#0060DF"},{"name":"Violet 50","value":"#9059FF"},{"name":"Purple 50","value":"#B833E1"}]

/***/ }),
/* 5 */
/***/ (function(module, exports) {


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [{"name":"Heading XXL","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":64,"lineHeight":70,"textColor":"#20123A"},{"name":"Heading XL","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":56,"lineHeight":62,"textColor":"#20123A"},{"name":"Heading LG","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":48,"lineHeight":53,"textColor":"#20123A"},{"name":"Heading MD","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":40,"lineHeight":44,"textColor":"#20123A"},{"name":"Heading SM","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":32,"lineHeight":35,"textColor":"#20123A"},{"name":"Heading XS","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":24,"lineHeight":26,"textColor":"#20123A"},{"name":"Heading XXS","fontFamily":"Firefox Sharp Sans","fontWeight":9,"fontSize":16,"lineHeight":18,"textColor":"#20123A"},{"name":"Paragraph LG","fontFamily":"Inter","fontWeight":5,"fontSize":18,"lineHeight":27,"textColor":"#20123A"},{"name":"Paragraph MD","fontFamily":"Inter","fontWeight":5,"fontSize":16,"lineHeight":24,"textColor":"#20123A"},{"name":"Paragraph SM","fontFamily":"Inter","fontWeight":5,"fontSize":14,"lineHeight":21,"textColor":"#20123A"},{"name":"Paragraph XS","fontFamily":"Inter","fontWeight":5,"fontSize":12,"lineHeight":18,"textColor":"#20123A"}]

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"name":"Warm Gradient","gradient":{"from":{"x":1,"y":0},"to":{"x":0,"y":1},"stops":[{"position":0,"color":"#FF980E"},{"position":0.25,"color":"#FF7139"},{"position":0.5,"color":"#FF4F5E"},{"position":0.75,"color":"#FF3750"},{"position":1,"color":"#F5156C"}]}},{"name":"Cool Gradient","gradient":{"from":{"x":0.5,"y":0},"to":{"x":0.5,"y":1},"stops":[{"position":0,"color":"#C139E6"},{"position":0.5,"color":"#9059FF"},{"position":1,"color":"#3A8EE6"}]}},{"name":"Highlight Gradient","gradient":{"from":{"x":1,"y":0},"to":{"x":0.25,"y":0.75},"stops":[{"position":0,"color":"#FFF44F"},{"position":1,"color":"#FFF44F00"}]}},{"name":"Zap Gradient","gradient":{"from":{"x":1,"y":0},"to":{"x":0,"y":1},"stops":[{"position":0,"color":"#FF9100"},{"position":0.5,"color":"#F10366"},{"position":1,"color":"#6173FF"}]}}]

/***/ })
/******/ ]);
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')