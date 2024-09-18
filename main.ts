function turnLeft(theDelay: number) {
    pins.servoSetPulse(AnalogPin.P0, leftForward)
    pins.servoSetPulse(AnalogPin.P1, rightBackward)
    basic.pause(theDelay)
}

function goBackward(theDelay2: number) {
    pins.servoSetPulse(AnalogPin.P0, leftBackward)
    pins.servoSetPulse(AnalogPin.P1, rightBackward)
    basic.pause(theDelay2)
}

function goForward(theDelay3: number) {
    pins.servoSetPulse(AnalogPin.P0, leftForward)
    pins.servoSetPulse(AnalogPin.P1, rightForward)
    basic.pause(theDelay3)
}

function stop(theDelay4: number) {
    pins.servoSetPulse(AnalogPin.P0, stopValue)
    pins.servoSetPulse(AnalogPin.P1, stopValue)
    basic.pause(theDelay4)
}

function turnRight(theDelay5: number) {
    pins.servoSetPulse(AnalogPin.P0, leftBackward)
    pins.servoSetPulse(AnalogPin.P1, rightForward)
    basic.pause(theDelay5)
}

let stopValue = 0
let rightBackward = 0
let rightForward = 0
let leftBackward = 0
let leftForward = 0
leftForward = 2200
leftBackward = 1000
rightForward = 1000
rightBackward = 2200
stopValue = 1600
basic.forever(function on_forever() {
    goForward(5000)
    stop(1000)
    turnLeft(2500)
    stop(1000)
    goForward(5000)
    stop(1000)
    turnRight(2500)
    stop(1000)
})
