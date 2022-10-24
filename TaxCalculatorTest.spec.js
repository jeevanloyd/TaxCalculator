const { calculateTax, calculateSuper } = require('./TaxCalculator.js');
const { expect } = require('chai');


test('Should return 0 for a non-integer value', () => {
    expect(calculateTax('ab')).to.equal(0);
});

test('Should return 0 given a negative number', () => {
    expect(calculateTax(-15)).to.equal(0);
});

test('Should return 0 given a taxable income less than 18200', () => {
    expect(calculateTax(16980)).to.equal(0);
});

test('Should return 1699 given a taxable income of 35,000', () => {
    expect(calculateTax(30000)).to.equal(1699.14);
});

test('Should return 24320 given a taxable income of 110000', () => {
    expect(calculateTax(110000)).to.equal(24320.81);
});

test('Should return 54525.57 given a taxable income of 200000', () => {
    expect(calculateTax(200000)).to.equal(54525.57);
});

test('Should return 0 given an invalid number type', () => {
    expect(calculateSuper('ab')).to.equal(0);
});

test('Should return 9300 given a super Annuation of 100000', () => {
    expect(calculateSuper(100000)).to.equal(9300);
});

