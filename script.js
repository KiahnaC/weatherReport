const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0e0021a41163b5dc5b4c2495efeda20a')
.then(response => response.json())
.then(data => console.log(data))
.catach(err => alert('Please enter a valid City name!☹️'))
})