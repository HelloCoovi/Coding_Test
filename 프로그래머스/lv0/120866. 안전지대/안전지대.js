function solution(board) {
    let pos = []
    
    board.forEach((_, xIdx) => {
        if (board[xIdx].includes(1)) {
            board[xIdx].forEach((num, yIdx) => {
                if (num === 1) pos.push([xIdx, yIdx])
            })
        }
    })

    pos.forEach(el => {
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (board[el[0] + i] && board[el[0] + i][el[1] + j] + 1) {
                    board[el[0] + i][el[1] + j] = 1
                }
            }
        }
    })
    
    return board.flat().filter(num => num === 0).length
}