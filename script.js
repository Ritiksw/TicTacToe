console.log("Welcome to Tic Tac Toe");
let music = new Audio("bgmusic.mp3");
let turnSound = new Audio("sound.mp3");

let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//To check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "-Won";
      isgameover = true;
    }
  });
};

// Game Main logic
let boxes = document.getElementsByClassName("box");

//element is div whose class is box
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      // turnSound.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for::" + turn;
      }
    }
  });
});
//for clearing the screen reset button
// function clearall() {
//   let boxtext = document.querySelectorAll(".boxtext");
//   Array.from(boxtext).forEach(() => {
//     boxtext.innerText ="";
//   });
// }
// let rstbtn = document.getElementById("reset");
// rstbtn.addEventListener("click", () => {
//   clearall();
// });
reset.addEventListener('click',()=>{
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element => {
  element.innerText =""
  });

  //reset won info
  document.querySelector(".info").innerText =
        "Turn for::" + turn ;
      isgameover = false;
      music.play();

}) 