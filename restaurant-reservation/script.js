/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:Joseph Sarno
  Date:06/30/24
  Filename:restaurant-reservation
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: false },
  { tableNumber: 5, capacity: 2, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === tableNumber);
  if (table) {
    if (!table.isReserved) {
      table.isReserved = true;
      setTimeout(() => {
        callback(`Table ${tableNumber} reserved successfully!`);
      }, time);
    } else {
      callback(`Error: Table ${tableNumber} is already reserved.`);
    }
  } else {
    callback(`Error: Table ${tableNumber} does not exist.`);
  }
}

// When the form is submitted, call the reserveTable function
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const tableNumber = parseInt(document.getElementById("tableNumber").value);
  const messageElement = document.getElementById("message");

  reserveTable(tableNumber, function (message) {
    messageElement.textContent = message;
  }, 2000);
});
