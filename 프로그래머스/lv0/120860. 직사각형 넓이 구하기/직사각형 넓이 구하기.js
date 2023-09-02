function solution(dots) {
//     dots.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

//     return (dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1])
    let x = []
    let y = []
    
    dots.forEach(dot => {
        x.push(dot[0])
        y.push(dot[1])
    })

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}