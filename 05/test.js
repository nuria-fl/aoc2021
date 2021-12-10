const { solveStep1, solveStep2 } = require("./05");

it("first step should return 5", () => {
  const result = solveStep1("/05/values-example.txt");

  expect(result).toBe(5);
});

xit("second step should return 1924", () => {
  const result = solveStep2("/05/values-example.txt");

  expect(result).toBe(1924);
});
