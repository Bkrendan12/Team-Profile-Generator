const Intern = require("../lib/Intern");

describe("testing the fields and methods of intern's class", () => {
  test("create empty intern object", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
  test("Intern.getSchool() return intern's school", () => {
    const intern = new Intern("Bob", "#1234", "employee@gmail.com", "Yale");
    expect(intern.getSchool()).toBe("Yale");
  });
});
