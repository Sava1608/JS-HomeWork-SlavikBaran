// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - створити функцію яка повертає найменьше число з масиву

let numberArr =[100500, 228, 1337];
const minNumber = arr =>{
    let number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < number) {
            number = arr[i];
        }
    }
    return number;
}
console.log(minNumber(numberArr))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrSum = [1,2,10]
const sum = array =>{
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
console.log(sum(arrSum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arraySwap = [11,22,33,44];
const numberSwap = (swap,index1,index2) =>{
    let i = swap[index1]
    swap[index1] = swap[index2];
    swap[index2] = i;
    return swap;
}
console.log(numberSwap(arraySwap, 0, 1))


// Тут я також не впорався з останнім завданням соріііі) <З