function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i = i + 2) {
        answer.push(i)
    }
    return answer;
}