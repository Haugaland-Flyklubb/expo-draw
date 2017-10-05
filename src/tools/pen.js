export default class Pen {
  constructor(strokes) {
    this.strokes = strokes || [];
    this._offsetX = 0;
    this._offsetY = 0;
  }

  addStroke(points) {
    if (points.length > 0) {
      this.strokes.push(points);
    }
  }

  setOffset(options) {
    if (!options) return
    this._offsetX = options.x;
    this._offsetY = options.y;
  }

  pointsToSvg(points) {
    let offsetX = this._offsetX;
    let offsetY = this._offsetY;
    if (points.length > 0) {
      var path = `M ${points[0].x},${points[0].y}`
      points.forEach((point) => {
        path = path + ` L ${point.x},${point.y}`
      });
      return path;
    } else {
      return ''
    }
  }

  copy() {
    return new Reaction(this.strokes.slice());
  }
}