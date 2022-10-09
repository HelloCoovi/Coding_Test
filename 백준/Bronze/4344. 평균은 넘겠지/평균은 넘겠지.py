case = int(input())

for _ in range(case):
    grade = list(map(int, input().split(" ")))
    student = grade[0]
    scores = grade[1:]
    average = sum(scores) / student
    above_student = 0
    for score in scores:
        if score > average:
            above_student += 1

    reslut = above_student / len(scores) * 100
    print("%.3f"%reslut + "%")