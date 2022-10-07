time = int(input())

for _ in range(time):
    score = 0
    reslut = []
    ox = input()
    for i in ox:
        if i == "O":
            score += 1
            reslut.append(score)
        else:
            score = 0
    print(sum(reslut))