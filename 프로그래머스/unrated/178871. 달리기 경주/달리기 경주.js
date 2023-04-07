function solution(players, callings) {
    let playerRank = {};
    players.map((player, index) => {
        return playerRank[player] = index
    });
    
    for (const calling of callings) {
        const backIndex = playerRank[calling];
        const frontIndex = backIndex - 1;
    
        [players[frontIndex], players[backIndex]] = [players[backIndex], players[frontIndex]];
        
        playerRank[players[backIndex]] = backIndex;
        playerRank[players[frontIndex]] = frontIndex;
    }
    return players;
}