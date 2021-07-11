const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){
        const name = String;
        const ID = Number;
        const email = String;
        const officeNumber = Number;
        
        super(name,ID,email,officeNumber);

        this.github = github;
    }
}