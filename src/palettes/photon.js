function createColor(color, element, format) {
  const rv = [];

  for (const variant in element) {
    if (element.hasOwnProperty(variant)) {
      const value = element[variant];
      rv.push(format.formatter(color, variant, value.hex, '100'));
      for (let alpha of value.opacity || []) {
        let out = format.formatter(color, variant, value.hex, alpha);
        if (out) {
          rv.push(out);
        }
      }
    }
  }
  if (format.group_end === undefined) {
    format.group_end = '\n';
  }
  if (format.group_end) {
    rv.push(format.group_end);
  }
  return rv;
}


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

  var magenta50 = makeColor('#ff1ad9');
  var magenta60 = makeColor('#ed00b5');
  var magenta70 = makeColor('#b5007f');
  var magenta80 = makeColor('#7d004f');
  var magenta90 = makeColor('#440027');

  var purple50 = makeColor('#9400ff');
  var purple60 = makeColor('#8000d7');
  var purple70 = makeColor('#6200a4');
  var purple80 = makeColor('#440071');
  var purple90 = makeColor('#25003e');

  var blue40 = makeColor('#45a1ff');
  var blue50 = makeColor('#0a84ff');
  var blue50_A30 = makeColor('#0a84ff4c');
  var blue60 = makeColor('#0060df');
  var blue70 = makeColor('#003eaa');
  var blue80 = makeColor('#002275');
  var blue90 = makeColor('#000f40');

  var teal50 = makeColor('#00feff');
  var teal60 = makeColor('#00c8d7');
  var teal70 = makeColor('#008ea4');
  var teal80 = makeColor('#005a71');
  var teal90 = makeColor('#002d3e');

  var green50 = makeColor('#30e60b');
  var green60 = makeColor('#12bc00');
  var green70 = makeColor('#058b00');
  var green80 = makeColor('#006504');
  var green90 = makeColor('#003706');

  var yellow50 = makeColor('#ffe900');
  var yellow60 = makeColor('#d7b600');
  var yellow70 = makeColor('#a47f00');
  var yellow80 = makeColor('#715100');
  var yellow90 = makeColor('#3e2800');

  var red50 = makeColor('#ff0039');
  var red60 = makeColor('#d70022');
  var red70 = makeColor('#a4000f');
  var red80 = makeColor('#5a0002');
  var red90 = makeColor('#3e0200');

  var orange50 = makeColor('#ff9400');
  var orange60 = makeColor('#d76e00');
  var orange70 = makeColor('#a44900');
  var orange80 = makeColor('#712b00');
  var orange90 = makeColor('#3e1300');

  var grey10 = makeColor('#f9f9fa');
  var grey20 = makeColor('#ededf0');
  var grey30 = makeColor('#d7d7db');
  var grey40 = makeColor('#b1b1b3');
  var grey50 = makeColor('#737373');
  var grey60 = makeColor('#4a4a4f');
  var grey70 = makeColor('#38383d');
  var grey80 = makeColor('#2a2a2e');
  var grey90 = makeColor('#0c0c0d');
  var grey90_A05 = makeColor('#0c0c0d0c');
  var grey90_A10 = makeColor('#0c0c0d19');
  var grey90_A20 = makeColor('#0c0c0d33');
  var grey90_A30 = makeColor('#0c0c0d4c');
  var grey90_A40 = makeColor('#0c0c0d66');
  var grey90_A50 = makeColor('#0c0c0d7f');
  var grey90_A60 = makeColor('#0c0c0d99');
  var grey90_A70 = makeColor('#0c0c0db2');
  var grey90_A80 = makeColor('#0c0c0dcc');
  var grey90_A90 = makeColor('#0c0c0de5');

  var ink70 = makeColor('#363959');
  var ink80 = makeColor('#202340');
  var ink90 = makeColor('#0f1126');

  var white100 = makeColor('#ffffff');

  app.globalAssets().setColors([
    magenta50,
    magenta60,
    magenta70,
    magenta80,
    magenta90,
    purple50,
    purple60,
    purple70,
    purple80,
    purple90,
    blue40,
    blue50,
    blue50_A30,
    blue60,
    blue70,
    blue80,
    blue90,
    teal50,
    teal60,
    teal70,
    teal80,
    teal90,
    green50,
    green60,
    green70,
    green80,
    green90,
    yellow50,
    yellow60,
    yellow70,
    yellow80,
    yellow90,
    red50,
    red60,
    red70,
    red80,
    red90,
    orange50,
    orange60,
    orange70,
    orange80,
    orange90,
    grey10,
    grey20,
    grey30,
    grey40,
    grey50,
    grey60,
    grey70,
    grey80,
    grey90,
    grey90_A05,
    grey90_A10,
    grey90_A20,
    grey90_A30,
    grey90_A40,
    grey90_A50,
    grey90_A60,
    grey90_A70,
    grey90_A80,
    grey90_A90,
    ink70,
    ink80,
    ink90,
    white100
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
  var newGradient = makeGradient(["#000000", "#00FF00", "#FFFFFF"]);
  app.globalAssets().setGradients([newGradient]);
}
