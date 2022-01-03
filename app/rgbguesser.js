// VARIABLES 
let rbgValueString
let scoreDisplay
let score
let total
let choices
let rbgarray
let secret


// INITIALIZE 
const init = () => {
    rbgValueString  = document.getElementById('rbgvalue-string')
    scoreDisplay    = document.getElementById('score')
    score           = 0
    total           = 0
    choices         = [
        document.getElementById('choice-1'),
        document.getElementById('choice-2'),
        document.getElementById('choice-3'),
        document.getElementById('choice-4'),
        document.getElementById('choice-5'),
        document.getElementById('choice-6'),
        document.getElementById('choice-7'),
        document.getElementById('choice-8'),
        document.getElementById('choice-9')
    ] 

    resetGame()
}
window.onload = init


// FUNCTIONS
window.resetGame = () => {
    scoreDisplay.textContent = `${score} / ${total}`

    rbgarray = [generateRandomNumber(255), generateRandomNumber(255), generateRandomNumber(255)]

    rbgValueString.textContent = `RGB(${rbgarray[0]}, ${rbgarray[1]}, ${rbgarray[2]})`

    // Select a random number from 0 to 9 and apply the saved color
    secret = generateRandomNumber(9)
    choices[secret].style.backgroundColor = `RGB(${rbgarray[0]}, ${rbgarray[1]}, ${rbgarray[2]})`

    // Full up the rest of them
    for (let i = 1; i < 10; i++){
        if (i !== secret){
            choices[i-1].style.backgroundColor = `RGB(${generateRandomNumber(255)}, ${generateRandomNumber(255)}, ${generateRandomNumber(255)})`
        }
    }
}

window.guess = (num) => {
    total += 1
    if (num == secret) {
        score += 1
    }
    resetGame()
}

window.resetScore = () => {
    score           = 0
    total           = 0
    resetGame()
}

const generateRandomNumber = max =>  Math.floor(Math.random() * max + 0)