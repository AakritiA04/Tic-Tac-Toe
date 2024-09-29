console.log("Welcome to tic tac toe");

let turn="X";


//function to change the turn
const changeTurn=()=>{
    return turn ==="X"?"0":"X";
}

//function to check for a win

const checkWin=()=>{

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEacg