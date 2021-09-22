// set current date at the top of page
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);
console.log(today);

// create current time for color changes
var  currentTime = moment().format("HH");
console.log(currentTime);

// create variable arrays for each hour of the day for local storage
var hrPeriods = [
    {
        id: "0",
        hr: "09",
        time: "09",
        ampm: "am",
        note: ""
    },
    {
        id: "1",
        hr: "10",
        time: "10",
        ampm: "am",
        note: ""
    },
    {
        id: "2",
        hr: "11",
        time: "11",
        ampm: "am",
        note: ""
    },
    {
        id: "3",
        hr: "12",
        time: "12",
        ampm: "pm",
        note: ""
    },
    {
        id: "4",
        hr: "01",
        time: "13",
        ampm: "pm",
        note: ""
    },
    {
        id: "5",
        hr: "02",
        time: "14",
        ampm: "pm",
        note: ""
    },
    {
        id: "5",
        hr: "03",
        time: "15",
        ampm: "pm",
        note: ""
    },
    {
        id: "6",
        hr: "04",
        time: "16",
        ampm: "pm",
        note: ""
    },
    {
        id: "7",
        hr: "05",
        time: "17",
        ampm: "pm",
        note: ""
    },
]

// convert calendar items to string for local storage
function saveCalItems() {
    localStorage.setItem("hrPeriods", JSON.stringify(hrPeriods));
}

// show saved data
function showCalItems() {
    hrPeriods.forEach(function(_thishr) {
        $('#${_thishr.id}').val(_thishr.note);
    })
}

// convert saved items from string to object
function init() {
    var storedCalItem = JSON.parse(localStorage.getItem("hrPeriods"));
    if (storedCalItem) {
        hrPeriods = storedCalItem;
    }
    saveCalItems();
    showCalItems();
}


