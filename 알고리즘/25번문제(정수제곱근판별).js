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
    console.log(Math.sqrt(n) % 1)
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1) : -1;
}
/// 왜 이렇게 하면눌이 나오는지?

//디버깅 찾으려면 모든곳에 콘솔을 찍고 영ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ원히~~~~~~~~~~
//구글링 해서 찾은 함수는 꼭 mdn을 확인하고