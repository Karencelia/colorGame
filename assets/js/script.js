const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

const colorBox = document.getElementById("colorBox");
const colorOption = document.getElementById("colorOption");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");


gameStatus.style.paddingTop = "10px";
newGameButton.style.borderRadius = "5px"
newGameButton.style.marginTop = "30px";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function startGame() {

    shuffleArray(colors);


    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;


    colorOption.innerHTML = "";


    colors.forEach(color => {
        const button = document.createElement("button");
        button.textContent = "";
        button.style.backgroundColor = color;
        button.style.width = "60px";
        button.style.height = "60px";
        button.style.borderRadius = "50%";
        button.style.margin = "10px";
        button.setAttribute("data-testid", "colorOption");

        button.addEventListener("click", () => checkGuess(color));

        colorOption.appendChild(button);
    });
}


function checkGuess(color) {
    if (color === targetColor) {
        gameStatus.textContent = "That is Correct! Bravo!";
        gameStatus.style.color = "green";
        gameStatus.classList.add("celebrate");
        score++;
        scoreDisplay.textContent = score;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        startGame();
    } else {
        gameStatus.textContent = "Aww.. That's Wrong! Try again.";
        gameStatus.style.color = "red";
        gameStatus.classList.add("hidden");
    }
    setTimeout(() => {
        gameStatus.classList.remove("hidden");
        gameStatus.classList.remove("celebrate");
        gameStatus.textContent = "";
    }, 1500);
}


newGameButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
});


startGame();
