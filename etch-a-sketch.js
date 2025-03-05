const container = document.querySelector("#container");

function createGrid (size) {
    container.innerHTML = "";

    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

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

createGrid(16);

const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Change Grid Size";
body.insertBefore(button, document.querySelector("h1"));

//button.addEventListener("click", ) => {
    //user prompt for Grid Size (# between 1 and including 100)

    //enter user prompt into createGrid

    //createGrid needs to be dynamic in that it allows for different sizes
//}