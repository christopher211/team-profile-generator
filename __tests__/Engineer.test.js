import { Engineer } from "../lib/Engineer.js";

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an engineer object containing their github username", () => {
      const obj = new Engineer("test_name", 1, "test@email.com", "github");

      expect(typeof obj.email).not.toMatch("undefined");
      expect(typeof obj.email).toMatch("string");
    });
  });

  describe("getGithub", () => {
    it("should return the engineers github username", () => {
      const obj = new Engineer(
        "test_name",
        1,
        "test@email.com",
        "some_github_user_name"
      );
      const github = "some_github_user_name";

      expect(obj.getGithub()).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return the role of the engineer", () => {
      const obj = new Engineer("test_name", 1, "test@email.com", "github");

      expect(obj.getRole()).toBe("Engineer");
    });
  });
});
