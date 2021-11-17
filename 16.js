// 함수 | 함수 정의, 호출, 그리고 콜백함수

// 반복되는 작업을 함수로 만든다.

function add(a, b) {
    return a + b;
}
const result = add(1, 2);
console.log(result);

// function 은 object 다.
// 이름들은 의미있게 작성하자.

function divide(a, b) {
    return a / b;
}

function suprise(operator) {
    const result = operator(5,5);
    console.log(result);
}

suprise(add);
suprise(divide);

// 변수이름 함수으름 같을수 없다.