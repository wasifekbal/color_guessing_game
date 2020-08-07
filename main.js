var mode_list = [3, 6, 9];
var mode = 6;
var colors;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorGoal = document.querySelector("#colorGoal");
var msg = document.getElementById("msg");
var title = document.getElementById("title");
var reset = document.getElementById("reset");
var mode_btns = document.querySelectorAll(".mode");


function init() {
  fresh();
  getSquaresInitial();
  manageModeButtons();
}

function manageModeButtons() {
  for (var i = 0; i < mode_btns.length; i++) {
    mode_btns[i].addEventListener("click", function () {
      for (var j = 0; j < mode_btns.length; j++) {
        if (mode_btns[j] == this) {
          mode_btns[j].classList.add("selected");
          mode = mode_list[j];
        } else {
          mode_btns[j].classList.remove("selected");
        }
      }
      fresh();
    });
  }
}

function fresh() {
  reset.textContent = "New Colors";
  msg.textContent = "";
  colors = random_rgb_gen(mode);
  pickedColor = colors[gr(0, mode - 1)];
  colorGoal.textContent = String(pickedColor);
  showSquareColors();
  title.style.backgroundColor = "rgb(1, 145, 130)";
}

reset.addEventListener("click", () => {
  fresh();
});

function showSquareColors() {
  for (var k = 0; k < squares.length; k++) {
    if (k < mode) {
      squares[k].style.backgroundColor = colors[k];
      squares[k].style.display = "block";
    } else {
      squares[k].style.display = "none";
    }
  }
}

function getSquaresInitial() {
  for (var i = 0; i < squares.length; i++) {
    if (i < mode) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }

    squares[i].addEventListener("click", function () {
      var test = this.style.backgroundColor;
      if (test === pickedColor) {
        msg.textContent = "CORRECT !!";
        ChangeColorAllSame(squares);
        title.style.backgroundColor = pickedColor;
        reset.textContent = "Play Again ?";
      } else {
        msg.textContent = "Wrong!! Try Again.";
        this.style.backgroundColor = "#232323";
      }
    });
  }
}

function ChangeColorAllSame(give_me_the_squares) {
  for (var i = 0; i < give_me_the_squares.length; i++) {
    give_me_the_squares[i].style.backgroundColor = pickedColor;
  }
}
function random_rgb_gen(n) {
  var list = [];
  for (var i = 0; i < Number(n); i++) {
    list.push(
      "rgb(" +
        String(gr(0, 255)) +
        ", " +
        String(gr(0, 255)) +
        ", " +
        String(gr(0, 255)) +
        ")"
    );
  }
  return list;
}

function gr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

init();