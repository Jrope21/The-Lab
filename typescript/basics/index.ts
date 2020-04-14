const button = document.querySelector('button');
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => num1 + num2;

button.addEventListener("click", () => {
    console.log(add(+num1.value, +num2.value));
})