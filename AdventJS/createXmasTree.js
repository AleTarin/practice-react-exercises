function S(height: number) {
  // ¡Y no olvides también poner los turrones!
  let threeLevel = height;
  const tree: string[][] = Array(height).fill(Array(height * 2 - 1).fill("_"));

  const rows = tree.map((row) => {
    const width = (height - threeLevel) * 2 + 1;
    row.splice(threeLevel - 1, width, ...Array(width).fill("*"));
    threeLevel--;
    return row.join("");
  });
  
  const logRow = Array(height * 2 - 1).fill("_");
  logRow.splice(height - 1, 1, '#');
  
  rows.concat(logRow)
  return rows.concat(logRow.join('')).concat(logRow.join('')).join("\n");
}

// console.log(createXmasTree(3))
// console.log(createXmasTree(5));

function daysToXmas(date: Date) {
  const chrismas = new Date('Dec 25, 2021');
  
  // ¡Y no olvides compartir tu solución en redes!
  return Math.ceil((chrismas.getTime() - date.getTime())/24/60/60/1000);
}

// const date1 = new Date('Dec 1, 2021')
// daysToXmas(date1) // 24
// const date2 = new Date('Dec 24, 2021 00:00:01')
// daysToXmas(date2) // 1
// const date3 = new Date('Dec 24, 2021 23:59:59')
// daysToXmas(date3) // 1
// const date4 = new Date("December 20, 2021 03:24:00")
// daysToXmas(date4) // 5

// const date = new Date('Dec 25, 2021')
// daysToXmas(date) // 0
// const date1 = new Date('Dec 26, 2021')
// daysToXmas(date1) // -1
// const date2 = new Date('Dec 31, 2021')
// daysToXmas(date2) // -6
// const date3 = new Date('Jan 1, 2022 00:00:01')
// daysToXmas(date3) // -7
// const date4 = new Date('Jan 1, 2022 23:59:59')
// daysToXmas(date4) // -7

