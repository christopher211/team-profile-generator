import { Employee } from "../lib/Employee.js";

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an employee object containing name, id, and email", () => {
      const testObj = { name: "test_name", id: 1, email: "test@email.com" };
      const obj = new Employee("test_name", 1, "test@email.com");

      expect(obj).toMatchObject(testObj);
    });
  });

  describe("getName", () => {
    it("should return the name of the employee", () => {
      const obj = new Employee("test_name", 1, "test@email.com");

      expect(typeof obj.getName()).toMatch("string");
    });
  });

  describe("getId", () => {
    it("should return the id of the employee", () => {
      const obj = new Employee("test_name", 3, "test@email.com");
      const id = 3;

      expect(obj.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return the type data of email of the employee", () => {
      const obj = new Employee("test_name", 1, "test@email.com");

      expect(typeof obj.getEmail()).toMatch("string");
    });
  });

  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const obj = new Employee("test_name", 1, "test@email.com");

      expect(obj.getRole()).toBe("Employee");
    });
  });
});
