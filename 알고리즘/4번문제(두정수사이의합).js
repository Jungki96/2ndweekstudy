//https://programmers.co.kr/learn/courses/30/lessons/12912
//11:43
function solution(a, b) {
    let sum = 0; 
        if (a <= b) {
            for (i = a; i <= b; i++)
                sum += i;
        } else {
            for (i = b; i <= a; i++)
                sum += i;
        }
        return sum;
    }

// 12::20

function solution(a, b) {
    return a<=b ? (a+b)/2*(b-a+1) : (a+b)/2*(a-b+1)
    }
// 12:25 기특        //Math.abs()  < 절대값 정의하는 함수


