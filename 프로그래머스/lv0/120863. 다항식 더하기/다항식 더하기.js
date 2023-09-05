function solution(polynomial) {
    let xNum = 0
    let num = 0
    
    polynomial.split(" + ").forEach(word => {
        if (isNaN(+word)) {
            if (word[0] === "x") {
                xNum += 1
            } else {
                xNum += +word.slice(0, -1)
            }
        } else num += +word
    })
    
    if (xNum === 0 && num === 0) return ""
    if (xNum === 0) return `${num}`
    if (num === 0) return xNum === 1 ? "x" : `${xNum}x`
    
    return `${xNum === 1 ? "" : xNum}x + ${num}`
}