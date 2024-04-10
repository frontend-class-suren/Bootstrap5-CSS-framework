let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");

let turnX = true; 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function checkWin(player) {
    return winPatterns.some(pattern => pattern.every(index => boxes[index].innerText === player));
}

function handleBoxClick(box) {
    if (!box.innerText) { 
        box.innerText = turnX ? "X" : "O"; 
        if (checkWin(box.innerText)) {
            alert(`${box.innerText} wins!`);
            resetGame();
        } else if ([...boxes].every(box => box.innerText !== "")) { 
            alert("It's a draw!");
            resetGame();
        } else {
            turnX = !turnX; 
        }
    }
}

// Function to reset the game
function resetGame() {
    boxes.forEach(box => box.innerText = ""); 
    turnX = true; 
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        handleBoxClick(box);
    });
});

resetButton.addEventListener("click", resetGame);
