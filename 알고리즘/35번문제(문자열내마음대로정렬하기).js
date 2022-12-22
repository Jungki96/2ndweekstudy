//https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 00:00

function solution(strings, n) {
  let answer = [];
  let a = [];
  for (let i = 0; i < strings.length; i++) {
    a.push(strings[i][n]);
  }

  let list = a.sort();
  //   console.log(strings[2]);
  for (let t = 0; t < list.length; t++) {
    for (let j = 0; j < list.length; j++) {
      if (list[t] == strings[j][n]) {
        answer.push(strings[j]);
      }
    }
  }
  console.log(answer);
  return answer;
}

let k = ["sun", "bed", "car"];
let h = 1;
solution(k, h);

//1안
function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });
  return answer;
}
