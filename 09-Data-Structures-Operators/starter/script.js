'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');


let galochka = ' ';
function convertUnderToUpper(str) {
  const rows = str.split('\n');
  for(let [i, row] of rows.entries()) {
    const [first, second] =  row.toLowerCase().trim().split('_');
    const result = first + second.replace(second[0], second[0].toUpperCase());
    console.log(result.padEnd(20) + '✅'.repeat(i+1));
  }
}

function transform() {
  const text = textarea.value;
  convertUnderToUpper(text);
}

button.addEventListener('click', transform);
  
