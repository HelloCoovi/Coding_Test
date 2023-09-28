function solution(num_list) {
    const oddNum = Number(num_list.filter(num => num % 2 === 1).join(""))
    const evenNum = Number(num_list.filter(num => num % 2 === 0).join(""))
    
    return oddNum + evenNum
}