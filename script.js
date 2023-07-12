var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answer: "C. alerts",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"]
    },
    {
        question: "The condition in an if / else statement is enclosed with_____.",
        answer: "C. parenthesis",
        choices: ["A. quotes", "B. curly brackets ", "C. parenthesis", "D. square brackets"]
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        answer: "D. all of the above",
        choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"]
    },
    {
        question: "String values must be enclosed within_____ when being assigned to variables.",
        answer: "C. quotes",
        choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"]
    },
    {
        question: "A very useful tool used during developmentand debugging for printing content to the debugger is:",
        answer: "A. JavaScript",
        choices: ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console.log"]
    }
]

var count = 0
var startButton = document.querySelector(".start")
var submitButton = document.querySelector(".submitBtn")
var backButton = document.querySelector(".backBtn")
var clearButton = document.querySelector(".clearBtn")
var questionScreen = document.querySelector(".question-screen")
var startScreen = document.querySelector(".start-screen")
var endScreen = document.querySelector(".end-screen")
var timerEl = document.querySelector("#timer")
var scoreEl = document.querySelector("#final-score")
var timeInterval;
var scoreInterval;
startButton.addEventListener("click", startGame)

function startGame() {
    startScreen.classList.add("hide")
    questionScreen.classList.remove("hide")
    showQuestion()
    countdown()
}

var timeLeft = 75;
function countdown() {



    timeInterval = setInterval(function () {

        if (timeLeft > 0) {

            timeLeft--;
            timerEl.textContent = timeLeft;
        } else {

            timerEl.textContent = timeLeft;

            clearInterval(timeInterval);
            endGame()
        }
    }, 1000);
}

if (timerEl <= 0) {

}


function showQuestion() {
    questionScreen.innerHTML = ""
    var question = document.createElement("h3");
    question.innerHTML = questions[count].question;
    questionScreen.append(question)
    for (var i = 0; i < questions[count].choices.length; i++) {
        var button = document.createElement("button")
        button.textContent = questions[count].choices[i]
        button.value = questions[count].choices[i]
        button.addEventListener("click", function (event) {
            checkScore(event.target.textContent)
        })
        questionScreen.append(button)
    }
}

function checkScore(answerChoice) {
    if (answerChoice === questions[count].answer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
        timeLeft -= 10;
    }

    if (count + 1 < questions.length) {
        count++
        showQuestion()
    } else {
        endGame()
        clearInterval(timeInterval);
        timerEl.textContent = timeLeft;
    }
}

function endGame() {
    questionScreen.classList.add("hide")
    endScreen.classList.remove("hide")
}


scoreInterval = setInterval(function () {

    if (timeLeft > 0) {

        scoreEl.textContent = timeLeft;
    } else

        scoreEl.textContent = timeLeft;

});

