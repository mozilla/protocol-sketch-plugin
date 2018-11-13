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
  var colorFirefoxBrandLightYellow = makeColor("#FFF44F");
  var colorFirefoxBrandSoftOrange = makeColor("#F7D267");
  var colorFirefoxBrandVividOrange = makeColor("#FF980E");
  var colorFirefoxBrandLightOrange = makeColor("#FF7139");
  var colorFirefoxBrandLightRed = makeColor("#FFF44F");
  var colorFirefoxBrandRed = makeColor("#FF3750");
  var colorFirefoxBrandVividPink = makeColor("#F5156C");
  var colorFirefoxBrandBrightMagenta = makeColor("#C139E6");

  // Row 2
  var colorFirefoxBrandLightViolet = makeColor("#9059FF");
  var colorFirefoxBrandBlue = makeColor("#3A8EE6");
  var colorFirefoxBrandDarkBlue = makeColor("#00458B");
  var colorFirefoxBrandDarkMagenta = makeColor("#6E008B");
  var colorFirefoxBrandDarkViolet = makeColor("#41085E");
  var colorFirefoxBrandDarkRed = makeColor("#960E18");
  var colorFirefoxBrandDesaturatedBlue = makeColor("#262641");
  var colorFirefoxBrandDarkGray = makeColor("#959595");

  // Row 3
  var colorFirefoxBrandLightGray = makeColor("#E7E5E2");
  var colorFirefoxBrandWhite = makeColor("#FFFFFF");
  var colorFirefoxBrandBlack = makeColor("#000000");

  app.globalAssets().setColors([
    colorFirefoxBrandLightYellow,
    colorFirefoxBrandSoftOrange,
    colorFirefoxBrandVividOrange,
    colorFirefoxBrandLightOrange,
    colorFirefoxBrandLightRed,
    colorFirefoxBrandRed,
    colorFirefoxBrandVividPink,
    colorFirefoxBrandBrightMagenta,
    colorFirefoxBrandLightViolet,
    colorFirefoxBrandBlue,
    colorFirefoxBrandDarkBlue,
    colorFirefoxBrandDarkMagenta,
    colorFirefoxBrandDarkViolet,
    colorFirefoxBrandDarkRed,
    colorFirefoxBrandDesaturatedBlue,
    colorFirefoxBrandDarkGray,
    colorFirefoxBrandLightGray,
    colorFirefoxBrandWhite,
    colorFirefoxBrandBlack
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
