const rollButton = document.querySelector('.roll!Button')
const userRollamount = document.querySelector('.userRolls')
const total = document.querySelector('.total')
const allRollbutton = document.querySelector('.showAllrolls')
const allRolldisplay = document.querySelector('.allRolls')
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
    total.innerHTML = dieTotal
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

console.log(dieRolls)