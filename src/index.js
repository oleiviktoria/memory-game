document.addEventListener('DOMContentLoaded', ()  => {

    const cardArray = [
        {
            name: 'fries',
            img:  'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:  'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:  'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img:  'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img:  'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img:  'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img:  'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:  'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img:  'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img:  'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img:  'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img:  'src/images/hotdog.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)  
        }
    }
    createBoard()

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        //console.log(cards[cardId])
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length ===2){
            setTimeout(checkForMatch, 500)
        }

        function checkForMatch(){
            const cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenIds[0] 
            const optionSecondId = cardsChosenIds[1] 

            console.log(cardsChosenIds[0])
            console.log(cardsChosenIds[1])

            if (optionOneId == optionSecondId) {
                alert('Ugyanazt a kártyát jelölted ki')
                cards[optionOneId].setAttribute('src', 'src/images/blank.png')
                cards[optionSecondId].setAttribute('src', 'src/images/blank.png')
            } 
            else if (cardsChosen[0] === cardsChosen[1]) {
                alert('Párt találtál')
                cards[optionOneId].setAttribute('src', 'src/images/white.png')
                cards[optionSecondId].setAttribute('src', 'src/images/white.png')

                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionSecondId].removeEventListener('click', flipCard)

                cardsWon.push(cardsChosen)
            } else
            {
                cards[optionOneId].setAttribute('src', 'src/images/blank.png')
                cards[optionSecondId].setAttribute('src', 'src/images/blank.png')
                //alert('Pórbáld újra')
            }
            cardsChosen = []
            cardsChosenIds = []
            resultDisplay.textContent = cardsWon.length

            if(cardsWon.length === cardArray.length / 2)
            {
                resultDisplay.textContent = 'Nyertél'
            }

        }
    }

})