function solution(my_string) {
    return my_string.split("").map(char => char.toLowerCase()).sort().join("")
}