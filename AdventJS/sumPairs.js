function sumPairs(numbers: number[], result: number) {
  // ¡Y no olvides compartir tu solución en redes!
  for (let i=0; i < numbers.length; i++) {
    for (let j=i+1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result ) return [numbers[i],numbers[j]]
    }
  }
  return null;
};

// sumPairs([3, 5, 7, 2], 10) // [3, 7]
// sumPairs([-3, -2, 7, -5], 10) // null
// sumPairs([2, 2, 3, 1], 4) // [2, 2]
// sumPairs([6, 7, 1, 2], 8) // [6, 2]
// sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

function contains(store: any, product: string) {
  return getProducts(store, []).some(x => x)
   // ¡Y no olvides compartir tu solución en redes!
  function getProducts(obj: any, acc: boolean[]): boolean[] {
      Object.entries(obj).forEach(([_ , value]) => {
        if (typeof value === 'object') {
          return getProducts(value, acc)
        } else {
          if (typeof value === 'string' && value === product) {
            acc.push(true)
          };
        }
  		})
    return acc;
	}
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false