function solution(numer1, denom1, numer2, denom2) {
    let answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    
    let [a, b] = [answer[0], answer[1]];
    
    if (a < b) {
        [a, b] = [b, a]
    }
    while (b != 0) {
        [a, b] = [b, a % b]
    }
    
    answer = answer.map((num) => num / a);
    
    return answer;
}