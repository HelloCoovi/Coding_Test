function solution(num_list) {
    const lastNum = num_list[num_list.length - 1]
    const secLastNum = num_list[num_list.length - 2]
    
    const newLastNum = secLastNum < lastNum ?
        lastNum - secLastNum :
        lastNum * 2
    
    return [...num_list, newLastNum]
}