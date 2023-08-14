const { Circle, Square, Triangle } = require("./shapes.js");


describe("Circle", () => {
    it("Should make a blue circle", () => {
        const shape = new Circle("blue");
        expect(shape.render()).toEqual(
            '<circle cx="50" cy="50" r="50" fill="blue"/>'
        )
    })
});
describe("Square", () => {
    it("Should make a blue square", () => {
        const shape = new Square("blue");
        expect(shape.render()).toEqual(
            '<rect width="100" height="100" fill="blue"/>'
        )
    })
});
describe("Triangle", () => {
    it("Should make a blue triangle", () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual(
            '<polygon points="50,10 10,90 90,90" fill="blue"/>'
        )
    })
});