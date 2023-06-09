const defaultFavorites = [
  { title: 'JetBrains', url: 'https://jetbrains.com' },
  { title: 'GitHub', url: 'https://github.com' },
  { title: 'StackOverflow', url: 'https://stackoverflow.com' },
  { title: 'LinkedIn', url: 'https://linkedin.com' },
  { title: 'Wikipedia', url: 'https://wikipedia.org' },
  { title: 'Apple', url: 'https://apple.com' },
  { title: 'Microsoft', url: 'https://microsoft.com' },
  { title: 'WordPress', url: 'https://wordpress.com' },
  { title: 'IMDB', url: 'https://imdb.com' },
  { title: 'Trello', url: 'https://trello.com' },
  { title: 'Slack', url: 'https://slack.com' },
  { title: 'BitBucket', url: 'https://bitbucket.org' },
  { title: 'GitLab', url: 'https://gitlab.com' },
  { title: 'Bitly', url: 'https://bitly.com' },
  { title: 'CodePen', url: 'https://codepen.io' },
  { title: 'JSFiddle', url: 'https://jsfiddle.net' },
  { title: 'JSBin', url: 'https://jsbin.com' },
  { title: 'CodeAnywhere', url: 'https://codeanywhere.com' },
  { title: 'CodeSandbox', url: 'https://codesandbox.io' },
  { title: 'Repl.it', url: 'https://repl.it' },
  { title: 'Glitch', url: 'https://glitch.com' },
  { title: 'JSitor', url: 'https://jsitor.com' },
];

function createCard(favorite) {
  const card = document.createElement('a');
  card.classList.add('ui', 'card');
  card.href = favorite.url;
  card.target = '_blank';

  const imageElement = document.createElement('img');
  imageElement.classList.add('left', 'floated', 'tiny', 'ui', 'image');
  imageElement.src = `https://logo.clearbit.com/${encodeURIComponent(favorite.url)}`;

  const extraContentElement = document.createElement('div');
  extraContentElement.classList.add('extra', 'content');

  const logoTitleElement = document.createElement('div');
  logoTitleElement.classList.add('header');
  logoTitleElement.textContent = favorite.title;

  const logoMetaElement = document.createElement('div');
  logoMetaElement.classList.add('meta');
  logoMetaElement.textContent = favorite.url.replace(/(^\w+:|^)\/\//, '');

  extraContentElement.appendChild(imageElement);
  extraContentElement.appendChild(logoTitleElement);
  extraContentElement.appendChild(logoMetaElement);

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('ui', 'red', 'button');
  deleteButton.innerHTML = '<i class="trash icon"></i>Supprimer';
  deleteButton.style.float = 'left';
  deleteButton.style.marginTop = '10px';
  deleteButton.style.display = 'none';

  card.addEventListener('mouseover', function () {
    deleteButton.style.display = 'block';
  });

  card.addEventListener('mouseout', function () {
    deleteButton.style.display = 'none';
  });

  card.appendChild(extraContentElement);
  card.appendChild(deleteButton);

  return card;
}

const favoritesContainer = document.getElementById('favorites-container');
defaultFavorites.forEach(function (favorite) {
  const card = createCard(favorite);
  favoritesContainer.appendChild(card);
});







// Generate a random color
function getRandomDarkColor(){
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i <6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Extract domain from url
function getDomainFromUrl(url){
  url=hasProtocol(url)?url:`https://${url}`;
  const urlObject = new URL(url);
  return urlObject.hostname;
}

// Remove protocol from url
function removeProtocol(url){
  return url.replace(/(^\w+:|^)\/\//, '');
}

// Check if url has protocol
function hasProtocol(url){
  return url.indexOf('http')===0;
}

// Convert hex to rgb
const hexToRgb = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      }
      : null
}

// calc to work out if it will match on black or white better
const getForegroundColor = rgb =>
  (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? '000' : 'fff'

// get the image from clearbit API
function scrapWebsiteLogo(url) {
  url=removeProtocol(url);
  const apiUrl = `https://logo.clearbit.com/${encodeURIComponent(url)}`;
  const imageElement = document.createElement('img');

  return new Promise((resolve, reject) => {
      fetch(apiUrl)
          .then(response => response.blob())
          .then(blob => {
              const imageUrl = URL.createObjectURL(blob);

              imageElement.src = imageUrl;

              resolve(imageElement);
          })
          .catch(error => {
              const bgColor = getRandomDarkColor();
              const color= getForegroundColor(hexToRgb(bgColor));
              const defaultImageUrl=`https://dummyimage.com/300x300/${bgColor.substring(1,4)}/${color}.png&text=${url}`;
              imageElement.src = defaultImageUrl;
              resolve(imageElement);
          });
  });
}





function createFavorite(title, url) {
  // Si le titre est vide, utiliser le domaine de l'URL comme titre
  if (!title) {
    let domain = url.replace(/^https?:\/\//, '').split('/')[0];
    title = domain;
  }

  // Retourner l'objet favori
  return {
    title: title,
    url: url
  };
}


// Associer l'événement au bouton d'ajout de favori
let addButton = document.getElementById('bt-add-favori');
addButton.addEventListener('click', function () {
  // Récupérer les valeurs saisies
  let titleInput = document.getElementById('title');
  let urlInput = document.getElementById('url');

  let title = titleInput.value.trim();
  let url = urlInput.value.trim();

  // Vérifier si l'URL est vide
  if (url === '') {
    alert('Veuillez saisir une URL.');
    return;
  }

  // Créer un nouvel objet favori
  let favorite = createFavorite(title, url);

  // Créer un élément card pour le favori et l'ajouter à l'interface
  let container = document.querySelector('.ui.container');
  let card = createCard(favorite);
  container.appendChild(card);

  // Réinitialiser les valeurs des champs de saisie
  titleInput.value = '';
  urlInput.value = '';
});



// Nombre de favoris par ligne
// Tableau des classes CSS correspondant au nombre de favoris par ligne
const sizes = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight'};

// Événement déclenché sur le changement de la zone de texte count-per-row
const countPerRowInput = document.getElementById('count-per-row');
countPerRowInput.addEventListener('change', function() {
  // Récupérer la valeur sélectionnée
  const selectedValue = parseInt(countPerRowInput.value);

  // Vérifier si la valeur est valide et existe dans le tableau sizes
  if (selectedValue > 0 && selectedValue <= Object.keys(sizes).length) {
    // Récupérer la classe CSS correspondant à la valeur sélectionnée
    const selectedSize = sizes[selectedValue];

    // Modifier la classe CSS de l'élément .ui.cards
    const cardContainer = document.getElementById('favorites-container');
    cardContainer.className = `ui ${selectedSize} cards`;
  } else {
    console.error('Nombre de favoris par ligne invalide');
  }
});



// Toggle light/dark mode
// Récupérer le bouton de basculement du mode
const modeButton = document.getElementById('bt-mode');

// Récupérer l'icône du mode
const modeIcon = document.getElementById('mode-icon');

// Récupérer l'élément parent de votre interface
const interfaceContainer = document.getElementById('interface-container');

// Fonction pour basculer entre le mode sombre et le mode clair
function toggleDarkMode() {
  // Ajouter ou supprimer la classe "inverted" sur l'élément parent
  interfaceContainer.classList.toggle('inverted');

  // Changer l'icône en fonction du mode
  if (modeIcon.classList.contains('sun')) {
    modeIcon.classList.remove('sun');
    modeIcon.classList.add('moon');
  } else {
    modeIcon.classList.remove('moon');
    modeIcon.classList.add('sun');
  }
}

// Ajouter un gestionnaire d'événement au bouton de basculement du mode
modeButton.addEventListener('click', toggleDarkMode);
