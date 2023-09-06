function solution(ineq, eq, n, m) {
    if (ineq === ">") {
        if (eq === "=") return +(n >= m)
        
        return +(n > m)
    }
    if (eq === "=") return +(n <= m)
    
    return +(n < m)
}