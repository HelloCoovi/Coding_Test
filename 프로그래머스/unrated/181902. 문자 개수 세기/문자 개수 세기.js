function solution(my_string) {
    var answer = [];
    
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase(), ...'abcdefghijklmnopqrstuvwxyz'];
    
    let alphabetObj = alphabet.reduce((acc, value) => {
      return {...acc, [value]: 0};
    }, {});

    for (let i = 0; i < my_string.length; i++ ) {
        alphabetObj[my_string[i]] = alphabetObj[my_string[i]] + 1;
    }
    
    return Object.values(alphabetObj)
}


// 배열을 객체로 변환
// 객체의 키값이 일치하는 경우 값 +1
// 객체에서 값만 뽑아서 배열로 만들고 ㄱeturn 