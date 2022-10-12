const { Manager } = require("../lib/Employee");

// Create test suite for manager Class
describe("Manager Class Test", () => {
    describe("Intialize Manager class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const manager = new Manager(0, "Gladriel", "gladriel@middleEarth.com", 10)
            const { id, name, email, officeNum } = manager

            // Assert
            expect(id === manager.id
                && name === manager.name
                && email === manager.email
                && officeNum === manager.officeNum);
        })
    })
    // Test Manager Methods
    describe("Test class methods", () => {
        const manager = new Manager(0, "Gladriel", "gladriel@middleEarth.com");
        it("Check value of getName method returns correct property value", () => {
            expect(manager.getName()).toEqual(manager.name);
        });
        it("Check value of getId method returns correct property value", () => {
            expect(manager.getId()).toEqual(manager.id);
        });
        it("Check value of getEmail method returns correct property value", () => {
            expect(manager.getEmail()).toEqual(manager.email);
        });
        it("Assert getRole method returns manager", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
    })
})