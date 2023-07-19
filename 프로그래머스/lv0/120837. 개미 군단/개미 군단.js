function solution(hp) {
    var answer = 0;
    const antStrength = [5, 3, 1];
    
      antStrength.forEach((el) => {
      answer += Math.floor(hp / el);
      hp = hp % el;
  })
    
    return answer;
}