
import Point from "../src/index.js";
import {expect} from 'chai';

describe ('Points tests', () => {
    describe ('Create Point', () => {
        it ('should return error when no params', () => {
            expect(() => new Point()).to.throw('wrong params');
        });
        it ('should return error when x is null', () => {
            expect(() => new Point( null , 1)).to.throw('wrong params');
        });
        it ('should return error when y is null', () => {
            expect(() => new Point(1 , null)).to.throw('wrong params');
        });
        it ('should return error when x is a string', () => {
            expect(() => new Point('1' , 1)).to.throw('wrong params');
        });
        it ('should return error when y is null', () => {
            expect(() => new Point(1 , '1')).to.throw('wrong params');
        });
        it ('should return error when x is an object', () => {
            expect(() => new Point({} , 1)).to.throw('wrong params');
        });
        it ('should return error when y is an object', () => {
            expect(() => new Point(1 , {})).to.throw('wrong params');
        });
        it ('should create point when x and y are numbers', () => {
            const p = new Point( 1, 3);
            expect(p).to.be.an('object').that.has.an.instanceof(Point);
        });
        it ('should have getter for x', () => {
                const p = new Point(1, 3);
                expect(p.Px).to.equal(1);
        });
        it ('should have getter for y', () => {
            const p = new Point(1, 3);
            expect(p.Py).to.equal(3);
        });
        // მე მაქვს სეტერი, და ვერ გავაკეთე შემოწმება, write only არიო.
        it ('should create instance of point object when x and y are numbers', () => {
            const p = new Point(1, 3);
            expect(p).to.be.an('object').that.is.an.instanceOf(Point);
        });
        it ('should return string representation of Point (x, y)', () => {
            const p = new Point(1, 3);
            expect(`${p}`).to.equal('Point(1, 3)');
        });
    });
}); //აქ რა თქმა უნდა ვისარგებლე თვენს მიერ მოყვანილი მაგალითით