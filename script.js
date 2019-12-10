// Set the clock
var clock = $('#clock');
var day = $('#day');
// var daysAry = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var hour = $('#hour');
// .fitText(1.3);
function update() {
	$('#clock').html(moment().format('MMMM DD YYYY H:mm:ss'));
	$('#day').html(moment().day());
	$('#hour').html(moment().format('H'));
	//   moment().isoWeekday("Sunday");
}
setInterval(update, 1000);

console.log(moment().format('HH'));



// Create all necessary elements
var hourArry = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", "5:00 p.m.", ]
var currentHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var container = $(".container");

var date = moment("12/25/1995", "MM-DD-YYYY");
console.log(date.text);

// FOR MULTI DAY PLANNER ADD NAVIGATE FUNCTIONS: PREV, TODAY, NEXT, AND SEARCH FIELD


// Build timeblocks
// FOR MULTI DAY PLANNER ADD FUNCTION TO BE CALLED ON LOAD AND WHEN NAVIGATE BUTTONS ARE PRESSED
for (let i = 0; i < hourArry.length; i++) {

	var row = $("<div>");
	row.addClass("row");
	container.append(row);

	var timeBlock = $("<div>");
	timeBlock.addClass("time-block col-md-2");
	timeBlock.text(hourArry[i]);
	row.append(timeBlock);

	var textArea = $("<textarea>");
	textArea.addClass("textarea col-md-9");
	textArea.attr('id', hourArry[i]);
	// FOR MULTI DAY PLANNER CHANGE ID TO THIS TO CREATE A UNIQUE ID FOR EVERY TIMEBLOCK MADE
	// textArea.attr('id', moment().format('MMMM DD YYYY') + " " + hourArry[i]);
	textArea.attr("placeholder", "Add to schedule");
	if (localStorage.getItem(hourArry[i]) !== null) {
		textArea.text(localStorage.getItem(hourArry[i]))
		
	}
	row.append(textArea);
	

	
	if (currentHour[i] < parseInt(moment().format('HH'))) {
		textArea.addClass("past");
	} 	else if (currentHour[i] === parseInt(moment().format('HH'))) {
		textArea.addClass("present");
	} 	else if (currentHour[i] > parseInt(moment().format('HH'))) {
		textArea.addClass("future");
	}

	var saveBtn = $("<button>");
	saveBtn.addClass("saveBtn col-md-1");
	saveBtn.text("Save");
	row.append(saveBtn);

}
// }

// Get user input
$(document).ready(function () {
	$(".saveBtn").click(function () {
		localStorage.setItem($(this).parent().children("textarea").attr("id") , $(this).parent().children("textarea").val());
	});
});





