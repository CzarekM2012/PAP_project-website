const urlParams = new URLSearchParams(window.location.search);
const parameterParam = urlParams.get('parameter');

parameter_select = document.getElementById("parameters");

document.getElementById("parameters").onchange = function(){
    if(this.value != "airTemperature" && this.value != "humidity")
    {
        document.getElementById("rooms").setAttribute("disabled", "disabled");
    }
    else
    {
        document.getElementById("rooms").removeAttribute("disabled");
    }
}
parameter_select.value = parameterParam;
if(parameterParam != "airTemperature" && parameterParam != "humidity")
{
    document.getElementById("rooms").setAttribute("disabled", "disabled");
}
else
{
    document.getElementById("rooms").removeAttribute("disabled");
}