/* background-color */
// Changer la couleur de fond
let body = document.querySelector("body");
let bg_orange = document.getElementById("btn1");
let bg_greenyellow = document.getElementById("btn2");
let bg_indianred = document.getElementById("btn3");
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
// Action de cliquer sur le bouton lié à une fonction
let addbutton = document.getElementById("add-button");
addbutton.addEventListener("click", function (){
   // Récupération de la valeur saisie dans la zone de texte
   let value = document.getElementById("msg-input").value;
   // Création d'un élément option
   let option = document.createElement("option");
   // Ajout de la valeur saisie dans l'élément option
   option.appendChild(document.createTextNode(value));
   // Ajout de l'élément option au menu déroulant
   document.getElementById("select-menu").appendChild(option);
   // Effacement de la zone de texte
   input.value = "";
});

/* Addition*/
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function (){
   let num1 = document.getElementById("box1").value;
   let num2 = document.getElementById("box2").value;
   let sum = parseFloat(num1) + parseFloat(num2);
   document.getElementById("result").innerHTML = sum;

});

/* Images*/
// function changeImage() {
//    let selectBox = document.getElementById("images");
//    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
//    let image = document.getElementById("image");
//    if (selectedValue == "image1") {
//       image.src = "../../assets/images/seance8/blog-img1.jpg";
//       image.alt = "Image 1";
//    } else if (selectedValue == "image2") {
//       image.src = "../../assets/images/seance8/blog-img7.jpg";
//       image.alt = "Image 2";
//    } else if (selectedValue == "image3") {
//       image.src = "../../assets/images/seance8/blog-img8.jpg";
//       image.alt = "Image 3";
//    }
// }







