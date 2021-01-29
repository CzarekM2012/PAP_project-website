//const button = document.getElementById("airTemperatureButton");
//const waterPumpValue = document.getElementById("waterPumpValue");

ironTimestamp = 1080;

function updateWaterPumpValue(value){
    // \u00a0 is a non-breaking space
    document.getElementById("waterPumpValue").textContent = "\u00a0\u00a0" + value;
    console.log("Changed water pump value to " + value);
}

function goToAirTemperatureDiagrams()
{
    document.location.href = "diagram.html";
    element = document.createElement("button");
    document.body.insertBefore(element, document.getElementById("rooms"));
}

function delayIronRemover(){
    ironTimestamp += 15;
    document.getElementById("ironRemoverActivationTime").textContent = translateMinutesToDate(ironTimestamp);
    console.log("Changed iron remover delay to " + translateMinutesToDate(ironTimestamp));
}

function translateMinutesToDate(minutes){
    minutes = minutes % 1440;
    hour = Math.floor(minutes / 60);
    minute = minutes %60;
    if(minute == 0){
        minute = "00"
    }
    return ("" + hour + ":" + minute);
}


function setWaterPumpTemp(){    
    console.log("Currently doesn't do anything as the website isn't connected to an actual smart home environment.");
}



function goToDiagram(room, parameter)
{
    document.location.href = "diagram.html";
    //document.getElementById("parameters").value = "waterTemperature";
}

sprinklerState = 0
function switchSprinklers(){
    if(sprinklerState == 1){
        document.getElementById("sprinklersSwitch").style.background='rgb(148, 63, 63)';
        sprinklerState = 0;
    }

    else if(sprinklerState == 0){
        document.getElementById("sprinklersSwitch").style.background='green';
        sprinklerState = 1;
    }

}

//button.addEventListener("click", function () {alert("Klikanie działa")})


