const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        const first = String;
        const last = String;
        const ID = Number;
        const email = String;
        const officeNumber = Number;

        super(first,last,ID,email,officeNumber);

        this.school = school;
    }
}
