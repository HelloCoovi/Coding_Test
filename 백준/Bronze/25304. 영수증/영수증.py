price = int(input())
vol = int(input())

pay = 0

for i in range(vol):
    product = list(map(int, input().split(" ")))
    pay += product[0] * product[1]

if price == pay:
    print("Yes")
else:
    print("No")