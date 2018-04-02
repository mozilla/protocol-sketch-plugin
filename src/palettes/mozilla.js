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

  // Brand colors
  var colorBrandPrimary     = makeColor("#000000");
  var colorBrandSecondary   = makeColor("#FFFFFF");

  var colorBrandNeonblue    = makeColor("#00FFFF");
  var colorBrandLemonyellow = makeColor("#FFF44F");
  var colorBrandWarmred     = makeColor("#FF4F5E");
  var colorBrandNeongreen   = makeColor("#54FFBD");
  var colorBrandDarkpurple  = makeColor("#6E008B");
  var colorBrandDarkgreen   = makeColor("#005E5E");
  var colorBrandDarkblue    = makeColor("#00458B");
  var colorBrandDarkgray    = makeColor("#959595");
  var colorBrandLightgray   = makeColor("#E7E5E2");

  // Text colors
  var colorTextPrimary      = makeColor("#000000");
  var colorTextSecondary    = makeColor("#484848");
  var colorTextTertiary     = makeColor("#666666");

  // UI colors
  var colorLink             = makeColor("#00A7E0");
  var colorOffblack         = makeColor("#323232");

  // Button colors
  var colorButtonLight      = makeColor("#FFFFFF");
  var colorButtonDark       = makeColor("#00539F");
  var colorButtonGreen      = makeColor("#16DA00");
  var colorButtonOrange     = makeColor("#F26C23");
  var colorButtonBlue       = makeColor("#0A84FF");
  var colorButtonRed        = makeColor("#C13832");

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
    colorBrandLightgray,
    colorTextPrimary,
    colorTextSecondary,
    colorTextTertiary,
    colorLink,
    colorOffblack,
    colorButtonLight,
    colorButtonDark,
    colorButtonGreen,
    colorButtonOrange,
    colorButtonBlue,
    colorButtonRed
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
