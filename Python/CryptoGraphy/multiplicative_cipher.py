def inv(num):
    if num==1:
        a = 1
    elif num==5:
        a = 21
    elif num==21:
        a = 5
    elif num==7:
        a = 15
    elif num==15:
        a = 7
    elif num==11:
        a = 19
    elif num==17:
        a = 23
    elif num==23:
        a =  17
    elif num==25:
        a =  25
    return a
    


a = input("Enter input : ")
key = int(input("Enter key value : "))
choice = int(input("1 for encryption, 2 for decryption"))

out = []
if(choice==1):
    for c in a:
        out.append(chr((((ord(c)-97) * key)%26)+97)) 

elif(choice==2):
        for c in a:
            out.append(chr((((ord(c)-97) * inv(key))%26)+97)) 



print(out)
