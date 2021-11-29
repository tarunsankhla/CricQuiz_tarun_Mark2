var readlinesync = require("readline-sync");
var score =0;
console.log('Hi, I am Tarun!');
var Previous_HighScore =[{
  name:"Tarun",
  score:3,
},
{
  name:"Tanay",
  score:3,
}]

var username = readlinesync.question("May I Know your Name ?")
console.log('Hi Welcome ' + username + ' !');
console.log('We are going to play a small quiz game with you based on your Favourite sport ?')

var Sports_List = ['Cricket', 'Football', 'Badminton']
var index = readlinesync.keyInSelect(Sports_List, 'Which is you favourite sport among all theses option?');

console.log('Okay ! ' + Sports_List[index]);

if(Sports_List[index] ==1){
  console.log('Same pinch (E-pinch)!!! My favourite sports is also circket, this is going to be fun.....')
}else{
  console.log('Sorry! '+ username+', but I only play and know about circket so you will need to now make guess about the random Cricket questions given to you.......');
}

console.log("Your Initial Score: "+score);

function ques_an(qu ,ans,options){
  var _index = readlinesync.keyInSelect(options,qu);
  if(_index == ans){
    console.log("Correct");
    score +=1;
  }else{
    console.log("InCorrect");
    score -=1;
  }
}

var  obj_ques = [{
  ques : "Who has won most ODI World Cups ?",
  ans : 1,
  options : ["Australia", "India", "England" , "WI"]
},
{
  ques : "Who won the WTC Final 2020 held in UK ?",
  ans : "2",
  options : ["Australia","New Zeland", "India", "England"]
}]

for(var i =0;  i<obj_ques.length;i++){
  ques_an(obj_ques[i].ques,obj_ques[i].ans,obj_ques[i].options);
}

function highscore_list(){
  console.log(username +" Your Score: "+score)
console.log(" Highest score till now ");
Previous_HighScore.map(se => console.log(se.name +" Your Score: "+se.score))
}

highscore_list()
