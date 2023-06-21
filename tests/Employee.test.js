const Employee = require("../lib/Employee");

test("test", () => {
  const e = new Employee("Alice", 1, "");
  expect(e.name).toBe("Alice");
});