// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

    document.write(`<ul>`)
            for(let since of listOfItems){
                document.write(`<li>${since}</li>`)
            }
    document.write(`</ul>`)


