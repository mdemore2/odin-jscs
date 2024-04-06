var functions = require("./functions");

it("capitalizes", () => {
  expect(functions.capitalize("test")).toBe("TEST");
});

it("reverses", () => {
  expect(functions.reverse("test")).toBe("tset");
});

it("adds", () => {
  expect(functions.calculator.add(2, 2)).toBe(4);
});

it("subtracts", () => {
  expect(functions.calculator.subtract(2, 2)).toBe(0);
});

it("multiplies", () => {
  expect(functions.calculator.multiply(2, 0)).toBe(0);
});

it("divides", () => {
  expect(functions.calculator.divide(4, 2)).toBe(2);
});

it("ciphers", () => {
  expect(functions.cipher("TEST", 3)).toBe("WHVW");
});

it("averages", () => {
  expect(functions.analyzeArray([1, 2, 3])["average"]).toBe(2);
});

it("mins", () => {
  expect(functions.analyzeArray([1, 2, 3])["min"]).toBe(1);
});
it("maxs", () => {
  expect(functions.analyzeArray([1, 2, 3])["max"]).toBe(3);
});
it("lengths", () => {
  expect(functions.analyzeArray([1, 2, 3])["length"]).toBe(3);
});
