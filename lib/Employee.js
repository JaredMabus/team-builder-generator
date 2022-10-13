// Create Employee Class
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Return id of employee
    getId() {
        // console.log(this.id);
        return this.id;
    };

    // Return name of employee
    getName() {
        // console.log(this.name);
        return this.name;
    };

    // Return email of employee
    getEmail() {
        // console.log(this.email);
        return this.email;
    };

    // Return type of role
    getRole() {
        // console.log(this.constructor.name);
        return this.constructor.name;
    };

    // Return questions
    getQuestions(employeeRole) {
        return [{
            type: "input",
            name: "id",
            message: `Enter the id for the ${this.constructor.name} position:`
        },
        {
            type: "input",
            name: "name",
            message: `What's the employee's name?`
        },
        {
            type: "input",
            name: "email",
            message: `What's the employee's email?`
        },
        {
            type: "input",
            name: "officeNum",
            message: `Enter the office number for the ${this.constructor.name} position:`,
            when: () => {
                // console.log(this.constructor.name)
                return this.constructor.name === "Manager"
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: `What is the ${this.constructor.name}'s GitHub user name?`,
            when: () => {
                // console.log(this.constructor.name)
                return this.constructor.name === "Engineer"
            }
        },
        {
            type: "input",
            name: "school",
            message: `What school did the ${this.constructor.name} attend?`,
            when: () => {
                // console.log(this.constructor.name)
                return this.constructor.name === "Intern"
            }
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