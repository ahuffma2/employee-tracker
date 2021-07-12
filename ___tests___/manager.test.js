const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {

        it("Should return an object type of manager when created and called", () => {
            const managerObj = new Manager();

            expect(typeof managerObj).toEqual('object');
        })

        it("Should return a string, number, and string for name,id, and email respectively, when set and called", () => {
            const managerObj = new Manager('Janice', 626, 'Janice@hotmail.com');

            expect(typeof managerObj.getName()).toEqual('string');
            expect(typeof managerObj.getID()).toEqual('number');
            expect(typeof managerObj.getEmail()).toEqual('string');            
        })

        it("Should return a number when getOffice() is called", () => {
            const managerObj = new Manager('Janice',626,'Janice@hotmail.com', 502);

            expect(typeof managerObj.getOffice()).toEqual('number');
        })
    })

    describe('Functionality', () => {

        it("Should return the officeNumber when getOffice is called", () => {
            const managerObj = new Manager('Janice', 626, 'Janice@hotmail.com', 502);

            expect(managerObj.getOffice()).toEqual(502);
        })

        it("Should return the role of Manager when getRole is called", () => {
            const managerObj = new Manager('Janice', 626, 'Janice@hotmail.com', 502);

            expect(managerObj.getRole()).toEqual('Manager');
        })
    })
});