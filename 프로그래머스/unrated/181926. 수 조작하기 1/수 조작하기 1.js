function solution(n, control) {
    let result = n
    
    control.split("").forEach(char => {
        if (char === "w") result += 1
        if (char === "s") result -= 1
        if (char === "d") result += 10
        if (char === "a") result -= 10
    })
    
    return result
}