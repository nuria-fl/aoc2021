const fs = require("fs");
const path = require("path");

function parseInput(file) {
  const input = fs.readFileSync(path.join(__dirname, file)).toString();

  return input.split("\n").map((entry) => entry.trim());
}

module.exports = parseInput;
