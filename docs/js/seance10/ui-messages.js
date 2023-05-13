// Ajouter un message
// let addMessage = $('.add-message');
// let addMessageModal = $('.add-message-modal');

// $(addMessage).click( () => {
//   $(addMessageModal).modal('show');
//   $('.ui.dropdown').dropdown();
// });


// Fonction pour ajouter le message par défaut
function addDefaultMessage() {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.innerHTML = `
      <div class="ui icon message">
        <i class="comment alternate outline icon"></i>
        <div class="content">
          <div class="header">Message par défaut</div>
          <p>Aucun message</p>
        </div>  
      </div>
    `;
  }
  
  // Appel de la fonction pour ajouter le message par défaut au chargement de la page
  addDefaultMessage();

$(document).ready(function() {
    // Tableau de messages
    let messages = [];
  
    // Affichage du message par défaut si la zone de message est vide
    function displayDefaultMessage() {
      const messageContainer = $('.message-container');
      if (messageContainer.is(':empty')) {
        const defaultMessage = `
          <div class="ui icon message">
            <i class="comment alternate outline icon"></i>
            <div class="content">
              <div class="header">Message par défaut</div>
              <p>Aucun message</p>
            </div>
          </div>
        `;
        messageContainer.append(defaultMessage);
      }
    }
  
    // Supprimer tous les messages
    $('.delete-all-messages').on('click', function() {
      messages = [];
      $('.message-container').empty();
      displayDefaultMessage();
      $.toast({
        class: 'success',
        title: `Suppression de tous les messages`,
        message: `Tous les messages ont été supprimés avec succès`
      });
    });
  
    // Ajouter un message
    $('.add-message').on('click', function() {
      // Réinitialiser le formulaire
      $('.ui.form').trigger('reset');
      $('.ui.dropdown').dropdown('restore defaults');
      $('.add-message-modal').modal('show');
    });
  
    // Ajouter un message confirmé
    $('.add-message-confirm').on('click', () => {
      // Récupérer les valeurs du formulaire
      const type = $('.message-type-dropdown').dropdown('get value');
      const icon = $('.message-icon-dropdown').dropdown('get value');
      const title = $('input[name="message-title"]').val();
      const content = $('textarea[name="message-content"]').val();
      const closeable = $('input[name="message-closeable"]').is(':checked');
  
      // Générer le message
      const message = {
        type: type,
        icon: icon,
        title: title,
        content: content,
        closeable: closeable
      };
  
      // Ajouter le message au tableau et l'afficher
      messages.push(message);
      const messageContainer = $('.message-container');
      messageContainer.empty();
      messages.forEach(function(message) {
        const messageElement = `
          <div class="ui ${message.type} ${message.closeable ? 'closeable' : ''} icon message">
            ${message.icon ? `<i class="${message.icon} icon"></i>` : ''}
            <div class="content">
              ${message.title ? `<div class="header">${message.title}</div>` : ''}
              ${message.content ? `<p>${message.content}</p>` : ''}
            </div>
            ${message.closeable ? '<i class="close icon"></i>' : ''}
          </div>
        `;
        messageContainer.append(messageElement);
      });
      $.toast({
        class: 'success',
        title: `Ajout de message`,
        message: `Le message a été ajouté avec succès`
      });
      // Fermer le modal
      $('.add-message-modal').modal('hide');
  
      // Afficher le message par défaut si aucun message n'a été affiché
      displayDefaultMessage();
    });
  
    // Fermer un message ("this" donc pas de fonctions fléchées)
    $('.message-container').on('click', '.close.icon', function() {
      const index = $(this).closest('.icon.message').index();
      messages.splice(index, 1);
      $(this).closest('.icon.message').remove();
      displayDefaultMessage();
      $.toast({
        class: 'success',
        title: `Suppression de message`,
        message: `Le message a été supprimé avec succès`
      });

    });
  
    // Initialiser les dropdowns
    $('.ui.dropdown').dropdown();
  });
  