const { solveStep1, solveStep2 } = require("./03");

it("first step should return 198", () => {
  const result = solveStep1("/03/values-example.txt");

  expect(result).toBe(198);
});

it("second step should return 230", () => {
  const result = solveStep2("/03/values-example.txt");

  expect(result).toBe(230);
});
