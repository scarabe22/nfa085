"use strict";

const taskField = document.getElementById("task-field");
const btnAdd = document.getElementById("btn-add");
const btnDelTask = document.getElementById("btn-del-task");
const ul = document.getElementById("ul");
const form = document.getElementById("form");
const saveField = document.getElementById("save-field");
const btnSave = document.getElementById("btn-save");
const listLoad = document.getElementById("list-load");
const btnLoad = document.getElementById("btn-load");


const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) { //boucle sur l'élément spandels
    span.onclick = () => del(span.parentElement);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = taskField.value;

    const li = document.createElement("li"); //create li
    const checkBox = document.createElement("input"); //create checkbox
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");//create checkbox class

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const li = this.parentElement;
            if (this.checked) {
                texte.style.textDecoration = 'line-through';
            } else {
                texte.style.textDecoration = 'none';
            }
        });
    });






    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            texte.classList.add("checked");
        } else {
            texte.classList.remove("checked");
        }
    });
    li.appendChild(checkBox);
    li.appendChild(texte);

    const spanDel = document.createElement("span");
    spanDel.classList.add("delete", "material-icons");
    spanDel.textContent = "delete";
    spanDel.addEventListener("click", () => del(li));
    li.appendChild(spanDel);

    ul.appendChild(li);



    taskField.value = "";
});

function del(element) {
    element.remove();


}

btnDelTask.addEventListener("click", () => {
    const checked = ul.querySelectorAll("input[type=checkbox]:checked");
    for (let checkBox of checked) {
        del(checkBox.parentElement);
    }
});



btnSave.addEventListener("click", function(event) {
    event.preventDefault();

    const name = saveField.value.trim();
    if (!name) {
        alert("Veuillez entrer un nom de sauvegarde valide.");
        return;
    }

    const items = document.querySelectorAll("#ul li");
    const data = [];

    items.forEach(function(item) {
        const checkbox = item.querySelector("input[type=checkbox]");
        const text = item.querySelector(".texte");

        data.push({
            text: text.innerText,
            checked: checkbox.checked
        });
    });

    localStorage.setItem(name, JSON.stringify(data));

    alert("La sauvegarde a été effectuée avec succès.");
});



// Fonction pour charger la sauvegarde
function loadBackup() {
    // Récupération du nom de la sauvegarde sélectionnée
    const selectedBackup = listLoad.value;

    // Affichage d'un message de confirmation
    alert(`La sauvegarde ${selectedBackup} a été chargée !`);
}

// Ajout d'un événement au bouton pour charger la sauvegarde
btnLoad.addEventListener("click", loadBackup);






// Fonction pour sauvegarder la liste
function saveList() {
    // Récupération du nom de la sauvegarde
    const saveName = saveField.value.trim();

    // Vérification que le champ n'est pas vide
    if (saveName !== "") {
        // Récupération de la liste des tâches
        const tasks = [];
        ul.querySelectorAll("li").forEach((li) => {
            tasks.push({
                text: li.querySelector(".texte").textContent,
                checked: li.querySelector("input[type=checkbox]").checked
            });
        });

        // Enregistrement de la sauvegarde dans le stockage local
        localStorage.setItem(saveName, JSON.stringify(tasks));

        // Effacement du champ de saisie
        saveField.value = "";

        // Mise à jour de la liste des sauvegardes disponibles
        updateSaveList();
    }
}

// Fonction pour mettre à jour la liste des sauvegardes disponibles
function updateSaveList() {
    // Récupération de la liste des clés de stockage local
    const keys = Object.keys(localStorage);

    // Création des options du select
    let options = "";
    keys.forEach((key) => {
        options += `<option value="${key}">${key}</option>`;
    });

    // Ajout des options au select
    const selectLoad = document.getElementById("list-load");
    selectLoad.innerHTML = options;
}

// Écouteur d'événement pour le bouton de sauvegarde
btnSave.addEventListener("click", saveList);

// Mise à jour de la liste des sauvegardes disponibles au chargement de la page
updateSaveList();






function loadBackup() {
    // Récupération du nom de la sauvegarde sélectionnée
    const selectedBackup = listLoad.value;

    // Chargement de la sauvegarde
    const backupData = localStorage.getItem(selectedBackup);
    const tasks = JSON.parse(backupData);

    // Affichage des tâches de la sauvegarde
    ul.innerHTML = "";
    tasks.forEach((task) => {
        const texte = document.createElement("span");
        texte.classList.add("texte");
        texte.textContent = task.text;
        if (task.checked) {
            texte.classList.add("checked");
        }

        const li = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkbox");
        checkBox.checked = task.checked;
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                texte.classList.add("checked");
            } else {
                texte.classList.remove("checked");
            }
        });
        li.appendChild(checkBox);
        li.appendChild(texte);

        const spanDel = document.createElement("span");
        spanDel.classList.add("delete", "material-icons");
        spanDel.textContent = "delete";
        spanDel.addEventListener("click", () => del(li));
        li.appendChild(spanDel);

        ul.appendChild(li);
    });

    // Affichage d'un message de confirmation
    alert(`La sauvegarde ${selectedBackup} a été chargée !`);
}


//soulignement du checkbox text
// Récupérer toutes les cases à cocher
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Ajouter un écouteur d'événement "change" à chaque case à cocher
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Vérifier si la case est cochée
        if (checkbox.checked) {
            // Trouver l'élément HTML correspondant en utilisant son attribut "for"
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            // Souligner le texte en utilisant la propriété CSS "text-decoration"
            label.style.textDecoration = 'underline';
        } else {
            // Si la case est décochée, enlever le soulignement
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            label.style.textDecoration = 'none';
        }
    });
});