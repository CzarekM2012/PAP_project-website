const button = document.getElementById("airTemperatureButton");
const waterPumpValue = document.getElementById("waterPumpValue");

function updateWaterPumpValue(value){
    // \u00a0 is a non-breaking space
    document.getElementById("waterPumpValue").textContent = "\u00a0\u00a0" + value;
}

button.addEventListener("click", function () {alert("Klikanie działa")})


