nums = list(input().split(" "))

nums[0] = nums[0][::-1]
nums[1] = nums[1][::-1]

print(max(nums))