function solution(n) {
    let result = 0

    for (let i = 0; i < n; i++ ) {
        result++
        while (result % 10 === 3 || result % 3 === 0 || String(result).includes("3")) result += 1
    }

    return result
}