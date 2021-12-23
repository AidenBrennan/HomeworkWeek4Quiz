//questions
var questions = [{
    question: "what is 22 squared",
    ChoiceA: "484",
    ChoiceB: "2222",
    ChoiceC:"4",
    ChoiceD: "494",
    ChoiceE: "2244",
    answer: "484"
}, {
    question: "find x if 2x+4=12",
    ChoiceA: "12",
    ChoiceB: "4",
    ChoiceC: "6",
    ChoiceD: "9",
    ChoiceE: "not possible",
    answer: "4"
}, {
    question: "did this work",
    ChoiceA: "yes",
    ChoiceB: "no",
    ChoiceC: "no",
    ChoiceD: "no",
    ChoiceE: "no",
    answer: "yes"
}
];

//set global variables
var Choice1 = document.getElementById ('Answer1');
var Choice2 = document.getElementById ('Answer2');
var Choice3 = document.getElementById ('Answer3');
var Choice4 = document.getElementById ('Answer4');
var Choice5 = document.getElementById ('Answer5');
var timer = document.getElementById ('timer');
var highscores = [];
var currentquestion = 0;
var selectedanswer;
var countdown;
var time =20;
var highscores = [];
var initials = ("");


//set event listeners
timer.addEventListener("click", RunQuiz);
Choice1.addEventListener("click", (event)=> {
    selectedanswer = event.target.textContent;
    CheckAnswer();
});
Choice2.addEventListener("click", (event) => {
    selectedanswer = event.target.textContent;
    CheckAnswer();
});
Choice3.addEventListener("click", (event) => {
    selectedanswer = event.target.textContent;
    console.log(selectedanswer)
    CheckAnswer();
});
Choice1,Choice2,Choice3,Choice4,Choice5.addEventListener("click", (event) => {
    selectedanswer = event.target.textContent;
    CheckAnswer();
});
Choice5.addEventListener("click", (event) => {
    selectedanswer = event.target.textContent;
    CheckAnswer();
});

function savescores() {
    var initials = window.prompt("enter initials")
    highscores.push(time + initials);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    finishquiz()
}

function finishquiz() {
    clearInterval(countdown);
    title.textContent = "well done, click on timer to play again"
    timer.textContent = time;
    var storedresults = JSON.parse(localStorage.getItem("highscores"));
    console.log(localStorage);
    Choice1.textContent =storedresults[0];
    Choice2.textContent =storedresults[1];
    Choice3.textContent =storedresults[2];
    Choice4.textContent =storedresults[3];
    Choice5.textContent =storedresults[4];
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// start quiz/timer
function RunQuiz() {
    let currentquestion = 0;
    let time = 20;
    Choice1.textContent = questions[currentquestion].ChoiceA;
    Choice2.textContent = questions[currentquestion].ChoiceB;
    Choice3.textContent = questions[currentquestion].ChoiceC;
    Choice4.textContent = questions[currentquestion].ChoiceD;
    Choice5.textContent = questions[currentquestion].ChoiceE;
    title.textContent = questions[currentquestion].question;
    starttimer()


function starttimer() {}
    countdown = setInterval(function() {
        time--;
        timer.textContent = time + "s";
if (time <= 0) {
    savescores()
}
},1000);
}


//check answers
function CheckAnswer() {

    if ( selectedanswer === questions[currentquestion].answer )
    {
        alert("correct")
        time += 5;
        nextquestion()
    } else {
        alert("incorrect")
        time -= 5;
        nextquestion()
    }


//move to next question
    function nextquestion() {
    if (currentquestion < questions.length -1) {
     currentquestion += 1;
     console.log (currentquestion)
     console.log (questions.length)
     Choice1.textContent = questions[currentquestion].ChoiceA;
     Choice2.textContent = questions[currentquestion].ChoiceB;
     Choice3.textContent = questions[currentquestion].ChoiceC;
     Choice4.textContent = questions[currentquestion].ChoiceD;
     Choice5.textContent = questions[currentquestion].ChoiceE;
     title.textContent = questions[currentquestion].question;
    } else {
        savescores()
    }   
}
}
