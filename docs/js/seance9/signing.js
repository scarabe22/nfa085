console.log("hello!");

//**********************************************************/
//Utilisation de l'api de validation de contraintes HTML5 */
//*********************************************************/
let form=document.querySelector("form");
let mail=document.getElementById("mail");
let message=document.querySelector('.message');

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let m=mail.value;
  if (!mail.validity.valid) {
    message.innerHTML = mail.validationMessage;
    message.className = "message error";
  } else {
    message.innerHTML=`'${m}' est valide !`;
    message.className = "message valid";
  }
});

mail.addEventListener("input", function (event) {
  if (mail.validity.valid) {
    message.innerHTML = "";
    message.className = "message";

}

});

/********************************************/
//Validation du mot de passe avec check strength bar */
//****************************************************/
let parameters = {
  count : false,
  letters : false,
  numbers : false,
  special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

let password = document.getElementById("pass1");
password.addEventListener('input', (strengthChecker));

function strengthChecker(){
  let password = document.getElementById("pass1").value;

  parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
  parameters.numbers = (/[0-9]+/.test(password))?true:false;
  parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
  parameters.count = (password.length > 7)?true:false;

  let barLength = Object.values(parameters).filter(value=>value);

  console.log(Object.values(parameters), barLength);

  strengthBar.innerHTML = "";
  for( let i in barLength){
    let span = document.createElement("span");
    span.classList.add("strength");
    strengthBar.appendChild(span);
  }

  let spanRef = document.getElementsByClassName("strength");
  for( let i = 0; i < spanRef.length; i++){
    switch(spanRef.length - 1){
      case 0 :
        spanRef[i].style.background = "#ff3e36";
        msg.textContent = "Force: Très faible";
        break;
      case 1:
        spanRef[i].style.background = "#ff691f";
        msg.textContent = "Force: Faible";
        break;
      case 2:
        spanRef[i].style.background = "#ffda36";
        msg.textContent = "Force: Bon";
        break;
      case 3:
        spanRef[i].style.background = "#0be881";
        msg.textContent = "Force: Excellent";
        break;
    }
  }
}
