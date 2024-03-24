function solution(l, r) {
    let isAnswer;
    let result = [];
    
    for (let i = l; i <= r; i++) {
        isAnswer = true;
        const strNum = String(i);
        
        for (let j = 0; j < strNum.length; j++) {
            if (strNum[j] === "5" || strNum[j] === "0") continue;
            
            isAnswer = false;
            break;
        }
        
        if (isAnswer) {
            result = [...result, Number(strNum)]
        }
    }
    return result.length === 0 ? [-1] : result;
}