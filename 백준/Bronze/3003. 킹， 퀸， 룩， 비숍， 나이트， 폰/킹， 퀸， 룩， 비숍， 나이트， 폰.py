find_chess = input().split()

complete_chess = [1, 1, 2, 2, 2, 8]

reslut = []

for i in range(len(complete_chess)):
    el = int(complete_chess[i]) - int(find_chess[i])
    reslut.append(el)

reslut = " ".join(map(str, reslut))
print(reslut)