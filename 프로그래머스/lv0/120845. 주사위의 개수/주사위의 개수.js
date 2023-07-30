function solution(box, n) {
    let answer = 1
    
    box.map((len) => {
        answer *= Math.floor(len / n)
    })
    
    return answer
}