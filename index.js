//browser only
//alert("Hello");

let statusText = document.getElementById("status-text");
let board = document.getElementById("board");
let activePlayer = "X";

//document.querySelector("#status-text");

let boxes = document.querySelectorAll(".box");

/*for (let box of boxes) {
let number = Math.floor((Math.random() * 2));
if (number === 0) {
    box.innerText = "O"
} else if (number === 1) {
    box.innerText = "X";
} 
} 

/**
 * updated the CSS classes of all 9 boxes based on their content
 * if a box has an X in it, it will get the additional class "box-x"
 * if a box has an "O" int it, it will geht de additional class "box-o"
 * 
 * examples:
 * <div class = "box"></div>
 * <div class = "box box-x">X</div>
 * <>div class = "box box-o">O </div>
 */

function updateBoxClasses () {
  for (let box of boxes) {
  if (box.innerText === "X") {
    //eine neue klasse hinzufügen zu box
    //box.stlye.paddingTop = "0px";
    box.classList.add("box-x");
    box.classList.remove("box-o");

  }
  else if(box.innerText === "O") {
    box.classList.add("box-o");
    box.classList.remove("box-x");
  }
  else {
    box.classList.remove("box-x");
    box.classList.remove("box-o");
  }
}
}

updateBoxClasses();
//
statusText.innerText = "ready";
statusText.innerHTML = "<strong> page </strong> loaded"

//add click event listeners to all boxes

for (let box of boxes) {
  box.addEventListener("click", 
  () => {
    if (box.innerHTML === "") {
    box.innerText = activePlayer;
    updateBoxClasses();
    switchPlayer();
    }
    else {
      alert("Already taken.");
    }
    });
}

let button = document.getElementById("btn");
btn.addEventListener("click", emptyField);

function emptyField () {
  for (let box of boxes) {
    box.innerHTML = "";
  }
}


function switchPlayer () {
    if(activePlayer === "X") {
    activePlayer = "O";
  } else if (activePlayer === "O") {
    activePlayer = "X";
  }}

  


