const section = document.querySelector('section')
const playerLive = document.querySelector('.countNumber')
let playerLiveCount = 6
playerLive.textContent = playerLiveCount

const getData  = () => [{
    id: 1,
    src: './asset/img/Beard.png',
    name: 'beard'
},{
    id: 2,
    src: './asset/img/Gengar.png',
    name: 'gengar'
},{
    id: 3,
    src: './asset/img/Rhon.png',
    name: 'rhon'
},{
    id: 4,
    src: './asset/img/Seadog.png',
    name: 'seadog'
},{
    id: 5,
    src: './asset/img/flygon.png',
    name: 'flygon'
},{
    id: 6,
    src: './asset/img/excarill.png',
    name: 'excarill'
},{
    id: 7,
    src: './asset/img/mimikyu.png',
    name: 'mimikyu'
},{
    id: 8,
    src: './asset/img/ralt.png',
    name: 'ralt'
},{
    id: 9,
    src: './asset/img/Beard.png',
    name: 'beard'
},{
    id: 10,
    src: './asset/img/Gengar.png',
    name: 'gengar'
},{
    id: 11,
    src: './asset/img/Rhon.png',
    name: 'rhon'
},{
    id: 12,
    src: './asset/img/Seadog.png',
    name: 'seadog'
},{
    id: 13,
    src: './asset/img/flygon.png',
    name: 'flygon'
},{
    id: 14,
    src: './asset/img/excarill.png',
    name: 'excarill'
},{
    id: 15,
    src: './asset/img/mimikyu.png',
    name: 'mimikyu'
},{
    id: 16,
    src: './asset/img/ralt.png',
    name: 'ralt'
}]


// random list data 
const randomize = () => {
    const dataCart = getData()
    dataCart.sort(() => Math.random() - 0.5)
    return dataCart
}

//generate card from random list and add to html
const generateCard = () =>  {
    const dataCart = randomize()
    let listToggled = []

    //generate card
    dataCart.forEach((item) => {
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')
    
        card.classList.add('card')
        face.classList.add('face')
        back.classList.add('back')

        //add card to ui
        section.appendChild(card)
        
        //add face and back to card
        card.appendChild(face)
        card.appendChild(back)
        
        //add name to card
        card.setAttribute('name', item.name)

        //add img to face
        face.src = item.src

        //toggle card 
        card.addEventListener('click', (e) => {
            const toggledCard = e.target

            toggledCard.classList.add('toggled')
            toggledCard.classList.add('flipped')

            listToggled.push(toggledCard)

            if(listToggled.length == 2) {
                check(listToggled)
                listToggled = []
            }
        })
    })
}

const check  = (listToggled) => {
    if(listToggled.length == 2) {
        if(listToggled[0].getAttribute('name') == listToggled[1].getAttribute('name')) {
            console.log('matching')
        } else {
            section.style.pointerEvents = 'none';
            setTimeout(() => {

                listToggled[0].classList.remove('toggled')
                listToggled[1].classList.remove('toggled')
                listToggled[0].classList.remove('flipped')
                listToggled[1].classList.remove('flipped')

                section.style.pointerEvents = '';
            }, 1000)
        }
    }
}

const restart = () => {
    const cards = document.querySelectorAll('.card')
    const fades = document.querySelectorAll('.fade')
    
    cards.forEach((card) => {
        card.classList.remove('toggled')
        card.classList.remove('flipped')
    })

    generateCard()
}

generateCard()




