function solution(my_string, num1, num2) {
    return my_string.split("").map((num, idx, arr) => {
        if (idx === num1 || idx === num2) {
            return idx === num1 ? arr[num2] : arr[num1]
        }
        return num
    }).join("")
}