'use scrict';

/**
* Shorthand property names
* /https://developer.mozilla.org/ko/docs/web/javasript/
**/
{
    const ellie1 = {
        name: 'Ellie1',
        age: 181,
    };

    const name = 'Ellie2';
    const age = '182';

    const ellie2 = {
        // 아래오 같이 줄일수 있다.
        // name: name,
        name,
        // age: age,
        age,
    }
    
}

// Destructuring Assignment
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // old
    {
        const name = student.name;
        const level = student.level
    }
    // new
    {
        const { name, level } = student;
        // 이름변경 가능
        const { name: studentName, level: studentLevel} = student;
    }
    
    // array
    const animals = ['🎈', '🎆'];
    // old
    {
        const first = animals[0];
        const second = animals[1];
    }
    // new
    {
        const [ first, second] = animals;
    }
}

// Spread Syntax
{
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    // array copy and add
    const arrayCopy2 = [...array, { key: 'key3'}]
    // Spread 는 ref 값만 복사되어온다. 하나 변경 되면 전체 변경됨 주의!
    obj1.key ='newKey';

    // object copy
    const obj3 = { ...obj1};

    // array concatenation
    const fruits1 = ['🎈','🎆'];
    const fruits2 = ['🎇','🧨'];
    const fruits3 = [...fruits1, ...fruits2];

    // object merge key 값이 같으면 뒤에 걸로 덮어 쓴다.
    const dog1 = { dog: '🎄'};
    const dog2 = { dog: '🎋'};
    const dog = { ...dog1, dog2};
}

// Default parameters
{
    // old
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
    // new
    {
        function printMessage(message = 'default message!') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

// Ternary Operator
{
    const isCat = true;
    // old
    {
        let component;
        if (isCat) {
            component = 'cat';
        } else {
            component = 'dog';
        }
        console.log(component)
    }

    // new
    {
        const component = isCat ? 'cat' : 'dog';
        console.log(component);
    }
}

// Template Literals
{
    const weather = 'sum';
    const temparature = '16℃';

    // old
    console.log(
        'Today weather is ' + weather + ' and tem~~~~'
    );

    // new
    console.log(
        `Today weather is ${weather} and tem~~~~`
    )
}

// Optional chaining (ES11)
{
    const person1 = {
        name: 'Ellie',
        job : {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    
    const person2 = {
        name: 'Bob',
    };

    // old 
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        // printManager(person1); 
        // printManager(person2);
    }
    // old 2 중첩이 이해안됨 
    {
        function printManager(person) {
            console.log(
                person.job ? person.job.manager ? person.job.manager.name :undefined : undefined
            );
        }
        // printManager(person1);
        // printManager(person2);
    }
    // old 3
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name)
        }
        // printManager(person1);
        // printManager(person2);
    } 

    // new
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        // printManager(person1);
        // printManager(person2);
    }
}

// Nullish Coalescing Operator
{
    // Logical Or operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        // console.log(userName);
    }
    
    {
        const name = null;
        const userName = name || "Guest";
        // console.log(userName);
    }
    // old 
    {// 사용자 입력이 빈 문자 이라도 Guest 
        const name = '';
        const userName = name || 'Guest';
        // console.log(userName);
    }
    {// 사용자 입력이 0 이라도 Guest 
        const name = 0;
        const userName = name || 'undefined';
        // console.log(userName);
    }
    // 위 Logical or operator 사용시 주의 하자
    // 아래 방식을 사용하자 ??
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);
    }
    {
        const name = 0;
        const userName = name ?? 'undefined';
        console.log(userName);
    }
}