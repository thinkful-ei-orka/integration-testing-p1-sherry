const expect = require('chai').expect;
const isEven = require('../isEven');

describe('isEven', () => {
  it('should find 4 to be even', () => {
    expect(isEven(4)).to.be.true;
  });
  it('should find 5 to be not even' ,() => {
    expect(isEven(5)).to.be.false;
  });
})