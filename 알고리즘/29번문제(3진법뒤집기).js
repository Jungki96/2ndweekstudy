//https://school.programmers.co.kr/learn/courses/30/lessons/68935
//00:17
// parseInt(string, radix) = 10진법으로 바꿀 문자열을 원래쓰던 진법을 대입 
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}
//00:29