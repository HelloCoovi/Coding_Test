function solution(n) {
    let result = [1]
    
    for (let i = 2; i <= n; i++ ) {
        if (n % i === 0) {
            result = [...result, i];
        }
    }
    
    return result
}