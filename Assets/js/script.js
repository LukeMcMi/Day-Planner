// set current date at the top of page
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);
console.log(today);

// create current time for color changes
var  currentTime = moment().format("HH");
console.log(currentTime);