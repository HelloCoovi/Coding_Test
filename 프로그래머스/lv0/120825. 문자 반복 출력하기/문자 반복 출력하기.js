function solution(my_string, n) {
    let result = "";
    [...my_string].map((letter) => {
        result += letter.repeat(n);
    })
    return result;
}