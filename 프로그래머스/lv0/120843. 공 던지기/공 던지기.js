function solution(numbers, k) {    
    console.log(3 % 2)
    let answer = numbers[((k * 2) - 2) % numbers.length];
    return answer
}