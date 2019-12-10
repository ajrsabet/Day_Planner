// Set the body to a variable
// var container = $(".container");
// Create all necessary elements
var hourArry = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", "5:00 p.m.", ]
var container = $(".container");

// h2Date.text("This day, month, year");
$("#currentDay").text("This day, month, year");

// template
// var var1 = $("<div>");
// 	var1.addClass("row");
// 	var1.text("test");
// 	parent.append(var1);

for (let i = 0; i < hourArry.length; i++) {
	var row = $("<div>");
	row.addClass("row");
	container.append(row);

	var timeBlock = $("<div>");
	timeBlock.addClass("time-block column");
	timeBlock.text(hourArry[i])
	row.append(timeBlock)
	
	var textArea = $("<div>");
	textArea.addClass("textarea column");
	textArea.text("Write something here")
	row.append(textArea)
	
	var saveBtn = $("<button>");
	saveBtn.addClass("saveBtn column");
	saveBtn.text("Save")
	row.append(saveBtn)
	
}

