// 10:20

function solution(a, b) {
    let date = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    let day = b+4; 
    for(let i = 0; i < a-1; ++i){
        day += leapYearMonths[i];
    }
    return date[day%7];
}
//10:45
new Date()