def d():
    reslut = []
    for i in range(1, 10001):
        num = str(i)
        for j in num:
            i += int(j)
        reslut.append(i)
    
    for i in range(1, 10001):
        if i not in reslut:
            print(i)
            
d()