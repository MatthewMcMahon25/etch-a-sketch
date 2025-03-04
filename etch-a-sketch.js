const container = document.querySelector("#container");

function createGrid (size) {
    container.innerHTML = "";

    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(16);