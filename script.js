var score = 0;
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector(".start-screen");
var quizTimeScreen = document.querySelector(".quiz-time-screen");
var quiz = document.querySelector("#quiz");
var quizTimer= document.querySelector(".quiz-timer");
var timeEl = document.getElementById("countdown");
var endScreen = document.querySelector(".end-screen");
var finalScreen = document.querySelector(".final-screen")
var lastScreen = document.querySelector("#last-screen")


var scoreEl = document.querySelector("#score");

var answers1Div = document.querySelector("#answers1");
var answers2Div = document.querySelector("#answers2");
var answers3Div = document.querySelector("#answers3");
var answers4Div = document.querySelector("#answers4");
var answers5Div = document.querySelector("#answers5");

var correctanswer1 = "a2"
var correctanswer2 = "b3"
var correctanswer3 = "c1"
var correctanswer4 = "d2"
var correctanswer5 = "e2"


var question_1 = document.querySelector(".question_1");
var question_2 = document.querySelector(".question_2");
var question_3 = document.querySelector(".question_3");
var question_4 = document.querySelector(".question_4");
var question_5 = document.querySelector(".question_5");

startBtn.addEventListener("click", startQuiz)

var secondsLeft = 60;

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    quizTimeScreen.removeAttribute("class", "hide");
    question_1.removeAttribute("class", "hide");

    var timerInterval;

    // this is where timer goes
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            question_1.setAttribute("class", "hide");
            question_2.setAttribute("class", "hide");
            question_3.setAttribute("class", "hide");
            question_4.setAttribute("class", "hide");
            question_5.setAttribute("class", "hide");
            quizTimer.setAttribute("class", "hide");
            endScreen.removeAttribute("class", "hide");
        }
    }, 1000); 

    function sendMessage() {
        timeEl.textContent = "0";
    }

};

answers1Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    var element = event.target;

    if (element.matches("button")) {

    var clickedanswer1 = event.target.id

    if (correctanswer1 === clickedanswer1) {
        score++;
        scoreEl.innerHTML = score;
    } else {
        secondsLeft = secondsLeft - 8;
    }
        
    question_1.setAttribute("class", "hide");
    quizTimeScreen.removeAttribute("class", "hide");
    question_2.removeAttribute("class", "hide"); 
    } 

});

answers2Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    var element = event.target;

    if (element.matches("button")) {

    var clickedanswer2 = event.target.id

    if (correctanswer2 === clickedanswer2) {
        score++;
        scoreEl.innerHTML = score;
    } else {
        secondsLeft = secondsLeft - 8;
    }

    question_2.setAttribute("class", "hide");
    quizTimeScreen.removeAttribute("class", "hide");
    question_3.removeAttribute("class", "hide"); 
    }

});

answers3Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    var element = event.target;

    if (element.matches("button")) {

    var clickedanswer3 = event.target.id

    if (correctanswer3 === clickedanswer3) {
        score++;
        scoreEl.innerHTML = score;
    } else {
        secondsLeft = secondsLeft - 8;
    }

    question_3.setAttribute("class", "hide");
    quizTimeScreen.removeAttribute("class", "hide");
    question_4.removeAttribute("class", "hide"); 
    }
});

answers4Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    var element = event.target;

    if (element.matches("button")) {
    
    var clickedanswer4 = event.target.id

    if (correctanswer4 === clickedanswer4) {
        score++;
        scoreEl.innerHTML = score;
    } else {
        secondsLeft = secondsLeft - 8;
    }

    question_4.setAttribute("class", "hide");
    quizTimeScreen.removeAttribute("class", "hide");
    question_5.removeAttribute("class", "hide"); 
    }
});

answers5Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    var element = event.target;

    if (element.matches("button")) {

    var clickedanswer5 = event.target.id

    if (correctanswer5 === clickedanswer5) {
        score++;
        scoreEl.innerHTML = score;
    } else {
        secondsLeft = secondsLeft - 8;
    }

    question_5.setAttribute("class", "hide");
    quizTimer.setAttribute("class", "hide");
    endScreen.removeAttribute("class", "hide"); 
    }
});

var submitBtn = document.querySelector("#submit");
var resetBtn = document.querySelector("#reset");

submitBtn.addEventListener("click", function() {
    startScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    finalScreen.removeAttribute("class", "hide");
    lastScreen.setAttribute("class", "hide");

    var initials = document.querySelector(".initialsField").value;

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
        initials,
        score
    }

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    showAllScores();
})

function showAllScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.forEach(person => {
        var listItem = document.createElement("p");
        listItem.textContent = person.initials + " - " + person.score;

        var tableEl = document.querySelector("#all-scores");
        tableEl.appendChild(listItem);
    });
}

resetBtn.addEventListener("click", function() {
    window.location.reload();
})