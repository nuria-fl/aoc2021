const { solveStep1, solveStep2 } = require("./02");

it("first step should return 150", () => {
  const result = solveStep1("/02/values-example.txt");

  expect(result).toBe(150);
});

it("second step should return 900", () => {
  const result = solveStep2("/02/values-example.txt");

  expect(result).toBe(900);
});
