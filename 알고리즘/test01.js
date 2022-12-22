//15:19
function solution(a){
    let max = Math.ceil(a/3)
    let min = Math.ceil(a/5)
    let sum = [];
    for (let i=1; i<max+1; i++){
        for(let j=1; j<min+1; j++){
            if ((3*j)+(5*i) == a){
                sum.push(i + j)
            }else{
                continue;
            }
        }
    }
    console.log(sum.sort()[0] > 0 ? sum.sort()[0] : -1)
}

let N = 57;
solution(N)

let M = 2;
solution(M)

//16:06