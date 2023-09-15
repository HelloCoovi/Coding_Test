function solution(a, b, c) {
    const numSet = new Set([a, b, c])
    
    if (numSet.size === 3) return a + b + c
    if (numSet.size === 2) return (a + b + c) * (a**2 + b**2 + c**2)
    if (numSet.size === 1) return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
}