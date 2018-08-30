/*
tic-tac-toe checker
If user wins, return "_ IS WINNER"
Else if tie, return "IT'S A TIE"
*/
function gameChecker(game){
  let x = 0
  let y = 2
  let arrOfX = ["X", "X", "X"]; 
  let arrOfO = ["O", "O", "O"];
  let across = [];
  let down = [];
  let leftDown = [];
  let rightDown = [];

  while (x < 3 && y > -1){
    rightDown.push(game[x][y])
    leftDown.push(game[x][x])
    x++;
    y--;
  }

  if (rightDown === arrOfX || leftDown === arrOfX) return "X is the winner";
  if (rightDown === arrOfO || leftDown === arrOfO) return "O is the winner";