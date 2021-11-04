const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WIN_COMBS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('.cell');
const table = document.getElementById('table');
const winningMessageTextElement = document.querySelector('.win-text')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
let circleTurn;

startGame();

restartButton.addEventListener('click', ()=>{
   location.reload();
})

function startGame(){
    cellElements.forEach(cell=>{
        cell.addEventListener('click', handleClick, { once: true})
    });
}


function handleClick(e){
    const cell = e.target;
    let currentClass= "";
    if(circleTurn){ 
        currentClass =  CIRCLE_CLASS;
    } else {
        currentClass = X_CLASS;
    };
    placeMark(cell, currentClass);
    if(checkWin(currentClass)){
        endGame(false)
    } else if(isDraw()){
        endGame(true)
    } else {
        swapTurns();
    }
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = 'Draw!';
    } else{
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}
function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}
function swapTurns(){
    circleTurn = !circleTurn;
}
function checkWin(currentClass){
    return WIN_COMBS.some(comb => {
        return comb.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}