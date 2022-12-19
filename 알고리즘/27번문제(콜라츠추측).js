//https://school.programmers.co.kr/learn/courses/30/lessons/12943
//17:23
// while문

function solution(num) {
    let answer = 0;
    while (num != 1 && answer != 500){
        num%2== 0 ? num = num/2 : num = num * 3 + 1
    answer += 1
    } 
    return num == 1 ? answer : -1
}

// 17:59

//1안 원래 생각했던 방식
function solution(num) {
    for(let i = 0; i<500 ;i++){
      if(num%2==0){
        num = num/2;
      }
      else if(num==1){
          return i;
      }
      else if(num%2==1){
        num = (num*3)+1;
      }
    }
      return -1;
  }