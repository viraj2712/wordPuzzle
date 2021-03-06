let id = 1;

const generateTable = function() {
  let table = document.getElementById('board');
  for (let i = 0; i < 7; i++) {
    generateRow(table);
  }
  return table;
}

const generateRow = function(table) {
  let row = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    let cell = document.createElement('td');
    cell.id = id++;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

const fillBoard = function() {
  let usedLetters = [];
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 1; i < 50; i++) {
    let index = Math.floor(Math.random() * letters.length);
    if (!usedLetters.includes(letters[index]) || usedLetters.length > 25) {
      document.getElementById(i).innerText = letters[index];
      usedLetters.push(letters[index]);
      i++;
    }
    i--;
  }
}

const generateWordTable = function() {
  let table = document.getElementById('words');
  for (let i = 0; i < 10; i++) {
    generateWordRow(table, i);
  }
  return table;
}

const generateWordRow = function(table, index) {
  let row = document.createElement('tr');
  let cell = document.createElement('td');
  row.id = index;
  cell.id = index;
  table.appendChild(row);
  row.appendChild(cell);
}

const fillWordTable = function(wordList) {
  let table = document.getElementById('words');
  for (let i = 0; i < wordList.length; i++) {
    table.getElementsByTagName('td')[i].innerText = wordList[i];
  }
}
