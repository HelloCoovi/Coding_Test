function solution(dot) {
    var answer = 0;
    if (dot[0] * dot[1] > 0) {
        answer = dot[0] < 0 ? 3 : 1
    } else {
        answer = dot[0] < 0 ? 2 : 4
    }
    
    
    return answer;
}

/*
if 노가다로 해결 가능하지만 그렇게하고싶지는 않은데
세상일을 하고싶은데로 할 수 는 없지ㅎ

1. if(dot[0] * dot[1] > 0) 1,3 / 2,4
2. 앞 숫자가 음수라면 각 + 2

*/