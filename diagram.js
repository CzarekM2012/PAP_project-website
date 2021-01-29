
function renderChart(labels, data) {
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                backgroundColor: "transparent",
                borderColor: "blue",
                data: data,
            }]
        },
    });
}

const urlParams = new URLSearchParams(window.location.search);
const parameterParam = urlParams.get('parameter');

parameterSelect = document.getElementById("parameters");
roomSelect = document.getElementById("rooms");
parameterSelect.onchange = function(){
    if(!["airTemperature", "humidity"].includes(this.value))
    {
        roomSelect.setAttribute("disabled", "disabled");
    }
    else
    {
        roomSelect.removeAttribute("disabled");
    }
    drawChart();
}
roomSelect.onchange = function(){drawChart();}
parameterSelect.value = parameterParam;
if(!["airTemperature", "humidity"].includes(parameterParam))
{
    roomSelect.setAttribute("disabled", "disabled");
}
else
{
    roomSelect.removeAttribute("disabled");
}
drawChart();

function getRoomColumn()
{
    switch(roomSelect.value)
    {
        case"kitchen":
            return 1;
        case"bathroom":
            return 2;
        case"room":
            return 4;
        case"cellar":
            return 3;
        case"livingRoom":
            return 5;
        case"outdoors":
            return 6;
        default:
            return -1;
    }
}

function drawChart()
{
    fileName = "/data/"
    column = -1
    switch(parameterSelect.value)
    {
        case "airTemperature":
            fileName += "air_temperature.txt";
            column = getRoomColumn();
            break;
        case "waterTemperature":
            fileName += "water_temperature.txt";
            column = 1;
            break;
        case "humidity":
            fileName += "humidity.txt";
            column = getRoomColumn();
            break;
        case "energyConsumption":
            fileName += "power.txt";
            column = 1;
            break;
        case "energyGeneration":
            fileName += "power.txt";
            column = 2;
            break;
        default:
            return;
    }
    if(column==-1){return;}
    fetch(fileName)
      .then(response => response.text())
      .then(data => {
        // Tutaj obróbka danych
        lines = data.split("\n");
        xAxisName = lines[0].split(",")[0]
        labels = [];
        values = [];
        var i;
        for(i=1; i<lines.length; i++)
        {
            splitLine = lines[i].split(",");
            labels.push(splitLine[0]);
            values.push(parseFloat(splitLine[column]));
            console.log(splitLine[0] + " " + splitLine[column]);
        }
      });
    renderChart(labels, values);
}