function solution(emergency) {
    const patientNum = emergency.length;
    let copyEmergencyArr = [...emergency];
    
    const result = Array(patientNum).fill(0);
    
    for(let i = 0; i < patientNum; i++){
        let minNum = Math.min(...copyEmergencyArr);
        copyEmergencyArr = Array.from(copyEmergencyArr, el => el - minNum)
        let indexToReplace = copyEmergencyArr.findIndex(el => el === 0)
        copyEmergencyArr[indexToReplace] = 101
        result[indexToReplace] = patientNum - i
    }
    
    return result;
}

// 0으로 이루어진 arr.length 배열 생성(더미 배열)

// 반복문 시작
// 배열 내에서 가장 작은 값 확인
// 가장 작은 값으로 배열 전체 요소에 빼기
// 0인 자리에 arr.length - i 값 넣기
