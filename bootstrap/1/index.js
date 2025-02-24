// Define an array of colors

function test() {
    console.log("test")
}

const colors = [
    "lightblue",
    "lightgreen",
    "red",
    "gray",
    "black",
    "green",
    "pink",
];

// Get all the child divs under the wrapper class
const divs = document.querySelectorAll(".container  div");

// Loop through each div and assign a background color
divs.forEach((div, index) => {
    const color = colors[index % colors.length]; // Cycle through colors
    div.style.backgroundColor = color;
});
