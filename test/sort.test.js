const expect = require('chai').expect;
const sort = require('../sort');

describe('Sort Function', () => {
  it('numbers should be arranged smallest to largest with positive integers', () => {
    expect(sort([1, 5, 8, 3, 4])).to.deep.equal([1, 3, 4, 5, 8]);
  })
  it('should arrange in ascending order with negative integers', () => {
    expect(sort([-1, -5, -7, -9])).to.deep.equal([-9, -7, -5, -1]);
  }) 
})