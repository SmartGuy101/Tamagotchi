controller.onGesture(ControllerGesture.TiltLeft, function () {
    MyPlayer.setImage(assets.image`Player Left`)
    MyPlayer.setVelocity(-50, 0)
    MyPlayer.setStayInScreen(false)
})
controller.onGesture(ControllerGesture.TiltRight, function () {
    MyPlayer.setImage(assets.image`Player Right`)
    MyPlayer.setVelocity(50, 0)
    MyPlayer.setStayInScreen(false)
})
controller.onGesture(ControllerGesture.Shake, function () {
    MyPlayer.setImage(assets.image`Player Shake`)
    MyPlayer.startEffect(effects.ashes)
})
let MyPlayer: Sprite = null
MyPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
scene.setBackgroundColor(1)
