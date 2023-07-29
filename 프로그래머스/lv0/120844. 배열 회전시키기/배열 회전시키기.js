function solution(numbers, direction) {
    return direction === "right" ? [numbers.slice(-1)[0], ...numbers.slice(0, -1)] : [...numbers.slice(1), numbers[0]]
    
}