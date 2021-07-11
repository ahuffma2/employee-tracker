const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){
        const first = String;
        const last = String;
        const ID = Number;
        const email = String;
        const officeNumber = Number;
        
        super(first,last,ID,email,officeNumber);

        this.github = gituhub;
    }
}