/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timeNumber = parseInt(time.split(":")[0])
  if (timeNumber < 12)
    return "Good Morning"
  if (timeNumber > 12 && timeNumber < 17)
    return "Good Afternoon"
  if (timeNumber > 17)
    return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let el = document.getElementById('greeting')
  el.innerText = message
}