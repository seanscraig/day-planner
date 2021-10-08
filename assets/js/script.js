var currentDate = moment().format("MMMM Do YYYY");

// set the current time
$("#currentDay").text(currentDate);

// make sure the document is loaded before manipulating it
$(document).ready(function () {
  function time() {
    var currentTime = moment().hour();

    // loop through timeblocks
    $(".time-block").each(function () {
      // pull out the int from the timeblock id
      var timeBlock = parseInt($(this).attr("id"));

      //check to see if the timeblock is in the past present or future
      if (timeBlock < currentTime) {
        $(this).addClass("past");
      } else if (timeBlock === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // when the save button is clicked it
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    if (text === "") {
      alert("no event to save");
    } else {
      localStorage.setItem(time, text);

      alert("event saved");
    }
  });

  console.log(localStorage.getItem("9hour"));
  $("#9hour .description").val(localStorage.getItem("9hour"));
  $("#10hour .description").val(localStorage.getItem("10hour"));
  $("#11hour .description").val(localStorage.getItem("11hour"));
  $("#12hour .description").val(localStorage.getItem("12hour"));
  $("#13hour .description").val(localStorage.getItem("13hour"));
  $("#14hour .description").val(localStorage.getItem("14hour"));
  $("#15hour .description").val(localStorage.getItem("15hour"));
  $("#16hour .description").val(localStorage.getItem("16hour"));
  $("#17hour .description").val(localStorage.getItem("17hour"));

  time();
});
