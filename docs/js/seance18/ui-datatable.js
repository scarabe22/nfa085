$(document).ready(function () {
    const baseApiUrl = "https://jsonplaceholder.typicode.com/";
    let selectedDataType = "users";
    let hiddenColumns = [];
  
    // Fonction pour afficher les données dans la table
    function displayData(data) {
        let tableBody = $("#data-body");
        tableBody.empty(); // Clear existing table data
      
        // Iterate over the data array and create a table row for each item
        data.forEach(function (item) {
          var rowData = "<tr>";
          rowData += "<td>" + item.id + "</td>";
          rowData += "<td>" + item.name + "</td>";
          rowData += "<td>" + item.username + "</td>";
          rowData += "<td>" + item.email + "</td>";
          rowData += "<td>" + item.phone + "</td>";
          rowData += "<td>" + item.website + "</td>";
          rowData += "</tr>";
          tableBody.append(rowData);
        });
      }

    // Activation du dropdown menu-options
  $("#menu-options").dropdown({
    onChange: function (value) {
      updateTableOptions(value);
    },
  });
  
    // Fonction pour charger les données depuis l'API
    
       
        // Chargement des données
        function loadData(dataType) {
          let url = "https://jsonplaceholder.typicode.com/" + dataType;
      
          $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(data) {
              displayData(data);
            },
            error: function(xhr, status, error) {
              console.log("Erreur lors du chargement des données :", error);
            }
          });
        }
      
        // ...
      
        //  #selected-data
        $("#selected-data").dropdown({
          onChange: function(value) {
            if (value === "users") {
              loadData(value);
            } else {
              // Les autres types de données nécessitent une colonne spécifique pour l'affichage
              let column = value === "comments" ? "body" :
                           value === "albums" ? "title" :
                           value === "photos" ? "url" :
                           value === "todos" ? "title" :
                           "";
              if (column !== "") {
                $.ajax({
                  url: "https://jsonplaceholder.typicode.com/" + value,
                  type: "GET",
                  dataType: "json",
                  success: function(data) {
                    var transformedData = data.map(function(item) {
                      return item[column];
                    });
                    displayData(transformedData);
                  },
                  error: function(_xhr, _status, error) {
                    console.log("Erreur lors du chargement des données :", error);
                  }
                });
              }
            }
          }
        });
      
        
      
        // Chargement des données initiales (users)
        loadData("users");
        loadData("posts")
        loadData("comments")
        loadData("albums")
        loadData("photos")
        loadData("todos")
      
      
  
      
  
    // Fonction pour obtenir les colonnes à partir des données
    function getColumnsFromData(data) {
      if (data.length === 0) return [];
  
      return Object.keys(data[0]);
    }
  
    // Fonction pour masquer une colonne de la table
    function hideColumn(column) {
      if (!hiddenColumns.includes(column)) {
        hiddenColumns.push(column);
        updateHiddenFieldsDropdown();
        showHideColumns();
      }
    }
  
    // Fonction pour afficher une colonne de la table
    function showColumn(column) {
      const index = hiddenColumns.indexOf(column);
      if (index !== -1) {
        hiddenColumns.splice(index, 1);
        updateHiddenFieldsDropdown();
        showHideColumns();
      }
    }
  
    // Fonction pour afficher ou masquer les colonnes de la table en fonction des colonnes cachées
    function showHideColumns() {
      const columns = $("#data-body tr:first-child td");
      columns.each(function () {
        const columnName = $(this).text();
        if (hiddenColumns.includes(columnName)) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
  
    // Fonction pour mettre à jour le dropdown des colonnes masquées
    function updateHiddenFieldsDropdown(columns) {
        let dropdown = $("#hidden-fields");
        let selectedValues = dropdown.dropdown("get value") || [];
        let optionsHtml = "";
    
        // Générer les options du dropdown à partir des colonnes disponibles
        columns.forEach(function(column) {
          let isChecked = selectedValues.includes(column) ? "checked" : "";
          optionsHtml += `<div class="item" data-value="${column}">${column}</div>`;
        });
    
        // Mettre à jour les options du dropdown et le rafraîchir
        dropdown.find(".menu").html(optionsHtml);
        dropdown.dropdown("refresh");
      }
  
    // Chargement initial des utilisateurs
    loadData(selectedDataType);
  
    // Gestion des événements
  
    // Chargement des données sur sélection d'un item du dropdown selected-data
    $("#selected-data").dropdown({
      onChange: function (value) {
        selectedDataType = value;
        loadData(selectedDataType);
      },
    });
  
    // Masquage de colonnes sur click sur la case à cocher des en-têtes de colonnes
    $(".column-toggle").on("click", function () {
      const column = $(this).data("column");
      hideColumn(column);
    });
  
        // Affichage d'une colonne masquée sur suppression de l'item dans le dropdown hidden-fields
        $("#hidden-fields").dropdown({
            onRemove: function (value) {
              showColumn(value);
            },
          });
      
          // Reset de la table et des colonnes masquées lors du click sur le bouton "Reset"
          $("#reset-btn").on("click", function () {
            hiddenColumns = [];
            updateHiddenFieldsDropdown();
            showHideColumns();
          });
    });
      function updateTableOptions(value) {
        // Remove all existing table options classes
        $("table.ui.table").removeClass("selectable celled structured inverted compact striped definition red orange yellow olive green cyan blue violet magenta pink brown grey black");
      
        // Apply the selected table option class
        if (value !== "") {
          $("table.ui.table").addClass(value);
        }
      }
      