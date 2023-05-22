// Extraction des microdata
function extractMicrodata(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const microdataItems = doc.querySelectorAll('[itemscope]');
    const microdata = Array.from(microdataItems).map((item) => {
      const properties = Array.from(item.querySelectorAll('[itemprop]')).map((prop) => {
        const propName = prop.getAttribute('itemprop');
        const propValue = prop.getAttribute('content') || prop.innerText;
        return { [propName]: propValue };
      });
      return Object.assign({}, ...properties);
    });
    return microdata;
  }
  
  // Fonction pour effectuer le fetch et extraire les microdata
  async function fetchAndExtractMicrodata() {
    try {
      const response = await fetch('la-firme.html');
      const html = await response.text();
      const microdata = extractMicrodata(html);
      
      // Affichage des microdata
      const microdataResults = document.getElementById('microdata-results');
      if (microdata.length > 0) {
        microdataResults.textContent = 'Microdonnées trouvées :';
        microdata.forEach((item) => {
          microdataResults.innerHTML += `<pre>${JSON.stringify(item, null, 2)}</pre><br>`;
        });
      } else {
        microdataResults.textContent = 'Aucune microdonnée trouvée.';
      }
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la récupération des microdonnées :`, error);
    }
  }
  
  
  fetchAndExtractMicrodata();
  