console.log("hello");
$(document).ready(function() {
    // Variables globales
    let baseUrl = 'https://jsonplaceholder.typicode.com/';
    let currentDataType = 'users';
    let hiddenColumns = [];
  
    // Chargement initial des utilisateurs
    loadData(currentDataType);
  
    // Sélection d'un type de données dans le dropdown
    $('#selected-data').dropdown({
      onChange: function(value) {
        currentDataType = value;
        loadData(currentDataType);
      }
    });
  
    // Options de la table
    $('#menu-options').dropdown({
      onChange: function(value) {
        let table = $('.ui.table');
        table.removeClass('selectable celled structured inverted compact striped definition');
        table.removeClass('red orange yellow olive green cyan blue violet magenta pink brown grey black');
        table.addClass(value);
      }
    });
  
    // Masquage des colonnes
    $('#hidden-fields').dropdown({
      onChange: function(value, _text, $choice) {
        if (value !== '') {
          hideColumn(value);
          $choice.remove();
        }
      }
    });
  
    // Affichage d'une colonne masquée
    $(document).on('click', '#hidden-fields .menu .item', function() {
      let column = $(this).data('value');
      showColumn(column);
    });
  
    // Chargement des données depuis l'API et affichage dans la table
    function loadData(dataType) {
      let url = baseUrl + dataType;
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          displayData(data);
        },
        error: function(_xhr, _status, error) {
          console.log(error);
        }
      });
    }
  
    
// Affichage des données dans la table
function displayData(data) {
    let columns = getColumnsFromData(data);
    let tableHead = $('.ui.table thead');
    let tableBody = $('#data-body');
  
    // Réinitialisation des colonnes masquées
    hiddenColumns = [];
  
    // Construction de l'en-tête de la table
    tableHead.empty();
    let tableHeaderRow = $('<tr class="table-header"></tr>');
    columns.forEach(function(column) {
      let columnCheckbox = $('<input type="checkbox" name="' + column + '" class="column-toggle" data-column="' + column + '">');
      let columnLabel = $('<label>' + column + '</label>');
      let columnCell = $('<th></th>').append($('<div class="ui checkbox"></div>').append(columnCheckbox).append(columnLabel));
      if (hiddenColumns.includes(column)) {
        columnCell.addClass('hidden-column');
      } else {
        columnCheckbox.prop('checked', true);
      }
      tableHeaderRow.append(columnCell);
    });
    tableHead.append(tableHeaderRow);
  
    // Construction du corps de la table
    tableBody.empty();
    data.forEach(function(item) {
      let tableRow = $('<tr></tr>');
      columns.forEach(function(column) {
        let columnValue = item[column];
        if (typeof columnValue === 'object' && columnValue !== null) {
          if (column === 'address') {
            columnValue = columnValue.street + ', ' + columnValue.suite + ', ' + columnValue.city + ', ' + columnValue.zipcode;
          } else if (column === 'company') {
            columnValue = columnValue.name + ' - ' + columnValue.catchPhrase + ' - ' + columnValue.bs;
          }
        }
        let tableCell = $('<td>' + columnValue + '</td>');
        tableRow.append(tableCell);
      });
      tableBody.append(tableRow);
    });
  
    // Mise à jour du dropdown hidden-fields
    let hiddenFieldsDropdown = $('#hidden-fields');
    hiddenFieldsDropdown.dropdown('clear');
    hiddenFieldsDropdown.dropdown('refresh');
    hiddenFieldsDropdown.dropdown('set selected', hiddenColumns);
  }
  
  // Gestion de l'événement de changement d'état de la case à cocher des colonnes
  $(document).on('change', '.column-toggle', function() {
    let column = $(this).data('column');
    if ($(this).is(':checked')) {
      showColumn(column);
    } else {
      hideColumn(column);
    }
  });
  

    // Récupération des colonnes présentes dans les données
    function getColumnsFromData(data) {
      let columns = [];
      if (data.length > 0) {
        let firstItem = data[0];
        for (let key in firstItem) {
          columns.push(key);
        }
      }
      return columns;
    }
  
    // Masquage d'une colonne de la table
    function hideColumn(column) {
      let table = $('.ui.table');
      table.find('th, td').filter(':nth-child(' + (getColumnIndex(column) + 1) + ')').hide();
      hiddenColumns.push(column);
    }
  
    // Affichage d'une colonne de la table
    function showColumn(column) {
      let table = $('.ui.table');
      table.find('th, td').filter(':nth-child(' + (getColumnIndex(column) + 1) + ')').show();
      hiddenColumns = hiddenColumns.filter(function(item) {
        return item !== column;
      });
    }
  
    // Récupération de l'index d'une colonne dans la table
    function getColumnIndex(column) {
      let table = $('.ui.table');
      let headers = table.find('th');
      let columnIndex = -1;
      headers.each(function(index) {
        let header = $(this);
        if (header.text() === column) {
          columnIndex = index;
          return false; // Sortir de la boucle each
        }
      });
      return columnIndex;
    }
  });
  

  
  


  
 
  

  
  