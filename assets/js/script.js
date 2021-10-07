var currentDate = moment().format("MMMM Do YYYY");

$("#currentDay").text(currentDate);

$(document).ready(function () {
  function time() {
    var currentTime = moment().hour();

    //debug stuff
    var debugTime = moment().set("hour", 10).hour();
    currentTime = debugTime;
    console.log("current time is " + currentTime);

    // loop through timeblocks
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id"));
      // console.log(timeBlock);
      if (timeBlock < currentTime) {
        $(this).addClass("past");
        // $(this).attr("disabled", "disabled");
      } else if (timeBlock === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  time();
});
