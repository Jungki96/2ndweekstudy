//1번 신대륙 발견
// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 1/18/4월 26일


// function solution(a, b) {
//   let days = [31,28,31,30,31,30,31,31,30,31,30,31]; 
//   let months = [1,2,3,4,5,6,7,8,9,10,11,12]; 
//   let month = a;
//   let day = b; 
//   if (ㅁ)
//   console.log(`'${month}월 ${day}일'`)
// }
// console.log(solution(1,18))

// function solution(a, b) {
//   let result = new Date(`${a} ${b}`);
//   result.setDate(result.getDate() + 99);
//   let month = String(result).split('-')
//   console.log()
//   return result;
// }
// console.log(solution(1,18))

function solution(month, day){
  let end = new Date(2022, month - 1, day + 98);
  let mymonth = end.getMonth() + 1 
  let mydate = end.getDate()

  let result= `${mymonth}월 ${mydate}일` 
	return result;
}
console.log(solution(1,18))