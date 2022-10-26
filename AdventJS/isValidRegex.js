const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)

function listGifts(letter) {
  const contador = {};
  for (let item of letter.trim().split(' ')) {
    item = item.trim();
    if (item[0] === '_') continue;
    if (contador[item]) {
      contador[item]++;
    } else {
      contador[item] = 1;
    }
  }

  // ¡Tú puedes!
  return contador;
}

function isValidRegex(letter) {
 const stack = [];
 let lastBracket;
 for (let l of letter ) {
   if (l === '(' || l === '[' || l === '{') {
     
     stack.push(l);
   }
   if (l === ')' || l === ']' || l === '}') {
     lastBracket = stack.pop()
     if (lastBracket === '(' && l === ')' || 
         lastBracket === '[' && l === ']' ||
         lastBracket === '{' && l === '}') continue;
     else return false;
   }
 }
 return stack.length === 0;
}

console.log(isValidRegex("bici coche (balón) bici coche peluche"));
console.log(isValidRegex("bici coche (balón bici coche"));
console.log(isValidRegex("peluche (bici [coche) bici coche balón"));


function isValid(letter: string) {
 for (let item of letter.trim().split(' ')) {
   if (item === '()') return false;
   const {0: first, [item.length - 1]: last } = item;
   if (first === '(' && last !== ')') return false;
 }
 return true
}
console.log(isValid("bici coche (balón) bici coche peluche"));
console.log(isValid("bici coche (balón bici coche"));
console.log(isValid("peluche (bici (coche) bici coche balón"));
console.log(isValid("() bici"));