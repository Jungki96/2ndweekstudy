//https://school.programmers.co.kr/learn/courses/30/lessons/82612
//00:40
function solution (price, money, count){
    let check = 0
    for (i = 1; i <= count; i++){
        check += price*i
    }
    return check > money ? check - money : 0;
}

// 00:56

//1안 가우스등차수열   1~100  101 * 50 = 5050 와...
function solution(price, money, count) {
    const check = price * count * (count + 1) / 2 - money;
    return check > 0 ? check : 0;
}