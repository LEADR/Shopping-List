// Option 1
var listItem = $("<li>").html(text);
$("#items-list").append(listItem);

// Option 2
$("#items-list").append("<li>" + text + "</li>");

// Your Code
var checkbox = $("<input>").attr("type","checkbox");
var item = $("<span>").addClass("item-name").html(text);
var remove = $("<input>").attr("type","button").addClass("button").addClass("delete").val("X");

var listItem = $("<li>").append(checkbox).append(item).append(remove);
$("#items-list").append(listItem);

$("#input-field").val("");


// Clear Button
$("#items-list").html("");