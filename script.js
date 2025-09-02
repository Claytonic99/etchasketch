const grid = document.querySelector("#container");
let square = null;

for (let i = 0; i < 16; i++)
{
    console.log(i);
    let myString = "div"+i;
    square = document.createElement(myString);
    square.textContent = i;
    square.className = "square";
    console.log(square.textContent);
    
    grid.appendChild(square);
}