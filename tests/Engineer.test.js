const Engineer = require("../lib/Engineer");

test("test", () => {
  const e = new Engineer("Alice", 1, "");
  expect(e.name).toBe("Alice");
});