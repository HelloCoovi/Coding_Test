function solution(a, b) {
    for (let i = 2; i <= a; i++ ) {
        if (a % i === 0 && b % i === 0) {
            a = a / i
            b = b / i
        }
    }
     
    let primeFactors = []
    let divisor = 2

    while (b > 1) {
        while (b % divisor === 0) {
            primeFactors.push(divisor)
            b = b / divisor
        }
        divisor++
    }
    
    return primeFactors.every(num => num === 2 || num === 5) ? 1 : 2
}

/*
유한 소수 만들기
1. 기약분수로 변환(완전한 약분)
2. 분모 소인수 분해
3. 분모의 소인수가 2나 5만 있다면 유한소수
4. 외에는 무한소수
*/