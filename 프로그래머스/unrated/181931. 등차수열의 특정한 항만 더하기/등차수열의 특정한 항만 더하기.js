function solution(a, d, included) {
    let result = 0
    
    included.forEach((boo, idx) => {
        if (boo) result += a + (d * idx)
    })
    
    return result
}