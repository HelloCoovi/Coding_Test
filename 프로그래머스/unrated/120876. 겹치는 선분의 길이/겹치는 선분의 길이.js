function solution(lines) {
    let result = -1
    let connect = 0
    let overlapLines = []
    
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            
            const [aStart, aEnd] = lines[i]
            const [bStart, bEnd] = lines[j]
            
            let overlapLine = []
            for (let pos = aStart; pos <= aEnd; pos++) {
                if (pos >= bStart && pos <= bEnd) {
                    overlapLine.push(pos)
                }
            }
            overlapLines.push(overlapLine)
        }
    }
    console.log(overlapLines)
    
    
    let overlap = 3
    overlapLines.forEach(line => {
        
        if (line.length <= 1) {
            overlap -= 1
        }
    })
    if (overlap === 0) return 0
    
    
    let setOverlapLines = [...new Set(overlapLines.flat())]
    const minLine = Math.min(...setOverlapLines)
    const maxLine = Math.max(...setOverlapLines)
    
    for (let i = minLine; i <= maxLine; i++ ) {
        if (!setOverlapLines.includes(i)) {
            connect = -1
            continue
        }
        result++
    }
    
    return result <= 0 ? 0 : result + connect
}
/*
3 4 5 => 2 (3 - 2 => 0)
1 2 3 4 5 => 4 (5 - 3 => 1)
3 4 5 6 7 8 9 => 6 (7 - 3 => 3)
*/

// 각 겹치는 부분의 길이 저장
// 연속되는 구간 카운팅
// 중복되는 구간을 지우면서 지운요소수 + 1 만큼 빼기
// 만약 각 요소들 중 이어지는 부분이 있다면 result + 1

