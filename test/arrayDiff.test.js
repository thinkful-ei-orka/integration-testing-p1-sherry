const expect = require('chai').expect;
const diff = require('../arrayDiff');

describe('Array Diff', () => {
  it('should return an empty array if a is empty', () => {
    expect(diff([], [1,2])).to.deep.equal([]);
  });
  it('should return the same array if b is empty', () => {
    expect(diff([1,2], [])).to.deep.equal([1,2]);
  });
  it('should return an empty array if a and b are the same', () => {
    // expect(diff([1,2,3], [1,2,3])).to.deep.equal([]);
    expect(diff([1,2,3], [1,2,3])).to.eql([]);
  });
  it('should return the same array if no elements in b are in a', () => {
    // expect(diff([1,2,3], [4,5,6])).to.deep.equal([1,2,3]);
    expect(diff([1,2,3], [4,5,6])).to.eql([1,2,3]);
  });
  it('should return correctly is some elements are removed', () => {
    //expect(diff([1,2,3], [2])).to.deep.equal([1,3]);
    expect(diff([1,2,3], [2])).to.eql([1,3]);
  })
})