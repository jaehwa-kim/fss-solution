'use strict';

// JSON
// JavaScript Object Natation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'torl',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
// json 변환시 함수, 심볼 제외됨

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value; // 왜 value 인지 이해 아됨
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

// 일반 적인 방법
const obj = JSON.parse(json);
console.log(obj);

// 콜백 세밀한 작업
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // 함수 쓸수 있게 조건문 걸음
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
// Object 에서 함수 사용가능
rabbit.jump();
// stringify 는 함수, 심볼 제외
// obj2.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());

// 유용한 사이트
// 둘 값중 무엇이 다른지 확인 JSON Diff checker: http://www.jsondiff.com/
// JSON 보기좋게 표시 JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON 을 Object 로 보기 위해 JSON Parser: https://jsonparser.org/
// 유효한지 제대로 작성한지, 기타 유요한 기능있음 JSON Validator: https://tools.learningcontainer.com/