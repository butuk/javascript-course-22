'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');


let galochka = ' ';
function convertUnderToUpper(str) {
  const rows = str.split('\n');
  let arr = []; 
  rows.forEach(element => arr.push(element.length));
  let maxLength = Math.max(...arr);
  for(let row of rows) {
    galochka += '✅';
    const [first, second] =  row.toLowerCase().trim().split('_');
    const result = first + second.replace(second[0], second[0].toUpperCase());
    console.log(result.padEnd(maxLength+ galochka);
  }
}

function transform() {
  const text = textarea.value;
  convertUnderToUpper(text);
}

button.addEventListener('click', transform);
  
