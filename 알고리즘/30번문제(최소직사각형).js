//https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 09:00
function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0],size[1]] : [size[1],size[0]])
    let w = [];
    let h = [];
    for (i = 0;i <arr.length;i++){
        w.push(arr[i][0])
        h.push(arr[i][1])
    }
    return Math.max(...w) * Math.max(...h);
}// 10:20

//1안 공부해볼 가치가 있음
function solution(sizes) {
    return sizes
            .map(([w, h]) => [w > h ? w : h, w > h ? h : w])
            .reduce((m, [w, h]) => {
                m[0] = Math.max(m[0], w);
                m[1] = Math.max(m[1], h);
                return m;
            }, [0, 0])
            .reduce((a, b) => a * b);
}
