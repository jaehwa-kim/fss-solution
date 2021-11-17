'use strict';

// Ternary Operator
// old
function getResult(score) {
    let result;
    if (score > 5) {
        result = 'up';
    } else if (score <= 5) {
        result = 'down';
    }
    return result;
}
// console.log(getResult(5));
// new
function getResult2(score) {
    return score > 5 ? 'up' : 'down';
}
// console.log(getResult2(6));

// Nullish coalescing operator null, undefined 적용
// function 도 가능
// old
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display';
    }
    console.log(message);
}
// printMessage();
// new 
function printMessage2(text) {
    const message = text ?? 'Nothing to display';
    console.log(message);
}
// printMessage2('Hello');
// printMessage2(undefined);
// printMessage2(null);

// default parameter is only for undefined
function printMessage3(text = 'Nothing to display') {
    console.log(text);
}
// printMessage3('Hello');
// printMessage3(undefined);
// printMessage3(null);

// Logical OR operator || is false
function printMessage4(text) {
    const message = text || 'Nothing to display';
    console.log(message);
}
// printMessage4('Hello');
// printMessage4(undefined);
// printMessage4(null);
// printMessage4(0);
// printMessage4('');

// false = false, 0, NaN, -0, '', "", ``, undefined, null

// Object Destructuring
const person = {
    name: 'Julia',
    age: 20,
    phone: '01044444444'
};
// old
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}
// old 2
function displayPerson2(person) {
    const name = person.name;
    const age = person.age;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}
// new
function displayPerson3(person) {
    const { name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}

// Spread Syntax - Object
const item = { type: '1', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };
// old
item['price'] = detail.price;
// old2
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;
// old3
const newObject2 = {
    tpye: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender
}
// new
const shirt0 = Object.assign(item, detail);
// new, new
const shirt1 = { ...item, ...detail };
const shirt2 = { ...item, ...detail, price: 40 };
// Spread syntax - Array
let fruits = [1, 2, 3];
// fruits.push(4);
fruits = [...fruits, '5'];
// fruits.unshift('5');
fruits = ['5', ...fruits];
const fruits2 = ['a', 'b', 'c'];
let combined = fruits2.concat(fruits2);
combined = [...fruits, '3', ...fruits2];
 
// Optional Chaining
const bob = {
    name: 'Julia',
    age: 20
};
const anna = {
    name: 'Julia',
    age: 20,
    job: {
        title: "Software Engineer"
    }
};
// old
function displayJobTitle(person) {
    if (person.job && person.job.title) {
        console.log(person.job.title);
    }
}
// new
function displayJobTitle2(person) {
    if (person.job?.title) {
        console.log(person.job.title);
    }
}
// Optional + Nullish
function displayJobTitle3(person) {
    const title = person.job?.title ?? 'No Job Yet';
    console.log(title);
}

// Template Literals (Template String)
const person2 = {
    name: 'Julia',
    score: 4
};
// old
console.log(
    'Hello ' + person.name + ', Your~~~'
);
// new
console.log(
    `Hello ${person2.name}, Your!!!`
);
// new Template Literals + 
const { name, score } = person2;
console.log(
    `Hello ${name}, Your@@@`
);
// function 만들어 확장성 유지보수성 확보
function greetings(person) {
    const { name, score } = person2;
    console.log(`Hello ${name}, Your$$$`);
}
greetings(person2);

// Looping
// 짝수를 4로 곱하고 합계 내기
const items = [1, 2, 3, 4, 5, 6];
// old, old2
function getAllEvens(items) {
    //old2
    return items.filter((num) => num % 2 === 0);
    // const result = [];
    // for (let i = 0; i < items.length; i++) {
    //     if (items[i] % 2 === 0) {
    //         result.push(items[i]);
    //     }
    // }
    // return result;
}
function multiplyByFour(items) {
    //old2
    return items.map((num) => num * 4);
    // const result = [];
    // for (let i = 0; i < items.length; i++) {
    //     result.push(items[i] * 4);
    // }
    // return result;
}
function sumArray(items) {
    //old2
    return items.reduce((a, b) => a + b, 0);
    // let sum = 0;
    // for (let i = 0; i < items.length; i++) {
    //     sum += items[i];
    // }
    // return sum;
}
const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
// console.log(sum);
// new 1
const evens2 = items.filter((num) => num % 2 === 0);
const multiple2 = evens2.map((num) => num * 4);
const sum2 = multiple2.reduce((a, b) => a + b, 0);
// console.log(sum2);
// new 2
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
// console.log(result);

// Promise -> Async/await
// old callback hell 
function displayUser() {
    fetchUser() //
      .then((user) => {
          fetchProfile(user)
            .then((profile) => {
              updateUI(user, profile);
            });
      });
}
// new
async function displayUser2() {
    const user = await fetchProfile;
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}


// Remove Duplicates!
const array = ['1', '2', '3', '1', '5', '6'];
console.log(array);
console.log([...new Set(array)]);
const array2 = [...new Set(array)];
console.log(array2);