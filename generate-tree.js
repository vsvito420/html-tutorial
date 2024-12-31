const fs = require('fs');
const path = require('path');

function generateTree(dir, prefix = '', comments = {}) {
  const files = fs.readdirSync(dir);
  let output = '';
  
  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const stats = fs.statSync(filePath);
    const isDirectory = stats.isDirectory();
    const relativePath = path.relative('project', filePath).replace(/\\/g, '/');
    
    // Skip node_modules and other unnecessary directories
    if (file === 'node_modules' || file === '.git' || file === '.wrangler') {
      return;
    }

    output += prefix + (isLast ? '└── ' : '├── ') + file;
    
    // Add comment if exists
    if (comments[relativePath]) {
      output += `              # ${comments[relativePath]}`;
    }
    output += '\n';

    if (isDirectory) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      output += generateTree(filePath, newPrefix, comments);
    }
  });
  
  return output;
}

const comments = {
  'index.html': 'Landing page',
  'html.html': 'HTML tutorial page',
  'css.html': 'CSS tutorial page',
  'aufgaben.html': 'Exercises/tasks page',
  'styles.css': 'Global styles',
  'script.js': 'Main JavaScript file',
  'js': 'JavaScript modules',
  'js/tutorial-page.js': 'Tutorial page functionality',
  'js/tutorial-content.js': 'Tutorial content management',
  'js/tutorials': 'Tutorial content modules',
  'js/tutorials/html': 'HTML tutorial examples',
  'js/tutorials/css': 'CSS tutorial examples',
  'aufgaben': 'Exercise examples and solutions',
  'aufgaben/beispiele': 'Example solutions'
};

const tree = 'project/\n' + generateTree('project', '', comments);
console.log(tree);
