//https://school.programmers.co.kr/learn/courses/30/lessons/12933
//09:11
function solution(n) {
    let num = String(n);   // let num = n + ""
    let answer = [num[0]];
    for (i = 1; i < num.length; i++) {
      if (num[i-1] <= num[i]) {
        answer = num[i] + answer;
      } else {
        answer = answer + num[i];
      }
    }
    return Number(answer);
  }
// 미완
  //사진찍은거 참고하기