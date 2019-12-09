// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var infoEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var listEl = document.createElement("ol");
var hour9 = document.createElement("li");
var hour10 = document.createElement("li");
var hour11 = document.createElement("li");
var hour12 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
h1El.textContent = "Day Planner";
h2El.textContent = "This day, month, year";
nameEl.textContent = "his name is Jax";
favoriteEl.textContent = "";
hour9.textContent = "9:00 a.m.";
hour10.textContent = "10:00 a.m.";
hour11.textContent = "11:00 a.m.";
hour12.textContent = "12:00 p.m.";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(hour9);
listEl.appendChild(hour10);
listEl.appendChild(hour11);
listEl.appendChild(hour12);

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background:#333333; padding:20px;");