function solution(arr, queries) {
    
    queries.forEach(querie => {
        const tempArr = [arr[querie[0]], arr[querie[1]]]
        arr[querie[0]] = tempArr[1]
        arr[querie[1]] = tempArr[0]
    })
    
    return arr
}