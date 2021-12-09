const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input).map((value) => {
    const [direction, units] = value.split(" ");

    return {
      direction: direction.trim(),
      units: parseInt(units, 10),
    };
  });

  const count = { x: 0, y: 0 };

  data.forEach(({ direction, units }) => {
    switch (direction) {
      case "forward":
        count.x += units;
        break;
      case "up":
        count.y -= units;
        break;
      case "down":
        count.y += units;
        break;
      default:
        throw new Error("this shouldn't happen");
    }
  });

  return count.x * count.y;
}

function solveStep2(input) {
  const data = parseInput(input).map((value) => {
    const [direction, units] = value.split(" ");

    return {
      direction: direction.trim(),
      units: parseInt(units, 10),
    };
  });

  const count = { horizontal: 0, depth: 0, aim: 0 };

  data.forEach(({ direction, units }) => {
    switch (direction) {
      case "forward":
        count.horizontal += units;
        count.depth += count.aim * units;
        break;
      case "up":
        count.aim -= units;
        break;
      case "down":
        count.aim += units;
        break;
      default:
        throw new Error("this shouldn't happen");
    }
  });

  return count.horizontal * count.depth;
}

module.exports = {
  solveStep1,
  solveStep2,
};
