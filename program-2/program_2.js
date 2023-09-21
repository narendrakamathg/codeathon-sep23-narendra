function findMaxProfit(prices) {
    let minPrice = Infinity; let maxProfit = -1;

    for (let i = 0; i < prices.length; i++) { if (prices[i] < minPrice) { minPrice = prices[i]; } else { let profit = prices[i] - minPrice; if (profit > maxProfit) { maxProfit = profit; } } }

    return maxProfit;
}

// Example usage: 
let prices = [100, 180, 260, 310, 40, 535, 695];
console.log(findMaxProfit(prices));