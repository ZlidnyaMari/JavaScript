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
//массив определяется и говорится что в него будет записан весь результат цикла?  

function number (num) {
    if(num<0 || num>999) {
        return {}
    }
    return {
        units: num%10,
        tens: Math.floor(num /10) %10,
        hundreds: Math.floor (num/100),
    };
}
console.log (number(123));

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
],

countBacketPrice () {
   return this.goods.reduce((accum, currentValue) => accum + currentValue.quantity*currentValue.price, 0);
    }
}
console.log(obj.countBacketPrice()); */




const settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winFoodCount: 50,
};

const config = {
    settings,

    init(userSettings) {
        Object.assign(this.settings, userSettings);
    },

    getRowsCount() {
        return this.settings.rowsCount;
    },

    getColsCount() {
        return this.settings.colsCount;
    },

    getSpeed() {
        return this.settings.speed;
    },

    getWinFoodCount() {
        return this.settings.winFoodCount;
    },

    validate() {
        const result = {
            isValid: true,
            errors: [],
        };

        if (this.getRowsCount() < 10 || this.getRowsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getColsCount() < 10 || this.getColsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение colsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getSpeed() < 1 || this.getSpeed() > 10) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
        }

        if (this.getWinFoodCount() < 5 || this.getWinFoodCount() > 50) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение winFoodCount должно быть в диапазоне [5, 50].');
        }

        return result;
    },
};

const map = {
    cells: null,
    usedCells: [],

    init(rowsCount, colsCount) {
        const table = document.getElementById('game');
        table.innerHTML = '';

        this.cells = {}; // {x1_y1: td, x1_y2: td}
        this.usedCells = [];

        for (let row = 0; row < rowsCount; row++) {
            const tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                const td = document.createElement('td');
                td.classList.add('cell');

                this.cells[`x${col}_y${row}`] = td;
                tr.appendChild(td);
            }
        }

    },

    render(snakePointsArray, foodPoint) {
        for (const cell of this.usedCells) {
            cell.className = 'cell';
        }

        this.usedCells = [];

        snakePointsArray.forEach((point, idx) => {
            const snakeCell = this.cells[`x${point.x}_y${point.y}`];
            snakeCell.classList.add(idx === 0 ? 'snakeHead' : 'snakeBody');
            this.usedCells.push(snakeCell);
        });

        const foodCell = this.cells[`x${foodPoint.x}_y${foodPoint.y}`];
        foodCell.classList.add('food');
        this.usedCells.push(foodCell);
    }
};

const snake = {
    body: null,
    direction: null,
    lastStepDirection: null,

    init(startBody, direction) {
        this.body = startBody;
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getBody() {
        return this.body;
    },

    getLastStepDirection() {
        return this.lastStepDirection;
    },

    isOnPoint(point) {
        return this.getBody().some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },

    makeStep() {
        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    growUp() {
        const lastBodyIdx = this.body.length - 1;
        const lastBodyPoint = this.body[lastBodyIdx];
        const lastBodyPointClone = Object.assign({}, lastBodyPoint); // {...lastBodyPoint}

        this.body.push(lastBodyPointClone);
    },

    getNextStepHeadPoint() {
        const firstPoint = this.getBody()[0];

        switch(this.direction) {
            case 'up':
                return {x: firstPoint.x, y: firstPoint.y - 1};
            case 'right':
                return {x: firstPoint.x + 1, y: firstPoint.y};
            case 'down':
                return {x: firstPoint.x, y: firstPoint.y + 1};
            case 'left':
                return {x: firstPoint.x - 1, y: firstPoint.y};
        }
    },

    setDirection(direction) {
        this.direction = direction;
    },
};

const food = {
    x: null,
    y: null,

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
};

const status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },

    setStopped() {
        this.condition = 'stopped';
    },

    setFinished() {
        this.condition = 'finished';
    },

    isPlaying() {
        return this.condition === 'playing';
    },

    isStopped() {
        return this.condition === 'stopped';
    },
};

const scoreGame = {
    score: null,
    scoreNumber: null,

    init(){
        this.scoreNumber = document.getElementById('score');
        this.drop();
    },
    increment() {
        this.score++;
        this.render();
    },
    drop() {
        this.count = 0;
        this.render();
    },
    render (){
        this.scoreNumber.textContent = this.score;
    }
}
const game = {
    config,
    map,
    snake,
    food,
    status,
    tickInterval: null,
    scoreGame,

    init(userSettings = {}) {
        this.config.init(userSettings);
        const validation = this.config.validate();

        if (!validation.isValid) {
            for (const err of validation.errors) {
                console.error(err);
            }
            return;
        }
        this.map.init(this.config.getRowsCount(), this.config.getColsCount());
        this.scoreGame.init();
        this.setEventHandlers();
        this.reset();
    },

    reset() {
        this.stop();
        this.snake.init(this.getStartSnakeBody(), 'up');
        this.food.setCoordinates(this.getRandomFreeCoordinates());
        this.render();
        this.scoreGame.drop();
    },

    getStartSnakeBody() {
        return [
            {
                x: Math.floor(this.config.getColsCount() / 2),
                y: Math.floor(this.config.getRowsCount() / 2),
            }
        ];
    },

    getRandomFreeCoordinates() {
        const exclude = [this.food.getCoordinates(), ...this.snake.getBody()];

        while (true) {
            const rndPoint = {
                x: Math.floor(Math.random() * this.config.getColsCount()),
                y: Math.floor(Math.random() * this.config.getRowsCount()),
            };

            if (!exclude.some(exPoint => rndPoint.x === exPoint.x && rndPoint.y === exPoint.y)) {
                return rndPoint;
            }
        }
    },

    play() {
        this.status.setPlaying();
        this.tickInterval = setInterval(() => this.tickHandler(), 1000 / this.config.getSpeed());
        this.setPlayButton('Стоп');
    },

    stop() {
        this.status.setStopped();
        clearInterval(this.tickInterval);
        this.setPlayButton('Старт');
    },

    finish() {
        this.status.setFinished();
        clearInterval(this.tickInterval);
        this.setPlayButton('Игра закончена', true);
    },

    setPlayButton(textContents, isDisabled = false) {
        const playButton = document.getElementById('playButton');

        playButton.textContent = textContents;
        isDisabled
            ? playButton.classList.add('disabled')
            : playButton.classList.remove('disabled');
    },

    tickHandler() {
        if (!this.canMakeStep()) {
            return this.finish();
        }

        if (this.food.isOnPoint(this.snake.getNextStepHeadPoint())) {
            this.snake.growUp();
            this.food.setCoordinates(this.getRandomFreeCoordinates());
            this.scoreGame.increment();


            if (this.isGameWon()) this.finish();
        }
        
        this.snake.makeStep();
        this.render();
    },

    canMakeStep() {
        const nextHeadPoint = this.snake.getNextStepHeadPoint();

        return !this.snake.isOnPoint(nextHeadPoint) &&
            nextHeadPoint.x < this.config.getColsCount() &&
            nextHeadPoint.y < this.config.getRowsCount() &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;
    },

    playClickHandler() {
        if (this.status.isPlaying()) {
            this.stop();
        } else if (this.status.isStopped()) {
            this.play();
        }
    },

    newGameClickHandler() {
        this.reset();
    },

    keyDownHandler(event) {
        if (!this.status.isPlaying()) return;

        const direction = this.getDirectionByCode(event.code);

        if (this.canSetDirection(direction)) this.snake.setDirection(direction);
    },

    getDirectionByCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
        }
    },

    canSetDirection(direction) {
        const lastStepDirection = this.snake.getLastStepDirection();

        return direction === 'up' && lastStepDirection !== 'down' ||
            direction === 'right' && lastStepDirection !== 'left' ||
            direction === 'down' && lastStepDirection !== 'up' ||
            direction === 'left' && lastStepDirection !== 'right';
    },

    setEventHandlers() {
        document.getElementById('playButton').addEventListener('click', () => {
            this.playClickHandler();
        });
        document.getElementById('newGameButton').addEventListener('click', () => {
            this.newGameClickHandler();
        });
        document.addEventListener('keydown', event => this.keyDownHandler(event));
    },

    isGameWon() {
        return this.snake.getBody().length > this.config.getWinFoodCount();
    },

    render() {
        this.map.render(this.snake.getBody(), this.food.getCoordinates());
    }
};

game.init({speed: 5});
