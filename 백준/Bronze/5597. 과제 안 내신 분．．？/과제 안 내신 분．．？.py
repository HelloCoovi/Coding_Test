import sys

submit_students = list(int(sys.stdin.readline()) for _ in range(28))
students = list(range(1,31))

result = []
for i in students:
    if i not in submit_students:
        result.append(i)

result.sort()

print(result[0])
print(result[1])