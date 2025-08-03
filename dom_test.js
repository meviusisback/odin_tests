/* a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
 */

// your JavaScript file
const container = document.querySelector("#container");

// div
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// p

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

// h3
const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "I'm a blue h3!";
container.appendChild(header);

// div 2

const divider = document.createElement("div");
divider.style.border = "1px solid black";
divider.style.backgroundColor = "pink";
divider.classList.add("divider");

const insideH = document.createElement("h1");
insideH.textContent = "I'm in a div";

const insideP = document.createElement("p");
insideP.textContent = "ME TOO!";

// Append children to the new div before appending it to the container
divider.appendChild(insideH);
divider.appendChild(insideP);

container.appendChild(divider);

// button js

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
