var currentDay = $("#currentDay");
var today = moment();
var currentTime = moment().format("HH");
console.log(currentTime);
var hrBlock = $(".timeBlock");
var saveButton = $(".save-button");
var toDoBlock = $("toDoBlock");

// display current day to the jumbotron
currentDay.text(today.format("MMM Do, YYYY"));

// compare the current time to each time block and apply css accordingly
hrBlock.each(function () {
  var timeBlock = $(this).attr("id").split(" ");

  if (currentTime == timeBlock) {
    $(this).addClass("present");
  } else if (currentTime < timeBlock) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentTime > timeBlock) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

// when a user inputs something into the text field, save it to local storage so that it remains
saveButton.click(function (event) {
  event.preventDefault();
  var input = $(this).parent().siblings(".toDoBlock").children(".to-do").val();
  console.log(input);
  var hour = $(this).parent().parent().attr("id").split(" ");
  localStorage.setItem(hour, input);
});

$("#08 .to-do").val(localStorage.getItem("08"));
$("#09 .to-do").val(localStorage.getItem("09"));
$("#10 .to-do").val(localStorage.getItem("10"));
$("#11 .to-do").val(localStorage.getItem("11"));
$("#12 .to-do").val(localStorage.getItem("12"));
$("#13 .to-do").val(localStorage.getItem("13"));
$("#14 .to-do").val(localStorage.getItem("14"));
$("#15 .to-do").val(localStorage.getItem("15"));
$("#16 .to-do").val(localStorage.getItem("16"));
$("#17 .to-do").val(localStorage.getItem("17"));
$("#18 .to-do").val(localStorage.getItem("18"));
