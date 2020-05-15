const rollButton = document.querySelector('.rollButton')
const userRollamount = document.querySelector('.userRolls')
const total = document.querySelector('.total')
let dieRolls = []
let dieTotal = 0
let rollAmount = 0


rollButton.addEventListener('click' , function(){
    dieRolls = []
    dieTotal = 0
    rollAmount = userRollamount.value
    console.log(rollAmount)
    let counter = 0
    while (counter < rollAmount){
        dieRolls[counter] = Math.round((Math.random() * 5) + 1)
        dieTotal += dieRolls[counter]
        counter ++
    }
    
    console.log(dieRolls)
    total.innerHTML = dieTotal
})

console.log(dieRolls)