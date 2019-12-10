// Set the clock
var clock = $('#clock');
var day = $('#day');
// var daysAry = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var hour = $('#hour');
// .fitText(1.3);
function update() {
	$('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
	$('#day').html(moment().day());
	$('#hour').html(moment().format('H'));
	//   moment().isoWeekday("Sunday");
}
setInterval(update, 1000);

console.log(moment().format('L'));



// Create all necessary elements
var hourArry = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", "5:00 p.m.", ]
var currentHour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var container = $(".container");

var date = moment("12/25/1995", "MM-DD-YYYY");
console.log(date.text);


// Build timeblocks
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
	textArea.attr('id', (moment().format('D. MMMM YYYY') + ' ' + currentHour[i]) + ':00');
	textArea.text("Write something here");
	row.append(textArea);
	if (currentHour[i] < 12) {
		textArea.addClass("past");
	} else if (currentHour[i] = 12) {
		textArea.addClass("present");
	} else if (currentHour[i] > 12) {
		textArea.addClass("future");
	}

	var saveBtn = $("<button>");
	saveBtn.addClass("saveBtn col-md-1");
	saveBtn.text("Save");
	row.append(saveBtn);

}

// Get user input
$(document).ready(function () {
	$("#saveBtn").click(function () {
		localStorage.setItem($(".textArea"),$("#textArea").val());
	});
});
// Save user input
// lastScore = JSON.parse(localStorage.getItem('lastScore'));

// localStorage.setItem("lastScore", JSON.stringify(lastScore));

// Navigate to different dates