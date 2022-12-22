// function solution(beer) {
//   let answer = parseInt(beer / 10);
//   console.log("else 밖answer", answer);
//   let more = beer % 10;
//   let bonus = parseInt(beer / 10);
//   console.log("너뭔데 ", bonus + more);
//   for (let i = 0; i < 10; i++) {
//     if (more + bonus >= 10) {
//       bonus = parseInt((bonus + more) / 10);
//       console.log("else 안 더하기전 bonus", bonus);
//       answer += bonus;
//       console.log("else 안 answer", answer);
//       // console.log("else 안 더한 후 bonus", bonus);
//       more = bonus % 10;
//       // console.log("else 안 bonus", bonus);
//       console.log("else 안 more", more);
//       // console.log("else 안 answer", answer);
//     } else {
//       break;
//     }
//   }
//   console.log("결과 Answer : ", answer);
//   return answer;
// }

function solution(beer) {
  let answer = parseInt(beer / 10);
  let more = beer % 10;
  let bonus = parseInt(beer / 10);
  for (let i = 0; i < 10; i++) {
    if (more + bonus >= 10) {
      bonus = parseInt((bonus + more) / 10);
      answer += bonus;
      more = bonus % 10;
    } else {
      break;
    }
  }
  return answer;
}

let beer = 9911;
console.log(solution(beer));
