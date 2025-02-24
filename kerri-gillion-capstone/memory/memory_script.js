document.addEventListener('DOMContentLoaded', () => {
   
    const cardArray = [
        {
            name: 'chicken', img: '../images/chicken.png'},
        {
            name: 'chicken', img: '../images/chicken.png'
        },
        {
            name: 'chilli', img: '../images/chilli.png'
        },
        {
            name: 'chilli', img: '../images/chilli.png'
        },
        {
            name: 'cookies', img: '../images/cookies.png'
        },
        {
            name: 'cookies', img: '../images/cookies.png'
        },
        {
            name: 'dessert', img: '../images/dessert.png'
        },
        {
            name: 'dessert', img: '../images/dessert.png'
        },
        {
            name: 'egg', img: '../images/egg.png'
        },
        {
            name: 'egg', img: '../images/egg.png'
        },
        {
            name: 'stew', img: '../images/stew.png'
        },
        {
            name: 'stew', img: '../images/stew.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', '../images/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', '../images/blank.png')
            cards[optionTwoId].setAttribute('src', '../images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', '../images/card.png')
            cards[optionTwoId].setAttribute('src', '../images/card.png')
            alert('Sorry, try again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2)  {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard()
})