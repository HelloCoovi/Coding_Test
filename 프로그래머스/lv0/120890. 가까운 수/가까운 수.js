function solution(array, n) {
    const absArr = array.map((el) => Math.abs(el - n));
    const minEl = Math.min(...absArr);
    
    const [fValue, lValue] = [array[absArr.indexOf(minEl)], array[absArr.lastIndexOf(minEl)]];
    
    return fValue !== lValue ? Math.min(fValue, lValue) : fValue
}