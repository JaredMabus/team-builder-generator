const { Manager } = require("../lib/Employee");

// Create test suite for Employee Class
describe("Employee", () => {
    describe("Intialize Employee class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const employee = new Manager(0, "Gladriel", "gladriel@middleEarth.com", 10)
            const {id, name, email} = employee

            // Assert
            expect(id === employee.id && name === employee.name && email === employee.email)
        })
    })
})