const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);

  /* huge array because I thought the area would be 10x10
  based on the example and I'm too lazy to change it now */
  const field = Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => 0)
  );

  data.forEach((entry) => {
    const [start, end] = entry.split(" -> ");
    let [x1, y1] = start.split(",").map(Number);
    let [x2, y2] = end.split(",").map(Number);

    if (x1 === x2) {
      const start = Math.min(y1, y2);
      const stop = Math.max(y1, y2);

      for (let i = start; i <= stop; i++) {
        field[i][x1]++;
      }
    }

    if (y1 === y2) {
      const start = x2 > x1 ? x1 : x2;
      const stop = x2 > x1 ? x2 : x1;

      for (let i = start; i <= stop; i++) {
        field[y1][i]++;
      }
    }
  });

  return field.flat().filter((n) => n > 1).length;
}

function solveStep2(input) {
  const data = parseInput(input);

  /* huge array because I thought the area would be 10x10
  based on the example and I'm too lazy to change it now */
  const field = Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => 0)
  );

  data.forEach((entry) => {
    const [start, end] = entry.split(" -> ");
    let [x1, y1] = start.split(",").map(Number);
    let [x2, y2] = end.split(",").map(Number);

    if (x1 === x2) {
      const start = Math.min(y1, y2);
      const stop = Math.max(y1, y2);

      for (let i = start; i <= stop; i++) {
        field[i][x1]++;
      }
      return;
    }

    if (y1 === y2) {
      const start = Math.min(x1, x2);
      const stop = Math.max(x1, x2);

      for (let i = start; i <= stop; i++) {
        field[y1][i]++;
      }
      return;
    }

    let minX = Math.min(x1, x2);
    let maxX = Math.max(x1, x2);
    let minY = Math.min(y1, y2);
    let maxY = Math.max(y1, y2);

    if ((x1 > x2 && y1 > y2) || (x1 < x2 && y1 < y2)) {
      for (let x = minX, y = minY; x <= maxX; x++, y++) {
        field[y][x]++;
      }
    } else {
      for (let x = minX, y = maxY; x <= maxX; x++, y--) {
        field[y][x]++;
      }
    }
  });

  return field.flat().filter((n) => n > 1).length;
}

module.exports = {
  solveStep1,
  solveStep2,
};
