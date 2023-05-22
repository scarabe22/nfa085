console.log('hello')
$(document).ready(function() {
  $('.menu .item').tab();

  $('#markdown-input').on('input', function () {
    let markdown = $(this).val();
    let html = convertMarkdown(markdown);
    $('#preview').html(html);
  });
  
  // Insertion des éléments Markdown
  $('.menu-insert').on('click', function () {
    let markdownElement = $(this).data('markdown');
    let textarea = $('#markdown-input');
    let currentPosition = textarea.prop('selectionStart');
    let newValue =
        textarea.val().substring(0, currentPosition) +
        markdownElement +
        textarea.val().substring(currentPosition);
    textarea.val(newValue);
    textarea.focus();
    textarea.prop('selectionStart', currentPosition + markdownElement.length);
    textarea.prop('selectionEnd', currentPosition + markdownElement.length);
    let markdown = textarea.val();
    let html = convertMarkdown(markdown);
    $('#preview').html(html);
  });

  $('#markdown-form').submit(function (e) {
    e.preventDefault();
    let markdown = $('#markdown-input').val();
    let html = convertMarkdown(markdown);
    $('#preview').html(html);
    $('<input>').attr({
      type: 'hidden',
      name: 'html',
      value: html
    }).appendTo('#markdown-form');
    $(this).unbind('submit').submit();
  });

  
  function convertMarkdown(markdown) {
    let converter = new showdown.Converter();
    converter.setOption('tables', true);
    converter.setOption('tasklists', true);
    converter.setOption('strikethrough', true);
    let html = converter.makeHtml(markdown);
    html = html.replace('<img', '<img style="max-width: 10%; height: auto;"');
    
    // Mise à jour du contenu de la balise textarea cachée
    $('#preview-html').val(html);
    
    return html;
  }
})

// Le filtrage ne peut se faire que du côté serveur. 