function solution(numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num
    }
    
    return total / numbers.length
}