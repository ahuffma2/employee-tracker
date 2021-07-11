class Employee {
    constructor(first,last,ID,email,officeNumber){
    this.name = {
        first,
        last
    };

    this.ID = ID;
    this.email = email;
    this.officeNumber = officeNumber;
    }
}


module.exports = Employee;

