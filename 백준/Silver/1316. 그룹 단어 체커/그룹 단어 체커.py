N = int(input())

reslut = 0

for _ in range(N):
    word = input()    
    group = True
    
    for i in range(len(word)-1):
        if word[i] == word[i+1]:
            pass
        elif word[i] in word[i+1:]:
            group = False
            break
    
    if group:
        reslut += 1
    
print(reslut)