//Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const colors = ['red', 'green', 'blue', 'black', 'grey', 'pink', 'orange', 'purple'];
const H1 = document.querySelector('h1'); // select the h1 element
let inside = H1.innerHTML // get the innerHTML of the h1 element
let num = inside.match(/\d+/g) // get the number from the innerHTML of the h1 element
inside = inside.replace(num, `<span class="num">${num}</span>`) // replace the number with a span element
H1.innerHTML = inside // set the innerHTML of the h1 element to the new innerHTML
const numSpan = document.querySelector('.num') // select the span element
let random = 0;
function changeColor() {  // function to change the color of the year
  numSpan.style.color = colors[random]; // set the color of the span element to the color in the colors array
  random++; // increment the random variable
  if (random === colors.length) { // if the random variable is equal to the length of the colors array
    random = 0; // set the random variable to 0
  }
}
setInterval(changeColor, 1000);   // set the changeColor function to run every 1 second
numSpan.style.fontSize = '70px'; // set the font size of the span element to 70px 
numSpan.style.fontFamily = 'Courier New'; // set the font family of the span element to Courier New

const body = document.querySelector('body'); // select the body element
body.style.textAlign = 'center'; // set the textAlign of the body element to center
const unorderedList = document.querySelector('ul'); // select the ul element
unorderedList.style.listStyleType = 'none'; // set the listStyleType of the ul element to none
unorderedList.style.margin = 'auto 300px'; // set the margin of the ul element to 0 
unorderedList.style.textAlign = 'start'; // set the textAlign of the ul element to start
unorderedList.style.padding = '0'; // set the padding of the ul element to 0
for (let i = 0; i < unorderedList.children.length; i++) {
  unorderedList.children[i].style.padding = '18px'; // set the padding of the ul element to 0
  unorderedList.children[i].style.margin = '3px auto'; // set the margin of the ul element to 0
}
for (let i = 0; i < unorderedList.children.length; i++) {
  if (unorderedList.children[i].innerHTML.includes('Done'))  // if the first child of the ul element is completed
    unorderedList.children[i].style.backgroundColor = 'MediumSeaGreen'; // set the backgroundColor of the first child of the ul element to green
  else if (unorderedList.children[i].innerHTML.includes('Ongoing'))  // if the second child of the ul element is ongoing
    unorderedList.children[i].style.backgroundColor = 'Yellow'; // set the backgroundColor of the second child of the ul element to yellow
  else if (unorderedList.children[i].innerHTML.includes('Coming'))  // if the third child of the ul element is coming
    unorderedList.children[i].style.backgroundColor = 'tomato'; // set the backgroundColor of the third child of the ul element to red
}
const H2 = document.querySelector('h2'); // select the H2 element
H2.style.textDecoration = 'underline'; // set the textDecoration of the H2 element to underline
H2.style.cursor = 'pointer'; // set the cursor of the H2 element to pointer
H2.style.fontWeight = 'lighter'; // set the fontWeight of the H2 element to lighter
H2.style.fontSize = '18px'; // set the fontWeight of the H2 element to thin
H2.style.fontFamily = 'Courier New'; // set the fontFamily of the H2 element to Courier New
const newDivForDate = document.createElement('div'); // create a new div element
const newDivForDateInner = document.createElement('div'); // create a new div element

function getMeTime() {
  let time = new Date(); // create a new date object
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // create an array of months
  let month = months[time.getMonth()]; // get the month from the time object
  let day = time.getDate(); // get the day from the time object
  let year = time.getFullYear(); // get the year from the time object
  let hours = time.getHours(); // get the hours from the time object
  let minutes = time.getMinutes(); // get the minutes from the time object
  let seconds = time.getSeconds(); // get the seconds from the time object
  let date = `${month} ${day}, ${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // create a string of the date
  newDivForDateInner.innerHTML = date; // set the innerHTML of the new div element to Date and Time
  newDivForDateInner.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // set the backgroundColor of the new div element to a random color
}
setInterval(getMeTime, 1000); // set the getMeTime function to run every 1 second



newDivForDateInner.style.fontSize = '12px'; // set the fontSize of the new div element to 20px
newDivForDateInner.style.fontFamily = 'Arial'; // set the fontFamily of the new div element to Arial
const wrapper = document.querySelector('.wrapper'); // select the wrapper element
wrapper.appendChild(newDivForDate); // append the new div element to the body element
newDivForDate.appendChild(newDivForDateInner); // append the new div element to the new div element
wrapper.insertBefore(newDivForDate, wrapper.children[2]); // append the new div element to the body element
newDivForDate.style.padding = '5px'; // set the padding of the new div element to 20px
newDivForDateInner.style.padding = '5px'; // set the padding of the new div element to 20px
newDivForDateInner.style.borderRadius = '2px'; // set the borderRadius of the new div element to 2px
newDivForDateInner.style.width = '200px'; // set the width of the new div element to 100px
newDivForDate.style.display = 'flex'; // set the display of the new div element to flex
newDivForDate.style.justifyContent = 'center'; // set the justifyContent of the new div element to center
newDivForDate.style.alignItems = 'center'; // set the alignItems of the new div element to center
newDivForDate.style.margin = '10px 300px 10px'