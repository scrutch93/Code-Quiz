function startGame(){    
    document.getElementById("begin-button").style.display = "none";
    var timeLeft = 10;
    
    setInterval(function(){    
        if(timeLeft <= 0){
            clearInterval(startTimer);
          }
        document.getElementById("timer").innerHTML = timeLeft;
        timeLeft -= 1;      
    }, 1000);
}


function newQuestion(questionNumber){
    var question1 = "What is an example of a boolean?"
    var question2 = "What is an exmaple of a string?"
    var question3 = "Select an example of a function"
    var question4 = ""

}