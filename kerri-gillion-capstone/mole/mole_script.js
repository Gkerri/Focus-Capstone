document.getElementById('startButton').addEventListener('click', playGame);

function playGame() {
    const square = document.querySelectorAll('.square')
    const mole = document.querySelectorAll('.mole')
    // if I call the const mole in any of the functions below, the game does not work, but I don't want to take it out either.
    const timeLeft = document.querySelector('#time-left')

    let score = document.querySelector('#score')
    let result = 0
    let currentTime = parseInt(timeLeft.textContent)
    let runningFunctions = []

    function registerFunction(timerId) {
        runningFunctions.push(timerId)
    }

    function endAllFunctions() {
        runningFunctions.forEach(timerId => clearInterval(timerId))
        runningFunctions = []
        alert(`GAME OVER! Your final score is: ${result}`)
    }

    function randomSquare() {
        square.forEach(className => {
            className.classList.remove('mole')
        })
        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
        hitPosition = randomPosition.id
    }

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === hitPosition) {
                result += 1
                score.textContent = result
            }
        })
    })

    function moveMole() {
        let moleTimerId = setInterval(randomSquare, 1000)
        registerFunction(moleTimerId)
    }

    function countDown() {
        currentTime--
        timeLeft.textContent = currentTime
        if (currentTime === 0) {
            endAllFunctions()
        }
    }

    moveMole()
    let countdownTimerId = setInterval(countDown, 1000)
    registerFunction(countdownTimerId)
}
