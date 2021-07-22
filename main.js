var player1=localStorage.getItem("p1")
var player2=localStorage.getItem("p2")
var score=localStorage.getItem("score")
document.getElementById("player1_name").innerHTML=player1
document.getElementById("player2_name").innerHTML=player2
document.getElementById("player1_score").innerHTML=score
document.getElementById("player2_score").innerHTML=score
document.getElementById("player_question").innerHTML="question turn"+player1
document.getElementById("player_answer").innerHTML="answer turn"+player2
fuction send() {
    var getw=document.getElementById("word").value
    var getwl=getw.toLowerCase()
    console.log(getwl)
    var pos1=getwl.charAt(1)
    console.log(pos1)
replace1=getwl.replace(pos1,"gettext(input1*input2)")

    var question = "<h4 id='word_display'>Q." + replace3+ "</h4>" 
    var answer = "<br><br><input type='text' placeholder='answer'>" 
    var check = "<br><br><button id='check' onclick='send' class='btn btn-info'>Check</button>" 
    var row = question + answer + check;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}