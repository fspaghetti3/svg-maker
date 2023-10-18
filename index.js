(async () => {

    const fs = require('fs')
    const path = require('path')
    const { default: { prompt } } = await import('inquirer');
    const shapesModule = await import('./lib/shapes.js');
    const { circle, square, triangle } = shapesModule;

    function saveToFile(filename, content) {
      const outputPath = path.join(__dirname, '/examples', filename);
      fs.writeFile(outputPath, content, (err) => {
        if (err) {
          console.error(`Error writing to file: ${err} `)
        } else {
          console.log(`Generated ${filename}!`)
        }
      })
    }
  
    function main() {
      const questions = [
        {
          type: 'list',
          name: 'shape',
          message: 'Which shape do you want?',
          choices: ['circle', 'square', 'triangle']
        },
        {
          type: 'input',
          name: 'color',
          message: 'What color do you want for your shape?',
          default: 'green'
        },
        {
          type: 'input',
          name: 'text',
          message: 'What text do you want to display? 3 character limit.',
          default: 'TXT'
        },
      ];
  
      prompt(questions).then(answers => {
        const { shape, color, text } = answers;
        let svg;
  
        switch(shape) {
          case 'circle':
            svg = circle(color, text);
            break;
          case 'square':
            svg = square(color, text);
            break;
          case 'triangle':
            svg = triangle(color, text);
            break;
        }
  
        saveToFile('logo.svg', svg)
      });
    }
  
    main();
  })();