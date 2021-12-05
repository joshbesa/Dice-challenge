alert("Hello");

// generate random 1-6
const firstRandomNumber = Math.floor(Math.random()*6) + 1
//generate image from dice 1-6
const firstDiceImage='images/dice' +firstRandomNumber+ '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//second Player

const secondRandomNumber = Math.floor(Math.random()*6) + 1
//generate image from dice 1-6
const secondDiceImage='images/dice' +secondRandomNumber+ '.png';

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

// winner
if (firstRandomNumber > secondRandomNumber)
{
  document.querySelector('h1').innerHTML = 'The Winner is Player 1 🏆'
}
if (secondRandomNumber > firstRandomNumber)
{
  document.querySelector('h1').innerHTML = 'The Winner is Player 2 🏆'
}
if (firstRandomNumber = secondRandomNumber)
{
  document.querySelector('h1').innerHTML = 'Draw 🤡'
}
