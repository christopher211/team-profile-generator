import inquirer from "inquirer";
import { managerQuestions, createManager } from "../lib/Manager.js";
import { engineerQuestions, createEngineer } from "../lib/Engineer.js";
import { createIntern, internQuestions } from "../lib/Intern.js";
import htmlRenderer from "./htmlRenderer.js";

const employees = [];
let complete = false;

async function generateQuestions() {
  const data = await inquirer.prompt(managerQuestions);
  employees.push(createManager(data));
  process();
}

async function process() {
  if (!complete) {
    const response = await inquirer.prompt([
      {
        type: "list",
        message: "Add an engineer, intern, or complete your team",
        choices: ["Engineer", "Intern", ">>Complete"],
        name: "select",
      },
    ]);

    if (response.select === "Engineer") {
      const engineerData = await inquirer.prompt(engineerQuestions);
      employees.push(createEngineer(engineerData));
    } else if (response.select === "Intern") {
      const internData = await inquirer.prompt(internQuestions);
      employees.push(createIntern(internData));
    } else {
      complete = true;
    }
    process();
  } else {
    htmlRenderer(employees);
  }
}

export default generateQuestions;
