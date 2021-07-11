const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email) //THESE WILL BE DEFINED BY INQUIRER
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager';
    }

    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager;