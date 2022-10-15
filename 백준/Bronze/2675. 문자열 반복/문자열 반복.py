T = int(input())

for _ in range(T):
    reslut = ""
    response = input()
    R = int(response[0:1])
    S = response[2:]

    for i in S:
        reslut += i * R

    print(reslut)