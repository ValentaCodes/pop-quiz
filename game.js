var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-btn");
var timerEl = document.getElementById("timer");
let formContainer = document.getElementById("form1");
let logScoreButton = document.getElementById("save-score-btn");
let userInitialsInput = document.querySelector("#initials");

var timer;
var score = 0;
var isFinished = false;
let shuffledQuestions;
let currentQuestion;

// Quiz questions
var questions = [
  {
    question: "What is JavaScript?",
    //Quiz possible answers
    answer: [
      { text: "A dog", isTrue: false },
      { text: "A programming language", isTrue: true },
      { text: "Something you eat", isTrue: false },
      { text: "A workout routine", isTrue: false },
    ],
  },
  {
    question:
      "What type of function is this: const testFunction = function() {code}",
    answer: [
      { text: "declaration", isTrue: false },
      { text: "expression", isTrue: true },
      { text: "arrow", isTrue: false },
      { text: "noodleSoup", isTrue: false },
    ],
  },
  {
    question: "An array needs which of the following: ",
    answer: [
      { text: "Quotation marks", isTrue: false },
      { text: "A dollar symbol", isTrue: false },
      { text: "Square brackets", isTrue: true },
      { text: "Curly brackets", isTrue: false },
    ],
  },
];

//initializes start button
startButton.addEventListener("click", startQuiz);
nextButton.hidden = true; // hides next button until game starts
answerButtonsEl.hidden = true; //hides answer button until game start

//Starts quiz and shuffles questions
function startQuiz() {
  startButton.hidden = true;
  nextButton.hidden = false;
  answerButtonsEl.hidden = false;
  timerCount = 15;
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      generateQuestion();
    } else {
      answerButtonsEl.hidden = true;
      endQuiz();
    }
  });
  generateQuestion();
  startTimer();
}
//Starts quiz timer
function startTimer() {
  //sets timer
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = `Time Remaining: ${timerCount}`;
    if (timerCount >= 0) {
      //Test if quiz is finished
      if (isFinished && timerCount > 0) {
        //clears interval and stops timer
        clearInterval(timer);
        endQuiz();
      }
    }
    //Tests if time has run out
    if (timerCount === 0) {
      answerButtonsEl.hidden = true;
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}
//Generates next question
function generateQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestion]);
}
//Displays the generated question
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.isTrue) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}
//Allows you to select and check answer
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  checkAnswer(correct);
  if (shuffledQuestions.length > currentQuestion - 1) {
    nextButton.hidden = false;
  }
}
// updates score if answer is correct
function checkAnswer(correct) {
  if (correct) {
    score++;
  } else {
    score;
  }
}
// resets answer buttons
function resetState() {
  nextButton.hidden = true;
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

//This function ends the quiz and sets user final score
function endQuiz() {
  clearInterval(timer);
  localStorage.setItem("score", score);
  if (endQuiz) {
    return window.location.assign("end.html");
  }
}
