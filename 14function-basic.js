'use strict';

// Don't give up
// 포기하지 마세요!~

// 함수 선언

// not return
function doSomething() {
    console.log('hello');
}

// return 
function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething();

// 함수 호출만 함
add(1, 2);

// 출력하려면, 여러가지 방법있음
const result = add(1, 2);
console.log(result);

// 함수를 인자로 전달.

// function doSomething2 ( add() ) 함수를 호출하지말자, 함수의 이름만 전달
function doSomething2 (add) {
    console.log(add);
}

doSomething2(add);

// 함수를 선언하고,
// 함수를 호출하고 인자를 넘긴다.
// 한수를 넘길대 함수이름만 한다.
