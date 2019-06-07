function playSound(e) {
  //console keyboardEvent with object containing key(a,b,c,etc), and keycode
  console.log(e);
  //console.log(e.keycode);
  //Listen for one if wanted all: querySelectorAll
  //select audio element with attr selector [] and set data attribute with template literals
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //stops the function from rrunning all together
  //key.addCLass("playing")<-jquery method VJS way:
  key.classList.add("playing");
  //REWIND TO START SO IF HIT IN SUCCESSION REWIND TO START
  audio.currentTime = 0; //rewind to start
  audio.play();
}
//add function for eventListener when transition ends
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip ig not a transform
  console.log(e.propertyName);
  //this equal to whatever got called against it
  this.classList.remove("playing");
}
//use transition end event(listen on each key when transition event ends) when playing is done
//gives array of every element matched
const keys = document.querySelectorAll(".key");
//array of elements must loop through each so use ES6
// => arrow function
//each key gets event added, when transition is ending then remove
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//when key down play function
window.addEventListener("keydown", playSound, false);
