// BEGIN: 5f8c7d3b8b5a
const assert = require('assert');
const findMaxProfit = require('./program_2');

describe('findMaxProfit', () => {
  it('should return 0 when given an empty array', () => {
    assert.strictEqual(findMaxProfit([]), 0);
  });

  it('should return 0 when given an array with one element', () => {
    assert.strictEqual(findMaxProfit([100]), 0);
  });

  it('should return the correct max profit when given an array of prices', () => {
    assert.strictEqual(findMaxProfit([100, 180, 260, 310, 40, 535, 695]), 655);
    assert.strictEqual(findMaxProfit([10, 20, 30, 40, 50]), 40);
    assert.strictEqual(findMaxProfit([50, 40, 30, 20, 10]), 0);
    assert.strictEqual(findMaxProfit([100, 90, 80, 70, 60]), 0);
  });
});
// END: 5f8c7d3b8b5a