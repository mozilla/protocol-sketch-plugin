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
  var colorSketchRed = makeColor("#D0021B");
  var colorSketchOrange = makeColor("#F5A623");
  var colorSketchYellow = makeColor("#F8E71C");
  var colorSketchBrown = makeColor("#8B572A");
  var colorSketchGreen = makeColor("#7ED321");
  var colorSketchForest = makeColor('#417505');
  var colorSketchGrape = makeColor('#BD10E0');
  var colorSketchPurple = makeColor('#9013FE');

  // Row 2
  var colorSketchBlue = makeColor('#4A90E2');
  var colorSketchAqua = makeColor('#50E3C2');
  var colorSketchLime = makeColor('#B8E986');
  var colorSketchBlack = makeColor('#000000');
  var colorSketchCharcoal = makeColor('#4A4A4A');
  var colorSketchGray = makeColor('#9B9B9B');
  var colorSketchWhite = makeColor('#FFFFFF');

  app.globalAssets().setColors([
    colorSketchRed,
    colorSketchOrange,
    colorSketchYellow,
    colorSketchBrown,
    colorSketchGreen,
    colorSketchForest,
    colorSketchGrape,
    colorSketchPurple,
    colorSketchBlue,
    colorSketchAqua,
    colorSketchLime,
    colorSketchBlack,
    colorSketchCharcoal,
    colorSketchGray,
    colorSketchWhite
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
