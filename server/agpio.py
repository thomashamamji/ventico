#!/bin/python3

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)

while 1 :
  f = open("gpio.txt")
  signal = int(f.read())
  print(signal)
  GPIO.output(23, signal)
  f.close()
  
GPIO.cleanup()
