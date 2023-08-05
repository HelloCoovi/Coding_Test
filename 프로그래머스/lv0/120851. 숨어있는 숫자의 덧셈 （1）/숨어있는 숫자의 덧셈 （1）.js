function solution(my_string) {
    let result = 0
    const numArr = my_string.replace(/[a-zA-Z]/g,"").split("").map((el) => Number(el))
    
    for(let i = 0; i < numArr.length; i++){
        result += numArr[i]
    }
    
    return result
}