var items = [];
function renderTable() {
  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    var row = document.createElement("tr");

    var cellItem = document.createElement("td");
    cellItem.textContent = items[i].item;
    row.appendChild(cellItem);

    var cellQty = document.createElement("td");
    cellQty.textContent = items[i].quantity;
    row.appendChild(cellQty);

    var cellPrice = document.createElement("td");
    cellPrice.textContent = items[i].price;
    row.appendChild(cellPrice);

    var cellLine = document.createElement("td");
    cellLine.textContent = items[i].line;
    row.appendChild(cellLine);

    var cellNote = document.createElement("td");
    cellNote.textContent = items[i].note;
    row.appendChild(cellNote);

    tbody.appendChild(row);
  }
}

document.getElementById("addBtn").onclick = function() {
  var itemVal = document.getElementById("itemInput").value;
  var qtyVal = document.getElementById("quantityInput").value;
  var priceVal = document.getElementById("priceInput").value;

  var qtyNum = Number(qtyVal);
  var priceNum = Number(priceVal);

  var lineVal = qtyNum * priceNum;

  var newItem = {
    item: itemVal,
    quantity: qtyVal,
    price: priceVal,
    line: lineVal,
    note: priceVal + qtyVal
  };

  items.push(newItem);

  renderTable();

  document.getElementById("itemInput").value = "";
  document.getElementById("quantityInput").value = "";
  document.getElementById("priceInput").value = "";
};