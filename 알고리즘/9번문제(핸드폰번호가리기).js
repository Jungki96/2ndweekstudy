//https://programmers.co.kr/learn/courses/30/lessons/12948
// 17:45
function solution(phone_number){
    let answer = "";
    for(i = 0; i < phone_number.length; i++){
        if(i < phone_number.length-4){
            answer =answer + "*";
        }else{
            answer = answer + phone_number[i];
        }
    }
    return answer;
}


//18:26    내가 아는 만큼만 하자 !
//1안

function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
  }


  