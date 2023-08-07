function solution(s) {
    var answer = 0;
    
    const arrS = s.split(" ")
    
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] === "Z") {
            answer = answer - Number(arrS[i - 1])
        } else {
            answer += Number(arrS[i])
        }
    }
    
    return answer;
}