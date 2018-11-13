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
  var colorPocketDark1 = makeColor("#000000");
  var colorPocketDark2 = makeColor("#1A1A1A");
  var colorPocketDark3 = makeColor("#3F3F3F");
  var colorPocketDark4 = makeColor("#828282");
  var colorPocketDark5 = makeColor("#BDBDBD");
  var colorPocketDark6 = makeColor("#E0E0E0");
  var colorPocketDark7 = makeColor("#F2F2F2");
  var colorPocketDark8 = makeColor("#FFFFFF");

  // Row 2
  var colorPocketDark9 = makeColor("#EF4056");
  var colorPocketDark10 = makeColor("#FCB643");
  var colorPocketDark11 = makeColor("#83EDB8");
  var colorPocketDark12 = makeColor("#1CB0A8");
  var colorPocketDark13 = makeColor("#007A73");
  var colorPocketDark14 = makeColor("#1EABF9");
  var colorPocketDark15 = makeColor("#A240EF");
  var colorPocketDark16 = makeColor("#FFFFFF");

  // Row 3
  var colorPocketDark17 = makeColor("#913A44");
  var colorPocketDark18 = makeColor("#97743B");
  var colorPocketDark19 = makeColor("#5B9075");
  var colorPocketDark20 = makeColor("#27716D");
  var colorPocketDark21 = makeColor("#195653");
  var colorPocketDark22 = makeColor("#286F96");
  var colorPocketDark23 = makeColor("#6A3991");
  var colorPocketDark24 = makeColor("#162827");

  // Row 4
  var colorPocketDark25 = makeColor("#FBCFD5");
  var colorPocketDark26 = makeColor("#FEEDD0");
  var colorPocketDark27 = makeColor("#E0FBED");
  var colorPocketDark28 = makeColor("#BBE7E5");
  var colorPocketDark29 = makeColor("#BFDDDC");
  var colorPocketDark30 = makeColor("#8FD5FC");
  var colorPocketDark31 = makeColor("#E7CFFB");
  var colorPocketDark32 = makeColor("#FFFFFF");

  app.globalAssets().setColors([
    colorPocketDark1,
    colorPocketDark2,
    colorPocketDark3,
    colorPocketDark4,
    colorPocketDark5,
    colorPocketDark6,
    colorPocketDark7,
    colorPocketDark8,
    colorPocketDark9,
    colorPocketDark10,
    colorPocketDark11,
    colorPocketDark12,
    colorPocketDark13,
    colorPocketDark14,
    colorPocketDark15,
    colorPocketDark16,
    colorPocketDark17,
    colorPocketDark18,
    colorPocketDark19,
    colorPocketDark20,
    colorPocketDark21,
    colorPocketDark22,
    colorPocketDark23,
    colorPocketDark24,
    colorPocketDark25,
    colorPocketDark26,
    colorPocketDark27,
    colorPocketDark28,
    colorPocketDark29,
    colorPocketDark30,
    colorPocketDark31,
    colorPocketDark32
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
