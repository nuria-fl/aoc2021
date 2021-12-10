const { solveStep1, solveStep2 } = require("./04");

it("first step should return 4512", () => {
  const result = solveStep1("/04/values-example.txt");

  expect(result).toBe(4512);
});

it("second step should return 1924", () => {
  const result = solveStep2("/04/values-example.txt");

  expect(result).toBe(1924);
});
