const input = document.querySelector(`#inputBox`)
const listCon = document.querySelector(".listContainer")

function clicked() {
  if(input.value === ''){
    alert('please enter your task')
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = input.value
    listCon.appendChild(li)
  }
  input.value = ""
  data()
}
function data(){
  localStorage.setItem("data", listCon.innerHTML)
}