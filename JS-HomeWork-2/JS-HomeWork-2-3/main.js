
let num1= +prompt("Number one");
let num2= +prompt("Number two");
let maxNumber;

switch (true){
    case(num1 > num2):
        maxNumber = num1;
        console.log("Max Number: " + maxNumber)
        break;

    case(num2 > num1):
        maxNumber = num2;
        console.log("Max Number: " + maxNumber)
        break;

    case(num1 === num2):
        console.log("Numbers are equal")
}
