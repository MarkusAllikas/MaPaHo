ar msg1 = document.getElementByld("messagel");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("2message");

var answer = math.floor(math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
  var user_quess = document.getElementById("guess").
  value.
  if(user_guess <1 || user_guess> 100){
    alert("Please enter a number between 1 and 100.");
  }
  else{
      quessed.nums.push(user_guess);
      no_of_guesses+= 1;

      if(user_guess < answer) {
          msg1.textContent = "Your guess is too low.";
          msg2.textContent = "No. of guesses: " +
          no_of_guesses;
          msg3.textContent = "Guessed numbers are:" +
          guessed_nums;
      }
      else if (user_guess > answer){
          msg1.textContent = "Your guess is too high";
          msg2.textContent = "No. of guesses: " +
          no_of_guesses;
          msg3.textContent = "Guessed numbers are: "
          guessed_nums;
      }
      else if(user_guess == answer){
        msg1.textContent = "Yes you win!!";
        msg2.textContent = "The number was: " +
        answer;
        msg3.textContent = "You guessed it in "+
        no_of_guesses + "guesses";
        document.getElementById("my_btn").disabled = true;
      }
