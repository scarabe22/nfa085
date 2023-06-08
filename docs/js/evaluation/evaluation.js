// Fonction pour créer un élément favori
function createCard(favorite) {
  // Créer les éléments HTML
  let cardDiv = document.createElement('div');
  cardDiv.className = 'ui cards';

  let card = document.createElement('div');
  card.className = 'card';

  let logoImg = document.createElement('img');
  logoImg.className = 'left floated tiny ui image';

  // Appeler la fonction scrapWebsiteLogo pour obtenir le logo depuis l'API
  scrapWebsiteLogo(favorite.url)
    .then(function (logoUrl) {
      logoImg.src = logoUrl;
    })
    .catch(function (error) {
      console.error('Erreur lors du chargement du logo :', error);
    });

  let extraContent = document.createElement('div');
  extraContent.className = 'extra content';

  let titleHeader = document.createElement('div');
  titleHeader.className = 'header';
  titleHeader.textContent = favorite.title;

  let urlMeta = document.createElement('div');
  urlMeta.className = 'meta';
  urlMeta.textContent = favorite.url.replace(/^https?:\/\//, '');

  let deleteButton = document.createElement('div');
  deleteButton.className = 'ui red button';
  deleteButton.style.display = 'none'; // Masquer le bouton de suppression par défaut

  let deleteIcon = document.createElement('i');
  deleteIcon.className = 'trash icon';

  let deleteText = document.createTextNode('Supprimer');

  // Ajouter les éléments HTML au DOM
  cardDiv.appendChild(card);
  card.appendChild(logoImg);
  card.appendChild(extraContent);
  extraContent.appendChild(titleHeader);
  extraContent.appendChild(urlMeta);
  card.appendChild(deleteButton);
  deleteButton.appendChild(deleteIcon);
  deleteButton.appendChild(deleteText);

  // Associer l'événement pour afficher le bouton de suppression au survol de la souris
  card.addEventListener('mouseover', function () {
    deleteButton.style.display = 'block';
  });

  // Associer l'événement pour masquer le bouton de suppression lorsque la souris quitte l'élément
  card.addEventListener('mouseout', function () {
    deleteButton.style.display = 'none';
  });

  // Associer l'événement de suppression au bouton
  deleteButton.addEventListener('click', function () {
    cardDiv.remove();
  });

  return cardDiv;
}

// // Fonction pour récupérer le logo d'un site depuis l'API
function scrapWebsiteLogo(url) {
  return new Promise(function (resolve, reject) {
    let logoUrl = 'https://logo.clearbit.com/' + url.replace(/^https?:\/\//, '');
    resolve(logoUrl);
  });
}




// Tableau des favoris par défaut
const defaultFavorites = [
  {title: 'JetBrains', url: 'https://jetbrains.com'},
  {title: 'GitHub', url: 'https://github.com'},
  {title: 'StackOverflow', url: 'https://stackoverflow.com'},
  {title: 'LinkedIn', url: 'https://linkedin.com'},
  {title: 'Wikipedia', url: 'https://wikipedia.org'},
  {title: 'Apple', url: 'https://apple.com'},
  {title: 'Microsoft', url: 'https://microsoft.com'},
  {title: 'WordPress', url: 'https://wordpress.com'},
  {title: 'IMDB', url: 'https://imdb.com'},
  {title: 'Trello', url: 'https://trello.com'},
  {title: 'Slack', url: 'https://slack.com'},
  {title: 'BitBucket', url: 'https://bitbucket.org'},
  {title: 'GitLab', url: 'https://gitlab.com'},
  {title: 'Bitly', url: 'https://bitly.com'},
  {title: 'CodePen', url: 'https://codepen.io'},
  {title: 'JSFiddle', url: 'https://jsfiddle.net'},
  {title: 'JSBin', url: 'https://jsbin.com'},
  {title: 'JS.do', url: 'https://js.do'},
  {title: 'CodeAnywhere', url: 'https://codeanywhere.com'},
  {title: 'CodeSandbox', url: 'https://codesandbox.io'},
  {title: 'Repl.it', url: 'https://repl.it'},
  {title: 'Glitch', url: 'https://glitch.com'},
  {title: 'JSitor', url: 'https://jsitor.com'},
];

// Charger les favoris depuis le tableau defaultFavorites au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  let container = document.querySelector('.ui.container');
  for (let i = 0; i < defaultFavorites.length; i++) {
    let favorite = defaultFavorites[i];
    let card = createCard(favorite);
    container.appendChild(card);
  }
});



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
