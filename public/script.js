const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');


enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit


  getResults(input.value);
  console.log(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getResults(heightRef) {
  console.log("-------")
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log()
  console.log('data from back', data);
  printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function printValues(data) {
  const parejas = data.length;
  for (let i = 0; i < parejas; i++) {
    console.log(data[i]);
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(1);
    cell1.innerHTML = parejas - i;
    cell2.innerHTML = `${data[i][0].first_name} ${data[i][0].last_name}`;
    cell3.innerHTML = `${data[i][1].first_name} ${data[i][1].last_name}`;
  }
}

