var functions = require("./functions");

it("capitalizes", () => {
  expect(functions.capitalize("test")).toBe("TEST");
});

it("reverses", () => {
  expect(functions.reverse("test")).toBe("tset");
});
