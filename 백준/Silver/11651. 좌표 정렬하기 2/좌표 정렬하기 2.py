import sys
input = sys.stdin.readline

case = int(input())

position = []

for _ in range(case):
    pos = list(map(int, input().split()))
    position.append(pos)

position.sort(key=lambda x: (x[1], x[0]))

for i in position:
    print(i[0], i[1])