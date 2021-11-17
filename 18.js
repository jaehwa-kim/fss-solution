'use strict';

// class 에 callback 사용 
// class 의 사용 다용성
// 레고로 원하는 기능을 callback 로 받는다.


class Counter {
    constructor(callback) {
        this.counter = 0;
        this.callback = callback;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function runIf5Times(num) {
    console.log(`You ${num}`);
}

const coolCounter = new Counter(runIf5Times);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
