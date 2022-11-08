import sys
input = sys.stdin.readline

import math

def is_prime_num(num):
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True


case = int(input())

for _ in range(case):
    n = int(input())
    p = int(n / 2)
    if is_prime_num(p):
        print(p, p)
    else:
        p1 = p
        p2 = p
        while not is_prime_num(p1) or not is_prime_num(p2):
            p1 -= 1
            p2 += 1
        print(p1, p2)