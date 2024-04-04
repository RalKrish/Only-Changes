const cells = document.querySelectorAll('.cell')
const TheStatus = document.querySelector('.statsText')
const restartBtn = document.querySelector('.restaBtn')

const winCond=
[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

];

let TheOptions =
 [
  "","","",
  "","","",
  "","",""
]
let CurrentPlayer='X'
let running = false;
startGame();

function startGame(){
    cells.forEach(box=>box.addEventListener('click',cellClicked))
    //each cell ie box is assigned with click event and cellClicked fn in invoked.
    restartBtn.addEventListener('click',restartGame)
    TheStatus.textContent=`${CurrentPlayer}'s turn`;
    running=true;
  }

function cellClicked(){
  const cellIndex = this.getAttribute('cellindex')
  //gettin which cell is clicked with help of index
  console.log(cellIndex)

  if(TheOptions[cellIndex]!= "" || !running){
      return;
  // to  check cell occupancy,if box is not preoccupied and game is not running
  }
 updateCell(this,cellIndex)
 //this=> means the current html element that is clicked along with cellindex
 checkWinner()

}


function updateCell(cell,index){
  TheOptions[index] = CurrentPlayer;
  console.log(TheOptions)
  console.log(TheOptions[index])
  //the line 18 theoptions with empty array at the specified posititon eg  
  //['X', '', '',
  // '', '', '',   eg
  // '', '', '']

  // ['X', '', '',
  // 'X', '', 'O',
 //  'X', '', 'O'] like this in code
  cell.textContent = CurrentPlayer
  //refelcted in the dom ie the UI whta you see when you clcik it

}

function checkWinner(){
    let roundWon =false
    for(let i = 0 ; i<winCond.length; i++){//
      const theCondition= winCond[i];
      //condition=
      // [0,1,2],for i=0 and stores theCondition=[0,1,2] the first value inside
      // [3,4,5],for i=1 and stores theCondition=[3,4,5] the first value inside
      // [6,7,8],for i=1 and stores theCondition=[6,7,8] the first value inside...
      // [0,3,6],
      // [1,4,7],
      // [2,5,8],
      // [0,4,8],
      // [2,4,6]
      const cellsA = TheOptions[theCondition[0]];//eg if [0,1,2] is selcted cellsA=0
      const cellsB = TheOptions[theCondition[1]];//eg if [0,1,2] is selcted cellsA=1
      const cellsC = TheOptions[theCondition[2]];//eg if [0,1,2] is selcted cellsA=2

      if (cellsA == ""  || cellsB == "" || cellsC == "" ){
        continue
      }
      if(cellsA == cellsB && cellsB == cellsC){
        roundWon = true;
        break;
      }
    }
    if(roundWon){
      TheStatus.textContent = `${CurrentPlayer} wins!`;//the palyer whoclciked the box at last ie CurrentPlayer
      running = false;//running stops nothing else happens

    }
    else if(!TheOptions.includes("")){//!TheOptions.includes("") meaning no box
      //is empty and no winning condition is matched

      TheStatus.textContent="Draw"
      running=false
    }
    else{
      changePlayer()
    }
}


function changePlayer(){
  CurrentPlayer = (CurrentPlayer == "X") ? "O" : "X";
  // console.log(CurrentPlayer)
  TheStatus.textContent = `${CurrentPlayer}'s turn`
}

function restartGame(){
    CurrentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    TheStatus.textContent = `${CurrentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}