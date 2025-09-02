const grid = document.querySelector("#container");
const button = document.querySelector("#button");
let opacity = 0;
button.addEventListener("click", () => {
    // Remove previous squares
    const bad = document.querySelectorAll("#square");
    bad.forEach(sq => sq.remove());
    // grid.innerHTML = ""; //also works

    // Prompt user for new number of squares
    let size = window.prompt("Enter a size from 1 - 100");
    
    // Create new squares
    if (size > 0 && size <= 100)
    {
        for (let i = 0; i < size * size; i++)
        {
            console.log(i);
            let myString = "div";
            let square = document.createElement(myString);
            square.style.width = (800 / size) + "px";
            square.style.height = (800 / size) + "px";
            square.className = "square";
            square.id = "square";
            // square.textContent = i;
            square.style.backgroundColor = "white";
            square.addEventListener('mouseenter', () => {
                // square.style.backgroundColor = 'black';
                const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
                let color = "#";
                for (let z = 0; z < 6; z++)
                {
                    const random = Math.floor(Math.random()*16);
                    color += hexCharacters[random];
                }
                console.log("Your color is:"+color);
                square.style.backgroundColor = color;
                opacity += 0.1;
                square.style.opacity = opacity;
                
            });
            
            grid.appendChild(square);
        }
    }
});

