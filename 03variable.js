// 입력, 연산, 출력
// 1.Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6), Mutable data type 
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
//Block scope
{

}

// global scope
// global scope 에서 선언하면 항상 메모리에 상주
// 가능한 Block 인 class, function, if 등에서 선언 사용하자 


// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block
 scope

// 3. Constant, r (read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object,freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1/ 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 
// 크롬,파이어폭스만 가능
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value ${greeting}, type ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // ``  template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 사용하지 말자!~

// boolean
// false: 0, null, undefined, NaN, '', false
// true: any other value
const canRead = true;
const test = 3 < 1 ; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 선언도 하자 안았다. 없다. 텅텅비다
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 선언은 했는데 값이 없다.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;


// 5. Dynamic typing: dynamically typed language
// 반대 Static types
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '8' / '1';
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); // Error


// Typescript is...
