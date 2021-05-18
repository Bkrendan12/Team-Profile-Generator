const Manager = require("../lib/Manager");

describe("testing the fields and methods of manager's class", () => {
  test("create empty manager object", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
  test("Manager.getOfficeNumber() return manager's school", () => {
    const manager = new Manager("Bob", "1234", "employee@gmail.com", "12");
    expect(manager.getOfficeNumber()).toBe("12");
  });
});
