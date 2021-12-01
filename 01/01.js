const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);

  let count = 0;

  data
    .map((num) => parseInt(num, 10))
    .reduce((prev, current) => {
      if (prev && prev < current) {
        count++;
      }
      return current;
    });

  return count;
}

function solveStep2(input) {
  const data = parseInput(input).map((num) => parseInt(num, 10));

  const sum3 = (i) => data[i] + data[i + 1] + data[i + 2];

  let count = 0;

  for (let i = 0; i <= data.length - 3; i++) {
    if (sum3(i) < sum3(i + 1)) {
      count++;
    }
  }

  return count;
}

module.exports = {
  solveStep1,
  solveStep2,
};
