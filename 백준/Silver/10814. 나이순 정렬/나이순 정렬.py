import sys
input = sys.stdin.readline

case = int(input())
user_info = []

for _ in range(case):
    user = list(input().split())
    user[0] = int(user[0])
    user_info.append(user)

user_info.sort(key=lambda x : x[0])

for i in user_info:
    print(i[0], i[1])