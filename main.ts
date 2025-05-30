
input.onButtonPressed(Button.A, function () {
    radio.sendValue("njimok@<>", control.deviceSerialNumber())
})
let y_l = 0
let x_l = 0
let y = 0
let x = 0
let j:string=""

radio.setGroup(234)
radio.setFrequencyBand(54)
radio.setTransmitSerialNumber(true)
basic.forever(function () {


    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    // Kontrola osy X

    if (x > 100) {
        x_l = 3
    } else if (x > 60) {
        x_l = 2
    } else if (x > 30) {
        x_l = 1
    } else if (x > 0 && x < 0) {
        x_l = 0
    } else if (x < -100) {
        x_l = -3
    } else if (x < -60) {
        x_l = -2
    } else if (x < -30) {
        x_l = -1
    }

    // Kontrola osy Y

    if (y > 100) {
        x_l = 3
    } else if (y > 60) {
        x_l = 2
    } else if (y > 30) {
        x_l = 1
    } else if (y > 0 && y < 0) {
        x_l = 0
    } else if (y < -100) {
        x_l = -3
    } else if (y < -60) {
        x_l = -2
    } else if (y < -30) {
        x_l = -1
    }
    j = x_l + "," + y_l
    radio.sendString("j")
    basic.pause(20)
    j = "";
})