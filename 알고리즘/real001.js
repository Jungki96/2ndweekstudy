// function solution(N, M) {
//   let answer = "";
//   for (let i = 0; i < M - N; i++) {
//     if ((N + i) % 2 === 1) {
//       answer += N + i + " ";
//     } else {
//       continue;
//     }
//     if (answer[i] ) {
//       answer += "\n";
//     }
//   }
//   return answer;
// }

// let N = 115;
// let M = 134;
// console.log(solution(N, M));

function solution(N, M) {
  let answer = "";
  let count = 0;
  for (let i = 1; i - 1 < M - N; i++) {
    if ((N + i - 1) % 2 === 1) {
      if (count % 4 === 0) {
        answer += "\n";
      }
      answer += N + i - 1 + " ";
      count++;
    } else {
      continue;
    }
  }
  return answer;
}

let N = 115;
let M = 134;
console.log(solution(N, M));
