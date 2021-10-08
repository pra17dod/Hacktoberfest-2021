import socket 
import re
import json
from urllib2 import urlopen

def get_Host_name_IP(): 

    try: 

        host_name = socket.gethostname() 

        host_ip = socket.gethostbyname(host_name) 

        print("Hostname :  ",host_name) 

        print("IP : ",host_ip) 

    except: 

        print("Unable to get Hostname and IP") 



get_Host_name_IP() #Function call

url = 'http://ipinfo.io/json'
response = urlopen(url)
data = json.load(response)

org=data['org']
city = data['city']
country=data['country']
region=data['region']
print(city)
print(country)
print(region)
