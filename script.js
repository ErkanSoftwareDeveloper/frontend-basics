
// ===== What is JavaScript? ==== //
- JavaScript is used to make websites interactive


/* 
HTML → structure
CSS → design
JavaScript → behavior (logic)

Example:
Button click
Form validation
Animations
*/


// ==== Basics ==== //
let title = document.querySelector("h1"); // Secelts an element
title.textContent = "Hello JavaScript!"; // Changes text
// document = the webpage
// querySelector() = finds element
// textContent = Changes text


// ===== Connect JS to HTML ==== //
<script src="script.js"></script>
// put this before </body> in HTML Folder.


// ==== Variables ==== //
let name = "Erkan";
const age = 25;
// let = can change
// const = cannot change


// ==== Events ==== //
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});
// querSelector finds the button
// addEventListener waits for an action!
// "click" the event!
// function() code that runs
// in simple words: WHEN the button is clicked --> run this code


//  ==== Conditions ==== //
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}
// in simple words: if age is 18 or more --> adult, otherwise --> Child


// ==== Loops (how it works) ==== //
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// i = 0 --> start
// i < 5 --> condition
// i++ --> increase by 1
// in simple words: repeate this code 5 times


// ==== Functions (how it works) ==== //
function sayHello() {
  console.log("Hello!");
}
sayHello();


// ==== Changing CSS with JavaScript ==== //
document.body.style.backgroundColor = "lightblue";
// document.body = the page
// .style = access CSS
// backgroundColor = CSS Property
