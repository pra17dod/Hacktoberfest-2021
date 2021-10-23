import psutil
from plyer import notification
import time

threshold=input("Enter the threshold battery percentage to notify: ")
while(True):
    # from psutil we will import the sensors_battery class and with that we have the battery remaining
    battery = psutil.sensors_battery()
    percent = battery.percent
    if percent<=threshold:
        notification.notify(title=f"Battery Percentage",message="Your battery got reduced to lower than or eqal to {threshold}. Please Charge it up qickly",timeout=10)
        break
    # for every 2 seconds it do checks the battery
    time.sleep(2)