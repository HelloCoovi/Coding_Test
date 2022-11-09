import sys
input = sys.stdin.readline

case = int(input())
result = []

for _ in range(case):
    num = int(input())
    result.append(num)

result.sort()

for i in result:
    print(i)