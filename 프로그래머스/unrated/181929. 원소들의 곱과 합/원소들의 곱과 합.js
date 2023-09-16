function solution(num_list) {
    const productOfNums = num_list.reduce((acc, cur) => cur * acc);
    const sumSquaredNums = num_list.reduce((acc, cur) => cur + acc) ** 2;
    
    return productOfNums < sumSquaredNums ? 1 : 0;
}