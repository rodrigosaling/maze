import svgjs from 'svg.js';

class DrawingArea {
  constructor(baseDivId) {
    this.baseDivId = baseDivId;
    this.hasDrawingArea
    this.drawingArea = svgjs(this.baseDivId);
  }

  init() {
    var rect = this.drawingArea.rect(100, 100).attr({ fill: '#f06' });
  }
}

export default DrawingArea;
