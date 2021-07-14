//Class Imports
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//NPM Imports
const inquirer = require('inquirer');  
const fs = require('fs');

const htmlGenerator = require('./src/htmlGenerator');

console.log('\nAnswer the following questions to build your Team!\n');
const introQuestions = [
    {
        type: 'input',
        message: "What is your manager's name?",
        name:'name',
    },
    {
        type:'number',
        message: 'What is their Employee ID?',
        name: 'id',
    },
    {
        type:'input',
        message: 'What is their Email?',
        name: 'email',
    },
    {
        type:'number',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
    {
        type:'list',
        message: 'Please pick one of the following types of employees to add to your team',
        name: 'eChoice',
        choices: ['Engineer','Intern','No More Employees'],
    },
]
const engineerQs = [
    {
        type:'input',
        message: `What is the Engineer's name?`,
        name: 'name',
    },
    {
        type:'number',
        message: `What is their Employee ID`, 
        name: 'id',
    },
    {
        type:'input',
        message: `What is their Email? `,
        name: 'email',
    },
    {
        type:'input',
        message: `What is their Github Username`,
        name: 'github',
    },
    {
        type:'list',
        message: 'Please pick one of the following types of employees to add to your team',
        name: 'eChoice',
        choices: ['Engineer','Intern','No More Employees'],
    },
]
const internQs = [
    {
        type:'input',
        message: `What is the Intern's name?`,
        name: 'name',
    },
    {
        type:'number',
        message: `What is their Employee ID`, 
        name: 'id',
    },
    {
        type:'input',
        message: `What is their Email? `,
        name: 'email',
    },
    {
        type:'input',
        message: `Where do they go to school`,
        name: 'school',
    },
    {
        type:'list',
        message: 'Please pick one of the following types of employees to add to your team',
        name: 'eChoice',
        choices: ['Engineer','Intern','No More Employees'],
    },
]


const employees = [];
let employeeType; //I don't want this to be global but I can't find a better way to track what was last answered that still can be used by the whole function

//This launches the intro questions and loops through adding either Engineer or Intern based on user choice
prompt = question => {
    return inquirer
      .prompt(question)
      .then((answers) => {

        if(employees.length == 0)
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        else
        switch(employeeType){
            case 'Engineer':
              employees.push(new Engineer(answers.name,answers.id,answers.email,answers.github));
              break;
            case 'Intern':
              const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
              employees.push(intern);
              break;
        }

        switch(answers.eChoice){
            case 'Engineer':
                employeeType = 'Engineer';
                return prompt(engineerQs);

            case 'Intern':
                //CREATE NEW INTERN
                employeeType = 'Intern';
                return prompt(internQs);

            case 'No More Employees':

                console.log("\nFinished\n");
                populateEmployees(employees); 
            break;
        }
    })  
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   // console.log(generateMarkdown(data));
//   fs.writeFile(fileName,generateMarkdown(data),(err) =>
//   err ? console.log(err) : console.log('Success!')
//   );
// }

function populateEmployees (employees) {
    fs.writeFile('./dist/index.html',htmlGenerator(employees), (err) => 
    err ? console.log(err) : console.log('Success!')
    );
}

function init(){
    prompt(introQuestions);
}

init();