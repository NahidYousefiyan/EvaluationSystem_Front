f = open("login.html", "r")
s = open("loginxx.html", "ab")
for x in f:
    if x.strip().startswith('<!'):
        print(x)
    else:
        s.write(x.encode('utf-8'))

