// afficher la valeur de la carte + changer de couleur

const clickCarte = (carte) => {
    console.log( carte.dataset.valeur )
}

const tireNbrRandom = (max) => {
    let nbr = Math.floor(Math.random() * max)
    return nbr
}

const creEtMelangeCarte = (nbr) => {
    // génère les paires 
    let cards = []
    for (let i=1; i<=nbr/2; i=i+1) {
        for (let j=0; j<2; j=j+1) {

            // Génère une carte avec 1 carte avec une valeur i
            let newCard = document.createElement('div')
            newCard.classList.add('card')
            newCard.attributes['data-valeur'] = i
            newCard.dataset.valeur = i;
            cards.push(newCard)
            newCard.addEventListener('click', (event)=>{
                clickCarte(event.target)
            } )
        }
    }

    // mélange le tableau cards
    for (let i=0; i<1000; i++) {   // (let i=1000; i>0; i--)
        let indice1 = tireNbrRandom(nbr)
        let indice2 = tireNbrRandom(nbr)
        let intermed = cards[indice1]
        cards[indice1] = cards[indice2]
        cards[indice2] = intermed
    }

    // Ajouter toutes les cartes du tab ds .cards
    for (let i=0; i<cards.length; i++) {
        document.querySelector(".cards").appendChild( cards[i] )
    }
}

let nbrChoisi = prompt('Choisi un nombre de carte :')

creEtMelangeCarte(nbrChoisi)
 