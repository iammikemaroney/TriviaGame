window.onload = function () {
    var threeMinutes = 3 * 60,
    display = document.querySelector('#time');
    startTimer(threeMinutes, display);
    var intervalId;
    };
        
    function startTimer(duration, display) {
    var timer = duration;            
    intervalId = setInterval(function () {
    var minutes = parseInt(timer / 60, 10)
    var seconds = parseInt(timer % 60, 10);
        
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
        
    timer--;
        
        if (timer === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
            timer = duration;
        }
    }, 1000);
};



    document.getElementById("quiz").onsubmit=function() {
        que1 = parseInt(document.querySelector('input[name = "que1"]:checked').value);
        que2 = parseInt(document.querySelector('input[name = "que2"]:checked').value);
        que3 = parseInt(document.querySelector('input[name = "que3"]:checked').value);
        que4 = parseInt(document.querySelector('input[name = "que4"]:checked').value);
        que5 = parseInt(document.querySelector('input[name = "que5"]:checked').value);
        que6 = parseInt(document.querySelector('input[name = "que6"]:checked').value);
        que7 = parseInt(document.querySelector('input[name = "que7"]:checked').value);
        que8 = parseInt(document.querySelector('input[name = "que8"]:checked').value);
        que9 = parseInt(document.querySelector('input[name = "que9"]:checked').value);
        que10 = parseInt(document.querySelector('input[name = "que10"]:checked').value);
            
        result = que1 + que2 + que3 + que4 + que5 + que6 + que7 + que8 + que9 + que10;
            
        document.getElementById("grade").innerHTML = result;
        
    grading = [
        {score:0,feedback:"I don't think skateboarding is your thing...", image: "assets/images/1.gif"},
        {score:10,feedback:"At least you got 1 this time...", image: "assets/images/1.gif"},
        {score:20,feedback:"Maybe try that one again...", image: "assets/images/2.gif"},
        {score:30,feedback:"Maybe try that one again...", image: "assets/images/2.gif"},
        {score:40,feedback:"Not quite there...", image: "assets/images/mid.gif"},
        {score:50,feedback:"Not quite there...", image: "assets/images/mid.gif"},
        {score:60,feedback:"Not too bad...", image: "assets/images/3.gif"},
        {score:70,feedback:"Not too bad...", image: "assets/images/3.gif"},
        {score:80,feedback:"Pretty good...", image: "assets/images/4.gif"},
        {score:90,feedback:"Almost got them all...", image: "assets/images/4.gif"},
        {score:100,feedback:"Perfect score!", image: "assets/images/5.gif"}
        ];
              
    for(i=0; i<grading.length; i++) {
        if(result == grading[i].score) {
        result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='500' />";
        }
    }
            
    document.getElementById("grade2").innerHTML = result2; 
    
        
    return false; // to not refresh the page
    }