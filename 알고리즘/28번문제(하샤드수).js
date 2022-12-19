//https://velog.io/@kjhxxxx/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%BD%9C%EB%9D%BC%EC%B8%A0-%EC%B6%94%EC%B8%A1-JavaScript
//17:04
//reduce 공부하고 풀기

function solution(x) {
    let answer = 0;
    let a = String(x).split('')
     for (let i=0 ; i < a.length; i++){
        answer += Number(a[i])
    }
    return (x % answer == 0)? true:false;
}

//17:28

//1안

function solution(x){
    return !(x % (x + "").split("").reduce((a, b) => +b + +a ));
  }