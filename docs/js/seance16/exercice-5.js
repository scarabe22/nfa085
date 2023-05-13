$('.ui.dropdown').dropdown();

// const showModal = document.querySelector(".ui.button") 
$('.ui.button').click( () => {
  $('.mini.ui.modal').modal('show');
  $('.ui.dropdown').dropdown();
});

// $('.mini.modal').modal('show');