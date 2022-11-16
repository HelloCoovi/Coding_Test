case = int(input())

pos_list = list(map(int, input().split()))
set_pos = sorted(list(set(pos_list)))

pos_dict = {set_pos[i] : i for i in range(len(set_pos))}

for i in pos_list:
    print(pos_dict[i], end = ' ')