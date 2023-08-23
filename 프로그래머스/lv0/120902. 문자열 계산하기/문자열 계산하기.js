function solution(my_string) {
    const strArr = my_string.split(" ");
    
    let operator = "";
    
    const result = strArr.reduce((acc, cur) => {
        if (cur !== "+" && cur !== "-") {
            return operator === "+" ? acc + Number(cur) : acc - Number(cur)
        } else {
            operator = cur
            return +acc
        }
    })
    
    return result
}

// "1 + 2 - 1"
// [1, +, 2, -, 1]
// 1 + 2
// 3 - 1
