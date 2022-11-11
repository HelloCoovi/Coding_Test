num = input()
nums = [int(n) for n in num]
nums.sort(reverse=True)
nums = list(map(str, nums))
nums = "".join(nums)
print(nums)