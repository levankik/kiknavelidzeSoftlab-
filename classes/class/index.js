class Point {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    get Px() {
        return this.#x;
    }
    get Py() {
        return this.#y;
    }
    set P(x) {
        this.#x = x;
    }
    distance(point2) {
        return Math.sqrt((this.Px - point2.Px)**2 + (this.Py - point2.Py)**2);
    }
    toString(point) {
        return  ( "Point" + "(" + point.#x + ", " +  point.#y + ")" );

    }
}
const point = new Point (3, 4);
const point2 = new Point(1, 12);
console.log(point.distance(point2));
console.log(point.toString(point2));

class Line extends Point  {
    #x1;
    #x2;
    constructor (x, y, x1, x2) {
        super (x, y);
        this.#x1 = new Point (3, 4);
        this.#x2 = new Point (1, 12);
    }
    length () {
        return this.#x1.distance(this.#x2);
    }
    toString2(x1, x2) {
        return ("Line(" + this.#x1.toString(x1) + ", " + this.#x2.toString(x2) + ")");
    }
}
const line = new Line(point, point2);
console.log(line.length());
console.log(line.toString2(point, point2));
//კლასს უნდა ჰქონდეს toString() მეთოდი, რომელიც დააბრუნებს ასეთ სტრიქონს: Line(Point(5, 10), Point(20, 40) მაგალითად;