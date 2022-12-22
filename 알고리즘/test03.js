//19:37

// function solution(arr1) {
//   let answer = "";

//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       if (
//         (arr1[i][j] > arr1[i - 1]?.[j] ?? 0) && //위
//         (arr1[i][j] > arr1[i][j + 1] ?? 0) && //오
//         (arr1[i][j] > arr1[i + 1]?.[j] ?? 0) && //아
//         (arr1[i][j] > arr1[i][j - 1] ?? 0) //왼
//       ) {
//         arr1[i][j] = "*";
//       }
//     }
//     answer += arr1[i].join().replace(/,/g, "");
//     i === arr1.length - 1 || (answer += "\n");
//   }
//   console.log(answer);
// }
function solution(arr1) {
  let answer = "";

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (
        arr1[i][j] > (arr1[i - 1]?.[j] ?? 0) && //위
        arr1[i][j] > (arr1[i][j + 1] ?? 0) && //오
        arr1[i][j] > (arr1[i + 1]?.[j] ?? 0) && //아
        arr1[i][j] > (arr1[i][j - 1] ?? 0) //왼
      ) {
        arr1[i][j] = "*";
      } else {
        // console.log("i : ", i);
        // console.log("j : ", j);
        // console.log("arr1[i][j] : ", arr1[i][j]);
        // console.log("arr1[i - 1][j] : ", arr1[i - 1]?.[j] ?? 0);
        // console.log("arr1[i][j + 1] : ", arr1[i][j + 1] ?? 0);
        // console.log("arr1[i + 1][j] : ", arr1[i + 1]?.[j]);
        // console.log("arr1[i][j - 1] : ", arr1[i][j - 1]);
        // console.log(arr1[i][j] > (arr1[i - 1]?.[j] ?? 0));
        // console.log(arr1[i][j] > (arr1[i][j + 1] ?? 0));
        // console.log(arr1[i][j] > arr1[i + 1]?.[j] ?? 0);
        // console.log(arr1[i][j] > arr1[i][j - 1] ?? 0);
        // console.log("//////////");
      }
    }
    answer += arr1[i].join().replace(/,/g, "");
    i === arr1.length - 1 || (answer += "\n");
  }
  console.log(answer);
}

let arr1 = [
  [3, 4, 1, 4, 9],
  [2, 9, 4, 5, 8],
  [9, 0, 8, 2, 1],
  [7, 0, 2, 8, 4],
  [2, 7, 2, 1, 4],
];
solution(arr1);

// arr1[i-1] 없을 수도 있는 값

// let top;
// if (arr1[i - 1]) {
//   top = arr1[i - 1][j];
// }

// let top2 = arr1[i - 1]?.[j]; //편리한 문법
//에러안남

//prettier , eslint를 설정
//setting format on save : on

//     옵셔널 체이닝 연산자
//      에러가 안납니다. 그게 다예여 원래

//     이현주/react기술매니저 arr1[i-1][j] ? arr1[i-1][j]: 0
// 이현주/react기술매니저 const top = arr1[i-1][j] ? arr1[i-1][j]: 0

function solution(arr1) {
  let answer = [[], [], [], [], []];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      let currentValue = arr1[i][j];
      answer[i][j] = currentValue;

      // 상 존재
      if (i > 0) {
        if (currentValue <= arr1[i - 1][j]) {
          continue;
        }
      }

      // 하 존재
      if (i < arr1.length - 1) {
        if (currentValue <= arr1[i + 1][j]) {
          continue;
        }
      }

      // 좌 존재
      if (j > 0) {
        if (currentValue <= arr1[i][j - 1]) {
          continue;
        }
      }

      // 우 존재
      if (j < arr1.length - 1) {
        if (currentValue <= arr1[i][j + 1]) {
          continue;
        }
      }

      answer[i][j] = "*";
    }
  }

  return answer;
}

let arr1 = [
  [7, 4, 6, 5, 9],
  [6, 1, 3, 4, 5],
  [4, 8, 5, 6, 9],
  [1, 3, 0, 6, 4],
  [6, 4, 8, 1, 7],
];

// let arr1 = [
//   [3, 4, 1, 4, 9],
//   [2, 9, 4, 5, 8],
//   [9, 0, 8, 2, 1],
//   [7, 0, 2, 8, 4],
//   [2, 7, 2, 1, 4],
// ];

console.log(solution(arr1));
