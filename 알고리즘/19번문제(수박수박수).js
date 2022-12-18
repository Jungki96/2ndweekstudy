//https://school.programmers.co.kr/learn/courses/30/lessons/12922
//19:30
function solution(n) {
    let answer = ""
    for (i =0; i< n; i++){
      if(i%2 === 1 ){
        answer += '박'
      } else {
        answer += '수'
      }
    }
    return answer
}
//19:45

//1안 깔끔 .repeat 을 다시봄
const waterMelon = n => "수박".repeat(n).slice(0,n);