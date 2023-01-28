import { Manager } from "../lib/Manager.js";

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return a manager object containing an office number", () => {
      const obj = new Manager("test_name", 1, "test@email.com", 2023);

      expect(typeof obj.officeNumber).not.toMatch("undefined");
      expect(typeof obj.officeNumber).toMatch("number");
    });
  });

  describe("getOfficeNumber", () => {
    it('should return "Manager"', () => {
      const obj = new Manager("test_name", 1, "test@email.com", 2023);
      const officeNumber = 2023;

      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});
