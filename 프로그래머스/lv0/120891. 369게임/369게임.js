function solution(order) {
    return [...String(order)].filter(num => num % 3 === 0 && num !== "0").length
}