'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - preforms a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: dosomething, command, verb
// e.g. cratecardAndPoing -> createCard, createPoint
// function is object in JS <--- 다시한번 . 하면 나옴.
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from) { 
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('hey');

function showMessage2(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage2('hey', 2);

// 4. Rest parameters (added in ES6)
function printAll(...args) { // 배열 입력 ...args 는
    // 1안
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 2안
    for (const arg of args) {
        console.log(arg);
    }
    // 3안
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. Lexical scope, Closure
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello;'
    }
}
printMessage();
// console.log(message);
sum(5,1); //hosting
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`)

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade login...
    }
}

// good 
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade login... 
}
// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted) return 값은 표시안됨.
// a function expression is created when  the execution reaches it.
const print = function () { //Anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3)); 


// 2. Callback function using function expression
function randomQuit(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('Yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('No!');
}
randomQuit('kkk', printYes, printNo);
randomQuit('love you', printYes, printNo);

// Arrow function
// always anonymous
// normal function
const simplePrint = function () {
    console.log('simplePrint!')
}

const simplePrint2 = () => console.log('simplePrint!');
const add2 = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more return 작성해야한다.
    return a + b;
}

// IIFE : Immediately Invoked Function Expression 함수 바로 실행
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time
// unction calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
switch(command) {
    case 'add':
        return a + b;
    case 'substract':
         return a - b;
    case 'divide':
        return a / b;
    case 'multiply':
        return a * b;
    case 'remainder':
        return a % b;
    default:
        throw Error('unkonwn command');
    }
}
console.log(calculate('substract', 1, 3));