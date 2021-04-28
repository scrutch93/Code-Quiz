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

    console.log(newQuestion(1));
    document.getElementById("question").innerHTML = newQuestion("question1");
}


function newQuestion(questionNumber) {
    var question1 = "What is an example of a boolean?";
    var question2 = "What is an exmaple of a string?";
    var question3 = "Select an example of a function";
    var question4 = "Select an exmaple of an array";
    var question5 = "How would you replace a text in a DOM element?";

    switch (questionNumber) {
        case "question1":
            return question1;
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

function newAnswers(questionNumber) {

    switch (questionNumber) {
        case "question1":
            var question1Answer1 = "var grape = true";
            var question1Answer2 = "[Apple, Orange, Bannanas]";
            var question1Answer3 = "3";
            var question1Answer4 = "5 + 6";
            break;
        case "question2":
            var question2Answer1 = "9870897";
            var question2Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question2Answer3 = "false";
            var question2Answer4 = "'jquery'";

            // do stuff
            break;
        case "question3":
            var question3Answer1 = "displaySolutions(x,y)";
            var question3Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question3Answer3 = "false";
            var question3Answer4 = "'jquery'";
            // do stuff
            break;
        case "question4":
            // do stuff
            var question4Answer1 = "displaySolutions(x,y)";
            var question4Answer2 = "['cats', 'dogs', 'fish', 'cows']";
            var question4Answer3 = "false";
            var question4Answer4 = "'jquery'";

            break;
        case "question5":
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