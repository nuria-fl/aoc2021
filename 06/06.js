const parseInput = require("../parseInput");

function solveStep1(input, days) {
  const data = parseInput(input)[0];

  let fishes = data.split(",").map(Number);

  for (let i = 0; i < days; i++) {
    // new fishes are born
    const newFishes = fishes.filter((counter) => counter === 0);

    fishes = fishes.map((counter) => {
      return counter > 0 ? --counter : 6;
    });

    newFishes.forEach(() => {
      fishes.push(8);
    });
  }

  return fishes.length;
}

function solveStep2(input) {
  const data = parseInput(input);
}

module.exports = {
  solveStep1,
  solveStep2,
};
