import Point from './index.js';
class Line extends Point  {
    #x1;
    #x2;
    constructor (x, y, x1, x2) {
        super (x, y);
        this.#x1 = new Point (3, 4);
        this.#x2 = new Point (1, 12);
    }
    length () {
        return this.Px.distance(this.Py);
    }
    toString2() {
        return `Line(${this.Px}, ${this.Py})`;
    }
}
const point = new Point(2, 5);
const point2 = new Point(4, 8);
const line = new Line(point, point2);
console.log(line.length());
console.log(line.toString2(point, point2));