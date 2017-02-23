//Javascript code for a simple countdown timer which alerts "Time's Up"

var count=120;

var counter=setInterval(timer, 1000); 

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert("Times Up!");
     reset();
  }

 document.getElementById("timer").innerHTML=count + " seconds";

}

// Global variables used to progress through questions, track answers, and end the game when time expires

var questionNumber = 0;
var rightAnswers = 0;
var timeUp = false;


//Array of objects which contains a list of questions, answer choices, and the index position of the correct answer

var questions = [{
    question: "Name the seventh planet from the sun:",
    choices: ["Pluto", "Mars", "Jupiter", "Uranus"],
    answer: 2
}, {
    question: "Name the world's largest ocean:",
    choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2
}, {
    question: "Which chess piece can only move diagonally:",
    choices: ["Rook", "Pawn", "Bishop", "King"],
    answer: 2
}, {
    question: "How many valves does a trumpet have:",
    choices: ["Three", "Two", "One", "None"],
    answer: 0
}, {
    question: "What flavour is Cointreau:",
    choices: ["Watermelon", "Orange", "Bananna", "Coconut"],
    answer: 1
}, {
    question: "How many degrees are found in a circle:",
    choices: ["45", "90", "180", "360"],
    answer: 3
}, {
    question: "The beaver is the national emblem of which country:",
    choices: ["Sweden", "Canada", "Austria", "Brazil"],
    answer: 1
}, {
    question: "How many players are there in a baseball team:",
    choices: ["8", "12", "10", "9"],
    answer: 3
}, {
    question: "Hg is the chemical symbol of which element:",
    choices: ["Mercury", "Helium", "Mangnesium", "Calcium"],
    answer: 0
}, {
    question: "The Statue of Liberty was given to the US by which country:",
    choices: ["Germany", "Paris", "Great Britain", "Japan"],
    answer: 1
}];

  $("#a1").html(questions[0].choices.[0]);
  $("#a2").html(questions[0].choices.[1]);
  $("#a3").html(questions[0].choices.[2]);
  $("#a4").html(questions[0].choices.[3]);



// $(document).ready(function () {

 


function reset() {
    currentQuestion = 0;
    correctAnswers = 0;
}








    