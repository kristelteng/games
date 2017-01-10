
var play = function(userChoice) {
  document.getElementById("player").innerHTML="";
  document.getElementById("opponent").innerHTML="";
  document.getElementById("results").innerHTML="";

  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    document.getElementById("player").innerHTML='You choose' + ' ' + userChoice;
  }

  var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    document.getElementById("opponent").innerHTML="Your opponent picks" + ' ' + computerChoice;

  var compare = function (choice1,choice2) {
    if (choice1 == choice2) {
      return "The result is a tie!";
    } else if (choice1 == "rock"){
      if (choice2 =="scissors") {
        return "rock wins. rock on.";
      } else {
        return "Sorry. Paper wins!";
      }
    } else if (choice1 == "paper") {
      if (choice2 == "rock") {
        return "Paper wins";
      } else {
        return "Sorry. Scissors win!";
      }
    } else if (choice1 == "scissors") {
      if (choice2 == "rock") {
        return "Sorry. Rock wins!";
      } else {
        return "Scissors wins";
      }
    }
  }

  var winner = compare(userChoice, computerChoice);

  document.getElementById("results").innerHTML = winner;
}

