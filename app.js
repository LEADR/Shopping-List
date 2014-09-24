$(document).ready(function() {

  // Adding List Items
  var addListItem = function() {
    var text = $('#input-field').val();

    var checkbox = $('<input>').attr('type', 'checkbox');
    var item = $('<span>').addClass('item-name').html(text);
    var deleteButton = $('<input>').attr('type', 'button').addClass('button').addClass('delete').val('X');

    var listItem = $("<li>").append(checkbox).append(item).append(deleteButton);
    $('#items-list').append(listItem);

    $('#input-field').val('');
  };

  $('#add-item').on('click', addListItem);
  $('#input-field').keydown(function(event) {
    if (event.which == '13') {
      addLIstItem();
    }
  });
});
