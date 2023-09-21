/**
 * Finds the maximum profit that can be made from buying and selling a stock.
 * @param {number[]} prices - An array of stock prices.
 * @returns {number} - The maximum profit that can be made.
 */
function findMaxProfit(prices) {
    let minPrice = Infinity; let maxProfit = -1;

    for (let i = 0; i < prices.length; i++) { if (prices[i] < minPrice) { minPrice = prices[i]; } else { let profit = prices[i] - minPrice; if (profit > maxProfit) { maxProfit = profit; } } }

    return maxProfit;
}

let prices = [100, 180, 260, 310, 40, 535, 695];
console.log(findMaxProfit(prices));
