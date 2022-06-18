const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todo";

let toDos = []; //새로입력하는 것 뿐만 아니라 예전 데이터도 저장될 수 있게 let으로 변수명 변경.

function saveToDos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array를 string으로 바꿔줌
}

function deleteToDo(event){
   const li = event.target.parentElement; // 어느 버튼의 부모요소인지 찾아주는 코드.
   li.remove(); // 해당 버튼의 부모 요소 삭제
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //todo의 id와 li의 id가 다른걸 남기고 싶음. 여기서 todo는 toDos에 있는 요소 하나하나임.
   //그런데 li.id는 string형이고 toDos의 id는 숫자형이기 때문에 자료형을 일치시켜야 한다.
   // 그리고 DB에서 지운 후에 saveToDos를 한번 더 불러준다.
   saveToDos();
}

function paintToDo(newTodo){
   // console.log("I will paint", newTodo);
   const li = document.createElement("li");
   li.id = newTodo.id; //리스트 태그에 id를 추가하고, .newTodoObject에 랜덤하게 나오는 id값을 html li태그의 아이디 명으로 추가되게 하는것.
   const span = document.createElement("span");
   span.innerHTML = `${newTodo.text}&nbsp;&nbsp;&nbsp;`; //[object Object]로 출력되는 것을 .text를 붙여 텍스트가 제대로 나오게 함.
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span); // li 태그 밑에 자식 요소로 span이 들어가게 함.
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event){
   event.preventDefault();
   const newTodo = toDoInput.value; //newTodo에 toDoInput value값을 복사해 놓음. 
   toDoInput.value = "";
   const newTodoObject = {
      text:newTodo,
      id:Date.now(),
   } // localStorage에서 삭제할려면 만약 중복된 데이터가 있으면 구별이 안되므로 object 형태로 적어 데이터는 text에 랜덤한 id는 Date.now라는 랜덤하게 밀리세컨드로 나오는 걸로 준다.
   toDos.push(newTodoObject); 
   // paintToDo(newTodo); //newToDo에 있는 값을 가져가 paintToDo함수를 호출함.
   paintToDo(newTodoObject); //id값도 html상에서 입력해 주기 위해 newTodoObject로 변수명 변경. 하지만 이럴 경우 [object Object] 로 출력됨.
   saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//    console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos); //문자형을 array로 바꿔줌
   toDos = parsedToDos; //예전 todos들을 복원해 toDos에 넣는다.
   parsedToDos.forEach(paintToDo); //array에 있는 각 item을 실행해 줌. 그 아이템들을 paintToDo로 보내 화면에 그려줌.
}