const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {

        it("Should return an object when called with the new keyword", () => {
            const employeeObj = new Employee();

            expect(typeof employeeObj).toEqual('object');
        });

        it("Should return a string when getName is called", () => {
            const employeeObj = new Employee('Phil');

            expect(typeof employeeObj.getName()).toEqual('string');
        });

        it("Should return a number when getID is called", () => {
            const employeeObj = new Employee('Phil',123);

            expect(typeof employeeObj.getID()).toEqual('number');
        });

        it("Should return a string when getEmail is called", () => {
            const employeeObj = new Employee('Bob', 123,'bob@gmail.com');

            expect(typeof employeeObj.getEmail()).toEqual('string');
        })

        it("Should return a name, ID, and email when called and set" , () => {
            const employeeObj = new Employee('Phil',123,'phil@gmail.com');

            expect (employeeObj.getName()).toEqual("Phil");
            expect (employeeObj.getID()).toEqual(123);
            expect (employeeObj.getEmail()).toEqual('phil@gmail.com');
        });

        it("Should return an Employee role when called", () => {
            const employeeObj = new Employee();

            expect(employeeObj.getRole()).toEqual('Employee');
        });

    });

});