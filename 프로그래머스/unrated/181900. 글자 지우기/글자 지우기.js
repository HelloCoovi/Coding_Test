function solution(my_string, indices) {
    return [...my_string].filter((_, idx) => !indices.includes(idx)).join("")
}
