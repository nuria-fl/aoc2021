const { solveStep1, solveStep2 } = require("./06");

it("first step after 18 days should produce 26", () => {
  const result = solveStep1("/06/values-example.txt", 18);

  expect(result).toBe(26);
});

it("first step after 80 days should produce 5934", () => {
  const result = solveStep1("/06/values-example.txt", 80);

  expect(result).toBe(5934);
});

it("second step should return 12", () => {
  const result = solveStep1("/06/values-example.txt", 256);

  expect(result).toBe(26984457539);
});
