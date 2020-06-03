const expect = require('chai').expect;
const divide = require('../index');

describe('Divide Function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  })
  it('should throw an error when dividing by 0', () => {
    expect(() => { divide(8, 0) }).to.throw();
  })
})