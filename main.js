console.log("I'm here!")
$("h1").html("Hello friends");
 var data;

//append

var foods = ["apple", "banana", "carrot", "danish", "egg"];

for (var i= 0; i < foods.length; i++) {
  $("ul").append(`<li>${foods[i]}</li>`);
}

$("ul").wrap(`<div class="foods"></div>`);

$(":text").val("Thing I want it to be");

$(":submit").click(function () {
  console.log($(":text").val());
});




$.getJSON("https://randomuser.me/api/?nat=us", function (data) {
  console.log(data);
  $("h1").last().html(`hello ${data.results[0].name.first}`);
});
