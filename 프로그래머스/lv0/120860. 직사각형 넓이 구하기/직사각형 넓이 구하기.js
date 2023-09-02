function solution(dots) {
//     dots.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))

//     return (dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1])
    const x = [...new Set(dots.map(dot => dot[0]))];
    const y = [...new Set(dots.map(dot => dot[1]))];

    return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
}