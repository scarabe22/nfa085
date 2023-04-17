//***************************************************/
//Utilisation de l'api de validation de contraintes */
//************************************************* */
let form=document.querySelector("form");
let mail=document.getElementById("mail");
let message=document.querySelector('#message');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const m=mail.value;
    if (!mail.validity.valid) {
        message.innerHTML = mymail.validationMessage;
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
//***********************************/
//Désactivation de l'autocomplétion */
//********************************* */
let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");

function disableAutocomplete(elementId)
{
    let e = document.getElementById(elementId);
    if(e != null)
    {
        e.setAttribute("autocomplete", "off");
    }
}
disableAutocomplete("firstname");
disableAutocomplete("lastname");
disableAutocomplete("mail");
disableAutocomplete("message");
//******************************************/
// Intégration du test d'existence         */
//*****************************************/
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let firstNameValue = document.getElementById("firstname").value;
    let mailValue = document.getElementById("mail").value;
    let messageValue = document.getElementById("message").value;

    console.log(`Prénom: ${firstNameValue}`);
    console.log(`Adresse e-mail: ${mailValue}`);
    console.log(`Message: ${messageValue}`);

    form.reset();
});
