var initials = document.getElementById("initials");
var saveScoreBtn = document.getElementById("save-score-btn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("user");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
const maxHigh = 5;

finalScore.innerText = `Your Score: ${mostRecentScore}`;

//saves, sorts, and pushes highscore to local storage
saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem("highscores", JSON.stringify(highScores));
  window.location.assign("./scores.html");
  console.log(highScores);
};

// //currently working on
// function setScore() {
//   // When clicked, log user details in LocalStorage
//   logScoreButton.addEventListener("click", () => {
//     let user = {
//       initials: userInitialsInput.value.trim(),
//       score: `${score}/3`,
//       time: `${timerCount} seconds left`,
//     };
//     localStorage.setItem("user", JSON.stringify(user));
//   });
// }

// //currently working
// function displayLeaderBoard() {
//   var container = document.getElementById("leaderboard");
//   var retrieveScores = JSON.parse(localStorage.getItem("user"));
//   var ol = document.createElement("ol");
//   container.textContent = "hi";

//   for (i = 0; i < retrieveScores.length; i++) {
//     var li = document.createElement("li");

//     li.innerHTML = `${retrieveScores[i].initials} - ${retrieveScores[i].score}`;
//     ol.appendChild(li);
//     container.appendChild(ol);
//   }
// }
