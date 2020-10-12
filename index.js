 let div = document.createElement('div')
document.body.appendChild(div)
div.setAttribute('id', 'bet-size')
let bet = document.querySelector('#bet-size')


let element = document.createElement('input')
document.body.appendChild(element)
element.setAttribute('type', 'button')
element.id = 'increase'
let increase = document.querySelector('#increase')
element.value = 'Increase btn'

let secElement = document.createElement('input')
document.body.appendChild(secElement)
secElement.setAttribute('type', 'button')
secElement.id = 'decrease'
let decrease = document.querySelector('#decrease')
secElement.value = 'Decrease btn'

bet.textContent = 1
 

increase.addEventListener('click', updateIncrease)

function updateIncrease() {
   
    bet.textContent = Number(bet.textContent) + 1
   
    decrease.removeAttribute('disabled')
   
}
 

decrease.addEventListener('click', updateDecrease)

function controlKeys() {
    document.body.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                console.log('up')
                updateIncrease()
                break
            case 'ArrowDown':
                if (Number(bet.textContent) === 1) {
                       break
        }
                console.log('down')
                updateDecrease()
                break
         
        }
        
   
    })
}
controlKeys()


function updateDecrease() {
   
    bet.textContent = Number(bet.textContent) - 1 
     if (Number(bet.textContent) === 1) {
         decrease.setAttribute('disabled', 'disabled')
} 
    }
   



 











