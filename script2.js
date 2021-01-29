const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get('room');

var room_select = document.getElementById("rooms");
room_select.value = roomParam

fetch('data/power.txt')
  .then(response => response.text())
  .then(text => console.log(text))