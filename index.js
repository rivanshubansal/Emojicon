var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
var userName = readlineSync.question("What is your name?");
log(chalk.blue("Welcome " + userName + " Let's have some fun.."));
log(chalk.red("DO you know me well? let's check......."));

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    log("Yess you know Right!!");
    score++;
  }else {
    log("OOPSSS Wrong!!");
  }
  log("Your score is: ",score);
  log("-----*-----*-----*-----*-----*-----");
}

var questionbank = [{
  question: `
  what am I currently studying?
  a)MBBS
  b)Law
  c)Btech
  d)Arts\n`,
  answer: "c"
},
{
  question:`
  From which state I belong?
  a)Tamil Nadu
  b)Maharashtra
  c)Delhi
  d)Rajasthan\n`,
  answer: "d"
},
{
  question:`
  Am I binge watcher?
 a)Yessss
 b)Nooooo\n`,
 answer: "a"
},
{
  question:`
  Which game I like the most?
  a)Football
  b)Cricket
  c)Chess
  d)Badminton\n`,
  answer: "b"
},
{
  question:`
  Which is one of my favourite singer? 
  a)Arijit Singh
  b)Prateek Khuad
  c)Atif Aslam
  d)Mohit Chauhan\n`,
  answer: "b"
}
];
for(var i=0; i<questionbank.length; i++){
  var currentQuestion = questionbank[i];
  //log(currentQuestion.question);
  log(play(currentQuestion.question,currentQuestion.answer)
  );
  }
  log(chalk.blue("You scored : ",score));
   if(score<=3){
    log(chalk.red("Don't worry try again and know me well.."))
  }
  if(score>3){
    log(chalk.red("I LIKE IT..YOU KNOW ME WELL..."));
  }
  log("THANK YOU SO MUCH FOR PLAYING..");
 