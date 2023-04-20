console.log("hello!");

//*************************************************************************/
//Validation d'adresse mail avec l'api de validation de contraintes HTML5 */
//************************************************************************/
let form=document.querySelector("form");
let mail=document.getElementById("mail");
let message=document.querySelector('.message');

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // let m=mail.value;
  if (!mail.validity.valid) {
    message.innerHTML = mail.validationMessage;
    message.className = "message error";
  }
  // else {
  //   message.innerHTML=`'${m}' est valide !`;
  //   message.className = "message valid";
  // }
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
let strength = {
  0: "Très faible",
  1: "Faible",
  2: "Excellent",
  3: "Fort",
  4: "Très fort"
}

let password = document.getElementById('password');
let meter = document.getElementById('password-strength');
let passwordStrengthText = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  let val = password.value;
  let result = zxcvbn(val);

  // This updates the password strength meter
  meter.value = result.score;

  // This updates the password meter text
  if (val !== "") {
    passwordStrengthText.innerHTML = "Force: " + strength[result.score];
  } else {
    passwordStrengthText.innerHTML = "";
  }
});
//****************************************************************************/
//Confirmation de mot de passe avec l'api de validation de contraintes HTML5 */
//***************************************************************************/

// let form =document.querySelector("form");
// const password = document.getElementById('password');
let passwordMessage = document.querySelector('.password-message');

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!password.validity.valid) {
    passwordMessage.innerHTML = password.validationMessage;
    passwordMessage.className = "passwordMessage error";
  }
  else {
    message.innerHTML= "";
    // message.className = "message valid";
  }
});

let confirmPassword = document.getElementById('confirm-password');
let confirmPasswordMessage = document.getElementById('confirm-password-message');
form.addEventListener("submit", function (event2) {
  event2.preventDefault();
  if (password.value !== confirmPassword.value) {
    confirmPasswordMessage.innerHTML = confirmPassword.validationMessage;
    confirmPasswordMessage.className = "confirmPasswordMessage error";
  }
  else {
    message.innerHTML= "";
    // message.className = "message valid";
  }
});


// Afficher le message d'erreur personnalisé
if (!confirmPassword.checkValidity()) {
  let passwordMatchMessage = document.getElementById("password-match-message");
  passwordMatchMessage.innerHTML = confirmPassword.validationMessage;
  passwordMatchMessage.className = ("passwordMatchMessage error");

} else {
  passwordMatchMessage.innerHTML = "";
}