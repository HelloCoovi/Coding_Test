function solution(quiz) {
    const result = []

    quiz.map((el) => {
      const quizArr = el.split(" ").map(item => isNaN(Number(item)) ? item : +item )

      const quizAnswer = quizArr[1] === "+" ? quizArr[0] + quizArr[2] : quizArr[0] - quizArr[2]

      if (quizAnswer === quizArr[4]) {
          result.push("O")
      } else {
          result.push("X")
      }
    })
    
    return result;
}