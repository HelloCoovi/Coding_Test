import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = dict()
cnt = 0
for _ in range(N):
    s = input()
    arr[s] = True
for _ in range(M):
    inp = input()
    if inp in arr.keys():
        cnt+=1

print(cnt)