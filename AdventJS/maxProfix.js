function maxProfit(prices) {
  let [left, right] = [Infinity, -Infinity];
  let profit = -1;
  for(let current of prices) {
    // check right is max
    if (current - left && current - left > profit ) {
      right = current
      profit = right - left
    }
    // check left is minimum
    if (current < left) {
      left = current;
      right = current;
    } 
  }
  // ¡Y no olvides compartir tu solución en redes!
  return profit
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7] 
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)