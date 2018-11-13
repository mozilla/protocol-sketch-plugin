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
  var colorBrandPrimary     = makeColor("#000000");
  var colorBrandSecondary   = makeColor("#FFFFFF");
  var colorBrandNeonblue    = makeColor("#00FFFF");
  var colorBrandLemonyellow = makeColor("#FFF44F");
  var colorBrandWarmred     = makeColor("#FF4F5E");
  var colorBrandNeongreen   = makeColor("#54FFBD");
  var colorBrandDarkpurple  = makeColor("#6E008B");
  var colorBrandDarkgreen   = makeColor("#005E5E");

  // Row 2
  var colorBrandDarkblue    = makeColor("#00458B");
  var colorBrandDarkgray    = makeColor("#959595");
  var colorBrandLightgray   = makeColor("#E7E5E2");

  app.globalAssets().setColors([
    colorBrandPrimary,
    colorBrandSecondary,
    colorBrandNeonblue,
    colorBrandLemonyellow,
    colorBrandWarmred,
    colorBrandNeongreen,
    colorBrandDarkpurple,
    colorBrandDarkgreen,
    colorBrandDarkblue,
    colorBrandDarkgray,
    colorBrandLightgray
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
