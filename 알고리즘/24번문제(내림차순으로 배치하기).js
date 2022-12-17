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

// 새로운 방식
function solution(n){
  const answer = n + ""; // 형변환

  let num = [...answer];
  let temp;
  for (let i = 0; i< num.length; i++){
    if (num[i + 1] > num[i]) {
      temp = num[i];
      num[i] = num[i+1]
      num[i+1] = temp
      i = -1
    }
  }
  num = num.join("") * 1
  return num
}


//2안  유래님   sort() 공부하자
function solution(n) {
  let list = Array.from(String(n))
  let answer = list.sort((a,b) => b -a).join("")
  // for (let i=0; i<answer.length; i++)
  return Number(answer)
}


//3안 수지님 합동
function solution(n) {
  return Number(( n + '').split('').sort().reverse().join(''));
}