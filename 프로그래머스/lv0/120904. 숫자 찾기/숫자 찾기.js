function solution(num, k) {
    if ((num + "").split("").indexOf(k + "") >= 0) {
        return Number((num + "").split("").indexOf(k + "")) + 1
    }
    return -1
}