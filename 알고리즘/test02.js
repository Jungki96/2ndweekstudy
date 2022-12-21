// 16:16

function solution(star) {
  let answer = "";
  for (let i = 1; i < star; i++) {
    for (let j = star; j > i ; j--) {
        answer += " ";
    }
    for (let k = 0; k < 2*i-1; k++) {
      answer += "*"
    }
    answer += "\n";
  }
  //
  console.log(answer)
}

let star = 6;
solution(star);
