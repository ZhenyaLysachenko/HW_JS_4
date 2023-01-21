
let numFirst = prompt("Choose first number")
while (isNaN(numFirst) ||  numFirst === "" ||  numFirst === null) {
    numFirst = prompt("Enter the first number again", numFirst)
}

let numSecond = prompt("Choose second number");
while (isNaN(numSecond) ||  numSecond === "" ||  numSecond === null) {
    numSecond = prompt("Enter the second number again", numSecond);
}
const operations = "+-*/"
let operator = prompt('Enter operation sign +, -, *, /, %');
while (!operations.includes(operator)){
    prompt('Enter operation sign again +, -, *, /, %');
}
function calcNum(numFirst,numSecond,operator) {
    if (operator === "+"){
        return (+numFirst + +numSecond);
    }else if (operator === "-") {
        return (numFirst - numSecond);
    }else if (operator === "*") {
        return (numFirst * numSecond);
    }else if (operator === "/") {
        return (numFirst / numSecond)
    }
}
let result = calcNum(numFirst, numSecond, operator);
console.log(result);
