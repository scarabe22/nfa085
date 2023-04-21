//*************************************************************************/
//Validation d'adresse mail avec l'api de validation de contraintes HTML5 */
//************************************************************************/
let form=document.querySelector("form");
let mail=document.getElementById("mail");
let mailMessage=document.querySelector('.mail-message');

form.addEventListener("submit", function (event) {

  if (!mail.validity.valid) {
    event.preventDefault();
    mailMessage.innerHTML = mail.validationMessage;
    mailMessage.className = "mailMessage error";
  }
 });

mail.addEventListener("input", function () {
  if (mail.validity.valid) {
    mailMessage.innerHTML = "";
    mailMessage.className = "mailMessage";
}
});
/********************************************/
//Validation du mot de passe avec check strength bar */
//****************************************************/
let passwordInput = document.getElementById("password");
let strengthMeter = document.getElementById("password-strength-meter");
let strengthText = document.getElementById("password-strength-text");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  let password = passwordInput.value;
  let criteriaCount = 0;

  if (password.length >= 8) {
    criteriaCount++;
  }

  if (password.match(/[A-Z]/)) {
    criteriaCount++;
  }

  if (password.match(/[0-9]/)) {
    criteriaCount++;
  }

  if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    criteriaCount++;
  }

  strengthMeter.value = (criteriaCount / 4) * 100;

  if (criteriaCount === 0) {
    strengthText.innerHTML = "Force : Aucune";
  } else if (criteriaCount === 1) {
    strengthText.innerHTML = "Force : Faible";
  } else if (criteriaCount === 2) {
    strengthText.innerHTML = "Force : Moyenne";
  } else if (criteriaCount === 3) {
    strengthText.innerHTML = "Force : Bonne";
  } else if (criteriaCount === 4) {
    strengthText.innerHTML = "Force : Excellente";
  }
}
//****************************************************************************/
//Confirmation du mot de passe avec l'api de validation de contraintes HTML5 */
//***************************************************************************/
let confirmPasswordInput = document.querySelector('#confirm-password');
let confirmPasswordMessage = document.querySelector('#confirm-password-message');

confirmPasswordInput.addEventListener('input', () => {
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    confirmPasswordMessage.innerHTML = password.validationMessage;
    confirmPasswordMessage.className = "confirmPasswordMessage error";
    confirmPasswordMessage.textContent = 'Les deux mots de passe ne correspondent pas.';
    confirmPasswordInput.setCustomValidity('Les deux mots de passe ne correspondent pas.');
  } else {
    confirmPasswordMessage.textContent = '';
    confirmPasswordInput.setCustomValidity('');
  }
});

confirmPasswordInput.addEventListener("input", function () {
  if (confirmPasswordInput.validity.valid) {
    confirmPasswordMessage.innerHTML = "";
    confirmPasswordMessage.className = "passwordMessage";
}
});