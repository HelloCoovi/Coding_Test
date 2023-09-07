function solution(board) {
//     let pos = []
    
//     board.forEach((_, xIdx) => {
//         if (board[xIdx].includes(1)) {
//             board[xIdx].forEach((num, yIdx) => {
//                 if (num === 1) pos.push([xIdx, yIdx])
//             })
//         }
//     })

//     pos.forEach(el => {
//         for (let i = -1; i < 2; i++) {
//             for (let j = -1; j < 2; j++) {
//                 if (board[el[0] + i] && board[el[0] + i][el[1] + j] + 1) {
//                     board[el[0] + i][el[1] + j] = 1
//                 }
//             }
//         }
//     })
    
//     return board.flat().filter(num => num === 0).length
    
    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((el, x) => {
        if (el === 1) return;
        return outside.some(([oy, ox]) => self[oy + y]?.[ox + x]) ? "" : safezone++;
    }));

    return safezone;
}