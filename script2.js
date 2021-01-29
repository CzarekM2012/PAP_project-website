const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get('room');

var room_select = document.getElementById("rooms");
room_select.value = roomParam