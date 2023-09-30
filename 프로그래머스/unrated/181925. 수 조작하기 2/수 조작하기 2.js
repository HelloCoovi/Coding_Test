function solution(numLog) {
    let result = ""
    
    numLog.forEach((num, idx, arr) => {
        const diffNum = -(arr[idx] - arr[idx + 1])
        
        if (diffNum === 1) result += "w"
        if (diffNum === -1) result += "s"
        if (diffNum === 10) result += "d"
        if (diffNum === -10) result += "a"
    })
    
    return result
}