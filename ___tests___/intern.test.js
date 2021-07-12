const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {

        it("Should return an object type of intern when created and called", () => {
            const internObj = new Intern();

            expect(typeof internObj).toEqual('object');
        })

        it("Should return a string, number, and string for name,id, and email respectively, when set and called", () => {
            const internObj = new Intern('Frank', 571, 'Frank@hotmail.com');

            expect(typeof internObj.getName()).toEqual('string');
            expect(typeof internObj.getID()).toEqual('number');
            expect(typeof internObj.getEmail()).toEqual('string');            
        })

        it("Should return a string when getSchool() is called", () => {
            const internObj = new Intern('Frank',571,'Frank@hotmail.com','Kennesaw State University');

            expect(typeof internObj.getSchool()).toEqual('string');
        })
    })

    describe('Functionality', () => {

        it("Should return the school name when getSchool is called", () => {
            const internObj = new Intern('Frank', 571, 'Frank@hotmail.com','Kennesaw State University');

            expect(internObj.getSchool()).toEqual('Kennesaw State University');
        })

        it("Should return the role of Intern when getRole is called", () => {
            const internObj = new Intern('Frank', 571, 'Frank@hotmail.com','Kennesaw State University');

            expect(internObj.getRole()).toEqual('Intern');
        })
    })
});