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
alert (power (2, 3));*/




const table = document.createElement('table');
table.style.border = '2px solid black';
table.style.width = '200px';
table.style.height = '200px';
function chessBoard () {
    for (let i = 1; i < 9; i++) {
        const trElem = document.createElement ('tr');
        table.appendChild(trElem);   
        for (let j = 1; j < 9; j++) {
            const tdElem = document.createElement ('td');
            trElem.appendChild(tdElem);
            if((i +j) % 2 === 0) {
                tdElem.style.backgroundColor = 'black';
            } else {
                tdElem.style.backgroundcolor = "white";
            }
        } 
    }
}
document.body.appendChild(table);
chessBoard (); 
// я без понятия как доску пронумеровать.




let obj = {
    goods: [
{
    description: 'футболка',
    quantity: 1,
    price: 250,
},
{
    description: 'кроссовки',
    quantity: 2,
    price: 500,
}
]
}
let countBacketPrice = obj.goods.reduce((accum, currentValue) => accum + currentValue.quantity*currentValue.price, 0);
let productList = document.getElementById('product');
function output() {
    if(obj.goods.length>0) {
        productList.insertAdjacentHTML('beforeend', `В корзине ${obj.goods.length} позиции, общей стоимостью ${countBacketPrice}.`);
} else {
        productList.textContent = "Корзина пуста";
} 
} 
output ();   
