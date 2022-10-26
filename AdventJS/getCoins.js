function getCoins(change) {
  const coins = [1,2,5,10,20,50]
  let currentCoin = 0;
  let remaining = 0;
  let numberOfCoins = 0;
  const coinsAmounts  = []
	for (let i = coins.length - 1; i >= 0; i--) {
    currentCoin = coins[i]
  	remaining = change % currentCoin;
    numberOfCoins = change / currentCoin
    if (remaining < change) {
      coinsAmounts.push( Math.floor(numberOfCoins))
      change = remaining;
    } else {
      coinsAmounts.push(0)
    }
  }
  // ¡No olvides compartir tu solución en redes!
  return coinsAmounts.reverse()
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos