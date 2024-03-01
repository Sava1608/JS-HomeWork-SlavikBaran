// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//    Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr=[123, 'Hello Mentor', true];

function list(){
    for (let a of arr){
        document.write(`<ul><li>${a}</li></ul>`)
    }
}
list();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//    Для кожного об'єкту окремий блок.

let object = [{id:228, name:'Kokos', age: 20}]

function obj(){
    for (let o of object){
         document.write(`<div><ul><li>${o.id}</li></ul></div>`)
        document.write(`<div><ul><li>${o.name}</li></ul></div>`)
        document.write(`<div><ul><li>${o.age}</li></ul></div>`)
    }
    return document;
}
obj()

// - створити функцію яка повертає найменьше число з масиву

let numberArr =[6,4,7,8,9,1,0]
function findNumber(numbers) {
    let minNumber = numbers[0];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < minNumber) {
            minNumber = numberArr[i];
        }
    }
    return minNumber;
}
let min = findNumber(numberArr)
console.log(min)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let arrSum = [1,2,10]
function sum(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

let allSum = sum(arrSum);
console.log(allSum)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1)

let arraySwap = [11,22,33,44];
function swap(arr, index1, index2){
    let i = arraySwap[index1]
    arr[index1] = arr[index2];
    arr[index2] = i;
    return arr;
}
swap(arraySwap, 0, 1);
console.log(arraySwap);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')

// Я з цим не впорався, сорііі))