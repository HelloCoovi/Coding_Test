function solution(s1, s2) {
    return s1.filter((char) => s2.includes(char)).length
}