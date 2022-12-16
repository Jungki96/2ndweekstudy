//https://programmers.co.kr/learn/courses/30/lessons/12937
//10:09
function solution(num) {
    if ( num %2 === 0 || 0){
        var answer = "Even"
    } else{
        var answer = "Odd"
    }
    return
}

//10:15

// 1안 가장빠른 답안
function evenOrOdd(num) {
  return num % 2 ? "Even" : "Odd";
}

// 2안 섬세한 터치
function evenOrOdd(num) {
    var result = 'Even';
    if(num < 0) return false;
    if(num % 2 == 1) result = 'Odd';
    return result;
}