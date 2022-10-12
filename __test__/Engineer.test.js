const { Engineer } = require("../lib/Employee");

// Create test suite for engineer Class
describe("Engineer Class Test", () => {
    describe("Intialize Engineer class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const engineer = new Engineer(0, "Gollum ", "gollum@middleEarth.com",);
            const { id, name, email, gitHub } = engineer;

            // Assert
            expect(id === engineer.id
                && name === engineer.name
                && email === engineer.email
                && gitHub === engineer.gitHub);
        })
    })
    describe("Test class methods", () => {
        const engineer = new Engineer(0, "Gollum", "gollum@middleEarth.com");
        it("Check value of getName method returns correct property value", () => {
            expect(engineer.getName()).toEqual(engineer.name);
        });
        it("Check value of getId method returns correct property value", () => {
            expect(engineer.getId()).toEqual(engineer.id);
        });
        it("Check value of getEmail method returns correct property value", () => {
            expect(engineer.getEmail()).toEqual(engineer.email);
        });
        it("Assert getRole method returns engineer", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
        it("Assert getGithub method returns correct property value", () => {
            expect(engineer.getGithub()).toEqual(engineer.gitHub);
        });

    })
})