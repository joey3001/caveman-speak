$(document).ready(function() {
  $("#groceryItems").submit(function(event){
    event.preventDefault();
    let array = [$("#itemOne").val(),$("#itemTwo").val(),$("#itemThree").val(),$("#itemFour").val()];
    array.sort();
    array.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });
    $("#groceryItems").hide();
    $("#result").show();
  });
});