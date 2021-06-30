const fs = require("fs"); //isnt writeToFile part of the fs module?
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const managerQuestionArr = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "ManagerName",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "ManagerId",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "ManagerEmail",
  },
  {
    type: "input",
    message: "What is the employee's office number?",
    name: "ManagerOfficeNumber",
  },
];

const engineerQuestionsArr = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "EngineerName",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "EngineerId",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "EngineerEmail",
  },
  {
    type: "input",
    message: "What is the employee's github?",
    name: "EngineerGithubUsername",
  },
];

const internQuestionsArr = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "InternName",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "InternId",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "InternEmail",
  },
  {
    type: "input",
    message: "What school did the employee Attend?",
    name: "InternSchool",
  },
];

const employeeAmountArr = [
  {
    type: "number",
    message: "How many employees do you want?",
    name: "employeeAmount",
  },
];

const classQuestionArr = [
  {
    type: "list",
    message: "What class is this employee?",
    name: "clazz",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const classDictionary = {
  Manager: managerQuestionArr,
  Engineer: engineerQuestionsArr,
  Intern: internQuestionsArr,
};
const outputArr = [];

async function askQuestions() {
  let { employeeAmount } = await inquirer.prompt(employeeAmountArr);
  for (var i = 1; i <= employeeAmount; i++) {
    let { clazz } = await inquirer.prompt(classQuestionArr);
    let answers = await inquirer.prompt(classDictionary[clazz]);
    outputArr.push({
      clazz,
      answers,
    });
  }
  console.log(outputArr);
  buildHtml(outputArr);
}

function buildHtml(Data) {
  let generateHtmlAll = ``; // build html !doc!
  for (var employeeData of Data) {
    var employee;
    switch (employeeData.clazz) {
      case "Manager":
        let { ManagerName, ManagerId, ManagerEmail, ManagerOfficeNumber } =
          employeeData.answers;
        employee = new Manager(
          ManagerName,
          ManagerId,
          ManagerEmail,
          ManagerOfficeNumber
        );
        break;
      case "Engineer":
        let {
          EngineerName,
          EngineerId,
          EngineerEmail,
          EngineerGithubUsername,
        } = employeeData.answers;
        employee = new Engineer(
          EngineerName,
          EngineerId,
          EngineerEmail,
          EngineerGithubUsername
        );
        break;

      case "Intern":
        let { InternName, InternId, InternEmail, InternOfficeNumber } =
          employeeData.answers;
        employee = new Intern(
          InternName,
          InternId,
          InternEmail,
          InternOfficeNumber
        );
        break;
    }
    employeeData = employee;
    let employeeCard = generateEmployeeCard(employee);
    generateHtmlAll += employeeCard;
  }
  fs.writeFileSync(
    "./index.html",
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./src/style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
  <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    ${generateHtmlAll}
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`
  );
  console.log(generateHtmlAll);
}

askQuestions();

function generateEmployeeCard(employee) {
  let employeeTypeInfo = "";
  switch (employee.getRole()) {
    case "Engineer":
      employeeTypeInfo = "Github Username " + employee.getGithub();
      break;
    case "Manager":
      employeeTypeInfo = "Office Number:" + employee.getOfficeNumber();
      break;
    case "Intern":
      employeeTypeInfo = "School: " + employee.getSchool();
      break;
  }

  return `

    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          <div class="card employee-card">
            <div class="card-header">
              <h2 class="card-title">${employee.getName()}</h2>
              <h3 class="card-title">
                <i class="fas fa-glasses mr-2"></i>${employee.getRole()}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID:${employee.getId()}</li>
                <li class="list-group-item">
                  Email:
                  ${employee.getEmail()}
                </li>
                <li class="list-group-item">
                  
                
                  ${employeeTypeInfo}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

`;
}
