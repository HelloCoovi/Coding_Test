# 테스트 케이스 총 범위
n=123456

# 에라토스테네스의 체
def prime_list(n):
    if n == 1:
        return False
    for i in range(2,int(n**0.5)+1):
        if n%i == 0:
            return False
    return True		

primes_list = list(range(2,246912))
ans_list = []

for i in primes_list:
    # 만약 소수에 해당하면 prime_list 함수에서 true를 반환 받을 것입니다.
    if prime_list(i):
        # true를 반환 받는다면 ans_list에 해당 원소(i)를 추가해줍니다.
        ans_list.append(i)
        
        
while True:
    
    cnt = 0

    num = int(input())

    # 0을 입력받으면 종료    
    if num == 0:
        break
    
    for i in ans_list:
        if num < i < 2*num+1:
            cnt += 1
            
    print(cnt)