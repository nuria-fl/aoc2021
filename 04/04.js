const parseInput = require("../parseInput");

function solveStep1(input) {
  const data = parseInput(input);
  const numbers = data[0].split(",").map((num) => parseInt(num, 10));
  const rest = data.slice(1).filter((row) => !!row);
  const cards = Array.from({ length: rest.length / 5 }, () => {
    return rest.splice(0, 5).map((row) => {
      return row
        .split(" ")
        .filter((num) => !!num)
        .map((num) => {
          return {
            value: parseInt(num),
            marked: 0,
          };
        });
    });
  });

  function bingoRound(i) {
    const winnerNum = numbers[i];
    cards.forEach((card) => {
      card.forEach((row) => {
        const found = row.find(({ value }) => value === winnerNum);
        if (!found) return;
        found.marked = 1;
      });
    });
  }

  function checkForWinners() {
    const winningCard = cards.find((card) => {
      return card.find((row) => {
        const markedItems = row.filter(({ marked }) => marked === 1);
        return markedItems.length === row.length;
      });
    });
    return winningCard;
  }

  function sumUnmarkedNumbers(card) {
    return card.reduce((prev, row) => {
      const rowSum = row
        .filter(({ marked }) => !marked)
        .reduce((prev, current) => {
          return prev + current.value;
        }, 0);
      return rowSum + prev;
    }, 0);
  }

  for (let i = 0; i < numbers.length; i++) {
    bingoRound(i);
    const winningCard = checkForWinners();
    if (winningCard) {
      return sumUnmarkedNumbers(winningCard) * numbers[i];
    }
  }
}

function solveStep2(input) {}

module.exports = {
  solveStep1,
  solveStep2,
};
