'use strict'
/*let Tc = +prompt('Ввeдите температуру по Цельсию');
let Tf = (9/5)*Tc+32;
alert ('Темература по Фарингейту =' + Tf);

let admin;
let name = 'Василий';
admin = name;
alert (admin);

let a = 1000 +'108';
alert (a);*/

/*var a = 1, b = 1, c, d;
c = ++a; alert(c); // Выведет 2 потому,что запись в префиксной форме ++а равноценна записи 1+а, а поскольку а=1, то 1+1=2.
d = b++; alert(d); // Выведет 1 потому,что запись в постфиксной форме и сначала возвращается значение, а потом совершается инкремирование. 
c = (2+ ++a); alert(c); // Переменная а=2, выполняется действие ++а, а=3, 2+3=5;
d = (2+ b++); alert(d); // Переменная b=2, выполняется действие ++b, b=2, 2+2=4;
alert(a); // При выполнении всего когда переменную а два раза увеличивали на 1, итог пременная а=3;
alert(b); // При выполнении всего когда переменную b два раза увеличивали на 1, итог пременная а=3;

var a = 2;
var x = 1 + (a *= 2);// Запись а*=2, то же самое, что а=а*2, 1+(2*2)=5; Ответ:5.
alert(x);

let a=5;
let b=3;
if (a>=0 && b>=0) alert(a-b);
if (a<0 && b<0) alert(a*b);
if (a<0 && b>=0 || a>=0 && b<0) alert(a+b); //Сначала я сделала вот так, и код работал, но меня коробило написание.И я вспомнила пр else if...

let a=-5;
let b=3;
if (a>=0 && b>=0) {
    alert(a-b);
} else if (a<0 && b<0) {
    alert(a*b);
} else {
     alert(a+b);
} // Понятно, что этот вариант более верен, но имеет место быть  первый вариант написания или это грубая ошибка?

/*let a=5;
switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6: 
        console.log(6);
    case 7:
        console.log(7); 
    case 8: 
        console.log(8);
    case 9:
        console.log(9); 
    case 10:
        console.log(10); 
    case 11:
        console.log(11); 
    case 12:
        console.log(12); 
    case 13:
        console.log(13); 
    case 14:
        console.log(14); 
    case 15:
        console.log(15);
        break; 
    default:
        console.log ('Нет такого значения'); // Код работает, но как это безобразно написанно! Судя по вашей подсказке нужно использовать ++а, но как это сделать я не понимаю. 
} 


function useNumber(x, y) {
    return x + y;
}
let answer = useNumber(2, 3);
alert (answer);

function useNumber1(x, y) {
    return x - y;
}
let answer1 = useNumber1(2, 3);
alert (answer1);

function useNumber2(x, y) {
    return x * y;
}
let answer2 = useNumber2(2, 3);
alert (answer2);

function useNumber3(x, y) {
    return x / y;
}
let answer3 = useNumber3(2, 3);
alert (answer3);

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма' :
           return useNumber (agd1, arg2);
        case 'разность':
            return useNumber1 (arg1, arg2);
        case 'произведение':
            return useNumber2 (arg1,arg2);
        case 'деление':
            return useNumber3 (arg1, arg2);         
    }        
}


function power(val, pow) {
    if (pow==1) { 
        return val;
    } else {
        return val * power(val, pow-1);   
    }    
}
alert (power (2, 3));


function onePrimeNumber (num) { 
    for(let i = 2; i<num; i++) {
        if(num%i===0) return false;
    }
    return num>1;
}
function primeNumbers (num) {
    const rezalt = [];

    for (let a = 2; a<=num; a++) {
        if(onePrimeNumber(a)) {
            rezalt.push(a);
        }
    }
    return rezalt;
}
console.log (primeNumbers(100));

function onePrimeNumber (num) { 
    let i=2
    while (i<num) {
        if(num%i===0) return false;
        i++
    }
    return num>1;
}
function primeNumbers (num) {
    const rezalt = [];

    for (let a = 2; a<=num; a++) {
        if(onePrimeNumber(a)) {
            rezalt.push(a);
        }
    }
    return rezalt;
}
console.log (primeNumbers(100));

for (let i=0; i<=9; i++) console.log(i);

let arr = [
    ['футболка', 1, 250],
    ['шорты', 1, 150],
    ['кроссовки', 2, 500],
]
function countBacketPrice (arr) {
    let summ = 0;
    for (let i=0; i<arr.length; i++) {
        summ += arr[i][1] * arr [i][2];
    }
return summ;
}
console.log(countBacketPrice(arr));

for(var i = 1; i < 40; i += 2) {
    console.log( Array(i).fill('*').join(' ') ); 
}
//скажу честно, такое решение задачи я нашла в интернете. И решила его оставить, потому что нашла для себя такой 
//метод как fill, который меняет значения массива на то которое ты ему задаешь в скобках(value). Причем можно это сделать 
//от определенного элмента (start) до определнного элемента (end). А так же join, который объеденяет все элементы массива.
// Объеденить можно так же по разному и через - и через +. А пишу я все это, что бы вы поняли, что я не просто списала 
//решение а поработала и разобралась в нем)) Единственное, что мне не совсем понятно запись array(i). Это такие образом 
//массив определяется и говорится что в него будет записан весь результат цикла?  */

function number (num) {
    if(num<0 || num>999) {
        return {}
    }
    return {
        units: num/10,
        tens: (num /10) %10,
        hundreds: num/100,
    };
}
console.log (numder(123));