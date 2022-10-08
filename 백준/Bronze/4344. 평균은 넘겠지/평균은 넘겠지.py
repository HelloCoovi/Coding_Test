C = int(input())
scores_list=[]
count=0

for _ in range(C):
    scores_list.append(list(map(int,input().split())))
    # for x in scores_list :
# print(scores_list)
for i in scores_list:
    count=0
    stock = i[0]
    del i[0]
    avg=(sum(i)/stock)
    for _ in i:
        if avg< _ :
            count+=1
    print("{:.3f}%".format(round((count/stock)*100,3)))