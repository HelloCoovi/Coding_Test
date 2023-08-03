function solution(n) {
    var answer = 1;
    let fac = 1
    
    while(answer <= n) {
        answer *= fac
        fac++
        console.log(`answer: ${answer}`)
        console.log(`fac: ${fac}`)
    }
    
    
    return fac - 2;
}

// while로 시작 / 탈출조건 num이 n보다 커지는 순간(num < n)
// n은 팩토리얼 시작(1 * 2 * 3 ...)