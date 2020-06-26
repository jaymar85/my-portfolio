document.addEventListener("DOMContentLoaded", type);

const dataText = ["Web Developer", "Creator", "Designer"];

function type(text, index) {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML =
      text.substring(0, index + 1) + '<span aria-hidden="true"></span>';
    setTimeout(function () {
      type(text, index + 1);
    }, 150);
  } else if (index === text.length) {
    document.getElementById("typewriter").innerHTML =
      text.substring(0, index + 1) + '<span aria-hidden="true"></span>';
    cancelTimeout(type);
  }
}

function StartTextAnimation(i) {
  if (i < dataText[i].length) {
    type(dataText[i], 0, function () {
      StartTextAnimation(i + 1);
    });
  }
}

StartTextAnimation(0);
