const button = document.getElementById('button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const key = '&appid=0e0021a41163b5dc5b4c2495efeda20a'

const data = {
    key: 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0e0021a41163b5dc5b4c2495efeda20a'
};

if (button)
{button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0e0021a41163b5dc5b4c2495efeda20a', {
})
.then(response => response.json()) 
.then(data => console.log (data))
.catch((err) => alert('Please enter a valid city name!'))
});
}
function setPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

getWeather(latitude,longitude);
}

function getWeather(latitude,longitude){
    const api=`https://api.openweathermap.org/data/2.5/weather?$lat=${lattitude}&lon=${longitude}&appid=${key}`
}