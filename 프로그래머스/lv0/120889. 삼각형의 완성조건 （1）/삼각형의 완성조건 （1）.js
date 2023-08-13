function solution(sides) {
    const maxNum = Math.max(...sides);
    sides.splice(sides.indexOf(maxNum), 1);
    
    return maxNum < sides[0] + sides[1] ? 1 : 2;
}