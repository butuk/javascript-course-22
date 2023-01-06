document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

function convertUnderToUpper(str) {
  const rows = str.split('\n');
  for(let row of rows) {
    const [first, second] =  row.toLowerCase().trim().split('_');
    return `${first}${second.replace(second[0], second[0].toUpperCase())}`;
  }
}
function transform() {
  const text = textarea.innerText;
  console.log(convertUnderToUpper(text));
}

button.addEventListener('click', transform);
  
