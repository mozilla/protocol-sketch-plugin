var sketch = require('sketch');
var UI = require('sketch/ui')
var document = sketch.getSelectedDocument()

export default function() {
  
  // UI Message
  UI.message('color picker and layer styles were cleared');
  
  // Clear Color Fill
  document.colors = []
  
  // Clear Gradient Fill
  document.gradients = []
  
  // Clear the Layer Styles
  document.sharedLayerStyles = []
  
  // Clear the Text Styles
  document.sharedTextStyles = []
}