//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//Це вірно зроблено завдання? Бо я не зрозумів як це через .а. тому зробив через промт

//Я закоментував ці коди бо все на купу працювало)

//----------------------------------------------------------------

// let x= +prompt('Enter number');
//
// if ( x !== 0 ){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

//-----------------------------------------------------------------

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//------------------------------------------------------------------------

// let time = prompt('Set number 0-59');
//
// if (0 <= time && time <= 14) {
//
//     console.log('The first half hour');
//
// } else if (15 <= time && time <= 29) {
//
//     console.log('The second half hour');
//
// } else if (30 <= time && time <= 44) {
//
//     console.log('The half hour');
//
// } else if (45 <= time && time <= 59) {
//
//     console.log('The four half hour');
//
// } else{
//     console.log('Error')
// }

//------------------------------------------------------------------------------------

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//-------------------------------------------------------------

// let day = prompt('Set day 1-31')
//
// if(0 <= day && day <= 11){
//
//     console.log('First half month')
//
// } else if (12 <= day && day <= 21) {
//
//     console.log('Second half month')
//
// } else if(22 <= day && day <= 31){
//
//     console.log('Three half month')
// } else {
//     console.log('Error')
// }

//---------------------------------------------------------------

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day= +prompt('Select day a week 1-7');
let dayInfo;

switch (day){

    case 1:
        dayInfo= 'Monday - is a working day';
        break;

    case 2:
        dayInfo= 'Tuesday - is gym day';
        break;

    case 3:
        dayInfo='Wednesday - is a working day';
        break;

    case 4:
        dayInfo='Thursday - is a rest day';
        break;

    case 5:
        dayInfo='Friday - is a working day';
        break;

    case 6:
        dayInfo='Saturday - train to relatives';
        break;

    case 7:
        dayInfo='Sunday - is a rest day';
        break;

    default:
        dayInfo='Error';
}

console.log(dayInfo);