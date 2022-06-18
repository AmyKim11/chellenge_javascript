const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string 형을 변수로 선언할때 주로 대문자로 적어준다.
const USERNAME_KEY = "username";

function onLoginSummit(event){
   event.preventDefault(); // 어떤 event의 기본 행동이든지 발생하지 않도록 막는것.
   loginForm.classList.add(HIDDEN_CLASSNAME); //클래스 명을 추가해줌.
   const userName = loginInput.value; //input의 값을 변수로 선언.
   localStorage.setItem(USERNAME_KEY, userName);
   paintGreetings(userName); /*반복되는 부분을 함수로 만들어 ()값은 
   위의 input안의 값을 가져올 변수명으로 적는다.*/
}

function paintGreetings(username){
   greeting.innerHTML = `안녕하세요 ${username} 님! 😊`; //greeting에 스토리지에 있던 이름을 넣어주고
   greeting.classList.remove(HIDDEN_CLASSNAME);// 클래스 이름을 삭제한다.
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);// show the form
   loginForm.addEventListener("submit",onLoginSummit);
} else {
   paintGreetings(saveUserName); /*마찬가지고 반복되는 부분을 함수로 만들어 
   / 이번엔 localStorage에 저장된 이름을 가져 오는 것이므로 해당 변수명을 가져온다.*/
}