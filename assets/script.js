var currentQuestion = 1;

function startGame() {
    document.getElementById("begin-button").style.display = "none";
    var timeLeft = 10;

    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(startTimer);
        }
        document.getElementById("timer").innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);


    currentQuestion = 1;
    document.getElementById("question").innerHTML = newQuestion(1);
    newAnswers(1);  

}

function newQuestion(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "What is an example of a boolean?";
            break;
        case 2:
            return "What is an exmaple of a string?";
            break;
        case 3:
            return "Select an example of a function";
            break;
        case 4:
            return "Select an exmaple of an array";
            break;
        case 5:
            return "How would you replace a text in a DOM element?";
            break;
        default:
    }
}

function newAnswers(questionNumber) {

    switch (questionNumber) {
        case 1:
            document.getElementById("answer1").innerHTML= "var grape = true";
            document.getElementById("answer2").innerHTML= "[Apple, Orange, Bannanas]";
            document.getElementById("answer3").innerHTML= "3";
            document.getElementById("answer4").innerHTML= "5 + 6";
            break;
        case 2:
            document.getElementById("answer1").innerHTML = "9870897";
            document.getElementById("answer2").innerHTML = "['cats', 'dogs', 'fish', 'cows']";
            document.getElementById("answer3").innerHTM = "false";
            document.getElementById("answer4").innerHTML = "'jquery'";

            // do stuff
            break;
        case 3:
            document.getElementById("answer1").innerHTML = "displaySolutions(x,y)";
            document.getElementById("answer2").innerHTML = "['cats', 'dogs', 'fish', 'cows']";
            document.getElementById("answer3").innerHTML = "false";
            document.getElementById("answer4").innerHTML= "'jquery'";
            // do stuff
            break;
        case 4:
            // do stuff
            document.getElementById("answer1").innerHTML  = "displaySolutions(x,y)";
            document.getElementById("answer2").innerHTML = "['cats', 'dogs', 'fish', 'cows']";
            document.getElementById("answer3").innerHTML = "false";
            document.getElementById("answer4").innerHTML = "'jquery'";

            break;
        case 5:
            document.getElementById("answer1").innerHTML = "displaySolutions(x,y)";
            document.getElementById("answer2").innerHTML = "['cats', 'dogs', 'fish', 'cows']";
            document.getElementById("answer3").innerHTML = "cool";
            document.getElementById("answer4").innerHTML = ".innerHTML";
            // do stuff
            break;
        default:
            break;
    }

}

function getCorrectAnswer(answerClick) {
    switch (currentQuestion) {
        case 1:
            currentQuestion = 2;
            document.getElementById("question").innerHTML = nextQuestion(2);
            nextAnswers(2);
            if (answerClick == 1) {
                return true;
            }
            else {
                return false;
            }
            break;
        case 2:
            currentQuestion = 3;
            if (answerClick == 4) {
                return true;
            }
            else {
                return false;
            }
            break;
        case 3:
            currentQuestion = 4;
            if (answerClick == 1) {
                return true;
            }
            else {
                return false;
            }
            break;
        case 4:
            currentQuestion = 5;
            if (answerClick == 2) {
                return true;
            }
            else {
                return false;
            }
            break;
        case 5:
            currentQuestion = 6;
            if (answerClick == 4) {
                return true;
            }
            else {
                return false;
            }
            break;
        default:
            alert('Game over');
    }
}