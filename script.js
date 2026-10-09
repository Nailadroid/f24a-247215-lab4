var items = [];

function renderTable() {
  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  var total = 0;
  var lastNote = "";
  var lastPriceText = "";
  var lastPriceNum = NaN;
  var lastLine = NaN;

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

    if (!isNaN(items[i].line)) {
      total += items[i].line;
    }

    if (i === items.length - 1) {
      lastNote = items[i].note;
      lastPriceText = items[i].price;
      lastPriceNum = Number(items[i].price);
      lastLine = items[i].line;
    }
  }

  var totalDiv = document.getElementById("totalOutput");
  totalDiv.innerHTML = "";

  if (items.length > 0) {
    var pTotal = document.createElement("p");
    pTotal.textContent = "Total: " + total;
    totalDiv.appendChild(pTotal);

    var pKindTotal = document.createElement("p");
    pKindTotal.textContent = "Kind of total: " + typeof total;
    totalDiv.appendChild(pKindTotal);

    var pKindNote = document.createElement("p");
    pKindNote.textContent = "Kind of Note: " + typeof lastNote;
    totalDiv.appendChild(pKindNote);

    var pMatch = document.createElement("p");
    pMatch.textContent = "Price text matches price number: " + (lastPriceText == lastPriceNum);
    totalDiv.appendChild(pMatch);

    var pSameKind = document.createElement("p");
    pSameKind.textContent = "Price text and price number same kind: " + (lastPriceText === lastPriceNum);
    totalDiv.appendChild(pSameKind);

    if (isNaN(lastLine)) {
      var pKindLine = document.createElement("p");
      pKindLine.textContent = "Kind of Line: " + typeof lastLine;
      totalDiv.appendChild(pKindLine);
    }
  }
}

document.getElementById("addBtn").onclick = function() {
  var itemVal = document.getElementById("itemInput").value;
  var qtyVal = document.getElementById("quantityInput").value;
  var priceVal = document.getElementById("priceInput").value;

  var qtyNum = Number(qtyVal);
  var priceNum = Number(priceVal);

  var lineVal = qtyNum * priceNum;

  if (priceVal.trim() === "" || isNaN(priceNum)) {
    lineVal = NaN;
  }

  var newItem = {};

  if (itemVal.trim() !== "") {
    newItem.item = itemVal;
  }

  newItem.quantity = qtyVal;
  newItem.price = priceVal;
  newItem.line = lineVal;
  newItem.note = priceVal + qtyVal;

  items.push(newItem);

  renderTable();

  document.getElementById("itemInput").value = "";
  document.getElementById("quantityInput").value = "";
  document.getElementById("priceInput").value = "";
};