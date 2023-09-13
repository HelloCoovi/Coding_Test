function solution(spell, dic) {
    let result = ""
    
    for (let i = 0; i < dic.length; i++ ) {
        result = ""
        
        for (let j = 0; j < spell.length; j++ ) {
            if (!dic[i].split("").includes(spell[j])) break
            
            result += spell[j]
            
            if (result === spell.join("")) return 1
        }
    }
    return 2
}