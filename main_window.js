//const button = document.getElementById("airTemperatureButton");
//const waterPumpValue = document.getElementById("waterPumpValue");

function updateWaterPumpValue(value){
    // \u00a0 is a non-breaking space
    document.getElementById("waterPumpValue").textContent = "\u00a0\u00a0" + value;
}

function goToAirTemperatureDiagrams()
{
    document.location.href = "diagram.html";
    element = document.createElement("button");
    document.body.insertBefore(element, document.getElementById("rooms"));
}

function goToDiagram(room, parameter)
{
    document.location.href = "diagram.html";
    //document.getElementById("parameters").value = "waterTemperature";
}

//button.addEventListener("click", function () {alert("Klikanie działa")})


