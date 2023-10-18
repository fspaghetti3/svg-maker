const circle = (color, text) => `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="90" fill="${color}" />
  <text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>
`;

const square = (color, text) => `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="180" x="10" y="10" fill="${color}" />
  <text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>
`;

const triangle = (color, text) => `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,10 10,190 290,190" fill="${color}" />
  <text x="150" y="100" font-family="Arial" font-size="50" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>
`;

module.exports = {
  circle,
  square,
  triangle
};