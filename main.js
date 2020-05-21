const rollButton = document.querySelector('.rollButton')
const userRollamount = document.querySelector('.userRolls')
const total = document.querySelector('.total')
const recordButton = document.querySelector('.showAllrolls')
let allRolldisplay = document.querySelector('.leftPanels')
const restButton = document.querySelector('.restButton')
const userSides = document.querySelector('.howMany')
const diceBox = document.querySelector('.action_window')
userSides.value = 6
let dieRolls = []
let temptSave = []
let dieTotal = 0
let rollAmount = 0
let allRollAmnt = 0
let panelChange = 6


rollButton.addEventListener('click', function () {
    dieRolls = []
    diceBox.innerHTML = ''
    dieTotal = 0
    rollAmount = userRollamount.value
    console.log(rollAmount)
    let counter = 0
    while (counter < rollAmount) {
        dieRolls.push(Math.round((Math.random() * (userSides.value - 1)) + 1))
        dieTotal += dieRolls[counter]
        diceBox.innerHTML += '<img src="./assests/d6.jpg" alt="">    '
        counter++
    }
    temptSave.push(dieRolls)
    console.log(dieRolls)
    total.innerHTML = 'Total of Rolls of the ' + userSides.value + ' sided dice:' + dieTotal
})

recordButton.addEventListener('click', function () {
    let counter = 0
    let limiter = 5
    console.log(dieRolls.length)
    if (dieRolls.length > 0) {
        if (allRollAmnt < panelChange) {
            allRolldisplay.innerHTML += '<ul class=\'newSet' + allRollAmnt.toString() + ' rollPane\'>Recorded Set ' + (allRollAmnt + 1).toString() + '(Sides:' + userSides.value + ': ' + 'Rolls: ' + rollAmount + ' Total:' + dieTotal + ') </ul>'
        } else if (allRollAmnt < (panelChange * 2)) {
            allRolldisplay = document.querySelector('.rightPanels')
            allRolldisplay.innerHTML += '<ul class=\'newSet' + allRollAmnt.toString() + ' rollPane\'>Recorded Set ' + (allRollAmnt + 1).toString() + '(Sides:' + userSides.value +  + 'Rolls: ' + rollAmount + ' Total:' + dieTotal + ') </ul>'
        }
        while (counter < dieRolls.length) {
            let rollList = document.querySelector('.newSet' + allRollAmnt.toString())
            if (counter < limiter) {
                rollList.innerHTML += "<li>" + dieRolls[counter] + "</li>"
            } else if (counter === limiter) {
                rollList.innerHTML += "<li><button class=\"panelExpand\">...</button></li>"
            }
            console.log(rollList)
            counter++
        }
        allRollAmnt++
    }else {
        alert('Please Roll A Valid Set')
    }
    
    
})

restButton.addEventListener('click', function () {
    document.querySelector('.leftPanels').innerHTML = ''
    document.querySelector('.rightPanels').innerHTML = ''
    allRolldisplay = document.querySelector('.leftPanels')
    dieRolls = []
    allRollAmnt = 0
    total.innerHTML = 'Total of Rolls:--'
    userRollamount.value = ''
    userSides.value = 6
    diceBox.innerHTML = ''
})
console.log(dieRolls)