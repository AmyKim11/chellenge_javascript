const clock = document.querySelector("#clock");

function getClock(){
   const date = new Date();
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   clock.innerText =`${hours}:${minutes}:${seconds}`;
}
getClock(); //처음 바로 시간이 보이지 않기 때문에 브라우저를 열었을때 바로 보이게 함수를 하나 더 적어줌.
setInterval(getClock, 1000); //실시간으로 보여주고 있게 하는 것.