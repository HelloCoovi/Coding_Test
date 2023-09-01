function solution(my_str, n) {
    let result = []
    let strArr = my_str.split("")
    
    while(strArr.length > 0) {
        result.push(strArr.splice(0, n).join(""))
    }

    return result
    console.log([...my_str].slice(0, 6))
    console.log([1, 2, 3, 4].filter(num => {
        if (num % 2 === 0) {
            return num
        }
    }))  
}