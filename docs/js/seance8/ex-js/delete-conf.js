/* Delete-conf */
let deleteBtn = document.getElementById("delete-btn");
let cancelBtn = document.getElementById("cancel-btn");
let deleteMe = document.getElementById("delete-me");

deleteBtn.addEventListener("click", function () {
    let confirmDelete = confirm('Etes-vous sûr de vouloir supprimer ce paragraphe?');
    if (confirmDelete) {
        deleteMe.remove();
        alert("Paragraphe supprimé!");
    } else {
        alert("Annuler.");
    }
});

cancelBtn.addEventListener("click", function () {
    alert('Suppression annulée.');
});