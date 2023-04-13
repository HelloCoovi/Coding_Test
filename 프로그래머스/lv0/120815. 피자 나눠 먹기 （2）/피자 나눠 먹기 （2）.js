function solution(n) {
    let piece = 6
    
    while(piece % n !== 0) {
        piece+= 6
    }
    
    return piece / 6
}