const grid = document.querySelector("#container");
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    // Remove previous squares
    const bad = document.querySelectorAll("#square");
    bad.forEach(sq => sq.remove());
    // Prompt user for new number of squares
    let size = window.prompt("Enter a size from 1 - 100");
    // Create new squares
    if (size > 0 && size <= 100)
    {
        for (let i = 0; i < size; i++)
        {
            console.log(i);
            let myString = "div"+i;
            let square = document.createElement(myString);
            square.textContent = i;
            square.className = "square";
            square.id = "square";
            square.style.backgroundColor = "white";
            console.log(square.textContent);
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
            
            grid.appendChild(square);
        }
    }
});

