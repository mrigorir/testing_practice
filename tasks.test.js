const tasks = require('./tasks');


describe('Task#1 - amount of chars', () => {
  test('is === 5', () => {
    expect(tasks.stringLength('Marco')).toBe(5);
  });
  test('is >= 1', () => {
    expect(tasks.stringLength('Marco')).toBeGreaterThanOrEqual(1);
  });
  test('is <= 10', () => {
    expect(tasks.stringLength('1234567894')).toBeLessThanOrEqual(10);
  });
  test('Thorws an Error', () => {
    expect(() => stringLength('78945612317495947').value()).toThrowError(Error);
  });
});

describe('Task#2 - reverse a string', () => {
  test('returns my name reversed', () => {
    expect(tasks.reverseString('Marco')).toBe('ocram');
  });
});

describe('Task#3 - calculator', () => {
  test('adds numbers', () => {
    expect(tasks.calculator.add(2, 2)).toEqual(4);
  });
  test('substracts numbers', () => {
    expect(tasks.calculator.substract(4, 3)).toEqual(1);
  });
  test('multiplies numbers', () => {
    expect(tasks.calculator.multiply(5, 7)).toEqual(35);
  });
  test('divides numbers', () => {
    expect(tasks.calculator.divide(6, 2)).toEqual(3);
  });
});