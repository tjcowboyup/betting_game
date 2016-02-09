var bankroll = 100;
var bet = 5; // bet min: 5 , max: 10 
var guess = 0; // guess: 1..10
const min = 1;
const max = 10;
var answer = Math.floor(Math.random() * (max - min + 1)) + min;

function asking_guess(){
  bet = prompt("What is your bet (5 min, 10 max:");
  alert(bet);
  bet = parseInt(bet, 10);
//console.log(answer);
  guess = prompt("What is your guess");
  guess = parseInt(guess, 10);

//console.log(answer);
}

asking_guess;
check_answer(answer, guess, bankroll, bet);

function check_answer(answer, guess, bankroll, bet){
  if (answer ==  guess){
    console.log("Money");
    alert(bankroll += bet);
  }
  else if (answer +1 == guess || answer - 1 == guess){
    console.log("Push")
    alert(bankroll);
  }
  else{
    console.log("Better luck next time");
    alert(bankroll -= bet);
  }
}

function add_fund (bankroll) {
  var fund = prompt("Add how much?")
  return bankroll += fund;
}

function interaction(bankroll){
  asking_guess()
  check_answer(answer, guess, bankroll, bet);
while (bankroll>=0){

}
}
//  var response = prompt("Do you want to play again(Y/N)?")

  // while (response == "Y" || response == "y") {}
