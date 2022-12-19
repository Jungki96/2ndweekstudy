// 10:20
//https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    let year = new Date(2016, a-1, b+1)
    console.log(year.getDay())
    let date = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    let day = b+4; 
    for(let i = 0; i < a-1; ++i){
        day += leapYearMonths[i];
    }
    return date[day%7];
    return year;
}
//10:45
// const test = solution(5,24);
// console.log(test.getDay())

// 원하는 기능을 구글링하쟈
