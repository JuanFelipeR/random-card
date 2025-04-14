import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard ();
};
function generateCard () {
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let suits = ['♦', '♥', '♠', '♣'];

  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomSuit = Math.floor(Math.random() * suits.length);

  document.querySelector('.top').textContent = suits[randomSuit];
  document.querySelector('.card-number').textContent = numbers[randomNumber];
  document.querySelector('.bottom').textContent = suits[randomSuit];

  if (suits[randomSuit] === '♦' || suits[randomSuit] === '♥') {
      document.querySelector('.top').style.color = 'red';
      document.querySelector('.bottom').style.color = 'red';
      document.querySelector('.card-number').style.color = 'red';
  }
  else {
      document.querySelector('.top').style.color = 'black';
      document.querySelector('.bottom').style.color = 'black';
      document.querySelector('.card-number').style.color = 'black';
  }

  setInterval(generateCard, 10000); // temporizador
};