'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(`${result}, ${typeof result}`);

}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    console.log(`${result}, ${typeof result}`);
    // 구분자를 꼭넣어주아 아니면 0번에 다 들어감
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(`${result}, ${typeof result}`);
    console.log(array);
    // 원본도 순서  변경됨
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);// splice 원본이 변경됨
    const result2 = array.slice(2, 5);// slice 원본이 변경안됨
    console.log(`${result}, ${typeof result}`);
    console.log(array);
    
    
} 

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// 하나 찾으면 return
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
// filter 과 map 차이??
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// filter 과 map 차이??
{
    // 콜백함수 인자 이해하기 쉽게 하자
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some 하나라도 
    const result = students.some((student) => student.score < 50);
    console.log(result);
    
    // every 전체가 
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
    //reduce right 는 반대로 한다.

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score)
    .filter((scroe) => scroe >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score)
    .sort((a,b) => a- b)
    .join();
    console.log(result);
    
}
