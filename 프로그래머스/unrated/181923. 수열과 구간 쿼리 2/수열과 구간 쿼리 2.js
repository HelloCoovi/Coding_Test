function solution(arr, queries) {
    let result = []
    
    queries.forEach(querie => {
        const [s, e, k] = querie
        
        const filtedArr = arr.filter((num, idx) => (s <= idx && idx <= e && k < num))
        
        if (filtedArr.length === 0) {
            result.push(-1)
        } else {
            result.push(Math.min(...filtedArr))
        }
    })

    return result
}