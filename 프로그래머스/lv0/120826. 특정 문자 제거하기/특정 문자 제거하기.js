function solution(my_string, letter) {
    const letterRegExp = new RegExp(letter, "g");
    const result = my_string.replace(letterRegExp, "")
    return result
}