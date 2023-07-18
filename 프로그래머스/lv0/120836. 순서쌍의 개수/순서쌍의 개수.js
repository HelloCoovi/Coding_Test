function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        if (n % i === 0) {
            answer += 1;
        }
    }
    
    return answer;
}

// 두 수를 곱했을때 n이 되는 수를 구하기
// n % 1~n = 0
// for 문으로 확인
// 1부터 n까지
// for(let i = 1; i <= n; i++ )