'use scrict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function delay2(ms) {
    return new Promise((resolve, reject) =>{console.log('내용');})
}

async function getApple() {
    await delay(3000);
    return '사과';
}


async function get() {
    const apple = await getApple();
    return `${apple}`;
}

get().then(console.log)
