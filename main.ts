let n = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    n = 25
    for (let index = 0; index < 25; index++) {
        basic.clearScreen()
        燈號(n)
        n += -1
        basic.pause(100)
    }
})
function 燈號 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = num / 5 - 1
    } else {
        x = n % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.B, function () {
    n = 0
    for (let index = 0; index < 25; index++) {
        basic.clearScreen()
        n += 1
        燈號(n)
        basic.pause(100)
    }
})
