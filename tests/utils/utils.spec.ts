import "mocha";
import {expect} from "chai"
import {toGrid} from "../../src/util/MappedList";

describe("#toGrid", ()=> {
    it("calculates the values correctly when given correct input", ()=> {
        expect(toGrid(5,9,2,20)).to.eq(43);
    });    
});