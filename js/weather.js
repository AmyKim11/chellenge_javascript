const API_KEY = "0d632e0f252fbd9e492d488c78a57484";

function onGeoOK(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   // console.log("You live in", lat, lng);
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` //&units=metric는 화씨온도를 섭씨온도로 값을 바꾼것. 자세한건 API사이트 참조.
   // console.log(url);
   fetch(url).then(response => response.json()).then(data => {
      // console.log(data.name, data.weather[0].main);
      let weatherIcons = {
         '01' : 'fa-solid fa-sun',
         '02' : 'fa-solid fa-cloud-sun',
         '03' : 'fa-solid fa-cloud',
         '04' : 'fa-solid fa-cloud-meatball',
         '09' : 'fa-solid fa-cloud-sun-rain',
         '10' : 'fa-solid fa-cloud-showers-heavy',
         '11' : 'fa-solid fa-poo-storm',
         '13' : 'fa-solid fa-snowflake',
         '50' : 'fa-solid fa-smog'
       };

      const icon = (data.weather[0].icon).substr(0,2);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const weatherIcon = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
      weatherIcon.innerHTML =`<i class= "${weatherIcons[icon]}"></i>`;
   }); //js가 직접 url을 호출해 줌. 그럼 관련 서버에서 정보를 받아옴.
   // fetch는 promise임. promise는 당장 실행을 시켜주는게 아닌 좀 시간이 걸린 다음에 실행해준다는 것.
   // 가져온다음 response를 받아야 함. json은 실제 관련 계절 관련 정보.
}
function onGeoError(){
   alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)