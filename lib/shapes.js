// Shape class utilizes constructor to define what it means to be a shape
class Shape {
    color;
    constructor(color) {
        this.color = color
    }
}

//Inherits properties defined in Shape class
class Circle extends Shape {
    render() {
       return `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
      return  `<rect width="100" height="100" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50,10 10,90 90,90" fill="${this.color}"/>`
    }
}

module.exports = Shape;