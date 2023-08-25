function solution(n) {
    return String(n).split("").reduce((acc, cur) => {
       return acc + Number(cur) 
    },0)
}