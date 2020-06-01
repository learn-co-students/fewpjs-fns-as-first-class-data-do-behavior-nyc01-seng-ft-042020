/* Given Code, don't edit */

document.querySelector('button').addEventListener('click', handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here... */

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split(':');
  if (time[0] < 12) {
    return 'Good Morning';
  }
  if (time[0] < 17) {
    return 'Good Afternoon';
  }
  return 'Good Evening';
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const h1 = document.getElementById('greeting');
  h1.innerText = string;
}
