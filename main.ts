DFRobotMaqueenPlus.I2CInit()
let angulo_giro = 0
basic.forever(function () {
    for (let index = 0; index < 180; index++) {
        DFRobotMaqueenPlus.servoRun(Servos.S1, angulo_giro + 1)
        makerbit.showStringOnLcd1602("" + (angulo_giro + 1), makerbit.position1602(LcdPosition1602.Pos1), 16)
        basic.pause(1000)
        DFRobotMaqueenPlus.servoRun(Servos.S1, 0)
        makerbit.showStringOnLcd1602("0", makerbit.position1602(LcdPosition1602.Pos1), 16)
        basic.pause(1000)
        angulo_giro = angulo_giro + 1
    }
})
