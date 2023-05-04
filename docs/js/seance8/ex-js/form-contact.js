/* Form-contact */
let form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(`Nom: ${name}`);
    console.log(`Adresse e-mail: ${email}`);
    console.log(`Message: ${message}`);

    form.reset();
});