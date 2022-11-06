import math

def is_prime_num(num):
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

start, end = list(map(int, input().split()))

for i in range(start, end + 1):
    if i == 1:
        continue
    elif is_prime_num(i):
        print(i)