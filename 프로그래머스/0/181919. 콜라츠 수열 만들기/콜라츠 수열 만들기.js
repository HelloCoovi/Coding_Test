// 짝수일때 / 2
// 홀수일때 3 * n + 1
function solution(n) {
    let result = []
    
    while (n !== 1) {
        result = [...result, n]
        if (n % 2 === 0) {
            n = n / 2
        } else {
            n = 3 * n + 1
        }
    }
    
    return [...result ,1]
}