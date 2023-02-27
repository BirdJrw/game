input.onButtonPressed(Button.A, function () {
	
})
let tool = 0
let action = -1
game.startCountdown(10000)
basic.forever(function () {
    if (action == -1) {
        tool = randint(0, 3)
    }
    if (tool == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (tool == 1) {
        basic.showArrow(ArrowNames.East)
    } else if (tool == 2) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
