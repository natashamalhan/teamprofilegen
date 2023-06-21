const Manager = require("../lib/Manager");

test("test", () => {
  const e = new Manager("Alice", 1, "");
  expect(e.name).toBe("Alice");
});