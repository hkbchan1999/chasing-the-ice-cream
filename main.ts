// picture.replace(9, 7)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // let picture: Image = null
    ice_cream.setPosition(randint(0, 160), randint(0, 120))
    ice_cream.startEffect(effects.hearts, 100)
    info.changeScoreBy(1)
    info.startCountdown(10)
    ducky.say(":) good ")
})
let ice_cream: Sprite = null
let ducky: Sprite = null
info.startCountdown(10)
scene.setBackgroundColor(9)
ducky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 3 3 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 3 3 3 3 3 b . . . 
    . b b b b b 3 3 3 3 3 3 3 b . . 
    . b 5 3 b 3 3 3 3 3 3 3 3 b . . 
    . . 5 3 3 b 3 d 1 f 3 3 4 f . . 
    . . 5 5 3 3 b 1 f f 3 4 4 c . . 
    5 5 5 5 3 3 3 d f b 4 4 4 4 b . 
    5 5 5 5 5 3 3 b 3 4 4 4 4 4 4 b 
    5 5 5 5 5 5 5 3 3 3 3 3 3 3 b . 
    5 5 5 5 5 5 5 3 3 3 3 3 3 3 b . 
    . 5 5 5 5 5 5 5 3 3 3 3 3 d b . 
    . . 5 5 5 5 5 5 5 3 3 3 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
ice_cream = sprites.create(img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(ducky)
ducky.setStayInScreen(true)
ice_cream.setPosition(113, 59)
