/* background-color */
let body = document.querySelector("body")
let bg_orange = document.getElementById("btn1");
let bg_greenyellow = document.getElementById("btn2")
let bg_indianred = document.getElementById("btn3")
bg_orange.addEventListener("click", function (){
   body.style.backgroundColor = "coral"
});
bg_greenyellow.addEventListener("click", function (){
   body.style.backgroundColor = "greenyellow"
});
bg_indianred.addEventListener("click", function (){
   body.style.backgroundColor = "indianred"
});