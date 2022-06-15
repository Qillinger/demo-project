const cardArray = [
  {
    name: 'fries',
    img: 'photo/fries.png',
  },
  {
    name: 'pizza',
    img: 'photo/pizza.png',
  },
  {
    name: 'milkshake',
    img: 'photo/milkshake.png',
  },
  {
    name: 'ice-cream',
    img: 'photo/ice-cream.png',
  },
  {
    name: 'hotdog',
    img: 'photo/hotdog.png',
  },
  {
    name: 'cheeseburger',
    img: 'photo/cheeseburger.png',
  },
  {
    name: 'fries',
    img: 'photo/fries.png',
  },
  {
    name: 'pizza',
    img: 'photo/pizza.png',
  },
  {
    name: 'milkshake',
    img: 'photo/milkshake.png',
  },
  {
    name: 'ice-cream',
    img: 'photo/ice-cream.png',
  },
  {
    name: 'hotdog',
    img: 'photo/hotdog.png',
  },
  {
    name: 'cheeseburger',
    img: 'photo/cheeseburger.png',
   },
]

let cardChosen = []
const gridDisplay= document.getElementById('grid');
let cardChosenIds = []
const cardsWon = []
const resultDisplay = document.querySelector('#result')

cardArray.sort (() => 0.5 - Math.random())

function createBoard () {
  for(let i=0; i<12; i++){
    const card = document.createElement('img')
    card.setAttribute('src','photo/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardChosenIds[0]
  const optionTwoId = cardChosenIds[1]

  if (optionOneId == optionTwoId) {
    alert('You can click the same image')
    cards[optionOneId].setAttribute('src', 'photo/blank.png')
    cards[optionTwoId].setAttribute('src', 'photo/blank.png')

  }
  
  if(cardChosen[0] == cardChosen[1]){
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'photo/white.png')
    cards[optionTwoId].setAttribute('src', 'photo/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'photo/blank.png')
    cards[optionTwoId].setAttribute('src', 'photo/blank.png')
    alert('Sorry try again')

  }
  resultDisplay.textContent = cardsWon.length
  cardChosen = []
  cardChosenIds = []

  if (cardsWon.length == (cardArray.length/2)){
    resultDisplay.textContent = 'Congratulations you found them all!'
  }
}

function flipCard () {
  const cardID = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardID].name)
  this.setAttribute('src', cardArray[cardID].img)
  cardChosenIds.push(cardID)
  console.log(cardChosenIds)

  if(cardChosen.length === 2){
    setTimeout( checkMatch, 500)
  }
}






























/*const computerChoiseDisplay = document.getElementById('computer-choise');
const userChoiseDisplay = document.getElementById('user-choise');
const resultDisplay = document.getElementById('result');
const possibleChoise = document.querySelectorAll('button');
console.log (possibleChoise, userChoiseDisplay, possibleChoise.length);
let userChoise;
let computerChoise;
let result;

possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
userChoise = e.target.id;
userChoiseDisplay.innerHTML = userChoise;
generateComputerChoise();
getREsult();
}))

function generateComputerChoise() {
  const randomNumber = Math.floor(Math.random() * possibleChoise.length + 1);
  if(randomNumber === 1) {
    computerChoise = 'rock'
  }
  if(randomNumber === 2) { 
    result = 'Its a draw'
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'rock' && userChoise === 'paper'){
    result = "You win";
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'rock' && userChoise === 'scissors'){
    result = 'Computer win';
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'paper' && userChoise === 'rock'){
    result = 'Computer win';
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'paper' && userChoise === "scissors"){
    result = "You win";
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'scissors' && userChoise === 'rock'){
    result = "You win";
    resultDisplay.innerHTML = result;
  }
  if(computerChoise === 'scissors' && userChoise == 'paper'){
    result = 'Computer win';
    resultDisplay.innerHTML = result;
  }
}*/