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

let idList = [];

//These validators are up here because Hoisting doesn't seem to apply. 
nonEmptyValidator = (input) => {
    return (input == '') ? 'Must have a value entered' : true;
}
idValidator = (input) => {
    return (!/[0-9]/i.test(input)) ? 'Employee ID must contain a number'
        :idList.includes(input) ? 'ID Already Exists. Make sure your ID is correct'
        : true;
}
emailValidator = (input) => {
    return (!/[@]/i.test(input)) ? 'Must be an Email Address' : true;
}

const introQuestions = [
    {
        type: 'input',
        message: "What is your manager's name?",
        name:'name',
        validate: nonEmptyValidator
    },
    {
        type:'input',
        message: 'What is their Employee ID?',
        name: 'id',
        validate: idValidator
    },
    {
        type:'input',
        message: 'What is their Email?',
        name: 'email',
        validate: emailValidator
    },
    {
        type:'input',
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
        validate: nonEmptyValidator
    },
    {
        type:'input',
        message: `What is their Employee ID`, 
        name: 'id',
        validate: idValidator
    },
    {
        type:'input',
        message: `What is their Email? `,
        name: 'email',
        validate: emailValidator
    },
    {
        type:'input',
        message: `What is their Github Username`,
        name: 'github',
        validate: nonEmptyValidator
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
        validate: nonEmptyValidator
    },
    {
        type:'input',
        message: `What is their Employee ID`, 
        name: 'id',
        validate: idValidator
    },
    {
        type:'input',
        message: `What is their Email? `,
        name: 'email',
        validate: emailValidator
    },
    {
        type:'input',
        message: `Where do they go to school`,
        name: 'school',
        validate: nonEmptyValidator
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

        if(employees.length == 0){
            employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            idList.push(employees[0].getID())
        }
        else
        switch(employeeType){
            case 'Engineer':
              employees.push(new Engineer(answers.name,answers.id,answers.email,answers.github));
              idList.push(answers.id)
              break;
            case 'Intern':
              employees.push( new Intern(answers.name,answers.id,answers.email,answers.school));
              idList.push(answers.id)
              break;
        }
        switch(answers.eChoice){
            case 'Engineer':
                employeeType = 'Engineer';
                return prompt(engineerQs);

            case 'Intern':
                employeeType = 'Intern';
                return prompt(internQs);

            case 'No More Employees':
                console.log("\nPassing to HTML-Generator\n");
                populateEmployees(employees); 
            break;
        }
    })  
}

function populateEmployees (employees) {
    fs.writeFile('./dist/index.html',htmlGenerator(employees), (err) => 
    err ? console.log(err) : console.log('Success!')
    );
}
function init(){
    prompt(introQuestions);
}

init();