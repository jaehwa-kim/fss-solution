'use strict';

// Objects
// one of the Javascript's date types.
// a collection of related data and/or functionality.
// Nearly all objects in javaScript are instances of Object
// object = { key : value};

// 1. Literals and properties
const obj1 = {};
const obj2 = new Object(); 

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };

print(ellie);

// with JavaScript magin (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can deleteproperties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); // 안됨.
    console.log(obj[key]); // 됨.
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30); // 옛날 방식
const person5 = new Person('jh', 39); // 요즘 방식
console.log(person4);
console.log(person5);

function makePerson(name, age) { // 옛날 방식
    return {
        // name: name, 아래 같이 줄일수 있다.
        name,
        // age: age
        age
    }
}
// 4. constructor Function
function Person(name, age) { //요즘 방식 함수명 대문자로  클래스 만들 듯이.
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('rondom' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.log(ellie);
// Object 용
for (let key in ellie) {
    console.log(key);
}

// Array 용
const array = [1, 2, 3, 'a', 'b', 4];
for (let key of array) {
    console.log(key);
}
// 아래 비효율
for (let i = 0; i < array.length; i++) {
    console.log(i);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 20 };
// 복제 된다.
const user2 = user;
console.log(user2);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blud', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
//앞 을 덮어 쓴다.
console.log(mixed.color);
console.log(mixed.size);