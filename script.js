// variable for score to start at zero.
var score = 0;

// to connect start button 
var startBtn = document.querySelector("#start");

// to connect the first screen
var startScreen = document.querySelector(".start-screen");

// used to hide quiz timer when necessary
var quizTimeScreen = document.querySelector(".quiz-time-screen");

// to connect quiz timer
var quizTimer = document.querySelector(".quiz-timer");

// to connect countdown number
var timeEl = document.getElementById("countdown");

// to connect score screen
var endScreen = document.querySelector(".end-screen");

// to connect Final Score, Input box, and submit btn screen
var lastScreen = document.querySelector("#last-screen")

// to connect initials and score screen
var finalScreen = document.querySelector(".final-screen")




// to connect actual score numeric value
var scoreEl = document.querySelector("#score");

// to connect each questions div
var answers1Div = document.querySelector("#answers1");
var answers2Div = document.querySelector("#answers2");
var answers3Div = document.querySelector("#answers3");
var answers4Div = document.querySelector("#answers4");
var answers5Div = document.querySelector("#answers5");

// unique id names for the correct answers to be referenced
var correctanswer1 = "a2"
var correctanswer2 = "b3"
var correctanswer3 = "c1"
var correctanswer4 = "d2"
var correctanswer5 = "e2"

// to connect all of the questions in the html
var question_1 = document.querySelector(".question_1");
var question_2 = document.querySelector(".question_2");
var question_3 = document.querySelector(".question_3");
var question_4 = document.querySelector(".question_4");
var question_5 = document.querySelector(".question_5");

// event listenere for start button click
startBtn.addEventListener("click", startQuiz)

// starting time set to sixty seconds
var secondsLeft = 60;

// function to start quiz up start btn being clicked. All screens hidden expect for question 1 screen.
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

    // when timer runs out shows zero seconds remaining
    function sendMessage() {
        timeEl.textContent = "0";
    }

};

// once an answer to q1 is clicked q2 screen renders only.
answers1Div.addEventListener("click", function(event) {
    startScreen.setAttribute("class", "hide");

    // setting target for correct answer btn (all q's same setup)
    var element = event.target;

    // matching html correct answer btn (all q's same setup)
    if (element.matches("button")) {

    // correct answer btn linked to html element (all q's same setup)
    var clickedanswer1 = event.target.id

    // if correct answer = the correct button then plus on to the score if not then minus eight seconds from the remaining time (all q's same set up)
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

// once an answer to q2 is clicked q3 screen renders only.
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

// once an answer to q3 is clicked q4 screen renders only.
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

// once an answer to q4 is clicked q5 screen renders only.
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

// once an answer to q5 is clicked score screen renders only.
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

// connect submit btn
var submitBtn = document.querySelector("#submit");

// connect reset btn
var resetBtn = document.querySelector("#reset");

// when submit btn is clicked the final screen with players initials and score are rendered along with the reset btn
submitBtn.addEventListener("click", function() {
    startScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    finalScreen.removeAttribute("class", "hide");
    lastScreen.setAttribute("class", "hide");

    // taking the players text input (initials)
    var initials = document.querySelector(".initialsField").value;

    // retrieving the stored initials from local storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // the newScore var holds the players initials and scores
    var newScore = {
        initials,
        score
    }

    // The newScore var's data is pushed into the highscore var
    highscores.push(newScore);

    // takes the initials and score data makes it into a string and displays it as text and number
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    showAllScores();
})

// this function retrieves the locally stored highscores var that has the players initials and scores.
function showAllScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // displays the players initials and scores under a p tag made into a variable title listItem
    highscores.forEach(person => {
        var listItem = document.createElement("p");
        listItem.textContent = person.initials + " - " + person.score;

        //tableEl var to connect span id all-score 
        var tableEl = document.querySelector("#all-scores");
        // appends the listItem p tag to the span id all scores
        tableEl.appendChild(listItem);
    });
}

// reset button to replay the game, sends player back to the start of the quiz game.
resetBtn.addEventListener("click", function() {
    window.location.reload();
})