console.log("Connected  to index.js");


var gamePattern=[]
var userClickedPattern=[]
var userMissedPattern=[]



//Step-1  Add  ID to each td element

function tdIDs() {

  $('.tdSideLeft td').attr('id', function(i) {
   return "L"+(i+1);
    });

  $('.tdSideRight td').attr('id', function(i) {
    return "R"+(i+1);
    });
}

tdIDs()

//Step-2 choose random star

function randomStar () {

  var randomNumber = Math.floor(Math.random()*80);
  console.log(randomNumber);

  var sides = ['L','R']
  var randomSide = Math.floor(Math.random()*2);
  console.log(randomSide);

  var idName  = "#"+sides[randomSide]+randomNumber
  console.log(idName);
  gamePattern.push(idName)
  console.log(gamePattern);

  $(idName).animate({fontSize: '100px',opacity: '90%',opacity: '5%'}, "slow");

}


$(".startButton").click(function(){
  console.log("button clicked");
  randomStar ();

  $("h1").text(" ")
  $("h2").text(" ")
  $("h3").text(" ")



  $(document).keypress(function(){

      randomStar()

      var pressedKey = event.key
      console.log(pressedKey);

      if (gamePattern[gamePattern.length-2][1]==='L') {
        if (pressedKey==="a") {
          console.log("good job-Left "+ gamePattern[gamePattern.length-2]);
        }else if (pressedKey==="d") {
          console.log("Sorry it was Left " + gamePattern[gamePattern.length-2]);
          userMissedPattern.push(gamePattern[gamePattern.length-2])
        }
      }
      else if (gamePattern[gamePattern.length-2][1]==='R') {
        if (pressedKey==="d") {
          console.log("good job-Right "+ gamePattern[gamePattern.length-2]);
        }else if (pressedKey==="a") {
          console.log("Sorry it was Right "+ gamePattern[gamePattern.length-2]);
          userMissedPattern.push(gamePattern[gamePattern.length-2])
          }
          }
        })





$(".finishButton").click(function(){
  console.log("Finish button clicked");
  console.log("gamePattern-"+gamePattern);
  console.log("userMissedPattern-"+userMissedPattern);

  for (var i = 0; i < gamePattern.length-1; i++) {
    var a=gamePattern[i]
    $(a).removeClass('redStar');
    $(a+" div").addClass('greenStar');

    $(a).animate({opacity: '100%'}, "slow");

    }

    for (var i = 0; i < userMissedPattern.length; i++) {
      var a=userMissedPattern[i]
      $(a).removeClass('redStar');
      $(a+" div").addClass('yellowStar');

      $(a).animate({opacity: '100%'}, "slow");
      }

    var result = "Your Results. User missed: "+userMissedPattern.length +", User Matched: " + (gamePattern.length-1-userMissedPattern.length)

    $('#result').text(result)

    if (userMissedPattern.length === 0) {
      $('#result2').text("Great Job Mammad, THIS IS BINGO")
      alert("YOU ARE KING!!")
    }else if (gamePattern.length/userMissedPattern.length>2) {
      $('#result2').text("Great Job Mammad, you matched a lot")
    }

    else{
      $('#result2').text("Keep on going Mammad, you will do better !!")

    }

});
});



//Step 3 user check










//
// function nextSequence() {
//
//
//   $("h1").text("Level "+level);
//   level=level+1;
//
//   // Step2 - choose random color with random number
//   var randomNumber = Math.floor(Math.random()*80);
//   var randomChosenColor = buttonColors[randomNumber]
//   //console.log(randomChosenColor);
//
//   // animation for random chosen color
//   var idName  = "#"+randomChosenColor
//   $(idName).fadeOut(100).fadeIn(50);
//   // sound for random chosen color
//   soundPlay(randomChosenColor);
//
//   // add chosen random color to gamePattern array
//   gamePattern.push(randomChosenColor);
//   //console.log(gamePattern);
//
//   userClickedPattern=[]
//
// }
//
//
//
// // Step4 - create selector for randomChosenColor
//
//
// // $(document).keypress(function () {
// //   nextSequence()
// // });
//
// //-----sound Player function
//
// function soundPlay(randomChosenColor) {
//
//   switch (randomChosenColor) {
//     case "blue":
//       var blueSound = new Audio("sounds/blue.mp3");
//       blueSound.play();
//       break;
//
//     case "green":
//       var greenSound = new Audio("sounds/green.mp3");
//       greenSound.play();
//       break;
//
//     case "red":
//       var redSound = new Audio("sounds/red.mp3");
//       redSound.play();
//       break;
//
//     case "yellow":
//       var yellowSound = new Audio("sounds/yellow.mp3");
//       yellowSound.play();
//       break;
//
//     default:
// }}
//
//
// // Step5 - detect button clicked,  add to array,play  sound
//
// // $(".btn").click(function () {
// //
// //   var userChosenColor=this.id;
// //   userClickedPattern.push(userChosenColor);
// //   console.log(userClickedPattern);
// //   soundPlay(userChosenColor);
// //   animatePress(userChosenColor);
// //
// //   //jkljjj
// //   checkAnswer(userClickedPattern.length-1);
// //
// //
// // })
//
//
// //Step6 - add animation for click
// function animatePress(currentColor) {
//
//   currentId="#"+currentColor;
//
//   $(currentId).addClass("pressed");
//
//   setTimeout(function () {
//     $(currentId).removeClass("pressed")
//   },100);
// }
//
//
// //Step7 - Game logic
//
// function checkAnswer(currentLevel) {
//
//   if (userClickedPattern.length===gamePattern.length) {
//       console.log(userClickedPattern);
//       console.log(gamePattern);
//
//       if (JSON.stringify(userClickedPattern)==JSON.stringify(gamePattern)) {
//
//         setTimeout(function() {nextSequence()} , 600);
//         console.log("success");
//
//       }else {
//         console.log("wrong");
//         var wrongSound = new Audio("sounds/wrong.mp3");
//         wrongSound.play();
//         $("body").addClass("game-over")
//         setTimeout(function () {
//           $("body").removeClass("game-over")
//         },1800);
//         $("h1").text("Game Over, Press Any Key to Restart")
//         startOver()
//       }
//   }
// }
//
// function startOver() {
//   level=0
//   gamePattern=[]
//   var started=0
// }
