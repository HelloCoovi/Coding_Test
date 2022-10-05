reslut = []

for _ in range(10):
    num = int(input())
    remainder = num % 42
    reslut.append(remainder)

reslut = set(reslut)
print(len(reslut))