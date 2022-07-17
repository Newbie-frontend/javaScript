// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

//Solar System
// Day 24

const body = document.querySelector('body')
body.style.margin = '0'
body.style.padding = '0'
body.style.boxSizing = 'border-box'
body.style.backgroundImage = 'url(./images/galaxy.gif)'

const H1 = document.querySelector('h1')
H1.style.textAlign = 'center'
H1.style.fontFamily = 'Arial, Helvetica, sans-serif'
H1.style.fontSize = '3.5vw'
H1.style.color = 'white'
H1.style.textShadow = '2px 2px 2px white'
H1.style.marginBottom = '10vh'

const three = document.querySelector('#three')
three.style.display = 'flex'
three.style.width = '50%'
three.style.margin = '0 auto'
three.style.justifyContent = 'center'
three.style.alignItems = 'center'

const button = document.querySelector('button')
button.style.display = 'flex'
button.style.justifyContent = 'center'
button.style.alignItems = 'center'
button.style.backgroundColor = 'white'
button.style.height = '6vh'
button.style.border = 'none'
button.style.borderRadius = '3px'
button.style.padding = '10px'
button.style.fontSize = '1.2vw'
button.style.fontFamily = 'Arial, Helvetica, sans-serif'

const select = document.querySelector('select')
select.style.backgroundColor = 'white'
select.style.height = '6vh'
select.style.border = 'none'
select.style.borderRadius = '3px'
select.style.fontSize = '1.2vw'
select.style.fontFamily = 'Arial, Helvetica, sans-serif'
select.style.outline = 'none'
select.style.margin = '0 5px'
select.style.padding = '0 10px'

const input = document.querySelector('input')
input.style.backgroundColor = 'white'
input.style.height = '5.8vh'
input.style.border = 'none'
input.style.borderRadius = '3px'
input.style.fontSize = '1.2vw'
input.style.fontFamily = 'Arial, Helvetica, sans-serif'
input.style.outline = 'none'
input.style.paddingLeft = '10px'


//main
const container = document.querySelector('.flex-container')
container.style.display = 'flex'
container.style.width = '70%'
container.style.margin = '20px auto 0'
container.style.justifyContent = 'space-around'
container.style.alignItems = 'center'
container.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
container.style.borderRadius = '3px'


const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon']
const planetImages = ['./images/mercury.png', './images/venus.png', './images/earth.png', './images/mars.png', './images/jupiter.png', './images/saturn.png', './images/uranus.png', './images/neptune.png', './images/pluto.png', './images/moon.png']
const gravity = [0.38, 0.91, 1, 0.38, 2.64, 0.93, 1.12, 1.43, 0.06, 0.16]

const imageClass = document.querySelector('.image')
imageClass.style.display = 'flex'

const planet = document.querySelector('.planet-image')
planet.style.width = '25vw'
planet.style.height = '25vw'
planet.style.margin = '40px 0'

const description = document.querySelector('.description')
description.style.display = 'none'
description.style.justifyContent = 'center'
description.style.alignItems = 'center'
description.style.flexDirection = 'column'
description.style.width = '38vw'
description.style.height = '30vh'
description.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
description.style.borderRadius = '3px'
description.style.color = 'white'
description.style.fontSize = '20px'

const text = document.createElement('div')
text.style.width = '30vw'
text.style.height = '10vh'
text.style.textAlign = 'center'
text.style.display = 'flex'
text.style.justifyContent = 'center'
text.style.alignItems = 'center'
text.style.fontSize = '1.7vw'
text.style.letterSpacing = '0.1vw'
description.appendChild(text)
const weight = document.createElement('div')
weight.style.display = 'flex'
weight.style.justifyContent = 'center'
weight.style.alignItems = 'center'
weight.style.width = '7vw'
weight.style.height = '7vw'
weight.style.fontSize = '1.7vw'
weight.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
weight.style.borderRadius = '50%'
weight.style.marginTop = '0.5vh'
description.appendChild(weight)

for (let i = 0; i < planets.length; i++) {
    const option = document.createElement('option')
    option.value = planets[i]
    option.innerHTML = planets[i]
    select.appendChild(option)
}

function createDescription() {
    if (text.innerHTML === '' && (input.value === '' || isNaN(parseInt(input.value)))) {
        description.style.display = 'flex'
        text.innerHTML = 'Mass is required'
        imageClass.style.display = 'none'
        weight.style.display = 'none'
        description.style.height = '40px'
        description.style.margin = '25px auto'
    }
    else if (input.value === '' || isNaN(parseInt(input.value))) {
        imageClass.style.display = 'none'
        weight.style.display = 'none'
        text.innerHTML = 'Mass is required'
        description.style.height = '40px'
        description.style.margin = '25px auto'
    }
    else if (select.value === 'none') {
        imageClass.style.display = 'none'
        weight.style.display = 'none'
        text.innerHTML = 'You did not select a planet yet'
    } else {
        const selected = select.value
        const selectedIndex = planets.indexOf(selected)
        planet.src = planetImages[selectedIndex]
        description.style.display = 'flex'
        imageClass.style.display = 'flex'
        weight.style.display = 'flex'
        description.style.height = '30vh'
        description.style.margin = '0'
        text.innerHTML = `The weight of the object on <h3 style="margin-left: 0.4vw;">${selected}</h3>`
        weight.innerHTML = `${(gravity[selectedIndex] * input.value * 9.81).toFixed(2)} N`
    }
}

button.addEventListener('click', function () {
    createDescription();
})
body.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createDescription();
    }
})
