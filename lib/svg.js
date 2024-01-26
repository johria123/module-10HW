class svg {
    constructor(width = 300, height = 200) {
        this.width = width;
        this.height = height;
        this.element= [];
    }
    render() {
        const svgHeader = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
        const svgFooter = `</svg`;
        const innerContent = this.elements.join(``);
        return svgHeader + innerContent + svgFooter;

    }
    setText(text,color) {
        if(text.length > 3) {
            throw new error("text should not be should throw if text exceeds 3 characters");

        }
        const textElement = `<text x="${this.width / 2}" y="${this.height / 2}" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
        this.elements.push(textElement)
    }
    setShape(shape) {
        this.elemens.push(shape.render());

    }
}
class Square {
  constructor(x = 90, y = 40, width = 120, height = 120) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "black"; // default color
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

module.exports = { SVG, Square };
