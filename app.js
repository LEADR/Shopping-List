$(document).ready(function() {

  // Adding List Items
  addListItem = function() {
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
      addListItem();
    }
  });

  // Change text-decoration via checkbox
  $('.checkbox').change(function(event) {
    var itemName = $(this).closest('li').children('.item-name');


    if ( null /* change from null */
      // check for "checked" on $(this)
    ) {
      $(itemName).addClass('checked');
    } else {
      $(itemName).removeClass('checked');
    }
  });

  // Add delete button functionality
  // Add confirmation alert
    // Add "don't ask again" checkbox
});
