import math
import sys
input = sys.stdin.readline

def is_prime_num(num):
    for n in range(2, int(math.sqrt(num)) + 1):
        if num % n == 0:
            return False
    return True

prime_nums = [num for num in range(2, 246913) if is_prime_num(num)]
    
while True:
    count = 0
    num = int(input())
    if num == 0:
        break
        
    # for i in range(num + 1, num * 2 + 1):
    #     if i in prime_nums:
    #         count += 1
    for i in prime_nums:
        if num < i <= num * 2:
            count += 1
            
    print(count)