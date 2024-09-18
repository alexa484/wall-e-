def turnLeft(theDelay: number):
    pins.servo_set_pulse(AnalogPin.P0, leftForward)
    pins.servo_set_pulse(AnalogPin.P1, rightBackward)
    basic.pause(theDelay)
def goBackward(theDelay2: number):
    pins.servo_set_pulse(AnalogPin.P0, leftBackward)
    pins.servo_set_pulse(AnalogPin.P1, rightBackward)
    basic.pause(theDelay2)
def goForward(theDelay3: number):
    pins.servo_set_pulse(AnalogPin.P0, leftForward)
    pins.servo_set_pulse(AnalogPin.P1, rightForward)
    basic.pause(theDelay3)
def stop(theDelay4: number):
    pins.servo_set_pulse(AnalogPin.P0, stopValue)
    pins.servo_set_pulse(AnalogPin.P1, stopValue)
    basic.pause(theDelay4)
def turnRight(theDelay5: number):
    pins.servo_set_pulse(AnalogPin.P0, leftBackward)
    pins.servo_set_pulse(AnalogPin.P1, rightForward)
    basic.pause(theDelay5)
stopValue = 0
rightBackward = 0
rightForward = 0
leftBackward = 0
leftForward = 0
leftForward = 2200
leftBackward = 1000
rightForward = 1000
rightBackward = 2200
stopValue = 1600

def on_forever():
    goForward(5000)
    stop(1000)
    turnLeft(2500)
    stop(1000)
    goForward(5000)
    stop(1000)
    turnRight(2500)
    stop(1000)
basic.forever(on_forever)
