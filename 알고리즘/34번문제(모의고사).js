//https://school.programmers.co.kr/learn/courses/30/lessons/42840
//17:45

function solution(answers) {
    var answer = [];
    let one ='12345'.repeat(Math.ceil(answers.length/5))
    let two ='21232425'.repeat(Math.ceil(answers.length/8))
    let three ='3311224455'.repeat(Math.ceil(answers.length/10))
    // console.log(answer[1])
    let oh = 0;
    let my = 0;
    let god = 0;

    for (let i=0; i <answers.length;i++){
        if (Number(one[i]) == answers[i])
        oh += 1
    }
    for (let i=0; i <answers.length;i++){
        if (Number(two[i]) == answers[i])
        my += 1
    }
    for (let i=0; i <answers.length;i++){
        if (Number(three[i]) == answers[i])
        god += 1
    }
    // console.log(oh)
    // console.log(my)
    // console.log(god)
    if (oh > my){answer.push(1)}
    else {if(my > oh){answer.push(2)}}
    if (god > my){answer.push(3)}
    if(oh=my=god){answer.push(1,2,3)}
    console.log(answer)
    return answer;
}

let m = [1,3,2,4,2]
solution(m)
// console.log(m[1])

// 18:32 1안 원하고자 했지만 이루지 못한 방법

function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];
    const length = answers.length;
    for (let i = 0; i < length; i++) {
      if (one[i % 5] === answers[i]) result[0]++;
      if (two[i % 8] === answers[i]) result[1]++;
      if (three[i % 10] === answers[i]) result[2]++;
    }
    const answer = [];
    const maxValue = Math.max(...result);
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (maxValue === result[i]) {
        answer[index] = i + 1;
        index++;
      }
    }
    return answer;
  }

// 2안 세상은 넓고 정리왕은 존재한다
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}

//3안 지극정성좌
function solution(answers) {
    var count_one = 0;
    var count_two = 0;
    var count_three = 0;
    for(var i=0; i<answers.length; i++){
      if(((i+1)%5) === 1 && answers[i] === 1) count_one += 1;
      if(((i+1)%5) === 2 && answers[i] === 2) count_one += 1;
      if(((i+1)%5) === 3 && answers[i] === 3) count_one += 1;
      if(((i+1)%5) === 4 && answers[i] === 4) count_one += 1;
      if(((i+1)%5) === 0 && answers[i] === 5) count_one += 1;        
      if(((i+1)%8) === 1 && answers[i] === 2) count_two += 1;
      if(((i+1)%8) === 2 && answers[i] === 1) count_two += 1;
      if(((i+1)%8) === 3 && answers[i] === 2) count_two += 1;
      if(((i+1)%8) === 4 && answers[i] === 3) count_two += 1;
      if(((i+1)%8) === 5 && answers[i] === 2) count_two += 1;
      if(((i+1)%8) === 6 && answers[i] === 4) count_two += 1;
      if(((i+1)%8) === 7 && answers[i] === 2) count_two += 1;
      if(((i+1)%8) === 0 && answers[i] === 5) count_two += 1;
      if(((i+1)%10) === 1 && answers[i] === 3) count_three += 1;
      if(((i+1)%10) === 2 && answers[i] === 3) count_three += 1;
      if(((i+1)%10) === 3 && answers[i] === 1) count_three += 1;
      if(((i+1)%10) === 4 && answers[i] === 1) count_three += 1;
      if(((i+1)%10) === 5 && answers[i] === 2) count_three += 1;
      if(((i+1)%10) === 6 && answers[i] === 2) count_three += 1;
      if(((i+1)%10) === 7 && answers[i] === 4) count_three += 1;
      if(((i+1)%10) === 8 && answers[i] === 4) count_three += 1;
      if(((i+1)%10) === 9 && answers[i] === 5) count_three += 1;
      if(((i+1)%10) === 0 && answers[i] === 5) count_three += 1;
    }    
    var answer = [];
    if(count_one >= count_two && count_one >= count_three){
      answer.push(1);
    }
    if(count_two >= count_one && count_two >= count_three){
      answer.push(2);      
    }
    if(count_three >= count_one && count_three >= count_two){
      answer.push(3);
    }
    return answer;
}