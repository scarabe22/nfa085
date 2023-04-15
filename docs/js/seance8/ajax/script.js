const links = document.querySelectorAll('#nav a');
const mainContainer = document.getElementById('main-container');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Empêche le lien de rediriger vers la page

        // Récupération de l'URL de la page à charger
        const url = link.href;

        // Chargement de la page dans la div main-container
        fetch(url)
            .then(response => response.text())
            .then(data => {
                mainContainer.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    });
});