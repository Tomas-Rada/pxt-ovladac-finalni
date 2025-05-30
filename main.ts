radio.setGroup(234)
radio.setFrequencyBand(54)


// Kalibrace gyroskopu
console.log("Kalibrace gyroskopu...");
//to do
console.log("Kalibrace dokončena!");

// Příjmání
radio.onReceivedValue(function (name: string, value: number) {
    if (name === "38621479X") {
        value = x
    }
    if (name === "38621479Y") {
        value = y
    }
})
let x: number = 0
let y: number = 0
let p_motor: number = 0
let l_motor: number = 0

// Kontrola osy X
if (x > 100) {
    console.log("x je větší než 100");
} else if (x > 50) {
    console.log("x je mezi 50 a 100");
} else if (x > 20) {
    console.log("x je mezi 20 a 50");
} else if (x > 10) {
    console.log("x je mezi 10 a 20");
} else if (x > 0) {
    console.log("x je mezi 0 a 10");
} else if (x < -100) {
    console.log("x je menší než -100");
} else if (x < -50) {
    console.log("x je mezi -100 a -50");
} else if (x < -20) {
    console.log("x je mezi -50 a -20");
} else if (x < -10) {
    console.log("x je mezi -20 a -10");
} else if (x < 0) {
    console.log("x je mezi -10 a 0");
} else {
    console.log("x je rovno 0");
}

// Kontrola osy Y
if (y > 100) {
    console.log("y je větší než 100");
} else if (y > 50) {
    console.log("y je mezi 50 a 100");
} else if (y > 20) {
    console.log("y je mezi 20 a 50");
} else if (y > 10) {
    console.log("y je mezi 10 a 20");
} else if (y > 0) {
    console.log("y je mezi 0 a 10");
} else if (y < -100) {
    console.log("y je menší než -100");
} else if (y < -50) {
    console.log("y je mezi -100 a -50");
} else if (y < -20) {
    console.log("y je mezi -50 a -20");
} else if (y < -10) {
    console.log("y je mezi -20 a -10");
} else if (y < 0) {
    console.log("y je mezi -10 a 0");
} else {
    console.log("y je rovno 0");
}
