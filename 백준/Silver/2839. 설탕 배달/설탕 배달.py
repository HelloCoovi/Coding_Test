num = int(input())

reslut = 0

while num >= 0:
    if num % 5 == 0:
        reslut += num // 5
        print(reslut)
        break
    num -= 3
    reslut += 1
else:
    print(-1)