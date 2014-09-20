$(document).ready(function() {
  $('add-item').on('click', function() {
    var text = $('#input-field').val();

    // assign properties to checkbox
    function checkbox() {
      this.type = 'checkbox';
    }

    // assign properties to span

    // assign properties to delete button

    // create li
    var listItem = document.createElement('li');

    // create checkbox
    var check = document.createElement('input');

    // create span
    var itemName = document.createElement('span');

    // create delete button
    var deleteButton = document.createElement('input');

    // append checkbox, span & delete button to li

    // append li to items-list
    listItem.appendChild().appendTo($('#items-list'));

  });
});
