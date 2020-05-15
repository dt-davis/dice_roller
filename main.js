const rollButton = document.querySelector('.rollButton')
const userRollamount = document.querySelector('.userRolls')
const total = document.querySelector('.total')
const allRollbutton = document.querySelector('.showAllrolls')
const allRolldisplay = document.querySelector('.allRolls')
const restButton = document.querySelector('.restButton')
let dieRolls = []
let dieTotal = 0
let rollAmount = 0
let allRollAmnt = 0


rollButton.addEventListener('click' , function(){
    dieRolls = []
    dieTotal = 0
    rollAmount = userRollamount.value
    console.log(rollAmount)
    let counter = 0
    while (counter < rollAmount){
        dieRolls.push(Math.round((Math.random() * 5) + 1))
        dieTotal += dieRolls[counter]
        counter ++
    }
    
    console.log(dieRolls)
    total.innerHTML = 'Total of Rolls:' + dieTotal
})

allRollbutton.addEventListener('click' , function(){
    let counter = 0
    console.log(dieRolls.length)
    allRolldisplay.innerHTML += '<ul class=\'newSet' + allRollAmnt.toString() + '\'>Recorded Set:' + (allRollAmnt + 1).toString() + '</ul>'
    while ( counter < dieRolls.length){
        let rollList = document.querySelector('.newSet' + allRollAmnt.toString())
        rollList.innerHTML += "<li>" + dieRolls[counter] + "</li>"
        console.log(rollList)
        counter ++
    }
    allRollAmnt++
    console.log(allRolldisplay)
})

restButton.addEventListener('click' , function(){
    allRolldisplay.innerHTML = ''
    dieRolls = []
    allRollAmnt = 0
    total.innerHTML = 'Total of Rolls:--'
    userRollamount.value = ''
})
console.log(dieRolls)