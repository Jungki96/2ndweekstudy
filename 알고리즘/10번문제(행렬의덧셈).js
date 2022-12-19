//https://school.programmers.co.kr/learn/courses/30/lessons/12950
//20:00
function solution (arr1,arr2){
    let answer =[];
    for(let i= 0; i < arr1.length; i++){
        let sum = [];
        for (let j = 0; j < arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(sum);
    }
return answer;
}
//22:00 아 누가 스위프트로 정답을 돌리냐아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ



//1안 공부해볼만한것
function sumMatrix(A,B){
return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

// 매니저님 한테 물어보기
function sumMatrix(arr1,arr2){
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}


// 쓸일 없음
//react map, filter 제일 많이 쓰임, reduce ........굳이 쓸 사람은 쓰세요~~
const contents = [{
    id : 1,
    title : 'title1',
    des : 'des1'
}, 
{
    id: 2,
    title : 'title2',
    des : 'des2'

}]

const test = contents.map((content) => content.title)
['title1', 'title2']
contents.filter((p) => p.id === 1)
// {id : 1, title:'title1', des:'des1'}


b = 1 j=0


a = > [1,2]        / [2,3]
i = > 0     1       0      1
b => 1 2   2 3     
j => 0 1   0 1
i => 0 0   1 1 
j => 0 1   0 1