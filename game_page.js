var player1_name = localStorage.getItem("p1");
var player2_name = localStorage.getItem("p2");
 
var player1_score = 0;
var player2_score = 0;
 
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
 
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
 
document.getElementById("player_question").innerHTML = "Question turn:  " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn:  " + player2_name;
var get_name;
var word;
var char_at_one;
function send() {
    get_name = document.getElementById("word").value;
    console.log(get_name);
    word = get_name.toLowerCase();
    console.log(word);
 
    char_at_one = word.charAt(1);
    console.log(char_at_one);
 
    var length_div_2 = Math.floor(word.length / 2);
    var char_at_two = word.charAt(length_div_2);
    console.log(char_at_two);
 
    var length_minus_one = word.length - 1;
    var char_at_three = word.charAt(length_minus_one);
    console.log(char_at_three);
 
    var repl_at_one = word.replace(char_at_one, "_");
    var repl_at_two = repl_at_one.replace(char_at_two, "_");
    var repl_at_three = repl_at_two.replace(char_at_three, "_");
 
    console.log(repl_at_three);
    var question = "<h4 id='word_display'>Q." + repl_at_three + "</h4>"
   var answer = "<br><br><input type='text' placeholder='answer' id='ip'>"
    var check = "<br><br><button id='check' onclick='check()' class='btn btn-info'>Check</button>"
    var row = question + answer + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn="player1"
var answer_turn="player2"
function check(){
var user_ans=document.getElementById("ip").value
user_ans=user_ans.toLowerCase()
if(user_ans==word){
player1_score= player1_score+1
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score= player2_score+1
document.getElementById("player2_score").innerHTML=player2_score;
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML = "Question turn:  " + player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML = "Question turn:  " + player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML = "Answer turn:  " + player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML = "Answer turn:  " + player1_name;
}
document.getElementById("output").innerHTML=""
}
