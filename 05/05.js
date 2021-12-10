const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);

  /* huge array because I thought the area would be 10x10 based on the example and I'm too lazy to change it */
  const field = Array.from({ length: 1000 }, () =>
    Array.from({ length: 1000 }, () => 0)
  );

  data.forEach((entry) => {
    const [start, end] = entry.split(" -> ");
    let [x1, y1] = start.split(",").map(Number);
    let [x2, y2] = end.split(",").map(Number);

    if (x1 === x2) {
      const start = y2 > y1 ? y1 : y2;
      const stop = y2 > y1 ? y2 : y1;

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

function solveStep2(input) {}

module.exports = {
  solveStep1,
  solveStep2,
};
