function solution(num_list) {
    let result = 0
    
    num_list.forEach(num => {
        while(num > 1) {
            if (num % 2 === 1) num -= 1
            
            num = num / 2
            result++
        }
    })
    
    return result
}