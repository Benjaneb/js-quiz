let questions = document.querySelectorAll(".questions");
let current = 0;
let frågorTitel = document.getElementById("frågor-titel");
let submit = document.getElementById("submit");
let currentID = document.getElementById("current");
let total = document.getElementById("total");

currentID.innerHTML = (current + 1);
total.innerHTML = questions.length;

function nextQuestion() {
  if (current < questions.length - 1) {
    questions[current].classList.toggle("hide");
    current++;
    questions[current].classList.toggle("hide");
  }
  if (current == questions.length - 1) {
    submit.classList.toggle("hide");
    document.querySelector(".nextBtn").classList.toggle("hide");
  }
  if (current == 1) {
    frågorTitel.classList.toggle("hide");
    document.querySelector(".previousBtn").classList.toggle("hide");
  }
  currentID.innerHTML = (current + 1);
}

function previousQuestion() {
  if (current > 0) {
    questions[current].classList.toggle("hide");
    current--;
    questions[current].classList.toggle("hide");
  }
  if (current == 0) {
    frågorTitel.classList.toggle("hide");
    document.querySelector(".previousBtn").classList.toggle("hide");
  }
  if (current == questions.length - 2) {
    submit.classList.toggle("hide");
    document.querySelector(".nextBtn").classList.toggle("hide");
  }
  currentID.innerHTML = (current + 1);
}

let result = document.getElementById("result");

function submitQuiz() {
  let invalid = document.querySelectorAll("input:invalid");
  for (let i = 0; i < invalid.length; i++) {
    invalid[i].classList.add("invalid");
  }
  let valid = document.querySelectorAll("input:valid");
  for (let i = 0; i < valid.length; i++) {
    valid[i].classList.remove("invalid");
  }
  if (invalid.length == 0) {
    let points = 0;
    let answers = document.querySelectorAll("input[type='radio']:checked");
    for (let i = 0; i < answers.length; i++) {
      points += parseInt(answers[i].value);
    }
    document.querySelector(".totalpoäng").innerHTML = points;
    document.querySelector("form").classList.toggle("hide");
    result.classList.toggle("hide");
  }
}

function reset() {
  document.querySelector("form").classList.toggle("hide");
  result.classList.toggle("hide");
}
