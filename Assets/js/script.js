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
        hr: "9",
        time: "09",
        ampm: " am",
        notes: ""
    },
    {
        id: "1",
        hr: "10",
        time: "10",
        ampm: " am",
        notes: ""
    },
    {
        id: "2",
        hr: "11",
        time: "11",
        ampm: " am",
        notes: ""
    },
    {
        id: "3",
        hr: "12",
        time: "12",
        ampm: " pm",
        notes: ""
    },
    {
        id: "4",
        hr: "1",
        time: "13",
        ampm: " pm",
        notes: ""
    },
    {
        id: "5",
        hr: "2",
        time: "14",
        ampm: " pm",
        notes: ""
    },
    {
        id: "5",
        hr: "3",
        time: "15",
        ampm: " pm",
        notes: ""
    },
    {
        id: "6",
        hr: "4",
        time: "16",
        ampm: " pm",
        notes: ""
    },
    {
        id: "7",
        hr: "5",
        time: "17",
        ampm: " pm",
        notes: ""
    }
]

// convert calendar items to string for local storage
function saveCalItems() {
    localStorage.setItem("hrPeriods", JSON.stringify(hrPeriods));
}

// show saved data
function showCalItems() {
    hrPeriods.forEach(function(_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.notes);
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

// create time blocks
hrPeriods.forEach(function(thisHour) {
    var hrRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hrRow);

    // time fields
    var hrFields = $("<div>")
    .text(`${thisHour.hr}${thisHour.ampm}`)
    .attr({
        "class": "col-md-2 hour"
    });

    // create cal items
    var hrPlan = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
    });
    var planData = $("<textarea>");
    hrPlan.append(planData);
    planData.attr("id", thisHour.id)
    if (thisHour.time < currentTime) {
        planData.attr ({
            "class": "past",
        })
    } else if (thisHour.time === currentTime) {
        planData.attr({
            "class": "present",
        })
    } else if (thisHour.time > currentTime) {
        planData.attr({
            "class": "future"
        })
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hrRow.append(hrFields, hrPlan, savePlan);

})

init();

// save data for local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    hrPeriods[saveIndex].notes = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);

    saveCalItems();
    showCalItems();
})