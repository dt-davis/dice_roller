const rollButton = document.querySelector('.rollButton')
const userRollamount = document.querySelector('.userRolls')
const total = document.querySelector('.total')
const allRollbutton = document.querySelector('.showAllrolls')
let allRolldisplay = document.querySelector('.leftPanels')
const restButton = document.querySelector('.restButton')
const userSides = document.querySelector('.howMany')
userSides.value = 6
let dieRolls = []
let dieTotal = 0
let rollAmount = 0
let allRollAmnt = 0
let panelChange = 6


rollButton.addEventListener('click', function () {
    dieRolls = []
    dieTotal = 0
    rollAmount = userRollamount.value
    console.log(rollAmount)
    let counter = 0
    while (counter < rollAmount) {
        dieRolls.push(Math.round((Math.random() * (userSides.value - 1)) + 1))
        dieTotal += dieRolls[counter]
        counter++
    }

    console.log(dieRolls)
    total.innerHTML = 'Total of Rolls of the ' + userSides.value + ' sided dice:' + dieTotal
})

allRollbutton.addEventListener('click', function () {
    let counter = 0
    let limiter = 5
    console.log(dieRolls.length)
    if (allRollAmnt < panelChange) {
        allRolldisplay.innerHTML += '<ul class=\'newSet' + allRollAmnt.toString() + '\'>Recorded Set ' + (allRollAmnt + 1).toString() + '(sides:' + userSides.value + '): </ul>'
    } else if (allRollAmnt < (panelChange * 2)) {
        allRolldisplay = document.querySelector('.rightPanels')
        allRolldisplay.innerHTML += '<ul class=\'newSet' + allRollAmnt.toString() + '\'>Recorded Set ' + (allRollAmnt + 1).toString() + '(sides:' + userSides.value + '): </ul>'
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
    console.log(allRolldisplay)
})

restButton.addEventListener('click', function () {
    allRolldisplay.innerHTML = ''
    dieRolls = []
    allRollAmnt = 0
    total.innerHTML = 'Total of Rolls:--'
    userRollamount.value = ''
    userSides.value = 6
})
console.log(dieRolls)