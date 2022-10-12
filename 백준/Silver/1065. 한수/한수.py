N = int(input())

if N < 100:
    reslut = N
else:
    reslut = 99
    for num in range(100, N+1):
        num = str(num)
        if int(num[0]) - int(num[1]) == int(num[1]) - int(num[2]):
            reslut += 1

print(reslut)
