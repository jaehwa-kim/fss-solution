'use strict';
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 +2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나머지
console.log(2 ** 3); // exponentiation 승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// conunter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement} conuter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement} conuter: ${counter}`);
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement} conuter: ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement} conuter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -+ y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than 
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operator: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 > 2;

// || (or), finds the first truthy value 앞쪽에 심플값
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value 앞쪽에 심플값
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
nullableObject && nullableObject.something // <--- 요거랑 아래거래 비교
const nullableObject = 0; //  위 방식을 풀면 이것과 같다.
if (nullableObject != null) {
    nullableObject.something; 
}

function check () {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😰');
    }
    return true;
}

// ! (not)
console.log(!value1);

// == loose equality, with type conversion
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true


// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality = puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if ( name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'coder' ? 'yes' : 'no');

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple thype checks in TS
const browser = "Opera";
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Opera':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.

do {
    console.log(`do while: ${i}`);
    i--;
} while ( i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -  2) { // i -= 2
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops // O(n2) cpu에 좋지안음.
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`)
    }
}

// break, continue
// Q1. inerate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Q1.${i}`);
}
for (let i = 0; i < 11; i++) {
    if (i % 2 ===0) {
        continue;
    }   
    console.log(`Q1.${i}`)
}


// Q2. interate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if(i > 8){
        break;
    }
    console.log(`Q2.${i}`);
}
