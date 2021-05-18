const Engineer = require("../lib/Engineer");

describe("testing the fields and methods of Engineer class", () => {
  test("create empty engineer object", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
  test("Engineer.getGithub() return engineer's github", () => {
    const engineer = new Engineer(
      "Bob",
      "#1234",
      "employee@gmail.com",
      "github.com/username"
    );
    expect(engineer.getGithub()).toBe("github.com/username");
  });
});
