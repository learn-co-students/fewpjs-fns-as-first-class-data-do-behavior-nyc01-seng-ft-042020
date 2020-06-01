/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(stringWord) {
  let timeNumber = parseInt(stringWord.split(":")[0])
  if (timeNumber < 12){
    return "Good Morning";
  }
  if (timeNumber >= 12 && timeNumber <= 17) {
    return "Good Afternoon";
  }
  if (timeNumber>17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let input = document.getElementById('greeting')
  input.innerText = string
}