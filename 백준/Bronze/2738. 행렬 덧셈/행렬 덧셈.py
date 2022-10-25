A = []
B = []

row_col = list(map(int, input().split()))

for _ in range(row_col[0]):
    row = list(map(int, input().split()))
    A.append(row)

for _ in range(row_col[0]):
    row = list(map(int, input().split()))
    B.append(row)

for r in range(row_col[0]):
    for c in range(row_col[1]):
        print(A[r][c] + B[r][c], end = " ")
    print()