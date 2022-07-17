const stentence = '30 DAYS OF JAVASCRIPT CHALLENGE 2020';
const fullName = 'ASABENEH YETAYEH';

let fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Cursive', 'Fantasy', 'Georgia', 'Impact', 'Lucida Console', 'Lucida Sans Unicode', 'Palatino Linotype', 'Tahoma', 'Trebuchet MS', 'Verdana'];

const createWord = (word, everyWord) => {
    for (let i = 0; i < word.length; i++) {
        const p = document.createElement('p');
        p.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        p.style.display = 'inline-block';
        p.style.animation = 'fadeIn 3s ease-in-out';
        p.innerHTML = word[i];
        everyWord.appendChild(p);
    }
}

const createSentence = (sentence, everySentence) => {
    let words = sentence.split(' '); 
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        const eachOne = document.createElement('div');
        eachOne.classList.add('each-one');
        eachOne.style.display = 'inline-block';
        eachOne.style.margin = '0 5vw 0 0';
        createWord(words[i], eachOne);
        everySentence.appendChild(eachOne);
    }
}

const firstSentence = document.querySelector('.firstSentence');
const secondSentence = document.querySelector('.secondSentence');

setInterval(function Interval(){
    firstSentence.innerHTML = '';
    secondSentence.innerHTML = '';
    createSentence(stentence, firstSentence);
    createSentence(fullName, secondSentence);
    return Interval;
}(), 3000);

// const Interval = ()  => {
//     firstSentence.innerHTML = '';
//     secondSentence.innerHTML = '';
//     createSentence(stentence, firstSentence);
//     createSentence(fullName, secondSentence);
//     setTimeout(Interval, 3000);
// };
// Interval();

const body = document.querySelector('body');

setInterval(function backgroundChange() {
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    return backgroundChange;
}(), 3000);

// const backgroundChange = () => {
//     body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
//     setTimeout(backgroundChange, 3000);
// }
// backgroundChange();
