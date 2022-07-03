const Engineer = require("../lib/Engineer")

describe("Create an Engineer", () => {
    it ("Engineer name should get printed", () => {
        const name = "Amy";
        const Emp = new Engineer(name);
        expect(Emp.name).toBe(name);
    })

    it ("Engineer id gets printed", () => {
        const id = "987";
        const Emp = new Engineer("Amy", id);
        expect(Emp.id).toBe(id);
    })

    it ("Engineer email gets printed", () => {
        const email = "Amy123@gmail.com";
        const Emp = new Engineer("Amy", "987", email);
        expect(Emp.email).toBe(email);
    })

    
    it ("Engineer github username gets printed", () => {
        const github = "Amy123";
        const Emp = new Engineer("Amy123", "987", "Amy123@gmail.com", github);
        expect(Emp.getGithub()).toBe(github);
    })
})