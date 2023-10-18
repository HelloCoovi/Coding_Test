function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distanceA = Math.abs(n - a)
        const distanceB = Math.abs(n - b)
        
        if (distanceA === distanceB) return b - a
        
        return distanceA - distanceB
    })
}