let background: Sprite = null
if (game.ask("hvis du er klar tryk på A", controller.A.isPressed())) {
    info.setScore(0)
    info.setLife(4)
    background = sprites.create(img`
        aaaaaaaa68888888888888888888888888888888888a88a68abb8888888888888888888888888888888888888888cffcccccfffcccccccccccccccccccccccccccccc888888888888888cbbbbbbbbbb
        aaaaa8888888888888888888888888888888888888888abbbba88888888888888888888888888888888888ccc8ccccccffffffffcccccccccccccccccccccccccc8888888888888888888888cabbbbb
        a8888888888888888888888888888888888888888886aabbbbba88888888888888888888888888888888cccccccccffccf8cffffffccccccccccccccccccccccc888888888888888888888888888abb
        8888888888888888888888888888888888888888866aaaabbbb888888888888888888888888888888888cccccccffffffccfffffcfcccccccccccccccccccccc8888888888888888888888888888888
        88888888888888888888888888888888888888866666aaaaaaa888888888888888888888888888888888888ccccfffffccffffffcccccccccccccccccccccccc8888888888888888888888888888888
        888888888888888888888888888888888888886666666888aa8888888888888888888888888888888888888ccccffffcccffffffccccccccccccccccccccccc88888888888888888888888888888888
        8888888888888888888888888888888888888666666aaaaa88888888888888888888888888888888888888cccccccccccfffffffccccccccccccccccccccccc88888888888888888888888888888888
        8888888888888888888888888888888888886666666aaaaaaa866888888886666888888888888888888888cccccccccccfffffffccccccccccccccccccccccc88888888888888888888888888888888
        8888888888888888888888888888888888886666666aaaaaaa88888888888668888888888888888888888cccccccccccccfffffffccccccccccccccccccccc888888888888888888888888888888888
        8888888888888668888888888888888888866688666666aaa888888888888888888888888888888888888cccccccccc8bcfffffffccccccccccccccccccc88888888888888888888888888888888888
        888888688888666666666888888888888866668666666688886888888888888888888888888888888888ccfffffffcccccfffffffcccccccccccccccccc888888888888888888888888888888888888
        8888886668866666666666866888888888888886666666aaa86888888888888888888888888888888888cffffffffffccccccccccccccccbbbbbbbacccc888888888888888888888888888888888888
        666888666666666666666666666888888888888666666688886888888666688888888888888888888888fffffffffffcccccccccccccccccccccc888888888888888888888888888888888888888888
        666666666666666666666666666688888888886666666688a888888886688888888888888888888888c88fffffffffffcccccccccccccccccccccc88888888888888888888888888888888888888888
        666666666666666666666666666666688888886666666888888688668888888888888888888888888ccccccccccccccccccccccccccccccccccccc88888888888888888888888668886888888888888
        666666666666666666666666666666688888888666666688888688666688888888888888888888888ccccccccfccccccccccccccccccccbcbbbbbb88888888888888886688886666666888888688888
        666666666666669999996666666666688888888866666688888666666666666888888888888888888cccccccccccccccccccccccccccccccccccc888888888888888866668666666666866666688888
        66666666666999999999696666666666688888888666668888866666666666666668888888888888ccccccccccccccccccccccccccccccccccc88888888888888888886666666666666666666688888
        6666666999699999999999999966666668888888886666688888866666666666666688888888888cccccccccccccccccccccccc8ccbbbcccccc88888888888888866666666666666666666666666888
        6666669999999999999999999966666668888888888669688888888666666666666668888888888ccccccccccccccccccccccc8ccccccc888cc88888888888866666666666666966666666666668888
        66699999999999999999999999966666668888888888699888888666666666666666666888888888ccccccccccccccc8cccccc888cccc8888c888888888888866666666666669999669996666666666
        666699999999999999999999999666666668888888888916888a88686666666666666666888888888888888cccbccc8ccccccccbccc8c88888888888888888666666666699999999999996666666666
        66666999999999999999999999966666666888888888886888888886666666666666666888888888ccccccccccccc8ccccc88c888cccc88888888888888886666666666699999999999996666666666
        6699999999999911919999999999666668668888888888888888888666666666666666968888888ccccccccccccc888888c88c888888888888888888868666666666999999999999999999996666666
        666999999999991111119999999666666666688888888888888888886666666666666666a88888888cc88cccca88cccc8888ccc88888888888888888666666666666699999999999999999996666666
        699999999999991111119999999666666666866888888888888888888866669996666996b88888888888ccccaaccccccc8888c888888888888888886666666666669999999999999999999999666666
        669999999999991111119999999966666666666668888888888888888866669999666968b8888888c888cc8ccaacccccccccc8888888888888888886666666666999999999111119999999999966666
        6666699999999991111199999999996666666666668888888888888888866699999669aa888888888888888cccccccccccccc8888888888888888866666666669999999999111111999999999966666
        66666999999999999199999999999966666666666666888888888888888866999996bbbb888888888cccccccccccccccccccc8888888888888888866666666999999999991111119999999999666666
        6666669999999999999999999999966666666666699668888888888888888699999699998888888ccccccccccacccccccccccc888888888888888699999999999999999991111119999999999666666
        66666666999999999999999999996666666666666699998888888888888888699968999988888888cccccccccbcccccc8cc888888888888888866999999999999999999999911199999999999966666
        66666669999999999999999999999666666666666666696888888888888888661968b99b88888888c88ccccccbcccccc8c8888888888888888669999999999999999999999999999999999999666666
        8866666699999999999999999999669966666688888888888888888888888886996699bb8a8888888888888ccbccccc8888888888888888888699999999999999999999999999999999999999966666
        8866666666999999999999999666666966688888888888888888888888888886666b999b8688888888888888cbc88888888888888888888888669999999999999999999999999999999999999966666
        6666666666699999999999666666666666668888888888888888888888888888888bbbb88688888888888888cbb88888888888888888888888866999999996999999999999999999999999999966666
        6666666666699999999966666666666666668888888888888888888888888888888bbbb88688888888888888ccba9688888888888888888888888696669696666666999999999999999999966666666
        886666666666666966696666666668888888888888888888888888888888888888abbbb88888888888888888ccbbaa88888888888888888888888866666666666666699999999999999999966666666
        888888666666666666666666666668888888888888888888888888888888888888abbba88888888888888888ccbbba88888888888888888888888886666666666666699999999999999999966666666
        888888886666666666666666888888888888888888888888888888888888888888aabb8888888888888888888cbbba88888888888888888888888888666666666666699999999999999999966666666
        888888886666666666666666888888888888888888888888888888888888888888aabb8888888888888888888cbbba88888888888888888888888888866666666666669999999999999996666666688
        888888886666666666666688888888888888888888888888888888888888888888abbb8888888888888888888cbbaac8888888888888888888888888888666666666666996999999969696666666688
        a8888888666666666686668888888888888888888888888888888888888888888aabbb88888888888888888888bbaac8888888888888888888888888888866666666666666999999966666666666888
        888aaaa6688886668888688888888888888888888888888888888888888888888aabbb8888888888888888888cbbaac8888888888888888888888888888886668666666666699999966666666666688
        88888886aaa666688888888888888888888888888888888888888888888888888aabbc888888888888888888ccbbaaac888888888888888888888888888888666666666666669669666666666666688
        88888888888866aaa888888888888888888888888888888888888888888888888cabbc888888888888888888cccbaaac888888888888888888888888888888866666666666666666666666666666666
        9aaaa88888888888888aaa888888888888888888888888888888888888888888cccbb8888888888888888888cccbaacc888888888888888888888888888888886666666666666666666666669996666
        aab9999aaaa888888888888888aaa88888888888888888888888888888888888cccbb88888888888888888888ccbaccc888888888888888888888888888888886666666666666666996666666688888
        888aabaa99999aaa8888888888888888aaa888888888888888888888888888888ccbb888888888888888888ccccbaccc888888888888888888888888888888888866666666699966666886666688888
        888888888aabb9a9999aaa888888888888888888888888888888888888888888888bc8888888888888888888888bcccc8888888888888888888888888888888aaa66666666666666666888666aa9a99
        a88888888888888aabbaaa999aaaa88888888888888888888888888888888888888cc8888888888888888888888bcccc888888888888888888888888aaaa888888888688866666666999999999999b9
        a8888888a8888888888888aabaaab99aaaaaaa88888888888888888888888888acca88888888888888888888888ccccc88c8888888cccc88888888888888888888888688aa99999999999999aaa6888
        88888888888888888888888888888aaaaaab9baaa9baa8888888888888888888cc8888888888888888888888888cccca88c8888888888888888888888888888aaaaa9b9999999999999688888888888
        88888aa88a888aaa888a88888888888888888888aaaaaa999aaa99aa8aaa8888cccc888888888686688888888888ccaa88c88888888888888888aaaaaaa99b9bbb99baaab6666668866888888888888
        88888aa88aa88888888888888888888888888888888888888888aaaaaa9ba88aaaac888888886666688688888888ccbb88caaaaaaaaaaaab9baaaa99aaabbaaa8888888888888888886888888888888
        88888a8aaaaa8aaaaaa88888888888888888888888888888888888888888888babac88888886666996668888888ccbbb88caaaaaaaa88888888888888888888888888888aa86666a88668aa888888a8
        a888888aa8a8888a8aa88888a88888ccc8888c8888888888888888888888888cbbbc888888666bbbbbb68888888ccbbbc8888c88888888888888888888888888888888aaaaa66a8888668a888888888
        88888888888888a88ac888888c888cbbac888cc888888888ccc888888888888cbbbc8888866ababbbbbcb688888cbbbbc8cccccc88888c8888888888888888888888888aaaaa68888888888888888aa
        88888cc8888aa8888888888888888caccccc8cc888888888cccc88888cc8c88cbbbb8888868abbbbbbbcc688888cbbbbccccccccccccc8c88cccc88888888a888888888aaaaa8888888a888888a88aa
        88888888888a8aa8888c888888888888c8cccc888cc8c88cccc8ccccccc8c88cbbbb888888cbbbbbbbbbcc68888bbbbbccccccccccccc8888cccc88a88c8aa888888888aaaaa8888888a888aa888888
        888888a8888888888888c8888c88c88888ccccccccccccccccccccccccccccccbbbb888888cbbbbbbbbbbc88888bbbbccccccccccccccccccccccc88888888888888888aaaa8888aaaa88888a888888
        8bbbcc8888888888888cc8888ccccc88ccc8cccccccccc8cccccccccccccccccbbbb88888cccbdbbbbbbbcc888cbbbbccccccccccccccccccccccc88888cc8888888888aaa8aaa888888aa888888888
        8ccbcc8888888888888ccc8888cccc88c8c8cccccccccc88ccccccccccccccccbbbbc8888ccbbbddbbbbbcc888cbbbbccccccccccccccccccccccccc8888888888888888a8aaa88888888888a888888
        8cbccc8c88888888888ccc88ccccc8ccc8ccccccccccccccccccccccccccccccbbbbc8ccccccbbddddbbbcc888cbbbbcccccccccccccc8cc8ccccccc888c88c8888ccc8888a8888888888aa8c88888a
        8cc8c88c88888888888cc888bbbcc888ccccccccccccccccccccccccccccccccbbbbc8cccbbcbdddddbbbccc88bbbbbccccccccccccccccc888ccc88888c88888c888c8888a88888aa88888a8888888
        8cccc88ccccc8888888cc888bbcbcc8cccccccccccccccccccccccccccccccccbbbbcccc88cbcccbbbb88ccc88bbbbbccccccccccccccccccccccccccccc8888888c888888888888888888aacccc888
        8888cc8cccccc8ccccccc88ccccbcc8cccccccccccccccccccccccccccccccccbbbbccc8c8ccbabbcc8cccc888bbbbbcccccccccccccccccccccccc888cc8888888888888a8aaa88888888a88888888
        886acccccc888ccccbccbb8888ccccccccccccccccccccccccccddddccbbccccbbbbbc88c8ccbabbcbccccc888bbbbccccccccccccccccccccccccc8888c88c88ccccc88aacaaa88888888a8c888888
        88acccccc888866abbbccc888aaaa88cccccccccccccccccccccddddccddcccbbbbbb8888ccccc6abccccccc8cbbbcccccdcccddddbcccccccccc888888c88c88c88cc888aaa8a88888888aac888888
        8888cccc88cccaaacbbbc88888866bcc8cc8abbaaceeccccccccdddbccccccccbbbbb88c8cc8c86bccc8cccc8cbbbbcccb1ccb1111dccccccccbbccccccbcccccccccaaaaaa888aaaaaaaaaaa8c888c
        888ccccc8888888aaccc88888aa88accc8ccaa6888ccccccabaabddcccccccccccbbdc8c88ccccb9bcc8888c8bbbbbcccbbcccdddbbbbbabbccbbbcaacccccccbccaa888cc8888aaa8888abbbbb888b
        c88cc8cccccb88888ccc8888888888c88888cba88ccccccccc8cbddbccccccccccbbbccc888cccb6ccc888888bbcccccccccccddddb99b88cccbbbb668888ccccc66b88888888886688888abbbbc888
        cc8ccccccccc888888ccccc88c88888888cbbc88cccccccccc8cdd1dd1ddcccbbbbbbcccc88888668888888ccbbcccccccccccddbbbbbac888ccbbaaa8888ccccc8aa8888888888aa888888bbac8888
        ccccc888888888c88cbbcbbbbcc888888ccbbcc8ccccccbbbcc8bbbbbbbbbbccbbbbbcccc888c8698888888ccbbbbbcccbbbdd1111bbbba888888aaac888888cc8a88888888888aaa88888aaabba888
        c88cc888888888888ccccccccc8888ccccccbbcccccccbbbbcccd1111111bddcbbbbbcccccc8888b8888888ccbbbbbccbbddddddddbbbbc888cc8888888cccccc88888888cc888888888888a88cb888
        cccccc88ccbc888888cc8ccc8888888ccccccbccccccccccccccccbbbbbbbbbcbbbbbcccccc8c88c8888888ccbbbbbbbd11111dd1dbbbbcccccc8888888c8888cccc8c8ccc88888888888888888b888
        ccccccccbbbc888888888c88cccc888cccccbcccccccccbbccccbdddddddbbbcbbbbbccccccccccccc8888cccbbbbbcbbbbbbbbbbbbbbccccc8888888888888888cc8cccccc88888888888888888888
        ccccccccbbbc888888cc8ccccccc888cccccbcccccccccbbcbccb111111dbddcbbbbbcccccccccccc8888ccccbbbbbcdd1111111dbcbbbcccc88888c888cc888888c888888888888888888888888888
        cccccccccbcc888888cccccccccc888cccccbcccccccccbbcbcccbbbbbbbcbbbbbbbbccccccccffcc88888cccbbbbbcbbdddd111ddcbbbccc8888888cc8ccc888888888888888888888888888888888
        ccccccccccc8c88888cccccccccc8ccccccccccccccccccbccccbd11dbccccccbbbbbccccccccffccccc888ccbbbbbbbbbbbbbbbbbcbbbccc88888c88c8ccc888888cc88888888888888bc888888888
        ccccccccccccc888cccccccccccccccccccccccccccccccccccccbbbbbbccbbbcbbbbccccccccffccccccccccbbbbbddbddd1111dbcbbbccccccc8c8ccccc88888888888888888888888cb888888888
        ccccccccccccccccccccccccc8888888886aaaaaa886666aa666bbbbbbbbbbbbaabbbacc8888cffccccccaa88bbbcccccccccbbbbcccccccccccccccccc8888888888888888888888888cc888888888
        ccccccccc8886666668888bb66666888888aba888888cbbbbbbabdddd11db11dbbbbbaa88ccccccccc88aaaaabbbbbbbcbbbbbbbbbbbbc8888ccccccccccccccccc8888888888888888888888888888
        cc86b6999ba86688888886bcccc88888ccccbcccccccccbbbbccbdddbcccccbabbbbbcccccccfffccccccaacabbbbbddbdd1dddddbbddb666aa66b6666a8888ccccccc8888888888888888888888888
        aaaaaaaabbc8888888ccccccccccccccccccccbccccccbbbcccabdbcccccccccccbbbccccffffffcccccc866bbbbbccccbbbdd1ddbbbbbccccc88888aaa8aa86666666aa88888888888888888888888
        8888cccbbbccccccccccccccccccccccccccbbbccccccbbbbbcbbbbbccbcccccccccccccccccfffcccccccccaacccccccccccdddbbabbbc88ccc88cccccccc888888aaaa66669966a888ccccc8888cc
        8888888ccbcccccccccccccccccccccccccccccccccccccccccbdddddbbbcccccccccccccccccccccccccccccccccccccbbccbdddbbbbbcccc8888cccccccc88888888888a888a666b666aa888888cc
        8888888cccc8cccccccccccccccc88ccccbbccccccccccbbaaabddddd1111d9bbbbbbcccccccccccccccccccccccccccbbbbb9bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbaacc8aa88a8aaaa86bbb99ba88c
        8888888888888ccccbbcccccccc888888cbbc8888cccccbcaaabddddd1111199999999999999999b9bbb66b99d999d99911111ddddbbbccccccccccccccccccccbbbbbbbbbbaababbbbbbbbbbbbbbbb
        888888866688888a88a88888cc8888888cbbc8888cc8888ca68bbdbbdddd1dbbbbbb9b966999999999999966b99bbbbabddd1111ddbbbbc8ccccccccc88888888aaaaacaa999aaab99a8aaaaaaaaaaa
        8888866b9b6888aa6aaa888888888888888aa666acc8888b966bbdd11dbcbacbbbbbb8686666666666a6a6688bbbaaa88bbbddddddbbbc8888888a88a88aa6a8aa6bbbaaa6999aa869999aa88886666
        88866666bb6666669966688888888888888aaaaacac8888ab66bbbdddbdba6aabbbbb6666666866666a6aa888bbbbbaabdddd111ddbb66a88aaa6666688a8aaa888699baaaaaaaa999999aa88666666
        fcccc8888886699999966666aaa88aa6666aaaaaaaa8888aaaabbbbbbbbaaaabbbbbb6666996896699b666666bbbbbaaabdddddddd9999b6888a6666666aaaaaa88666aa8aaa699999999aab99999aa
        fffffff888888aabbb666866aa6a8aa66669baaaaaa8888c888aaaaaaaa888aabbbb666669986999999666666bbbbbaaaab3ddddddbba666888bb999b6aa88a8aa866666686669996666666b99999aa
        fff8888888888888cc88888666668aa88886aaaaaac888888888aaaaaaa6666b99bb666666a88666bbb666666bbbbba66aaaaabbbba666666aaabaaaa666666aaa66999666999999666666669b66688
        ff8888888888888cfffffc8888886aa66a66aaa8888a88a8888aaaaaaa6666699999666699689999999666666999996666aaaaaacaa6669666aaaa88666666669999966666999999996688888888888
        8888ffcfcccfffffffffff88888888888ccccc88888a8866666aaaaaaa6666999999666999ab9999999999666999bb6688aaa8aaaa88666666aaaa866666666999999999966888888888ccccccccc88
        888ffffffffffffffffffffffffffffffffffffffffffcc888888aaa6666999999996699998b99999999996669999b666686aaaa8a8888a88aa6668888888888888888888888cccccccccccccccccc8
        ffffffffff8888888888888ffffffffffffffffffffffffffffffffffccccccccccc888868ccbbbbbb666666699baa6888888888888888cc8cc8888ccccc88888888ccccccccccccccccccccccc8ccc
        ffffffff8888888888888888ffffffffffffffffffffffffffffffffffffffff8888888888888fffffffffffffffffffffffc88888888888888888888ff8888888888ccccccccccc8ccccccccc88888
        ffffffffff8888888888888ffffffffffffffffffffffffffffffffffffff888888888888888ffffffffffffffffffffffffff88ccffc8888888888888fffcc8888cccccccccc8888888888cccc8888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888fffffffffffffffffffffffffffffffffff8888888888888fffffffffffffffccccc88888888888888cccc
        fffffffffffffffffffffffffffff888888888888ffffffffffffffffffffffffffffffffffffffffff88888ffffffffffffffffffffff8888888fffffffffffffffffffffffcccc888888888888cff
        fffffffffffffffffffffffffff8888888888888888ffffffffffffffffffffffffffffffffffff8888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffcc8888ccff
        f88888888888ffffffffffffff888888888888888888fffffffffffffffffffffffffffffff88888888888888888888ffffffffffffffffffffffff8fffffffffffff88888888fffffffffffcc888ff
        88888888888888fffffffffffff88888888888888888fffffffffffffffffffffffffffff8888888888888888fff88888ffffffffffffffff88888888888fffffff888888888888ffffffff88888888
        8888888888888888ffffffffffff8888888888888888fffffffffffffffffffffffffff8888888888888888ffffffffffffffffffffffff88888888888888fffff88888888888888fffffff88888888
        `, SpriteKind.Player)
}
story.printCharacterText("Hvor mange mennesker har ikke adgang til rent drikkevand?")
let list = [
"3 mia",
"1000",
"1 mil",
"500.000"
]
let myRandom = [
0,
1,
2,
3
]
game.splash("Svar mulighed 1: " + list[0])
game.splash("Svar mulighed 2: " + list[1])
game.splash("Svar mulighed 3: " + list[2])
game.splash("Svar mulighed 4: " + list[3])
if (info.life() > 1) {
    if (game.ask("vil du bruge en livline?")) {
        story.showPlayerChoices("ja", "nej")
        if (story.getLastAnswer() == "ja") {
            info.changeLifeBy(-1)
            story.showPlayerChoices(list[myRandom.removeAt(randint(1, 3))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "3 mia") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        } else {
            story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "3 mia") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        }
    }
} else {
    story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
    if (story.getLastAnswer() == "3 mia") {
        game.splash("ja, korrekt")
        info.changeScoreBy(5000)
    } else {
        game.splash("nej, ikke korrekt")
        game.over(false)
    }
}
game.splash(info.score())
story.printCharacterText("Hvor i verden er der størst mangel på drikkevand")
list = [
"Mellemøsten og Afrika",
"Europa",
"Nordamerika",
"Australien"
]
myRandom = [
0,
1,
2,
3
]
game.splash("Svar mulighed 1: " + list[0])
game.splash("Svar mulighed 2: " + list[1])
game.splash("Svar mulighed 3: " + list[2])
game.splash("Svar mulighed 4: " + list[3])
if (info.life() > 1) {
    if (game.ask("vil du bruge en livline?")) {
        story.showPlayerChoices("ja", "nej")
        if (story.getLastAnswer() == "ja") {
            info.changeLifeBy(-1)
            story.showPlayerChoices(list[myRandom.removeAt(randint(1, 3))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "Mellemøsten og Afrika") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        } else {
            story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "Mellemøsten og Afrika") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        }
    }
} else {
    story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
    if (story.getLastAnswer() == "Mellemøsten og Afrika") {
        game.splash("ja, korrekt")
        info.changeScoreBy(5000)
    } else {
        game.splash("nej, ikke korrekt")
        game.over(false)
    }
}
game.splash(info.score())
story.printCharacterText("Hvornår skal de forskellige verdensmål være nået")
list = [
"2030",
"2025",
"2035",
"2040"
]
myRandom = [
0,
1,
2,
3
]
game.splash("Svar mulighed 1: " + list[0])
game.splash("Svar mulighed 2: " + list[1])
game.splash("Svar mulighed 3: " + list[2])
game.splash("Svar mulighed 4: " + list[3])
if (info.life() > 1) {
    if (game.ask("vil du bruge en livline?")) {
        story.showPlayerChoices("ja", "nej")
        if (story.getLastAnswer() == "ja") {
            info.changeLifeBy(-1)
            story.showPlayerChoices(list[myRandom.removeAt(randint(1, 3))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "2030") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        } else {
            story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "2030") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        }
    }
} else {
    story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
    if (story.getLastAnswer() == "2030") {
        game.splash("ja, korrekt")
        info.changeScoreBy(5000)
    } else {
        game.splash("nej, ikke korrekt")
        game.over(false)
    }
}
game.splash(info.score())
story.printCharacterText("I forhold til verdensmål nr. 6, hvad skal der effektiviseres")
list = [
"Alle former for vandforbrug",
"Undervisning på VIA",
"Jespers shortgame i golf",
"Priser på fadøl på de aarhusianske barer"
]
myRandom = [
0,
1,
2,
3
]
game.splash("Svar mulighed 1: " + list[0])
game.splash("Svar mulighed 2: " + list[1])
game.splash("Svar mulighed 3: " + list[2])
game.splash("Svar mulighed 4: " + list[3])
game.splash(info.score())
if (info.life() > 1) {
    if (game.ask("vil du bruge en livline?")) {
        story.showPlayerChoices("ja", "nej")
        if (story.getLastAnswer() == "ja") {
            info.changeLifeBy(-1)
            story.showPlayerChoices(list[myRandom.removeAt(randint(1, 3))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "Alle former for vandforbrug") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        } else {
            story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
            if (story.getLastAnswer() == "Alle former for vandforbrug") {
                game.splash("ja, korrekt")
                info.changeScoreBy(5000)
            } else {
                game.splash("nej, ikke korrekt")
                game.over(false)
            }
        }
    }
} else {
    story.showPlayerChoices(list[myRandom.removeAt(randint(0, 3))], list[myRandom.removeAt(randint(0, 2))], list[myRandom.removeAt(randint(0, 1))], list[myRandom.removeAt(randint(0, 0))])
    if (story.getLastAnswer() == "Alle former for vandforbrug") {
        game.splash("ja, korrekt")
        info.changeScoreBy(5000)
    } else {
        game.splash("nej, ikke korrekt")
        game.over(false)
    }
}
