
    
const button = document.getElementById('button');
const inputValue = document.querySelector('.inputValue');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const key = '&appid=0e0021a41163b5dc5b4c2495efeda20a'

const data = {
    key: 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0e0021a41163b5dc5b4c2495efeda20a'
};

if (button)
{button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0e0021a41163b5dc5b4c2495efeda20a')
.then(response => response.json()) 
.then(data => console.log(data))

var nameValue= data.name
var tempValue = Math.round(data.main.temp);
var descriptionValue=date.weather[0].description

$('#city').innerHTML(city);
$('#temp').innerHTML(temp);
$('#description').innerHTML(description);
})
}
