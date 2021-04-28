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
            var question2Answer1 = "9870897";
            var question2Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question2Answer3 = "false";
            var question2Answer4 = "'jquery'";

            // do stuff
            break;
        case 3:
            var question3Answer1 = "displaySolutions(x,y)";
            var question3Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question3Answer3 = "false";
            var question3Answer4 = "'jquery'";
            // do stuff
            break;
        case 4:
            // do stuff
            var question4Answer1 = "displaySolutions(x,y)";
            var question4Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question4Answer3 = "false";
            var question4Answer4 = "'jquery'";

            break;
        case 5:
            var question5Answer1 = "displaySolutions(x,y)";
            var question5Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question5Answer3 = "cool";
            var question5Answer4 = ".innerHTML";
            // do stuff
            break;
        default:
            break;
    }

}

function getCorrectAnswer(questionNumber, answerClick) {
    switch (questionNumber) {
        case "question1":
            if (answerClick === 1) {
                return true;
            }
            else {
                return false;
            }
            break;
        case "question2":
            return question2;
            break;
        case "question3":
            return question3
            // code block
            break;
        case "question4":
            return question4
            break;
        case "question5":
            return question5
            break;
        default:
        // code block
    }
}