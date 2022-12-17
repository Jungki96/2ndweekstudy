//https://school.programmers.co.kr/learn/courses/30/lessons/12918
//21:55
// 1안 실패
function solution(s) {
    var answer;
    if(s.length === 4 || s.length === 6){
        if(isNaN(s)){ 
            answer = false;
        } else {
            answer = true; 
        }
    } else {
        answer = false;
    }
    
    return answer;
}
//2안 실패
function solution(s) {
    const text = /^[0-9]+$/;        //정규표현식 정리 https://codechacha.com/ko/javascript-input-alphabet-number-hangul/
    return text.test(s) ? true : false;
}
//3안 뭐가 오류인지 몰라서 본 답안  22:18
function solution(s) {
    if (s.length === 4 || s.length === 6){
        return s.split('').every(c => !isNaN(c))
    }else{
        return false
    }

}

// 결과 e라는 정수를 해석 하지못한다.
// 2안을 수정한 답안
function solution(s){
    var result = false;   //일단 모든값이 부정이고
    if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
      result = true;
    } // 나오는 수치만 긍정
    return result;
  }