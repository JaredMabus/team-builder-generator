const Team = require("../lib/Team");
const { Employee } = require("../lib/Employee");

// Create test suite for Employee Class
describe("Team Class Test", () => {
    describe("Intialize Team class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const team = new Team("New Team");
            const { name } = team;

            // Assert
            expect(name).toEqual(team.name);
        })
    })
    describe("Test class methods", () => {
        const team = new Team("New Team");
        const employee = new Employee(0, "Gandalf", "gandalf@middleEarth.com");

        it("Check length of team members array after addMember method adds a new member", () => {
            team.addMember(employee);
            expect(team.members.length).toEqual(1);
            expect(team.members).toBeInstanceOf(Array);
        });

    })
})