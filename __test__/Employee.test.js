const { Employee } = require("../lib/Employee");

// Create test suite for Employee Class
describe("Employee", () => {
    describe("Intialize Employee class", () => {
        it("Assign arguments to class properties and test if values are equal", () => {
            // Arrange
            const employee = new Employee(0, "Gladriel", "gladriel@middleEarth.com")
            const {id, name, email} = employee

            // Assert
            expect(id === employee.id && name === employee.name && email === employee.email)
        })
    })
    describe("Test methods", () => {
        const employee = new Employee(0, "Gladriel", "gladriel@middleEarth.com");
        it("Check value of getName method returns correct property value", () => {
            expect(employee.getName()).toEqual(employee.name)
        });
        it("Check value of getId method returns correct property value", () => {
            expect(employee.getId()).toEqual(employee.id)
        });
        it("Check value of getEmail method returns correct property value", () => {
            expect(employee.getEmail()).toEqual(employee.email)
        });
        it("Assert getRole method returns Employee", () => {
            expect(employee.getRole).toEqual("Employee");
        });
    })
})