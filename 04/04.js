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

function solveStep2(input) {
  const data = parseInput(input);
  const numbers = data[0].split(",").map((num) => parseInt(num, 10));
  const rest = data.slice(1).filter((row) => !!row);
  const cards = Array.from({ length: rest.length / 5 }, () => {
    return {
      isWinner: false,
      card: rest.splice(0, 5).map((row) => {
        return row
          .split(" ")
          .filter((num) => !!num)
          .map((num) => {
            return {
              value: parseInt(num),
              marked: false,
            };
          });
      }),
    };
  });

  function checkCard({ isWinner, card }) {
    if (isWinner) return false;

    for (let i = 0; i < card.length; i++) {
      let count = 0;
      for (let j = 0; j < card[i].length; j++) {
        if (card[i][j].marked) count++;
      }
      if (count === 5) return true;
    }

    for (let j = 0; j < card[0].length; j++) {
      let count = 0;
      for (let i = 0; i < card.length; i++) {
        if (card[i][j].marked) count++;
      }
      if (count === 5) return true;
    }

    return false;
  }

  function bingoRound(num, card) {
    for (let i = 0; i < card.length; i++) {
      for (let j = 0; j < card[i].length; j++) {
        if (card[i][j].value === num) card[i][j].marked = true;
      }
    }
  }

  const sumUnmarkedNumbers = ({ card }) => {
    let score = 0;
    for (let i = 0; i < card.length; i++) {
      for (let j = 0; j < card[i].length; j++) {
        if (!card[i][j].marked) score += card[i][j].value;
      }
    }
    return score;
  };

  let winningResult = 0;

  for (const num of numbers) {
    cards.forEach(({ card }) => bingoRound(num, card));
    for (const winner of cards.filter(checkCard)) {
      winningResult = sumUnmarkedNumbers(winner) * num;
      winner.isWinner = true;
    }
  }

  return winningResult;
}

module.exports = {
  solveStep1,
  solveStep2,
};
