$(document).ready(function() {

  // Adding List Items
  addListItem = function() {
    var text = $('#input-field').val();

    var checkbox = $('<input>').attr('type', 'checkbox').addClass('checkbox');
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

  // Checkbox functionality
  $('#items-list').on('change', '.checkbox', function(event) {
    var itemName = $(this).closest('li').children('.item-name');

    if ($(this).prop('checked')) {
      $(itemName).addClass('checked');
    } else {
      $(itemName).removeClass('checked');
    }
  });

  var showWindow = function() {
    $('#delete-window').css('visibility', 'visible');
  };
  var hideWindow = function() {
    $('#delete-window').css('visibility', 'hidden');
  };

  /* $('#dont-ask').change(function() {
    var checked = $('#dont-ask').prop('checked');
    console.log(checked);
    $.cookie('dont-ask', checked);
  }); */

  $('ul').on('click', '.delete', showWindow);
  $('ul').on('click', '.delete', function() {
    var listItem = $(this).closest('li');
    $('#confirm').on('click', function() {
       if ($('#dont-ask').prop('checked')) {
        $('ul').off('click', '.delete', showWindow);
      }
      $(listItem).remove();
      hideWindow();
    });

    $('#cancel').on('click', function() {
      hideWindow();
    });
  });



  /* // Delete button functionality
  $('ul').on('click', '.delete', function() {

    var listItem = $(this).closest('li');

    if ($('#dont-ask').prop(':checked')) {
      $(listItem).remove();
    } else {
      showWindow();
      $('#confirm').on('click', function() {
        $(listItem).remove();
        hideWindow();
      });

      $('#cancel').on('click', function() {
        hideWindow();
      });
    }
  }); */
});
