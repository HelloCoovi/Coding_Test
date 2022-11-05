
import math

def is_priem_num(num):
    if num == 1:
        return False
    else:
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return False
    return True
    

start = int(input())
end = int(input())

reslut = 0
min_num = 0

for num in range(start, end + 1):
    if is_priem_num(num) == True and min_num == 0:
        reslut += num
        min_num = num
    elif is_priem_num(num) == True:
        reslut += num

if reslut == 0:
    print(-1)
else:
    print(reslut)
    print(min_num)