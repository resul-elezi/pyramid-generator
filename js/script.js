const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }else {
    rows.push(padRow(i, count));
  }
}


const numbers = [1, 2, 3];
console.log(numbers);


let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

document.getElementById("output").innerHTML = result;