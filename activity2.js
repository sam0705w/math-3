function getitem(){
    var score=localStorage.getItem("score");
    document.getElementById("update").innerHTML=score
  }
  function back(){
    window.location="activity.html"
  }