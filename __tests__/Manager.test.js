const Manager = require ('../lib/Manager');


describe("Creates Manager", () => {
    it ("Manager name should get printed", () => {
        const name = "Anfaal";
        const Emp = new Manager(name);
        expect(Emp.name).toBe(name);
    })

    it ("Manager id gets printed", () => {
        const id = "456";
        const Emp = new Manager("Anfaal", id);
        expect(Emp.id).toBe(id);
    })

    it ("Manager email gets printed", () => {
        const email = "anfaalali@gmail.com";
        const Emp = new Manager("Anfaal", "456", email);
        expect(Emp.email).toBe(email);
    })
})

it ("Manager github username gets printed", () => {
    const github = "aali9";
    const Emp = new Manager ("Anfaal", "456", "anfaalali@gmail.com", github);
    expect(Emp.getGithub()).toBe(github);
})