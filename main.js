var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var myFunction = function() {
  myHeading.classList.add('big-and-bold')

};

button.onclick = myFunction;
