controller.onGesture(ControllerGesture.TiltLeft, function () {
    MyPlayer.setImage(assets.image`Player Left`)
    MyPlayer.setVelocity(-50, 0)
    MyPlayer.setStayInScreen(false)
    music.thump.play()
})
controller.onGesture(ControllerGesture.TiltRight, function () {
    MyPlayer.setImage(assets.image`Player Right`)
    MyPlayer.setVelocity(50, 0)
    MyPlayer.setStayInScreen(false)
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
scene.setBackgroundColor(1)
music.setVolume(255)
music.powerUp.play()
forever(function () {
    if (MyPlayer.x > scene.screenWidth() - 20) {
        MyPlayer.x = scene.screenWidth() - 21
    }
    if (MyPlayer.x < 1 - scene.screenWidth()) {
        MyPlayer.x = scene.screenWidth() + 1
    }
})
