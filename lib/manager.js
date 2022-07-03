const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, github) {
    // call parent constructor here:
    super(name, id, email, github);

    this.github = github;
    }

getGithub() {
    return this.github;
}

getRole() {
    return "Manager";
  }
} 

module.exports = Manager;