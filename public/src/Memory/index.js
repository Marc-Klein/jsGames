document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [

        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },

        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }

    ]

    //rndm func for mixing up the cards
    cardArray.sort(()=> 0.5 - Math.random());


    const grid = document.querySelector( '.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // get game table

    const createBoard = ()=> {

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');//create el img
            card.setAttribute('src', 'images/blank.png');// set attribute to blank
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)//calls flipcard
            grid.appendChild(card);
        }
    }

    //check for matches
    const checkForMatch = ()=> {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //check if the same picture is pickend
        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!')
        }


        //check Array cardsChosen at[0] and [1] if true set attribute
        //remove eeventlisteners
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);// set match cards in array cards won
        }

        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Try again!')

        }
        cardsChosen =[];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;

        //check length of cardsWon with cardArray if true give win msg back
        //card.Array is her devided by two because card won contains only one element
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Gz, you won!'
        }
    }


    //flip card
    const flipCard = ()=> {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
        setTimeout(checkForMatch,500) }
    }


createBoard();

});