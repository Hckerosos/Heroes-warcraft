var text = ['WARCRAFT', 'EL ROCK','PROGRAMAR','EL CINE'];

var index = 0;

function changeText() {
  document.getElementById("text").innerText = text[index];
  index = (index + 1) % 4;
}

var interval = window.setInterval(changeText, 2000);

window.onunload = function () {
  window.clearInterval(interval);
};
