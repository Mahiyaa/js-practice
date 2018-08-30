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

  //gotta check against arrOfX and arrOfO
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      across.push(game[i][j]);
      down.push(game[j][i]);
    }
    // if (across === arrOfX || down === arrOfX) return "X is the winner";
    // if (across === arrOfO || down === arrOfO ) return "O is the winner";
  }
  console.log("across: ", across)
  for (let a = 0; a < across.length; a++){
    console.log(Math.floor(a/3)*3) //0 0 0 3 3 3 6 6 6
  }

return "IT'S A TIE";
}


let game1 = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["O", "O", "X"]
]
//FOR GAME 1 RETURN "O IS WINNER"

// let game2 = [
//   ["X", "O", "X"],
//   ["X", "O", "O"],
//   ["O", "X", "X"]
// ]
//FOR GAME 2 RETURN "IT IS A TIE"

/*
X O X
X X O
O O X 

let X = "X";
let O = "O";
X WINS
FOR I = 0 I < 3 I++
FOR J = 0 J < 3 J++
ACROSS: [0,0][0,1][0,2] || [1,0][1,1][1,2] || [2,0][2,1][2,2]
DOWN: [0,0][1,0][2,0] || [0,1][1,1][2,1] || [0,2][1,2][2,2]
SLANT : [0,0][1,1][2,2] || [0,2][1,1][2,0]
*/

gameChecker(game1);