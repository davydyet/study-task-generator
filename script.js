document.getElementById("generate").addEventListener("click", function(){

let subject = document.getElementById("subject").value;

if(subject === ""){
document.getElementById("result").innerText =
"Please enter a subject first!";
document.getElementById("result").style.opacity = 1;
document.getElementById("result").style.color = "red";  
return;
}

else {
  let times = [20, 30, 40, 50];
  let randomTime = times[Math.floor(Math.random() * times.length)];

  let tips = [
              "Try solving 3 practice problems.",
              "Watch a short tutorial video.",
              "Review your notes from last class.",
              "Build a small example project.",
              "Break the topic into parts and, review them 1 by 1."
              ];

  let randomTip = tips[Math.floor(Math.random() * tips.length)];

  document.getElementById("result").innerText =
  "You should review " + subject + " for " + randomTime + " minutes   today.\nTip: " + randomTip;
  document.getElementById("result").style.color = "";
}
  document.getElementById("result").style.opacity = 1;

});


document.getElementById("clear").addEventListener("click", function(){

document.getElementById("subject").value = "";
document.getElementById("result").innerText = "";
document.getElementById("result").style.opacity = 0;

});