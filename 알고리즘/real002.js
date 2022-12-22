function solution(star) {
  let answer = "";
  //윗몸
  for (let a = 0; a < star; a++) {
    for (let b = 0; b < a; b++) {
      answer += " ";
    }
    for (let c = 0; c < 2 * (star - a - 1) + 1; c++) {
      answer += "*";
    }
    answer += "\n";
  }
  //아랫몸
  for (let i = 1; i < star; i++) {
    for (let k = 1; k < star - i; k++) {
      answer += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      answer += "*";
    }
    answer += "\n";
  }

  return answer;
}

let star = 7;
console.log(solution(star));
