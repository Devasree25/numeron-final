//var urlParams = new URLSearchParams(window.location.search);

//var score = urlParams.get("score");
let score = localStorage.getItem('score')
    console.log(score);

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
    location.href = "./game.html";
};