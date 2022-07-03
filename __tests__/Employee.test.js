const Employee = require ('../lib/Employee');


describe("Creates an Employee", () => {
    it ("Employee name should get printed", () => {
        const name = "Anfaal";
        const Emp = new Employee(name);
        expect(Emp.name).toBe(name);
    })

    it ("Employee id gets printed", () => {
        const id = "123";
        const Emp = new Employee("Anfaal", id);
        expect(Emp.id).toBe(id);
    })

    it ("Employee email gets printed", () => {
        const email = "anfalali@gmail.com";
        const Emp = new Employee("Anfaal", "123", email);
        expect(Emp.email).toBe(email);
    })
})