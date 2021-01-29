
function renderChart() {
    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            datasets: [{
                label: 'This week',
                backgroundColor: "transparent",
                borderColor: "blue",
                data: [20000, 14000, 12000, 15000, 18000, 19000, 22000],
            }]
        },
    });
}

const urlParams = new URLSearchParams(window.location.search);
const parameterParam = urlParams.get('parameter');

parameterSelect = document.getElementById("parameters");
roomSelect = document.getElementById("rooms");
parameterSelect.onchange = function(){
    if(this.value != "airTemperature" && this.value != "humidity")
    {
        roomSelect.setAttribute("disabled", "disabled");
    }
    else
    {
        roomSelect.removeAttribute("disabled");
    }
    renderChart();
}
roomSelect.onchange = function(){renderChart();}
parameterSelect.value = parameterParam;
if(parameterParam in ["airTemperature", "humidity"])
{
    roomSelect.setAttribute("disabled", "disabled");
}
else
{
    roomSelect.removeAttribute("disabled");
}
renderChart();


fileName = "/data/power.txt"

fetch(fileName)
  .then(response => response.text())
  .then(data => {
    // Tutaj obróbka danych
    lines = data.split("\n");
    xAxisName = lines[0].split(",")[0]
    //values = [data.split][]

    console.log(xAxisName);

  });