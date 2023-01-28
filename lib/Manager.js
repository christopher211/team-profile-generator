import { Employee } from "./Employee.js";
import { emailValidation } from "../utils/inputValidation.js";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

const managerQuestions = [
  {
    type: "input",
    message: "Enter name of manager",
    name: "name",
  },
  {
    type: "number",
    message: "Enter manager ID",
    name: "id",
  },
  {
    type: "email",
    message: "Enter manager email",
    name: "email",
    validate: emailValidation,
  },
  {
    type: "number",
    message: "Enter manager's office number",
    name: "office",
  },
];

function createManager(data) {
  const manager = new Manager(data.name, data.id, data.email, data.office);
  return manager;
}

export { Manager, createManager, managerQuestions };
