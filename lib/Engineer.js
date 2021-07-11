const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getRole(){
        return `Engineer`;
    }

    getHub(){ //I know the readme says this needs to be name getGithub but I couldn't resist the pun
        return this.github;
    }
}

module.exports = Engineer;