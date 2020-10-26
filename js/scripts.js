$(document).ready(function() {
  $("#sentence").submit(function(event){
    event.preventDefault();
    let sentence = $("#sentenceInput").val();
    let array = sentence.split(" ");
    let newArray = [];
    array.forEach(function(element) {
      if (element.length >= 3) {
        newArray.push(element);
      } 
    })
    alert(newArray);
  //  array.forEach(function(item) {
     // $("#list").append("<li>" + item + "</li>");
   // });
   // $("#groceryItems").hide();
   // $("#result").show();
  });
});