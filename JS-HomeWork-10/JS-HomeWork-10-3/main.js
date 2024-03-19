function visit (){
    let arrayParse = JSON.parse(localStorage.getItem('session')) || [];
    let date = new Date();
    arrayParse.push({
        day : date.getDate(),
        month : date.getMonth(), // чомусь місяць неправильно відображається, можливо в вас добре відобразить
        year : date.getFullYear(),
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
    });
    let saveSession = JSON.stringify(arrayParse);
    localStorage.setItem('session', saveSession);
}
visit()