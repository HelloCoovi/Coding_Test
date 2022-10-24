data = list(map(int, input().split()))

if data[1] >= data[2]:
    print(-1)

else:
    print(data[0] // (data[2] - data[1]) + 1)