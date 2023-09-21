// BEGIN: 3d5f8a9d7b1f
const assert = require('assert');
const { performance } = require('perf_hooks');
const sortAscending = require('./program_4');

describe('sortAscending', () => {
  it('should sort an array of 50000 elements in ascending order', () => {
    const unsortedArr = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100000));
    const t0 = performance.now();
    const sortedArr = sortAscending(unsortedArr);
    const t1 = performance.now();
    assert.deepEqual(sortedArr, unsortedArr.sort((a, b) => a - b));
    console.log(`sortAscending took ${t1 - t0} milliseconds to sort an array of 50000 elements.`);
  });
});
// END: 3d5f8a9d7b1f// BEGIN: 8f5d4a6d9c5e
const assert = require('assert');
const sortAscending = require('./program_4').sortAscending;

describe('sortAscending', () => {
  it('should return an empty array when given an empty array', () => {
    const input = [];
    const expected = [];
    const result = sortAscending(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should return the same array when given an array with one element', () => {
    const input = [42];
    const expected = [42];
    const result = sortAscending(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should sort an array of positive integers in ascending order', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const result = sortAscending(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should sort an array of negative integers in ascending order', () => {
    const input = [-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5];
    const expected = [-9, -6, -5, -5, -4, -3, -3, -2, -1, -1, -5];
    const result = sortAscending(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should sort an array of mixed integers in ascending order', () => {
    const input = [-3, 1, 4, -1, 5, -9, 2, -6, 5, 3, -5];
    const expected = [-9, -6, -5, -3, -1, 1, 2, 3, 4, 5, 5];
    const result = sortAscending(input);
    assert.deepStrictEqual(result, expected);
  });
});
// END: 8f5d4a6d9c5e