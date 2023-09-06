function solution(my_string) {
    let result = 0
    
    my_string.split(/[a-zA-Z]/g).forEach(num => {
        result += isNaN(+num) ? 0 : +num
    })
    
    return result
}