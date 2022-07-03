const Intern = require("../lib/Intern")

describe("Creates an Intern", () => {
    it ("Intern name gets printed", () => {
        const name = "Anfaal";
        const Emp = new Intern(name);
        expect(Emp.name).toBe(name);
    })

    it ("Intern id gets printed", () => {
        const id = "789";
        const Emp = new Intern("Anfal", id);
        expect(Emp.id).toBe(id);
    })

    it ("Intern email gets printed", () => {
        const email = "anfaal@gmail.com";
        const Emp = new Intern("Anfaal", "789", email);
        expect(Emp.email).toBe(email);
    })

    it ("Intern school gets printed", () => {
        const school = "Birmingham university";
        const Emp = new Intern("Anfaal", "789", "anfaal@gmail.com", school);
        expect(Emp.getSchool()).toBe(school);
    })
})