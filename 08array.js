'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]) // 사과
console.log(fruits[1]) // 바나나
console.log(fruits[3]) // undefined
console.log(fruits[fruits.length -1]) // 마지막 배열 값 가져오기

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c forEach
fruits.forEach(function (fruit) {
    console.log(`${fruit} normal function`);
})
// c Arrow function
fruits.forEach((fruit) => console.log(`${fruit} Arrow function`));

// 4. Addtion,, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position 중간삭제, 중산삭제하고 추가 
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
//fruits.splice(1);
fruits.splice(1, 1); // 지우지 안코 추가도 가능 
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays 합체
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index 몇 번째 있는지, 앞쪽 번호 번저 표시
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

// includes 있다 없다 true, fales
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf 뒤쪽 번저 표시
fruits.push('🍎');
console.log(fruits.lastIndexOf('🍎'));

