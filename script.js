

window.addEventListener('load', ()=>{

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(curentposition => {
            console.log(currentposition)
        })

function getApi (requestUrl) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
}
fetch(requestUrl)
.then (function (response) {
    return response.json();
})