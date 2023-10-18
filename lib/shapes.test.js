const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const { circle, square, triangle } = require('./shapes.js');

describe('SVG Shapes', () => {

  test('triangle should return SVG string', () => {
    const svg = triangle('green', '789');
    expect(svg).toContain('<polygon');
    expect(svg).toContain('fill="green"');
    expect(svg).toContain('789');
  });
});