//https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 16:22    
// 루트값 구하기 Math.sqrt()
// 제곱값 구하기 Math.pow()
// 정수인지 확인하기 .isInteger()

function solution(n) {
    let a = Math.sqrt(n)
    return a % 1 === 0 ? (a+1)*(a+1) : -1;
}
//16:30
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1) : -1;
}
/// 왜 이렇게 하면눌이 나오는지?