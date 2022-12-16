//https://programmers.co.kr/learn/courses/30/lessons/76501
//15:49

function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      sum = sum + absolutes[i];
    } else {
      sum = sum - absolutes[i];
    }
  }
  return sum;
}

//16:29 너무 돌아 왔다. 이해는 됐는데


//1안
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

//2안 공부해봐야할 함수  .reduce

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}