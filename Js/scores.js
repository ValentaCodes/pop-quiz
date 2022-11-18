const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
highScoreList.innerHTML = highScores

  // turns array of user initials and scores into single line list items
  .map((score) => {
    return `<li class="highscore">${score.name}-${score.score}</li>`;
  })
  .join("");
