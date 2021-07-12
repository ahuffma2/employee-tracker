const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {

        it("Should return an object type of Engineer when created and called", () => {
            const engineerObj = new Engineer();

            expect(typeof engineerObj).toEqual('object');
        })

        it("Should return a string, number, and string for name,id, and email respectively, when set and called", () => {
            const engineerObj = new Engineer('Frank', 571, 'Frank@hotmail.com');

            expect(typeof engineerObj.getName()).toEqual('string');
            expect(typeof engineerObj.getID()).toEqual('number');
            expect(typeof engineerObj.getEmail()).toEqual('string');            
        })

        it("Should return a string when getHub() is called", () => {
            const engineerObj = new Engineer('Frank',571,'Frank@hotmail.com','franken2');

            expect(typeof engineerObj.getHub()).toEqual('string');
        })
    })

    describe('Functionality', () => {

        it("Should return a github link from getHub() function", () => {
            const engineerObj = new Engineer('Frank', 571, 'Frank@hotmail.com','franken2');

            expect(engineerObj.getHub()).toContain('github.com/');
        })

        it("Should return a github that uses the user's github username", () => {
            const engineerObj = new Engineer('Frank', 571, 'Frank@hotmail.com','franken2');

            expect(engineerObj.getHub()).toEqual(`github.com/franken2`);
        })

        it("Should return 'Engineer' when getRole() is called", () => {
            const engineerObj = new Engineer('Frank', 571, 'Frank@hotmail.com');

            expect(engineerObj.getRole()).toEqual('Engineer');
        })

    })


})