//20:00
function solution (arr1,arr2){
    let answer =[];

    for(let i= 0; i<arr1.length; i++){
        let sum = [];
        for (let j = 0; j < arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(sum);
    }
return answer;
}
//22:00ㅇ 아 누가 스위프트로 정답을 돌리냐아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ