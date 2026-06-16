/*Add your JavaScript here*/

var quesans = "";
var mbti = "";

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var result = document.getElementById("result");

q1a1.addEventListener("click", iperson);
q1a2.addEventListener("click", eperson);
q2a1.addEventListener("click", nperson);
q2a2.addEventListener("click", sperson);
q3a1.addEventListener("click", tperson);
q3a2.addEventListener("click", fperson);
q4a1.addEventListener("click", jperson);
q4a2.addEventListener("click", pperson);

function iperson() {
  mbti += "i";
  quesans += "1";
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}

function eperson() {
  mbti += "e";
  quesans += "1";
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}

function nperson() {
  mbti += "n";
  quesans += "2";
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}

function sperson() {
  mbti += "s";
  quesans += "2";
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}

function tperson() {
  mbti += "t";
  quesans += "3";
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}

function fperson() {
  mbti += "f";
  quesans += "3";
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}

function jperson() {
  mbti += "j";
  quesans += "4";
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  if (quesans == "1234") {
    document.getElementById("showans").disabled = false;
  }
}

function pperson() {
  mbti += "p";
  quesans += "4";
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  if (quesans == "1234") {
    document.getElementById("showans").disabled = false;
  }
}

var showans = document.getElementById("showans");
document.getElementById("showans").disabled = true;
showans.addEventListener("click", reveal);

function reveal() {
  result.innerHTML = "Your mbti is " + mbti + "!";
}

var restart = document.getElementById("restart");
restart.addEventListener("click", clear);

function clear() {
  result.innerHTML = "Your mbti is...";
  quesans = "";
  mbti = "";
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("showans").disabled = true;
  
}
