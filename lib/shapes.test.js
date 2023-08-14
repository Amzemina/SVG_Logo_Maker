const { Circle, Square, Triangle } = require("./shapes.js");


describe("Circle", () => {
    it("Should make a blue circle", () => {
        const shape = new Circle("blue");
        expect(shape.render()).toEqual(
            '<circle cx="50%" cy="50%" r="50" fill="blue"/>'
        )
    })
});
describe("Square", () => {
    it("Should make a blue square", () => {
        const shape = new Square("blue");
        expect(shape.render()).toEqual(
            '<rect x="100" y="50" width="100" height="100" fill="blue"/>'
        )
    })
});
describe("Triangle", () => {
    it("Should make a blue triangle", () => {
        const shape = new Triangle("blue");
        expect(shape.render()).toEqual(
            '<polygon points="150,42.26 100,121.65 200,121.65" fill="blue"/>'
        )
    })
});