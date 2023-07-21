function solution(rsp) {
    let answer = '';
    
    const arrRsp = rsp.split("")
    
    arrRsp.map((el) => {
        if(el == "2") {
            answer += "0"
        } else if(el == "0") {
            answer += "5"
        } else {
            answer += 2
        }
    })
    
    return answer;
}

// 가위 2 -> 0
// 바위 0 -> 5
// 보 5 -> 2

// 문자열 순회(배열로 바꿔볼까)
// 