//https://school.programmers.co.kr/learn/courses/30/lessons/12977
//09:00

function solution(nums) {
  let sum = [];
  let numbers = nums.sort();
  // console.log(numbers);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        sum.push(numbers[i] + numbers[j] + numbers[k]);
      }
    }
  }

  let set = [...new Set(sum)];
  console.log(set);
  let answer = [];
  for (let i = 0; i < set.length; i++) {
    if (set[i] === 2) {
      continue;
    } else {
      console.log("나누기값 :", Math.ceil(Math.sqrt(set[i])));
      for (let j = 2; j < Math.ceil(Math.sqrt(set[i] + 1)); j++) {
        if (set[i] % j === 0) {
          answer.push(set[i]);
        }
      }
    }
  }
  let difference = set.filter((x) => !answer.includes(x));
  console.log(difference.length);
  return difference.length;
}
//10:00

//1안 유효성 검사 실패인듯?
function checkPrime(num) {
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let target = nums[i] + nums[j] + nums[k];
        if (checkPrime(target)) {
          answer++;
        }
      }
    }
  }

  return answer;
}
