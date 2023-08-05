function solution(my_string) {
    const strArr = my_string.replace(/[a-z]/g, "").split("").map((el) => Number(el))
    return strArr.sort((a, b) => a - b)
}