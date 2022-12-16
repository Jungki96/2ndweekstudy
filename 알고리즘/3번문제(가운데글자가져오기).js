//https://programmers.co.kr/learn/courses/30/lessons/12903
//10:44
function solution(s) {
    if (s.length %2 === 0){
      return s[s.length / 2 - 1] + s[s.length /2];
    } else {
        return s[Math.floor(s.length/2)];
    }
}
//10:51
//1안 미치고 말도안되게 빠른답안

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);    // Math.ceil =  숫자 올림
}

//2안 간단풀이식

function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}