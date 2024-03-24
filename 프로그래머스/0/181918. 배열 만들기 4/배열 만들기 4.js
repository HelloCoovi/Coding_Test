function solution(arr) {
    let stk = []

    for (let i = 0; i < arr.length; i++){
        if (stk.length == 0) stk = [arr[i]]
        else {
            const lastElement = stk[stk.length - 1];
            const currentArrElement = arr[i]

            if (lastElement < currentArrElement) {
                stk = [...stk, currentArrElement]
            } else if (lastElement >= currentArrElement) {
                stk.pop()
                i--
            }
        }
    }
    
    return stk;
}