const parseInput = require("../parseInput");

function calcMostCommonNumberInCol(data, pos) {
  const column = data.map((entry) => {
    return entry.split("")[pos];
  });

  const zeroCount = column.filter((bit) => bit === "0").length;
  const oneCount = column.filter((bit) => bit === "1").length;

  return zeroCount > oneCount ? "0" : "1";
}

function solveStep1(input) {
  const data = parseInput(input);

  function calcGamma() {
    const count = data[0].length;
    const gamma = [];
    for (let i = 0; i < count; i++) {
      gamma.push(calcMostCommonNumberInCol(data, i));
    }

    return gamma;
  }

  function calcEpsilon(gamma) {
    return gamma.map((bit) => (bit === "0" ? "1" : "0"));
  }

  const rawGamma = calcGamma();
  const gamma = parseInt(rawGamma.join(""), 2);

  const epsilon = parseInt(calcEpsilon(rawGamma).join(""), 2);

  return gamma * epsilon;
}

function solveStep2(input) {
  const data = parseInput(input);

  function filterOxygenCol(data, col) {
    return data.filter((entry) => {
      return entry[col] === calcMostCommonNumberInCol(data, col);
    });
  }

  function calcOxygen() {
    const count = data[0].length;
    let remaining = data;

    for (let i = 0; i < count; i++) {
      remaining = filterOxygenCol(remaining, i);
      if (remaining.length === 1) {
        return remaining[0];
      }
    }
  }

  function filterCO2Col(data, col) {
    return data.filter((entry) => {
      return entry[col] !== calcMostCommonNumberInCol(data, col);
    });
  }

  function calcCO2() {
    const count = data[0].length;
    let remaining = data;

    for (let i = 0; i < count; i++) {
      remaining = filterCO2Col(remaining, i);
      if (remaining.length === 1) {
        return remaining[0];
      }
    }
  }

  const oxygen = parseInt(calcOxygen(), 2);
  const co2 = parseInt(calcCO2(), 2);

  return oxygen * co2;
}

module.exports = {
  solveStep1,
  solveStep2,
};
