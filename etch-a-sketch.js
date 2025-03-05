const container = document.querySelector("#container");

function createGrid (size) {
    container.innerHTML = "";

    let squareSize = 500 / size;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let hasEntered = false;

        square.addEventListener("mouseenter", function () {
            hasEntered = true;
        });

        square.addEventListener("mouseleave", function (e) {
            if (hasEntered) {
                e.target.style.background = "black";
            }
        });

        container.appendChild(square);
    }
}

createGrid(50);

const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Change Grid Size";
body.insertBefore(button, document.querySelector("h1"));

button.addEventListener("click", () => {

    let gridSize = parseInt(prompt("Please Enter A Grid Size #"));

    while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        if (gridSize < 1) {
            alert("The number you entered is less than 1. Please Try Again");
        } else if (gridSize > 100) {
            alert("The number you entered is greater than 100. Please try again")
        } else if (isNaN(gridSize)){
            alert("That is not a valid number. Please enter a number between 1 and 100.");
        }

        gridSize = parseInt(prompt("Please Enter Grid Size #"));
    }

    createGrid(gridSize);
})

//createGrid needs to be dynamic in that it allows for different sizes