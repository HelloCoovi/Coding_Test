function solution(keyinput, board) {
    let result = [0, 0];
    const keyPos = ["up", "down", "left", "right"];
    const fullField = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    
    function moveMent(field, move) {
        let resultPos = [...field]
        
        if (move === keyPos[0]) resultPos[1] += 1;
        if (move === keyPos[1]) resultPos[1] += -1;
        if (move === keyPos[2]) resultPos[0] += -1;
        if (move === keyPos[3]) resultPos[0] += 1;
        
        if (Math.abs(resultPos[0]) > Math.abs(fullField[0])) return field;
        if (Math.abs(resultPos[1]) > Math.abs(fullField[1])) return field;
        
        return resultPos;
    }
    
    keyinput.forEach(key => {
        result = moveMent(result ,key);
    })
    
    return result;
}