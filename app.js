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

    listItem.innerHTML('<input type="checkbox"><span class="item-name">'text'</span><input type="button" value="X" class="button delete">');

    // create checkbox
    var check = document.createElement('input'[type='checkbox']);

    // create span
    var itemName = document.createElement('span'["class"='item-name']);

    // create delete button
    var deleteButton = document.createElement('input');

    // append checkbox, span & delete button to li

    // append li to items-list
    listItem.appendChild().appendTo($('#items-list'));

  });
});
