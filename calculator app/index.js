let num1 = prompt("Enter first number");
document.getElementById("num1-el").textContent = num1;

let num2 = prompt("Enter second number");
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");
function add() {
    sum.textContent = "Result: " + num1 + num2;
}
function substract() {
    sum.textContent = "Result: " + num1 - num2;
}
function divide() {
    sum.textContent = "Result: " + num1 / num2;
}
function multiply() {
    sum.textContent = "Result: " + num1 * num2;
}
