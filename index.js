//Class Imports
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//NPM Imports
const inquirer = require('inquirer');  
const fs = require('fs');

console.log('Answer the following questions to build your Team! ')
const introQuestions = [
    {
        type: 'input',
        message: "What is your manager's name?",
        name:'managerName',
    },
    {
        type:'number',
        message: 'What is your Employee ID?',
        name: 'managerID',
    },
    {
        type:'input',
        message: 'What is your Email?',
        name: 'managerEmail',
    },
    {
        type:'number',
        message: 'What is your office number?',
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
]

// {
//     type:'',
//     message: '',
//     name: '',
// },


///PROBABLY WILL CHANGE THE WAY THIS WORKS 
 inquirer
    .prompt(introQuestions)
    .then((response) => {
        // SET MANAGER VARIABLES HERE
        switch(response.eChoice) {
            case 'Engineer':
                //Do Engineer Stuffs
                console.log(`You are adding a ${response.eChoice} to the team`);   //TEST FOR THIS 
                inquirer.prompt(engineerQs)
                break;

            case 'Intern':
                //Do Intern Stuffs
                console.log(response.eChoice);  //TEST FOR THIS

                break;

            case 'No More Employees':
                //Do Finalize Stuffs
                console.log(response.eChoice);  //TEST FOR THIS

                break;
        }
    })



