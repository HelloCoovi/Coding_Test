function solution(age) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let result = "";
    const ageStr = age.toString();
    for (let i = 0; i < ageStr.length; i ++) {
        result += alphabet[parseInt(ageStr[i])]
    }
    return result

}