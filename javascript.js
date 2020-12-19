let questions = document.querySelectorAll("fieldset");
let current = 0;

document.querySelector("#current").innerHTML = (current + 1);
document.querySelector("#total").innerHTML = questions.length;

function nextQuestion() {
  if (current < questions.length - 1) {
    questions[current].classList.toggle("hide");
    current++;
    questions[current].classList.toggle("hide");
  }
  if (current == questions.length - 1) {
    document.querySelector("#submit").classList.toggle("hide");
    document.querySelector(".nextBtn").classList.toggle("hide");
  }
  if (current == 1) {
    document.querySelector("#frågor-titel").classList.toggle("hide");
    document.querySelector(".previousBtn").classList.toggle("hide");
  }
  document.querySelector("#current").innerHTML = (current + 1);
}

function previousQuestion() {
  if (current > 0) {
    questions[current].classList.toggle("hide");
    current--;
    questions[current].classList.toggle("hide");
  }
  if (current == 0) {
    document.querySelector("#frågor-titel").classList.toggle("hide");
    document.querySelector(".previousBtn").classList.toggle("hide");
  }
  if (current == questions.length - 2) {
    document.querySelector("#submit").classList.toggle("hide");
    document.querySelector(".nextBtn").classList.toggle("hide");
  }
  document.querySelector("#current").innerHTML = (current + 1);
}

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
    document.querySelector("#error").classList.remove("hide");
    let points = 0;
    let answers = document.querySelectorAll("input[type='radio']:checked");
    for (let i = 0; i < answers.length; i++) {
      points += parseInt(answers[i].value);
    }
    document.querySelector("#totalpoäng").innerHTML = points;
    let möjliga = document.querySelectorAll(".questions");
    document.querySelector("#möjliga").innerHTML = möjliga.length;
    document.querySelector("form").classList.toggle("hide");
    document.querySelector("#currentP").classList.toggle("hide");
    document.querySelector("#result").classList.toggle("hide");
  }
  else
  {
    document.querySelector("#error").classList.remove("hide");
  }
}

function reset() {
  document.querySelector("#error").classList.add("hide");
  document.querySelector("form").reset();
  document.querySelector("form").classList.toggle("hide");
  document.querySelector("#currentP").classList.toggle("hide");
  document.querySelector("#result").classList.toggle("hide");
  questions[current].classList.toggle("hide");
  current = 0;
  questions[current].classList.toggle("hide");
  document.querySelector(".previousBtn").classList.toggle("hide");
  document.querySelector(".nextBtn").classList.toggle("hide");
  document.querySelector("#submit").classList.toggle("hide");
  document.querySelector("#frågor-titel").classList.toggle("hide");
}
