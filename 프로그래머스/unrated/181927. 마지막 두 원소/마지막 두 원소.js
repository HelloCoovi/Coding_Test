function solution(num_list) {
    const lastNum = num_list[num_list.length - 1]
    const secLastNum = num_list[num_list.length - 2]
    
    if (secLastNum < lastNum) {
        return [...num_list, lastNum - secLastNum]
    } else {
        return [...num_list, lastNum * 2]
    }
}