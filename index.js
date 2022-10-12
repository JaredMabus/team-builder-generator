const inquirer = require("inquirer");
const fs = require("fs");
const Team = require("./lib/Team");
const { Employee, Manager, Engineer, Intern } = require("./lib/Employee");

// Prompt user for employee info
const getEmployeeInfo = async (employeeType) => {
    // Dynamically choose a class
    const classOptions = {
        'Manager': Manager,
        'Engineer': Engineer,
        'Intern': Intern
    };

    // Initalize class without args using classOptions object 
    const employee = new classOptions[employeeType]();

    // TODO: Think of way to have each class have an additional question for officeNum, gitHub, and school
    // Get employee info from prompts and load questions from class object
    const employeeInfo = await inquirer.prompt(employee.getQuestions());

    // Assign each key value pair to the Class properties, else log an error if key doesn't exist
    Object.entries(employeeInfo).forEach((item) => Object.hasOwn(employee, item[0])
        ? employee[item[0]] = item[1]
        : console.log(`Employee Class does not contain key ${item[0]}`));

    // Return employee object to be added to Team Class
    return employee;
}


// Add another team member
const addTeamMember = async (team) => {
    let addMember = await inquirer.prompt([
        {
            type: "input",
            name: "value",
            choices: ["Engineer", "Intern", "Finished Building Team"]
        }
    ]);

    if (addMember !== "Finished Building Team") {
        const newMember = await getEmployeeInfo(addMember.value);
        team.addTeamMember(newMember);
        addTeamMember();
    } else {
        console.log(addMember.value);
    };
    return team;
}


// Initialize app
const init = async () => {
    const team = new Team("New Team");
    const manager = await getEmployeeInfo("Manager");
    team.addMember(manager);
    console.log(team);
}

init()