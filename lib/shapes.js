// Shape class utilizes constructor to define what it means to be a shape
class Shape {
    color;
    constructor(color) {
        this.color = color
    }
    render() {
        throw "implemented in sub classes"
    }

}

//Inherits properties from Shape class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="50" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,42.26 100,121.65 200,121.65" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle };