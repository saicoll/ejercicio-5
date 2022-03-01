basic.showLeds(`
    . # # # #
    # . . . .
    . # # # .
    . . . . #
    # # # # .
    `)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50 / 5, 25 / 5)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25 / 5, 50 / 5)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50 / 5, 50 / 5)
    }
})
