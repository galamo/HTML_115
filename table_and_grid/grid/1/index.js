// Define an array of colors
const colors = [
  "lightblue",
  "lightgreen",
  "lightcoral",
  "lightyellow",
  "black",
  "red",
  "pink",
];

// Get all the child divs under the wrapper class
const divs = document.querySelectorAll(".container > div");

// Loop through each div and assign a background color
divs.forEach((div, index) => {
  const color = colors[index % colors.length]; // Cycle through colors
  div.style.backgroundColor = color;
});
