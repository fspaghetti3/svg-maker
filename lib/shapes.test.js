const { circle, square, triangle } = require('./shapes');

describe('Shapes Module', () => {
  
    describe('Circle', () => {
        it('should generate a circle SVG with given color and text', () => {
            const result = circle('blue', 'CIR');
            expect(result).toContain('<circle cx="150" cy="100" r="90" fill="blue" />');
            expect(result).toContain('<text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">CIR</text>');
        });
    });

    describe('Square', () => {
        it('should generate a square SVG with given color and text', () => {
            const result = square('red', 'SQR');
            expect(result).toContain('<rect width="280" height="180" x="10" y="10" fill="red" />');
            expect(result).toContain('<text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">SQR</text>');
        });
    });

    describe('Triangle', () => {
        it('should generate a triangle SVG with given color and text', () => {
            const result = triangle('green', 'TRI');
            expect(result).toContain('<polygon points="150,10 10,190 290,190" fill="green" />');
            expect(result).toContain('<text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">TRI</text>');
        });
    });

});