var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

var ourRandomLunchItem = document.createElement('p');
var lunchItemWrapper = document.getElementById('generator-results');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholderText);

//I added some fireworks
var fireworks1 = document.getElementById('first');
var fireworks2 = document.getElementById('last');

var lunchItems = [
  'Mexican Food',
  'Sushi',
  'Chicken Wings',
  'Pizza',
  'Greek Food',
  'Subs or Sandwhiches',
  'Ramen',
  'Pasta',
  'Chinese Food',
  'Salad',
  'Charcuterie',
  'Burger',
];

var myFunction = function() {

  //fireworks

  fireworks1.classList.add('fireworks');
  fireworks2.classList.add('fireworks');

  //Lunch Generator

  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  ourButtonSection.removeChild(button);
  ourRandomLunchItem.classList.add('big-and-bold');

};

button.onclick = myFunction;
