function solution(my_string) {
    // return my_string.split("").map(char => char.toLowerCase()).sort().join("")
    return [...my_string.toLowerCase()].sort().join("")
}