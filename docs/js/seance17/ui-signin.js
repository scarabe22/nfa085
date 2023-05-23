$(document).ready(function() {
  // Activation de la validation inline
  $('.ui.form').form({
    inline: true,
    on: 'blur',
    fields: {
      'last-name': {
        identifier: 'last-name',
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer un nom'
          }
        ]
      },
      'first-name': {
        identifier: 'first-name',
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer un prénom'
          }
        ]
      },
      'email': {
        identifier: 'email',
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer une adresse email'
          },
          {
            type: 'email',
            prompt: 'Veuillez entrer une adresse email valide'
          }
        ]
      },
      'phone': {
        identifier: 'phone',
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer un numéro de téléphone'
          },
          {
            type: 'regExp[/^(?:\\d{10}|\\d{2}[\\s\\.]\\d{2}[\\s\\.]\\d{2}[\\s\\.]\\d{2})$/]',
            prompt: 'Le téléphone doit contenir 10 chiffres'
          }
        ]
      },
      'password': {
        identifier: 'password',
        rules: [
          {
            type: 'minLength[6]',
            prompt: 'Le mot de passe doit contenir au moins 6 caractères'
          },
          {
            type: 'regExp[/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/]',
            prompt: 'Le mot de passe doit contenir au moins 1 chiffre, 1 majuscule et 1 caractère spécial'
          }
        ]
      },
      'confirm-password': {
        identifier: 'confirm-password',
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer la confirmation du mot de passe'
          },
          {
            type: 'match[password]',
            prompt: 'La confirmation du mot de passe doit être identique au mot de passe'
          }
        ]
      },
      'age': {
        identifier: 'age',
        optional: true,
        rules: [
          {
            type: 'empty',
            prompt: 'Veuillez entrer un âge'
          },
          {
            type: 'integer[1..120]',
            prompt: 'Veuillez entrer un âge valide'
          }
        ]
      },
      'terms': {
        identifier: 'terms',
        rules: [
          {
            type: 'checked',
            prompt: 'Vous devez accepter les conditions d\'utilisation'
          }
        ]
      }
    }
  });

// Soumission du formulaire
const form = document.querySelector('form');
const data = new FormData(form);

fetch('create-account.php', {
  method: 'POST',
  body: data
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error);
});
      });
      
     
// Initialisation des  Tab      
$('.menu .item')
.tab()
;

// Initialisation des checkbox type radio
$('.ui.radio.checkbox')
  .checkbox()
;

