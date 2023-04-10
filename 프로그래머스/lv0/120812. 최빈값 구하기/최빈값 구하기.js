function solution(array) {
    let answer;
    
    let numObj = {};
    array.map((num) => {
        numObj[num] = numObj[num] ? numObj[num] + 1 : 1;
    });
    
    let maxNum = 0;
    let prevMaxNum = -1;
    for (const num of Object.values(numObj)) {
        if (num >= maxNum) {
            prevMaxNum = maxNum;
            maxNum = num;
        }
    }

    if (maxNum == prevMaxNum) {
        return -1;
    }
    answer = Object.entries(numObj).find(([key, val]) => val === maxNum)
    return +answer[0];
}