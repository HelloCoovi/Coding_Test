num, prize = list(map(int, input().split()))
student = list(map(int, input().split()))

student.sort()
print(student[-prize])