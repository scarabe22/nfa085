//**************************************************************************/
//Validation d'adresse mail avec l'api de validation de contraintes HTML5 */
//*************************************************************************/
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
/*****************************************************/
//Force du mot de passe avec check strength bar     */
//***************************************************/
let passwordInput = document.getElementById("password");
let strengthMeter = document.getElementById("password-strength-meter");
let strengthText = document.getElementById("password-strength-text");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  let password = passwordInput.value;
  let criteriaCount = 0;

  const criteriaArray = [
    password.length >= 8,
    password.match(/[A-Z]/),
    password.match(/[0-9]/),
    password.match(/[!@#$%^&*(),.?":{}|<>]/)
  ];

  criteriaArray.forEach((criteria) => {
    if (criteria) {
      criteriaCount++;
    }
  });

  strengthMeter.value = (criteriaCount / 4) * 100;

  const strengthArray = [
    "Force : Aucune",
    "Force : Faible",
    "Force : Moyenne",
    "Force : Bonne",
    "Force : Excellente"
  ];

  strengthText.innerHTML = strengthArray[criteriaCount];
}

/*****************************************************************************/
//Validation du mot de passe avec l'api de validation des contraintes HTML5 */
//***************************************************************************/
let confirmPasswordInput = document.querySelector('#confirm-password');
let passwordMessage = document.querySelector('.password-message');

form.addEventListener('submit', (event) => {
  if (!passwordInput.checkValidity()) {
    event.preventDefault();
    passwordMessage.innerHTML = passwordInput.validationMessage;
    passwordMessage.className = 'passwordMessage error';
  } else {
    passwordMessage.innerHTML = '';
    passwordMessage.className = 'passwordMessage';
  }

  if (!confirmPasswordInput.checkValidity()) {
    event.preventDefault();
    confirmPasswordInput.setCustomValidity(confirmPasswordInput.validationMessage);
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
});

passwordInput.addEventListener('input', () => {
  const pattern = `^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$`;
  passwordInput.pattern = pattern;
  confirmPasswordInput.pattern = pattern;
  password.setCustomValidity("");
  passwordMessage.innerHTML = "";
});

//*****************************************************************************/
//Confirmation du mot de passe avec l'api de validation de contraintes HTML5 */
//***************************************************************************/
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