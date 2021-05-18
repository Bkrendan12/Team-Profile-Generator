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
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's office number?",
    name: "officeNumber",
  },
];

const engineerQuestionsArr = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's github?",
    name: "githubUsername",
  },
];

const internQuestionsArr = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What school did the employee Attend?",
    name: "school",
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
  for (var i = 1; i <= 5; i++) {
    let { clazz } = await inquirer.prompt(classQuestionArr);
    let answers = await inquirer.prompt(classDictionary[clazz]);
    outputArr.push({
      clazz,
      answers,
    });
  }
  buildHtml(outputArr);
}

function buildHtml(data) {
  for (var employeeData of Data) {
    var employee;
    switch (employeeData.clazz) {
      case "Manager":
        let { name, id, email, officeNumber } = employeeData.answers;
        employee = new Manager(name, id, email, officeNumber);
        break;
      case "Engineer":
        let { name, id, email, githubUsername } = employeeData.answers;
        employee = new Engineer(name, id, email, githubUsername);
        break;

      case "Intern":
        let { name, id, email, officeNumber } = employeeData.answers;
        employee = new Intern(name, id, email, school);
        break;
    }
  }
}

askQuestions();

const appendData = (data) => {
  fs.writeFile("./lib/index.html", (err, data) => {
    if (err) {
      console.log(err);
    }
  });
};

function appendHtml() {
  return ` 

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Team-Profile-Generator</title>
  </head>
  <body>
    <h1>My Team!</h1>

    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-title">${role()}</h5>
          <div class="col info">
            <div class="row info-text">${this.id}</div>
            <div class="row info-text">${this.email}</div>
            <div class="row info-text">${this.officeNumber}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-title">${this.role()}</h5>
          <div class="col info">
            <div class="row info-text">${this.id}</div>
            <div class="row info-text">${this.email}</div>
            <div class="row info-text">${this.github}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-title">${this.role()}</h5>
          <div class="col info">
            <div class="row info-text">${this.id}</div>
            <div class="row info-text">${this.email}</div>
            <div class="row info-text">${this.github}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-title">${this.role()}</h5>
          <div class="col info">
            <div class="row info-text">${this.id}</div>
            <div class="row info-text">${this.email}</div>
            <div class="row info-text">${this.github}</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h5 class="card-title">${this.role()}</h5>
          <div class="col info">
            <div class="row info-text">${this.id}</div>
            <div class="row info-text">${this.email}</div>
            <div class="row info-text">${this.school}</div>
          </div>
        </div>
      </div>
    </div>

    <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>

`;
}

// function writeToFile(fileName, this) {
//   fs.writeFileSync(fileName, generateMarkdown(data));
// } // I want to say we dont need this since we only have one index.js file so we arent using any other .js files

function init() {
  inquirer.prompt(managerQuestionArr).then(function (data) {
    writeToFile("index.html", data);
  });
}

function init() {
  inquirer.prompt(engineerOneQuestionsArr).then(function (data) {
    writeToFile("index.html", data);
  });
}

function init() {
  inquirer.prompt(engineerTwoQuestionsArr).then(function (data) {
    writeToFile("index.html", data);
  });
}

function init() {
  inquirer.prompt(engineerThreeQuestionsArr).then(function (data) {
    writeToFile("index.html", data);
  });
}

function init() {
  inquirer.prompt(internQuestionsArr).then(function (data) {
    writeToFile("index.html", data);
  });
}

appendData();
