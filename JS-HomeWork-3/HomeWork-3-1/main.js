// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


//Тут я так зрозумів що я виконав два завдання в одному завданні, або я щось не так зрозумів


for (let i = 0; i < 10; i++ ){
    
    document.write(`<div>"Hello" ${i}</div>`)

}



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i=0;
while (i<20){

    document.write(`<h1>Hello ${i}</h1>`);

    i++;
}