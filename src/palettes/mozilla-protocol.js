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
  var colorUIText = makeColor("#000000");
  var colorUIBorders = makeColor("#EDEDF0");
  var colorUIBackground = makeColor("#FFFFFF");
  var colorUILink = makeColor("#0060DF");
  var colorUILinkHover = makeColor("#003eaa");
  var colorUILInkVisited = makeColor("#8000d7");
  var colorUILinkVisitedHover = makeColor("#6200A4");

  app.globalAssets().setColors([
    colorUIText,
    colorUIBorders,
    colorUIBackground,
    colorUILink,
    colorUILinkHover,
    colorUILInkVisited,
    colorUILinkVisitedHover
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
