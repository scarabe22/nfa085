const defaultFavorites = [
    {title: 'JetBrains', url: 'https://jetbrains.com', domains: 'Informatique'},
    {title: 'GitHub', url: 'https://github.com', domains: 'Informatique'},
    {title: 'StackOverflow', url: 'https://stackoverflow.com', domains: 'Informatique'},
    {title: 'LinkedIn', url: 'https://linkedin.com', domains: 'Reseaux'},
    {title: 'Wikipedia', url: 'https://wikipedia.org', domains: 'Home'},
    {title: 'Apple', url: 'https://apple.com', domains: 'Achat'},
    {title: 'Microsoft', url: 'https://microsoft.com', domains: 'Informatique'},
    {title: 'WordPress', url: 'https://wordpress.com', domains: 'Informatique'},
    {title: 'IMDB', url: 'https://imdb.com', domains: 'Cinema'},
    {title: 'Trello', url: 'https://trello.com', domains: 'Informatique'},
    {title: 'Slack', url: 'https://slack.com', domains: 'Informatique'},
    {title: 'BitBucket', url: 'https://bitbucket.org', domains: 'Informatique'},
    {title: 'GitLab', url: 'https://gitlab.com', domains: 'Informatique'},
    {title: 'Bitly', url: 'https://bitly.com', domains: 'Informatique'},
    {title: 'CodePen', url: 'https://codepen.io', domains: 'Informatique'},
    {title: 'JSFiddle', url: 'https://jsfiddle.net', domains: 'Informatique'},
    {title: 'JSBin', url: 'https://jsbin.com', domains: 'Informatique'},
    {title: 'JS.do', url: 'https://js.do', domains: 'Informatique'},
    {title: 'CodeAnywhere', url: 'https://codeanywhere.com', domains: 'Informatique'},
    {title: 'CodeSandbox', url: 'https://codesandbox.io', domains: 'Informatique'},
    {title: 'Repl.it', url: 'https://repl.it', domains: 'Informatique'},
    {title: 'Glitch', url: 'https://glitch.com', domains: 'Informatique'},
    {title: 'JSitor', url: 'https://jsitor.com', domains: 'Informatique'},
  ];
  
  
      
    function createCard(favorite) {
      const card = document.createElement('a');
      card.classList.add('ui', 'card');
      card.href = favorite.url;
      card.target = '_blank';
      card.setAttribute('data-domain', favorite.domains); // Ajout de l'attribut data-domain

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
    
      card.appendChild(imageElement);
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
    
      deleteButton.addEventListener('click', function (e) {
        e.preventDefault();
        card.remove();
      })
    
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
    
    
    
    // Nombre de favoris par ligne
    // Tableau des classes CSS correspondant au nombre de favoris par ligne
    const sizes = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight'};
    
    // Événement déclenché sur le changement de la zone de texte count-per-row
    const countPerRowInput = document.getElementById('count-per-row');
    countPerRowInput.addEventListener('input', function() {
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
    
    
    
  // Mode light/Dark
    
  function toggleDarkMode() {
    $('body').addClass('dark-mode');
    $("#bt-mode > i").removeClass('sun');
    $("#bt-mode > i").addClass('moon');
  }
  
  function toggleLightMode() {
    $('body').removeClass('dark-mode');
    $("#bt-mode > i").removeClass('moon');
    $("#bt-mode > i").addClass('sun');
  }
  
  $('#bt-mode').click(function() {
    if ($('body').hasClass('dark-mode')) {
      toggleLightMode();
    } else {
      toggleDarkMode();
    }
  });
  
 

  //**************
  // LocalStorage  /
  //**************
  
  
  //*****************************************************************/
  // 1 - chargement du Dropdown domaine                             /
  //*****************************************************************/
  const domains = ['Informatique', 'Reseaux', 'Home', 'Achat', 'Cinema'];

  // Utiliser la fonction `addDomainToLocalStorage` pour ajouter chaque domaine au localStorage
  domains.forEach((domain) => {
    addDomainToLocalStorage(domain);
  });
  
  
  function loadDomainsMenu() {
    const domains = getDomainsFromLocalStorage();
  
    // Sélectionner l'élément du menu dropdown
    const dropdownMenu = document.getElementById('dropdown');
  
    // Supprimer tous les éléments enfants du menu dropdown existants
    while (dropdownMenu.firstChild) {
      dropdownMenu.removeChild(dropdownMenu.firstChild);
    }
  
    // Parcourer les domaines
    domains.forEach((domain) => {
      // Créer un élément div pour chaque domaine
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = domain;
  
      // Ajouter un gestionnaire d'événement pour le chargement du domaine lorsqu'il est sélectionné
      item.addEventListener('click', function () {
        loadDomain(domain);
      });
  
      // Ajouter l'élément div du domaine au menu dropdown
      dropdownMenu.appendChild(item);
    });
  
    // Initialiser le dropdown Semantic UI
    $('.ui.dropdown').dropdown();
  }
  
  // Appeler la fonction loadDomainsMenu pour charger le menu dropdown des domaines depuis le localStorage
  loadDomainsMenu();
  
  


  
  //*****************************************************************/
  // Fin chargement du Dropdown domaine                              /
  //*****************************************************************/
  
  
  
  //*****************************************************************/
  // 2 - Chargement des domaines                                     /
  //*****************************************************************/
  function loadDomain(domains) {
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';
  
    const filteredFavorites = defaultFavorites.filter(favorite => favorite.domains === domains);
  
    filteredFavorites.forEach(favorite => {
      const card = createCard(favorite);
      favoritesContainer.appendChild(card);
    });
    // Mettre à jour la variable activeDomain
      activeDomain = domains;
     
    // Appeler la fonction updateBreadcrumb avec le domaine actif
      updateBreadcrumb(activeDomain);
  }
  
  
  //*****************************************************************/
  // 3 - Mise à jour du fil d’ariane                                 /
  //*****************************************************************/
  function updateBreadcrumb(activeDomain) {
    const breadcrumbElement = document.getElementById('breadcrumb');
    breadcrumbElement.innerHTML = '';
  
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    homeLink.href = '#';
    homeLink.addEventListener('click', function() {
      loadDomain('Home');
    });
  
    breadcrumbElement.appendChild(homeLink);
  
    if (activeDomain !== 'Home') {
      const separator = document.createElement('span');
      separator.innerHTML = '<i class="right angle icon divider"></i>';
      breadcrumbElement.appendChild(separator);
  
      const activeDomainLink = document.createElement('span');
      activeDomainLink.textContent = activeDomain;
      activeDomainLink.style.color = '#1471b8';
      activeDomainLink.style.fontWeight = 'bold';
      breadcrumbElement.appendChild(activeDomainLink);
    }
  }
 
  
  /*****************************************************************/
  // Fin Mise à jour du fil d’ariane                                /
  //****************************************************************/
  // Afficher les favoris du domaine "Home"
  $(document).ready(function() {
    // Cacher toutes les cards
    $('.card').hide();
    
    // Afficher uniquement les cards liées au domaine "Home"
    $('.card[data-domain="Home"]').show();
  });
  
  
  
  /*****************************************************************/
  // 4 - Ajout de domaine                                           /
  //****************************************************************/
  document.getElementById('bt-add-domain').addEventListener('click', function() {
    const domainInput = document.getElementById('domain-input');
    const domainName = domainInput.value.trim();
  
    if (domainName === '') {
      alert('Le nom de domaine est obligatoire.');
      return;
    }
  
    if (!/^[a-zA-Z]+$/.test(domainName)) {
      alert('Le nom de domaine ne peut contenir que des caractères alphabétiques.');
      return;
    }
  
    addDomainToLocalStorage(domainName);
  
    // Mettre à jour le menu des domaines
    updateDomainMenu();
  
    // Définir le nouveau domaine comme activeDomain
    activeDomain = domainName;
  
    // Mettre à jour l'affichage
    document.location.reload();
  
    // Réinitialiser le champ de saisie
    domainInput.value = '';
  });

  
  function updateDomainMenu() {
    const domains = getDomainsFromLocalStorage();
  
    // Supprimer tous les éléments du menu
    const domainMenu = document.getElementById('domain-input');
    while (domainMenu.firstChild) {
      domainMenu.removeChild(domainMenu.firstChild);
    }
  
    // Ajouter les domaines à la liste du menu
    domains.forEach(function(domain) {
      const domainOption = document.createElement('option');
      domainOption.value = domain;
      domainOption.textContent = domain;
      domainMenu.appendChild(domainOption);
    });
  }

  
  //*****************************************************************/
  // Fin  Ajout de domaine                                           /
  //****************************************************************/
  
  
  
  
  //***************************************************************/
  // 5 - Ajout de favori                                           /
  //***************************************************************/
  function isValidURL(url) {
    // Expression régulière pour valider l'URL
    const urlPattern = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(:[0-9]+)?(\/.*)?$/i;
    
    // Vérifier si l'URL correspond au modèle
    return urlPattern.test(url);
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
  let addFavoriteButton = document.getElementById('bt-add-favori');
  addFavoriteButton.addEventListener('click', function () {
    // Récupérer les valeurs saisies
    let titleInput = document.getElementById('title');
    let urlInput = document.getElementById('url');
  
    let title = titleInput.value.trim();
    let url = urlInput.value.trim();
  
    // Vérifier si l'URL est vide ou invalide
    if (url === '' || !isValidURL(url)) {
      alert('Veuillez saisir une URL valide.');
      return;
    }
  
    // Créer un nouvel objet favori
    let favorite = createFavorite(title, url);
  
    // Stocker le favori dans le localStorage
    // let activeDomain = getActiveDomain();
    addFavoriteToLocalStorage(favorite, activeDomain);
  
    // Créer un élément card pour le favori et l'ajouter à l'interface
    let container = document.querySelector('.ui.container');
    let card = createCard(favorite);
    container.appendChild(card);
  
    // Réinitialiser les valeurs des champs de saisie
    titleInput.value = '';
    urlInput.value = '';
  });
  
 
//***************************************************************/
// 5 - Fin ajout de favori                                       /
//***************************************************************/






