//https://school.programmers.co.kr/learn/courses/30/lessons/12935
// 16:48
// Math.min 가장 작은숫자 찾기
// .indexOf() 는 () 안의 값의 인덱스 값을 알려준다

function solution(arr) {
    let a = arr.sort().reverse()
    if(a.length > 1){
        a.splice(-1,1)
    } else {
        return [-1]
    }
    return a;
}

// 17:00

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length <= 1 ? [-1] : arr 
}
//17:08