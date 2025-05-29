var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence(){
    // Generates a random color and push to the gamePattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // Button animation
    $("#" + randomChosenColour).fadeOut(250).fadeIn(250);  
    // Calling the function that plays the sound 
    playSound(randomChosenColour);
    // Increasing the level by 1
    level++;
    $("#level-title").text("Level " + level);
}

$(".btn").on("click",function(event){
    // Target id of the button that was clicked and push to userClickedPattern
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    // Calls the function that animates the button when user click
    animatePress(userChosenColour);
    // Calls the function that play the sound when user click
    playSound(userChosenColour);
    // Calls the function to check the last answer
    checkAnswer(userClickedPattern.length - 1);
});
// Sound function
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}
// Animation function
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
};
// Press any button to start!
$(document).on("keydown", function(){
    if (!started){
        nextSequence();
        started = true;   
    }
});
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){ 
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern = [];
        };
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game over, Press Any Key to Restart");
        startOver();
    };
};
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
};