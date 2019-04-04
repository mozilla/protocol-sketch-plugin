var sketch = require('sketch');
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var UI = require('sketch/ui')
var Text = sketch.Text

// Import Data
var colorData;
var colorStyleData = require('../data/firefox/colorstyle.json');
var gradientData = require('../data/firefox/gradients.json');
var imageData = require('../data/firefox/image.json');
var textData = require('../data/firefox/text.json');


// Protocol Tokens
try {
    var url = NSURL.URLWithString("https://raw.githubusercontent.com/mozilla/protocol-tokens/master/dist/colors/colors.json");
    var data = NSData.dataWithContentsOfURL(url);
    colorData = NSJSONSerialization.JSONObjectWithData_options_error(data, 0, nil)
    log('success')
    UI.message('🔥 text styles, layer styles, and fills were updated!');
} catch(e) {
    colorData = require('../data/firefox/color.json');
    log("Error: " + e);
    UI.message('⚠️ You are either offline or something else went wrong!');
}

export default function() {
  
  // Clear Color Picker
  document.colors = []
  
  // Clear all layer styles except for the logos and primary colors
  const remainingLayers = document.sharedLayerStyles.length
  if (remainingLayers >= 25) {
    
    // Remove Extra logos
    var i;
    for (i = 25; i < remainingLayers; i++) {
      document.sharedLayerStyles.pop()
    }
    
    // Update Layer Style - Color Fills
    var j;
    for (j = 0; j < 4; j++) {
      // UI Colors
      document.sharedLayerStyles[j * 2].name = 'fill / ui / ' + colorStyleData[j].name
      document.sharedLayerStyles[j * 2].style.fills = [
        {
          color: colorStyleData[j].value,
          fillType: Style.FillType.Color,
        }
      ]
      
      // Border Colors
      document.sharedLayerStyles[(j * 2) + 1].name = 'border / ui / ' + colorStyleData[j].name
      document.sharedLayerStyles[(j * 2) + 1].style.borders = [
        {
          color: colorStyleData[j].value,
          fillType: Style.FillType.Color,
          position: Style.BorderPosition.Inside,
        }
      ]
    }
    var k;
    for (k = 4; k < 11; k++) {
      // Brand Colors
      document.sharedLayerStyles[k * 2].name = 'fill / brand / ' + colorStyleData[k].name
      document.sharedLayerStyles[k * 2].style.fills = [
        {
          color: colorStyleData[k].value,
          fillType: Style.FillType.Color,
        }
      ]
      
      // Border Colors
      document.sharedLayerStyles[(k * 2) + 1].name = 'border / brand / ' + colorStyleData[k].name
      document.sharedLayerStyles[(k * 2) + 1].style.borders = [
        {
          color: colorStyleData[k].value,
          fillType: Style.FillType.Color,
          position: Style.BorderPosition.Inside,
        }
      ]
    }
    
    // Update Layer Style - Pattern Fill
    var l;
    for (l = 0; l < 3; l++) {
      document.sharedLayerStyles[l + 22].name = imageData[l].name
      document.sharedLayerStyles[l + 22].style.fills = [{
        fill: Style.FillType.Pattern,
        pattern: {
          patternType: Style.PatternFillType.Fit,
          image: {
            base64: imageData[l].base64
          }
        }
      }]
    }
    
    // Add Layer Style - Pattern Fill
    var m;
    for (m = 3; m < imageData.length; m++) {
      const image = imageData[m].base64
    
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
            fill: Style.FillType.Color,
          }],
          borders: [{
            enabled: false
          }]
        }
      })
      
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
      })
    }
    var o;
    for (o = 4; o < 11; o++) {
      // Add Layer Style - Color Fill
      document.sharedLayerStyles.push({
        name: 'fill / brand / ' + colorStyleData[o].name,
        style: {
          fills: [{
            color: colorStyleData[o].value, 
            fill: Style.FillType.Color,
          }],
          borders: [{
            enabled: false
          }]
        }
      })
      
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
      })
    }

    // Add Layer Style - Pattern Fill
    var p;
    for (p = 0; p < imageData.length; p++) {
      const image = imageData[p].base64
    
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
    document.colors.push({name: String(colorData[q].name), color: String(colorData[q].value)});
  }
  
  // Gradient Fill
  for (r = 0; r < gradientData.length; r++) {
    
    var gradientStops;
    
    if (gradientData[r].gradient.stops.length == 2) {
      gradientStops = [
       { position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color},
       { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color}
      ]
    } else if (gradientData[r].gradient.stops.length == 3) {
      gradientStops = [
       { position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color},
       { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color},
       { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color}
      ]
    } else if (gradientData[r].gradient.stops.length == 4) {
      gradientStops = [
       { position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color},
       { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color},
       { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color},
       { position: gradientData[r].gradient.stops[3].position, color: gradientData[r].gradient.stops[3].color}
      ]
    } else if (gradientData[r].gradient.stops.length == 5) {
      gradientStops = [
       { position: gradientData[r].gradient.stops[0].position, color: gradientData[r].gradient.stops[0].color},
       { position: gradientData[r].gradient.stops[1].position, color: gradientData[r].gradient.stops[1].color},
       { position: gradientData[r].gradient.stops[2].position, color: gradientData[r].gradient.stops[2].color},
       { position: gradientData[r].gradient.stops[3].position, color: gradientData[r].gradient.stops[3].color},
       { position: gradientData[r].gradient.stops[4].position, color: gradientData[r].gradient.stops[4].color}
      ]
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
     },
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
      })

      document.sharedTextStyles.push({
        name: textData[s].name,
        style: text.style
      })
    }
  } else {
    var t;
    for (t = 0; t < textData.length; t++) {
      document.sharedTextStyles[t].style.fontFamily = textData[t].fontFamily
      document.sharedTextStyles[t].style.fontSize = textData[t].fontSize
      document.sharedTextStyles[t].style.fontWeight = textData[t].fontWeight
      document.sharedTextStyles[t].style.lineHeight = textData[t].lineHeight
      document.sharedTextStyles[t].style.textColor = textData[t].textColor
    }
  }
}