// Create Employee Class
class Employee {
    constructor(id, name, email, officeNum){
        this.id = id
        this.name = name
        this.email = email
        this.officeNum = officeNum
    }
}

// Create Manager Class
class Manager extends Employee {
    constructor(){
        super(id, name, email, officeNum);
        this.id = id
        this.name = name
        this.email = email
        this.officeNum = officeNum
    }
}

// Create Engineer Class
class Engineer extends Employee {
    constructor(gitHub){
        super(id, name, email);
    }
}
// Create Intern Class
class Intern extends Employee {
    constructor(school){
        super(id, name, email);
    }
}

module.exports = {
    Employee, 
    Manager,
    Engineer,
    Intern
}