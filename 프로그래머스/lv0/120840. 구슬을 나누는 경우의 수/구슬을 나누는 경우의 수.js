function solution(balls, share) {
    let answer = 1;
    let cnt = 1;

    while (cnt <= share) {
        answer *= balls;
        balls = balls - 1;

        answer = answer / cnt;
        cnt = cnt + 1;
    }
    
    return answer
}

// ! == 팩토리얼 연산
// balls == 3, share == 2
// 3 * 2 * 1 / (3-2)! * 2!
// 6 / (1 * (1 * 2))
// 6 / 2
// 3
// 3개중 2개
// 6 - 3
// 15 - 5
