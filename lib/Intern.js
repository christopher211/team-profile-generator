import { Employee } from "./Employee.js";
import { emailValidation } from "../utils/inputValidation.js";

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

const internQuestions = [
  {
    type: "input",
    message: "Enter name of intern",
    name: "name",
  },
  {
    type: "number",
    message: "Enter intern ID",
    name: "id",
  },
  {
    type: "email",
    message: "Enter intern email",
    name: "email",
    validate: emailValidation,
  },
  {
    type: "input",
    message: "Enter the intern's school",
    name: "school",
  },
];

function createIntern(data) {
  const intern = new Intern(data.name, data.id, data.email, data.school);
  return intern;
}

export { Intern, createIntern, internQuestions };
