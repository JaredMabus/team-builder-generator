const { Intern } = require("../lib/Employee");

// Create test suite for intern Class
describe("Intern Class Test", () => {
    describe("Intialize intern class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const intern = new Intern(0, "Pippin ", "pippin@middleEarth.com",);
            const { id, name, email, school } = intern;

            // Assert
            expect(id === intern.id
                && name === intern.name
                && email === intern.email
                && school === intern.school);
        })
    })
    describe("Test class methods", () => {
        const intern = new Intern(0, "Pippin", "pippin@middleEarth.com");
        it("Check value of getName method returns correct property value", () => {
            expect(intern.getName()).toEqual(intern.name);
        });
        it("Check value of getId method returns correct property value", () => {
            expect(intern.getId()).toEqual(intern.id);
        });
        it("Check value of getEmail method returns correct property value", () => {
            expect(intern.getEmail()).toEqual(intern.email);
        });
        it("Assert getRole method returns intern", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
        it("Assert getGithub method returns correct property value", () => {
            expect(intern.getSchool()).toEqual(intern.gitHub);
        });

    })
})