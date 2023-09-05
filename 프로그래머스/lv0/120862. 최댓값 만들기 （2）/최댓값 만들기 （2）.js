function solution(numbers) {
    if (numbers.length === 2) return numbers[0] * numbers[1]
    
    const posNums = numbers.filter(num => num > 0).sort((a, b) => b - a)
    const negNums = numbers.filter(num => num < 0).sort((a, b) => a - b)
    
    const posMulti = !isNaN(posNums[0] * posNums[1]) ? posNums[0] * posNums[1] : 0
    const negMulti = !isNaN(negNums[0] * negNums[1]) ? negNums[0] * negNums[1] : 0
    
    return  posMulti > negMulti ? posMulti : negMulti
}