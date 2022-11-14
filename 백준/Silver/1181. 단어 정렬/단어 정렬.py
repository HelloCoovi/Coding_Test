import sys
input = sys.stdin.readline

case = int(input())
word_list = list(set([input().strip() for _ in range(case)]))

word_list.sort(key=lambda x: (len(x), x))

for i in word_list:
    print(i)