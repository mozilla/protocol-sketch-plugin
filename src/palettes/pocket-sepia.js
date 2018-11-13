export default function(context) {
  var app = NSApp.delegate();

  // print all the global colors
  var colors = app.globalAssets().colors();
  colors.forEach(function(color) {
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

  app.globalAssets().setColors([
    colorPocketSepia1,
    colorPocketSepia2,
    colorPocketSepia3,
    colorPocketSepia4,
    colorPocketSepia5,
    colorPocketSepia6,
    colorPocketSepia7,
    colorPocketSepia8,
    colorPocketSepia9,
    colorPocketSepia10,
    colorPocketSepia11,
    colorPocketSepia12,
    colorPocketSepia13,
    colorPocketSepia14,
    colorPocketSepia15,
    colorPocketSepia16,
    colorPocketSepia17,
    colorPocketSepia18,
    colorPocketSepia19,
    colorPocketSepia20,
    colorPocketSepia21,
    colorPocketSepia22,
    colorPocketSepia23,
    colorPocketSepia24,
    colorPocketSepia25,
    colorPocketSepia26,
    colorPocketSepia27,
    colorPocketSepia28,
    colorPocketSepia29,
    colorPocketSepia30,
    colorPocketSepia31,
    colorPocketSepia32
  ]);

  // print all the global gradients
  var gradients = app.globalAssets().gradients();
  gradients.forEach(function(gradient) {
      log(gradient);
  });

  // set the global gradients
  function makeGradient(SVGStrings) {
    var stops = [];
    var numStops = SVGStrings.length-1;
    SVGStrings.forEach(function(SVGString, index) {
        var color = makeColor(SVGString);
        var stop = MSGradientStop.stopWithPosition_color_(index/numStops, color);
        stops.push(stop);
    });

    var gradient = MSGradient.new();
    gradient.setStops(stops);
    return gradient;
  }
  var newGradient = makeGradient(["#FF0000", "#00FF00", "#0000FF"]);
  app.globalAssets().setGradients([newGradient]);
}
