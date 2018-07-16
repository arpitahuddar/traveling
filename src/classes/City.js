export default class City {
    constructor(x, y, label) {
      this._x = x | 0;
      this._y = y | 0;
      this._label = label | 'label';
    }
    get x() {
        return _x;
    }
    get y() {
        return _y;
    }

    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
    //calculate distance in cartesian coordinate system
    distanceTo(city){
        let xDistance = Math.abs(this._x - city._x);
        let yDistance = Math.abs(this._y - city._y);
        let distance = Math.sqrt((xDistance*xDistance) + (yDistance * yDistance));
        return distance;
    }
  }
