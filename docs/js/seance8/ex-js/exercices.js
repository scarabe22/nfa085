/* background-color */
// Changer la couleur de fond
let body = document.querySelector("body"),
   bg_orange = document.getElementById("btn1"),
   bg_greenyellow = document.getElementById("btn2"),
   bg_indianred = document.getElementById("btn3")
bg_orange.addEventListener("click", function (){
   body.style.backgroundColor = "coral"
});
bg_greenyellow.addEventListener("click", function (){
   body.style.backgroundColor = "greenyellow"
});
bg_indianred.addEventListener("click", function (){
   body.style.backgroundColor = "indianred"
});

/* Add-select */
// Fonction pour ajouter un élément à la liste
let bt = document.getElementById("bt");
bt.addEventListener("click", function (){ // Action de cliquer sur le bouton lié à une fonction

   let value = document.getElementById("msg-input").value,// Récupération de la valeur saisie dans la zone de texte
       list = document.getElementById("list"), //sélection de l'ul
       li = document.createElement("li"),// Création d'un élément li
       txNode = document.createTextNode(value),// Ajout de la valeur saisie dans l'élément

   list.appendChild(li);// Ajout d'un élément li à la liste
   li.appendChild(txNode);// Ajout du texte saisi dans le li de la liste

});








}