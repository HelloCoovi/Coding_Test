function solution(s) {
    let result = [];
    
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let alphabetObj = alphabet.reduce((acc, value) => {
      return {...acc, [value]: 0};
    }, {});
    
    for (let i = 0; i < s.length; i++ ) {
        alphabetObj[s[i]] += 1
    }
    
    for (let i = 0; i < Object.entries(alphabetObj).length; i++ ) {
        if (Object.entries(alphabetObj)[i][1] === 1) {
            result = [...result, Object.entries(alphabetObj)[i][0]]
        }
    }
    
    return result.join("")
}