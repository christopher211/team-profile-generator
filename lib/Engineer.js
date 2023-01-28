import { Employee } from "./Employee.js";
import { emailValidation } from "../utils/inputValidation.js";

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

const engineerQuestions = [
  {
    type: "input",
    message: "Enter name of engineer",
    name: "name",
  },
  {
    type: "number",
    message: "Enter engineer ID",
    name: "id",
  },
  {
    type: "email",
    message: "Enter engineer email",
    name: "email",
    validate: emailValidation,
  },
  {
    type: "input",
    message: "Enter the engineer's github username",
    name: "github",
  },
];

function createEngineer(data) {
  const engineer = new Engineer(data.name, data.id, data.email, data.github);
  return engineer;
}

export { Engineer, createEngineer, engineerQuestions };
