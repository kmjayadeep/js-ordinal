const expect = require('chai').expect;
const o = require('../index.js');

describe('ordinalOf_1()', function () {
  it('should return number with its ordinal', function () {
    const x = 1;
    const xOrdinal = '1st';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_2()', function () {
  it('should return number with its ordinal', function () {
    const x = 2;
    const xOrdinal = '2nd';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_3()', function () {
  it('should return number with its ordinal', function () {
    const x = 3;
    const xOrdinal = '3rd';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_5()', function () {
  it('should return number with its ordinal', function () {
    const x = 5;
    const xOrdinal = '5th';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_a()', function () {
    it('should return error', function () {
      const x = 'a';
      const xOrdinal = 'a is not a valid number';
      var y = o.toOrdinal(x);
      expect(y).to.be.equal(xOrdinal);
    });
});

describe('ordinalOf_10()', function () {
  it('should return number with its ordinal', function () {
    const x = 10;
    const xOrdinal = '10th';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_11()', function () {
  it('should return number with its ordinal', function () {
    const x = 11;
    const xOrdinal = '11th';
    var y = o.toOrdinal(x);
    expect(y).to.be.equal(xOrdinal);
  });
});

describe('ordinalOf_13()', function () {
    it('should return number with its ordinal', function () {
      const x = 13;
      const xOrdinal = '13th';
      var y = o.toOrdinal(x);
      expect(y).to.be.equal(xOrdinal);
    });
});

describe('ordinalOf_21()', function () {
    it('should return number with its ordinal', function () {
      const x = 21;
      const xOrdinal = '21st';
      var y = o.toOrdinal(x);
      expect(y).to.be.equal(xOrdinal);
    });
});