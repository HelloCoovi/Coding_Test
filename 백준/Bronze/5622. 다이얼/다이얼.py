word = input()
reslut = 0

for i in word:
    if i in ["A", "B", "C"]:
        reslut += 3
    elif i in ["D", "E", "F"]:
        reslut += 4
    elif i in ["G", "H", "I"]:
        reslut += 5
    elif i in ["J", "K", "L"]:
        reslut += 6
    elif i in ["M", "N", "O"]:
        reslut += 7
    elif i in ["P", "Q", "R", "S"]:
        reslut += 8
    elif i in ["T", "U", "V"]:
        reslut += 9
    elif i in ["W", "X", "Y", "Z"]:
        reslut += 10

print(reslut)