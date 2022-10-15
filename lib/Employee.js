// Create Employee Class
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.icon = `<i class="fa-solid fa-user"></i>`;
    }

    // Return id of employee
    getId() {
        return this.id;
    };

    // Return name of employee
    getName() {
        return this.name;
    };

    // Return email of employee
    getEmail() {
        return this.email;
    };

    // Return type of role
    getRole() {
        return this.constructor.name;
    };

    // Return questions
    getQuestions() {
        return [{
            type: "input",
            name: "id",
            message: `${this.getRole()}'s ID?`
        },
        {
            type: "input",
            name: "name",
            message: `What's the ${this.getRole()}'s name?`
        },
        {
            type: "input",
            name: "email",
            message: `What's the ${this.getRole()}'s email?`
        },
        {
            type: "input",
            name: "officeNum",
            message: `What's ${this.getRole()}'s office number?`,
            when: () => {
                return this.getRole() === "Manager";
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: `What is the ${this.getRole()}'s GitHub user name?`,
            when: () => {
                return this.getRole() === "Engineer";
            }
        },
        {
            type: "input",
            name: "school",
            message: `What school did the ${this.getRole()} attend?`,
            when: () => {
                return this.getRole() === "Intern";
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
        this.icon = `<i class="fa-solid fa-mug-hot"></i>`;
    }

    // Return office number
    getOfficeNum() {
        return this.officeNum;
    }
}

// Create Engineer Class
class Engineer extends Employee {
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
        this.icon = `<i class="fa-solid fa-glasses"></i>`;
    }

    // Return engineer's GitHub user name
    getGithub() {
        return this.gitHub;
    };
}

// Create Intern Class
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        this.icon = `<i class="fa-solid fa-user-graduate"></i>`;

    }

    // Return intern's school
    getSchool() {
        return this.school;
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}