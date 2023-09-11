function solution(sides) {
    let result = 0
    
    const [sNum, bNum] = sides.sort((a, b) => a - b);
    
    // bNum이 가장 긴변 일때
    for (let i = bNum - sNum + 1; i <= bNum; i++) {
        result++
    }
    // bNum 외에 긴 변 일때
    for (let i = bNum + 1; i < sNum + bNum; i++) {
        result++
    }
    
    return result
}