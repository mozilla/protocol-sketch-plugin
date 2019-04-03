var sketch = require('sketch');
var Style = sketch.Style
var document = sketch.getSelectedDocument()
var UI = require('sketch/ui')
var Text = sketch.Text

// Import Data
var colorData = require('../data/pocketdark/color.json');
var colorStyleData = require('../data/pocketdark/colorstyle.json');
var imageData = require('../data/pocketdark/image.json');
var textData = require('../data/pocketdark/text.json');

export default function() {
  
  // UI Message
  UI.message('🎨 text styles, layer styles, and fills were updated!');
  
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
  for (q = 0; q < colorData.length; q++) {
    // Color Picker
    document.colors.push({name: colorData[q].name, color: colorData[q].value});
  }
  
  // Text Styles
  if (document.sharedTextStyles.length === 0) {
    var r;
    for (r = 0; r < textData.length; r++) {
      var text = new Text({
        text: 'my text',
        style: { 
          alignment: Text.Alignment.left,
          borders: [{
            enabled: false
          }],
          fontFamily: textData[r].fontFamily,
          fontSize: textData[r].fontSize,
          fontWeight: textData[r].fontWeight,
          lineHeight: textData[r].lineHeight,
          textColor: textData[r].textColor
        }
      })

      document.sharedTextStyles.push({
        name: textData[r].name,
        style: text.style
      })
    }
  } else {
    var s;
    for (s = 0; s < textData.length; s++) {
      document.sharedTextStyles[s].style.fontFamily = textData[s].fontFamily
      document.sharedTextStyles[s].style.fontSize = textData[s].fontSize
      document.sharedTextStyles[s].style.fontWeight = textData[s].fontWeight
      document.sharedTextStyles[s].style.lineHeight = textData[s].lineHeight
      document.sharedTextStyles[s].style.textColor = textData[s].textColor
    }
  }
}