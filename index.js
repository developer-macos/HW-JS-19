//1
let red = document.querySelector(".red-button");
let green = document.querySelector(".green-button");
let white = document.querySelector(".white-button");
let body = document.querySelector(".body");

red.addEventListener('click', () => {
    body.classList.remove("green")
    body.classList.remove("white")
    body.classList.add("red")
})

white.addEventListener('click', () => {
    body.classList.remove("green")
    body.classList.remove("red")
    body.classList.add("white")
})

green.addEventListener('click', () => {
    body.classList.remove("red")
    body.classList.remove("white")
    body.classList.add("green")
})

//2
let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
let btn = document.querySelector(".btn");

let inps = () => {
    let inputed = input.value;
    output.textContent = `${inputed}`;
}

btn.addEventListener('click', inps); 