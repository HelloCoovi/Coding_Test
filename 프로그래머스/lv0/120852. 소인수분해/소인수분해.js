function solution(n) {
    let answer = []
    
    let i = 2
    while (i <= n) {
        if (n % i === 0) {
            answer = [...answer, i];
            n = n / i;
        } else {
            i++;
        }
    }
    
    return [...new Set(answer)]
}