#!/bin/python3

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)

while 1 :
  f1 = open("gpio23.txt")
  f2 = open("gpio24.txt")
  signal1 = f1.read()
  signal2 = f2.read()
  if signal1 :
    digital1 = int(signal1)
    print(signal1)
    GPIO.output(23, digital1)
  if signal2 :
    digital2 = int(signal2)
    GPIO.output(24, digital2)
  f1.close()
  f2.close()

GPIO.cleanup()
