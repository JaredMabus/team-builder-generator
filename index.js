const inquirer = require("inquirer");
const fs = require("fs");
const Team = require("./lib/Team");
const { Manager, Engineer, Intern } = require("./lib/Employee");

// Prompt user for employee info
const getEmployeeInfo = async (employeeRole) => {
    // Dynamically choose a class
    const classOptions = {
        'Manager': Manager,
        'Engineer': Engineer,
        'Intern': Intern
    };

    // Initalize class without args using classOptions object 
    const employee = new classOptions[employeeRole]();

    // Get employee info from prompts and load questions from class object
    const employeeInfo = await inquirer.prompt(employee.getQuestions());

    // Assign each key value pair to the Class properties, else log an error if key doesn't exist
    Object.entries(employeeInfo).forEach((item) => Object.hasOwn(employee, item[0])
        ? employee[item[0]] = item[1]
        : console.log(`Employee Class does not contain key ${item[0]}`));

    // Return employee object to be added to Team Class
    return employee;
}

// Prompt user if they want to add another team member
const addTeamMember = async (team) => {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "value",
            message: "Add another team member?",
            choices: ["Engineer", "Intern", "Finished Building Team"]
        }
    ]);

    // Return false if finished building team
    if (answer.value === "Finished Building Team") {
        console.log(answer.value);
        return false;
    };

    // Pass employee role to get employee info 
    const newMember = await getEmployeeInfo(answer.value);

    // Add member to Team and return team object
    team.addMember(newMember);
    return team;
}

// Initialize app
const init = async () => {
    // Instantiate new Team object
    let team = new Team("My Team");

    // Get manager info and add to team
    const manager = await getEmployeeInfo("Manager");
    team.addMember(manager);

    // Add other team members
    let addNewMember = await addTeamMember(team);

    while (addNewMember !== false) {
        addNewMember = await addTeamMember(team);
        if (addNewMember !== false) {
            team = addNewMember;
        } else {
            break;
        }
    };

    // Generate HTML and CSS
    team.generateHTML()
}

init()