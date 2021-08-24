controller.onGesture(ControllerGesture.ScreenUp, function () {
    MyPlayer.setImage(assets.image`Player`)
    MyPlayer.setVelocity(0, 0)
})
controller.onGesture(ControllerGesture.TiltLeft, function () {
    MyPlayer.setImage(assets.image`Player Left`)
    MyPlayer.setVelocity(-50, 0)
    music.thump.play()
})
controller.onGesture(ControllerGesture.TiltRight, function () {
    MyPlayer.setImage(assets.image`Player Right`)
    MyPlayer.setVelocity(50, 0)
    music.thump.play()
})
controller.onGesture(ControllerGesture.Shake, function () {
    MyPlayer.setImage(assets.image`Player Shake`)
    MyPlayer.startEffect(effects.ashes)
    music.setVolume(20)
    music.bigCrash.play()
})
let MyPlayer: Sprite = null
MyPlayer = sprites.create(assets.image`Player`, SpriteKind.Player)
MyPlayer.setStayInScreen(false)
scene.setBackgroundColor(1)
music.setVolume(255)
music.powerUp.play()
forever(function () {
    light.showAnimation(light.rainbowAnimation, 100)
})
forever(function () {
    if (MyPlayer.x > scene.screenWidth() - 30) {
        MyPlayer.x = scene.screenWidth() - 30
        MyPlayer.setVelocity(0, 0)
    }
    if (MyPlayer.x < 50) {
        MyPlayer.x = 50
        MyPlayer.setVelocity(0, 0)
    }
})
