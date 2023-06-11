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
  
  // Afficher les favoris du domaine "Home"
  $(document).ready(function() {
    // Cacher toutes les cards
    $('.card').hide();
    
    // Afficher uniquement les cards liées au domaine "Home"
    $('.card[data-domain="Home"]').show();
  });
      
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
  // LocalSrorage  /
  //**************
  
  
  //*****************************************************************/
  // 1 - chargement du Dropdown domaine                             /
  //*****************************************************************/
  const domains = ['Informatique', 'Reseaux', 'Home', 'Achat', 'Cinema'];

  // Utilisez la fonction `addDomainToLocalStorage` pour ajouter chaque domaine au localStorage
  domains.forEach((domain) => {
    addDomainToLocalStorage(domain);
  });
  console.log('Les domaines ont été stockés dans le localStorage.');
  
  function loadDomainsMenu() {
    const domains = getDomainsFromLocalStorage();
  
    // Sélectionnez l'élément du menu dropdown
    const dropdownMenu = document.getElementById('dropdown');
  
    // Supprimez tous les éléments enfants du menu dropdown existants
    while (dropdownMenu.firstChild) {
      dropdownMenu.removeChild(dropdownMenu.firstChild);
    }
  
    // Parcourez les domaines
    domains.forEach((domain) => {
      // Créez un élément div pour chaque domaine
      const item = document.createElement('div');
      item.classList.add('item');
      item.textContent = domain;
  
      // Ajoutez un gestionnaire d'événement pour le chargement du domaine lorsqu'il est sélectionné
      item.addEventListener('click', function () {
        loadDomain(domain);
      });
  
      // Ajoutez l'élément div du domaine au menu dropdown
      dropdownMenu.appendChild(item);
    });
  
    // Initialisez le dropdown Semantic UI
    $('.ui.dropdown').dropdown();
  }
  
  // Appelez la fonction loadDomainsMenu pour charger le menu dropdown des domaines depuis le localStorage
  loadDomainsMenu();
  
  


  
  //*****************************************************************/
  // Fin chargement du Dropdown domaine                              /
  //*****************************************************************/
  
  
  
  //*****************************************************************/
  // 2 - Chargement des domaines                                     /
  //*****************************************************************/

  
  
  
  
  
  
  //*****************************************************************/
  // 3 - Mise à jour du fil d’ariane                                 /
  //*****************************************************************/
  
  
  
  /*****************************************************************/
  // Fin Mise à jour du fil d’ariane                                /
  //****************************************************************/
  
  
  
  
  /*****************************************************************/
  // 4 - Ajout de domaine                                           /
  //****************************************************************/
  
  
  
  //*****************************************************************/
  // Fin  Ajout de domaine                                           /
  //****************************************************************/
  
  
  
  
  //***************************************************************/
  // 5 - Ajout de favori                                           /
  //***************************************************************/
  
  
  
 
//***************************************************************/
// 5 - Fin ajout de favori                                       /
//***************************************************************/






