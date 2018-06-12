import "mocha";
import { expect } from "chai"
import { toGrid, Dimension } from "../../src/components/util/util";

describe("#toGrid", () => {
    it("calculates the values correctly when given correct input", () => {
        expect(toGrid({x:5, y:9}, { height: 10, width: 10 })).to.eq(95);
    });

    it("throws Error when x is smaller than width", () => {
        expect(() => { toGrid({x:6, y:9}, { height: 10, width: 5 }) }).to.throw("Expected x to be less than width");
    });

    it("throws Error when y is smaller than height", () => {
        expect(() => { toGrid({x:10, y:9}, { height: 7, width: 10 }) }).to.throw("Expected y to be less than height");
    });
});