
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const strikethrough = document.getElementById('strikethrough');
const colorInput = document.getElementById('color-input')
const fontSizeInput = document.getElementById("font-size-input");
const fontFamilySelect = document.getElementById('font-family-select');
const increaseFontSizeBtn = document.getElementById('increase-font-size-btn');
const decreaseFontSizeBtn = document.getElementById('decrease-font-size-btn');


const textArea = document.getElementById('text-example');

bold.addEventListener('change', () => {
    if (bold.checked) {
        textArea.style.fontWeight = "bold";
    } else {
        textArea.style.fontWeight = "normal";
    }
});

italic.addEventListener('change', () => {
    if (italic.checked) {
        textArea.style.fontStyle = "italic";
    } else {
        textArea.style.fontStyle = "normal";
    }
});

underline.addEventListener('change', () => {
    if (underline.checked) {
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.textDecoration = "none";
    }
});

strikethrough.addEventListener('change', () => {
    if(strikethrough.checked){
        textArea.style.textDecoration = 'line-through';
    } else {
        textArea.style.textDecoration = 'none';
    }
});

colorInput.addEventListener('change', () => {
    // Récupérez la couleur sélectionnée
    const color = colorInput.value;
    // Appliquez la couleur sélectionnée au texte du textarea
    textArea.style.color = color;
});

fontSizeInput.addEventListener('input', () => {
    textArea.style.fontSize = `${fontSizeInput.value}px`;
});

// fontFamilySelect.addEventListener('change', () => {
//     textArea.fontFamily = fontFamilySelect.value;
// });

// Écouter l'événement "change" du select
fontFamilySelect.addEventListener('change', () => {
    // Récupérer la valeur de la police sélectionnée
    const selectedFontFamily = fontFamilySelect.value;

    // Changer la taille de police du textarea avec la police sélectionnée
    textArea.style.fontFamily = selectedFontFamily;
});

let fontSize = 16; // Taille de police initiale

increaseFontSizeBtn.addEventListener("click", function() {
    fontSize += 2; // Augmente la taille de police de 2px
    textArea.style.fontSize = `${fontSize}px`; // Met à jour la taille de police du textarea
});

decreaseFontSizeBtn.addEventListener("click", function() {
    fontSize -= 2; // Diminue la taille de police de 2px
    textArea.style.fontSize = `${fontSize}px`; // Met à jour la taille de police du textarea
});