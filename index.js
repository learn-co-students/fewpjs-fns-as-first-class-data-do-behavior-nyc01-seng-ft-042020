/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let greetTime = time.split(':');
  let hour = parseInt(greetTime[0], 10);
  if (hour > 17 )
    return 'Good Evening';
  if (hour < 12)
    return 'Good Morning';
  return 'Good Afternoon';
}


function displayMessage(message){
  let greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
