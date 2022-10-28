num = int(input())
paper = [[0 for _ in range(100)] for _ in range(100)]

for _ in range(num):
    row, col = list(map(int, input().split()))
    
    for r in range(row, row + 10):
        for c in range(col, col + 10):
            paper[r][c] = 1

reslut = 0
for i in paper:
    reslut += i.count(1)

print(reslut)