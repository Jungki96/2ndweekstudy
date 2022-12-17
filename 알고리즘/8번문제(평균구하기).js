//https://programmers.co.kr/learn/courses/30/lessons/12944

//17:17
function solution(arr){
    let avg = 0;
    let sum = 0;
    for(let i=0; i< arr.length; i++){
       sum += arr[i];
    }
    return avg =   sum / arr.length;
}
//17:29 

//1안 reduce 무조건 공부하자 2번째 나왔다 < 이것만 다시 공부해보면 될듯
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
  }