// You are given an array prices where prices[i] is the price of the given stock on the
// ith day.
// You want to maximise your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sail that area.
// Returns the maximum profit, If you cannot achieve any profit, return 0;

// Input: prices = [7,1,5,3,6,4] ----> Output: 5
// Input: prices = [7,6,4,3,1] ----> Output: 0

const maxProfit = (prices) => {
    let minStockExchangePrice = prices[0] || 0;
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] < minStockExchangePrice){
            minStockExchangePrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - minStockExchangePrice)
    }
    return profit;
}
console.log(maxProfit([7,1,5,3,6,4]))