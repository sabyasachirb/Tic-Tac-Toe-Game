let boxes = document.querySelectorAll(".btn");
let resetButton = document.getElementById("reset");
let newGamebtn = document.getElementById("newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turn = true;
let upper = document.querySelector(".upper");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () => {
    turn = true;
    upper.style.display = "none";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
showWinner = (winner) => {
    upper.style.display = "block";
    msg.innerText = `Player ${winner} has won the game!`;
    boxes.forEach((box) => (box.disabled = true));
}
checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
      
    }
}

resetButton.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);


const drawCheck = () => {
    let draw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            draw = false;
        }
    });
    if (draw) {
        upper.style.display = "block";
        msg.innerText = "It's a Draw!";
        boxes.forEach((box) => (box.disabled = true));
    }       
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        drawCheck();
    }); 
});