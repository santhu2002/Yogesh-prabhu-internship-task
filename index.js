let summaryCollection = document.getElementsByClassName('question');
let signsCollection = document.getElementsByClassName('sym');
let answers = document.getElementsByClassName("ans");

for (let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function () {
    if (signsCollection[i].innerHTML === '+') {
      signsCollection[i].innerHTML = '—';
      answers[i].style.display = "block";
    }
    else {
      signsCollection[i].innerHTML = '+';
      answers[i].style.display = "none";
    }
  }
}