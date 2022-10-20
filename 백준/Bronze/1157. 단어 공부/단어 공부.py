str = input().lower()

set_str = set(str)
count = 0

for i in set_str:
    if count <= str.count(i):
        log = count
        count = str.count(i)
        reslut = i.upper()
        
if log == count:
    reslut = "?"
    
print(reslut)