var timeLeft = 10;
/*var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  /*document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);*/



function startGame(firstName){
console.log(firstName);
var timeLeft = 180;
document.getElementById("timer").innerHTML = timeLeft;

var startTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(startTimer);
    }
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  }, 1000);

}

