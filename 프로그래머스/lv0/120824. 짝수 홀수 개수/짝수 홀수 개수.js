function solution(num_list) {
    let result = [0,0]
    num_list.map((num) => {
        num % 2 === 1 ? result[1] += 1 : result[0] += 1
    })
    
    return result
}