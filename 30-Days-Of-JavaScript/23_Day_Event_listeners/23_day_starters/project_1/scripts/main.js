//Exercise level 1
// Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.

const body = document.querySelector('body');
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';
body.style.fontFamily = 'Segoe UI, sans-serif';


const header1 = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('h3');
const inputButton = document.querySelector('.inputB');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const mess = document.querySelector('#mess');
const wrapper = document.querySelector('.wrapper');

header1.setAttribute('class', 'header');
header2.setAttribute('class', 'header');
header3.setAttribute('class', 'header');
wrapper.setAttribute('class', 'header');
inputButton.setAttribute('class', 'header');

const header = document.querySelectorAll('.header');
header.forEach(x => {
    x.style.display = 'flex';
    x.style.justifyContent = 'center';
    x.style.width = '60%';
    x.style.margin = '0 auto';
})

header1.style.color = '#26C40F';
header2.style.fontWeight = '400';
header3.style.fontWeight = '300';
header3.style.fontSize = '18px';

//input & button styles
inputButton.style.marginTop = '30px';
button.style.backgroundColor = '#46A837';
button.style.color = '#FFF';
button.style.fontSize = '16px';
button.style.fontFamily = 'Tahoma, Geneva, sans-serif';
button.style.border = 'none';
button.style.width = '200px';
button.style.height = '30px';
button.style.marginLeft = '10px';
input.style.width = '100%';
input.style.fontSize = '16px';
input.style.borderColor = '#46A837';
input.style.borderWidth = '1px';
input.style.focusBorderColor = '#46A837';
input.style.outline = 'none';


//Numbers
isPrime = (x) => {
    if (x < 2)
        return false;
    for (let i = 2; i < x; i++)
        if (x % i === 0)
            return false;
    return true;
}
generateNumbers = (x) => {
    let num = parseInt(x);
    let numArray = [];
    for (let i = 0; i <= num; i++) {
        numArray.push(i);
    }
    numArray.forEach(x => {
        let div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '40px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.margin = '3px 3px';
        div.style.backgroundColor = '#FFF';
        div.style.fontFamily = 'Tahoma, Geneva, sans-serif';
        div.style.fontSize = '32px';
        div.style.fontWeight = '300';
        div.style.color = '#FFF';
        div.innerHTML = `<p>${x}</p>`;
        if (isPrime(x))
            div.style.backgroundColor = 'tomato';
        else if (x % 2 !== 0)
            div.style.backgroundColor = 'MediumSeaGreen';
        else if (x % 2 === 0)
            div.style.backgroundColor = 'orange';
        wrapper.appendChild(div);
    }
    )
}
eventFunction = () => {
    if (input.value === '' || isNaN(parseInt(input.value))) {
        mess.style.display = 'block';
        mess.style.color = '#FF0000';
        mess.style.fontSize = '14px';
        mess.style.margin = '0 auto';
        mess.style.textAlign = 'center';
        mess.style.width = '100%';
        mess.style.borderRadius = '5px';
        mess.style.backgroundColor = '#FFF';
        mess.innerHTML = 'Please enter a number';
        inputButton.style.marginTop = '11px';
        input.style.borderColor = '#FF0000';
    } else {
        wrapper.innerHTML = '';
        mess.style.display = 'none';
        console.log(input.value);
        console.log(parseInt(input.value));
        inputButton.style.marginTop = '30px';
        input.style.borderColor = '#46A837';
        generateNumbers(input.value);
        input.value = '';
    }
}
button.addEventListener('click', () => eventFunction())
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13)
        eventFunction();
})

wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'center';
wrapper.style.marginTop = '15px';






