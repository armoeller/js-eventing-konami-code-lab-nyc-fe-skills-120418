const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

//2 - make the function to trigger
const checkKeyCode = (event) => {
  //we need to know where we are in the sequence
  const whatTheyPressed = event.keyCode
  if (whatTheyPressed === code[tracker]){
    tracker += 1
  } else {
    tracker = 0
  }
  console.log(tracker)
}

function init() {
  // Write your JavaScript code inside the init() function
  //keydown
  // 1 - find an elemnt? nope we're just need the document.
  
  document.addEventListener('keydown', checkKeyCode)
  }

init()
