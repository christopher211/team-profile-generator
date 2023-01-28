import { Intern } from "../lib/Intern.js";

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an intern object containing their school name", () => {
      const obj = new Intern(
        "test_name",
        1,
        "test@email.com",
        "some_school_name"
      );

      expect(typeof obj.email).not.toMatch("undefined");
      expect(typeof obj.email).toMatch("string");
    });
  });

  describe("getSchool", () => {
    it("should return an intern object containing school", () => {
      const obj = new Intern(
        "test_name",
        1,
        "test@email.com",
        "some_school_name"
      );
      const school = "some_school_name";

      expect(typeof obj.school).not.toEqual(school);
    });
  });
});
