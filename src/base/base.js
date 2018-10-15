import DrawingArea from '../drawing-area/drawing-area';

// TODO all these initialization logic is terrible


class Base {
  constructor(baseDivId = 'base') {
    this.baseDivId = baseDivId;
    this.baseDiv = document.getElementById(this.baseDivId);
    this.hasBaseDiv = false;
  }

  init() {
    this.createBaseElement();
    this.createSvgElement();
  }

  createBaseElement() {
    this.baseDiv = document.createElement('div');
    this.baseDiv.setAttribute('id', this.baseDivId);
    this.baseDiv.setAttribute('class', this.baseDivId);

    if (!this.hasBaseDiv) {
      document.body.appendChild(this.baseDiv);
      this.hasBaseDiv = true;
    }
  }

  createSvgElement() {
    const drawingArea = new DrawingArea(this.baseDivId);
    drawingArea.init();
  }
}

export default Base;
