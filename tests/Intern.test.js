const Intern = require("../lib/Intern");

test("test", () => {
  const e = new Intern("Alice", 1, "");
  expect(e.name).toBe("Alice");
});