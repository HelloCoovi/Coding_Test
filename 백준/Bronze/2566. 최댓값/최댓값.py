import sys

input = sys.stdin.readline

nums = [list(map(int, input().split())) for _ in range(9)]
nums = sum(nums, [])


print(max(nums))
print(nums.index(max(nums)) // 9 + 1, nums.index(max(nums)) % 9 + 1)