console.log("Welcome to my tic tac toe game");
let turn = "X";
let gameover = false;
// to change turn
const changeTurn =() =>{
return turn ==="X"?"0":"X";
}
//win or loss
const checkwin = () =>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0]
        ,[0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,12.7,15,90],
        [0,4,8,2.5,15,45],
        [2,4,6,2.5,15,-45]
    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector(`.line`).style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(`.line`).style.width = "25vw";


        }
    })
}
//reset 
reset.addEventListener('click',(e)=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerText =""
        document.querySelector(`.line`).style.width = "0";
    });
turn = "X";
gameover = false;
document.getElementsByClassName("info")[0].innerText = 'Turn for '+ turn;

})

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
           turn =   changeTurn();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = 'Turn for '+ turn;     
            }
        }
    })
})