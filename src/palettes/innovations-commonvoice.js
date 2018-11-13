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
  var colorCommonVoiceWhite = makeColor("#FFFFFF");
  var colorCommonVoiceRed = makeColor("#FF4F5E");
  var colorCommonVoiceGrey = makeColor("#959595");
  var colorCommonVoiceLightGrey = makeColor("#E7E5E2");
  var colorCommonVoiceMidGrey = makeColor("#F3F2F1");
  var colorCommonVoiceLighterGrey = makeColor("#F9F9F8");
  var colorCommonVoiceDarkGrey = makeColor("#4A4A4A");
  var colorCommonVoiceBlack = makeColor("#000000");

  app.globalAssets().setColors([
    colorCommonVoiceWhite,
    colorCommonVoiceRed,
    colorCommonVoiceGrey,
    colorCommonVoiceLightGrey,
    colorCommonVoiceMidGrey,
    colorCommonVoiceLighterGrey,
    colorCommonVoiceDarkGrey,
    colorCommonVoiceBlack
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
  var gradientCommonVoice1 = makeGradient(["#B1B5E5", "#88D1F1"]);
  var gradientCommonVoice2 = makeGradient(["#F89096", "#B1B4E5"]);
  app.globalAssets().setGradients([gradientCommonVoice1, gradientCommonVoice2]);
}
