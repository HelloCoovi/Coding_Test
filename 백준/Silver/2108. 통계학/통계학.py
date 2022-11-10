import sys
input = sys.stdin.readline

n = int(input())
num = []
for _ in range(n):
    num.append(int(input()))

num.sort()
print(round(sum(num)/n)) #산술평균
print(num[(n-1)//2]) #중앙값

#최빈값
cnt = {}
for i in range(n):
    if num[i] not in cnt.keys():
        cnt[num[i]] = 1
    else:
        cnt[num[i]] += 1
cnt = sorted(cnt.items(), key = lambda x:(-x[1], x[0]))
for i in range(len(cnt)):
    cnt[i] = list(cnt[i])
if len(cnt) == 1 or cnt[0][1] != cnt[1][1]:
    print(cnt[0][0])
else:
    print(cnt[1][0])

print(max(num) - min(num)) #범위