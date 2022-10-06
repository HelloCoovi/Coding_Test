item = int(input())
grade = list(map(int,input().split(" ")))

max_grade = max(grade)

fake_grade = []

for i in grade:
    fake_grade.append(i / max_grade * 100)

print(sum(fake_grade) / item)