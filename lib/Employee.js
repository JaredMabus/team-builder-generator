// Create Employee Class
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Return id of employee
    getId() {
        console.log(this.id);
        return this.id;
    };

    // Return name of employee
    getName() {
        console.log(this.name);
        return this.name;
    };

    // Return email of employee
    getEmail() {
        console.log(this.email);
        return this.email;
    };

    // Return type of role
    getRole() {
        console.log(this.constructor.name);
        return this.constructor.name;
    };

    // Return questions
    getQuestions() {
        return [{
            type: "input",
            name: "id",
            message: `Enter the id for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "name",
            message: `Enter the name for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "email",
            message: `Enter the email for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "officeNum",
            message: `Enter the office number for the ${this.constructor.name} position:`
        },
        ]
    }
}

// Create Manager Class
class Manager extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email);
        this.officeNum = officeNum;
    }
}

// Create Engineer Class
class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
    }

    // Return engineer's GitHub user name
    getGithub() {
        console.log(this.gitHub);
        return this.gitHub;
    };

    // Return questions
    getQuestions() {
        return [{
            type: "input",
            name: "id",
            message: `Enter the id for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "name",
            message: `Enter the name for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "email",
            message: `Enter the email for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "gitHub",
            message: `Enter the Github for the ${this.constructor.name} position:`
        },
        ]
    }
}

// Create Intern Class
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    // Return intern's school
    getSchool() {
        console.log(this.school);
        return this.school;
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}