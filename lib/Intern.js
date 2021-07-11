const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        const name = String;
        const ID = Number;
        const email = String;
        const officeNumber = Number;

        super(name,ID,email,officeNumber);

        this.school = school;
    }
}
