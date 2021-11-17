'use strict';

// async & await
// clear style of using promise :)
// const user = fetchUser(); <-- fetchUser() 되면 함수 실행된다.

// 1. async
// sync
function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}
const user = fetchUser();
// console.log(user);

// promise
function fetchUser2() {
    // do network request in 10 secs...
    return new Promise((resolve, reject) => {
        // 정상 = resolve 처리
        // 오류 = reject 처리
        resolve('result');
    })
}
const user2 = fetchUser2();
// user2.then(console.log); // 결과 다름 확인하기
// console.log(user2); // 결과 다름 확인하기

// async
async function fetchUser3() {
    // do network request in 10 secs...
    return 'ellie';
}
const user3 = fetchUser3();
// user3.then(console.log);
// console.log(user3);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}
// promise 방식을 하면 아래와 같다.
function getBanana2() {
    return delay(3000)
    .then(()=>'바나나');
}
// const bbb = getBanana2();
// bbb.then(console.log);

//promise 방식 promise hell
function pickfruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    })
}
// pickfruits().then(console.log)

// await 방식
async function pickfruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
// pickfruits2().then(console.log);  

// await 병렬 function 선언해서 가저오기
async function pickfruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
// pickfruits3().then(console.log);

// 3. useful APIS
// await 병렬을 아래와 같이 사용하자
//Promise.all 모두 모아서
function pickfruits4() {
    return Promise.all([getApple(), getBanana()]).then(ff => ff.join(' + '));
}
// pickfruits4().then(console.log);

//race 제일 먼저 되는것 먼저
function pickfruits5() {
    return Promise.race([getApple(), getBanana()]);
}

// pickfruits5().then(console.log)