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
//click listener lagana hai
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let e = document.querySelector(".boxtext")
    BaseAudioContext.addEventListener("click",()=>{
        if(e.innerText === ''){
            e.innerText=turn;
            changeTurn();
            checkWin();
            document.getElementsByClassName(turn)[0].innerText="turn for"+turn;
            
        }
    })
})