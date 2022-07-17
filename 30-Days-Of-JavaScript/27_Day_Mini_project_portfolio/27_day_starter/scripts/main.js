//Create the following using HTML, CSS, and JavaScript

const cardInfo = document.querySelectorAll('.cardInfo');
const introduction = document.querySelector('.introduction');
const jobs = document.querySelector('.jobs');
const iconDiv = document.querySelector('.iconDiv');
const content = document.querySelector('.content');
const teachings = document.querySelector('.teachings');

let index = 0;
const itemInterval = () => {
    if (index === asa.tech.length)
        index = 0;
    teachings.innerHTML = 'The Technologies I teach '
    const itemCreator = document.createElement('span');
    itemCreator.innerHTML = asa.tech[index];
    itemCreator.classList.add('teachItems');
    itemCreator.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    teachings.appendChild(itemCreator);
    index++;
    setTimeout(itemInterval, 3000);
};
itemInterval();
for (let i = 0; i < asa.teachings.length; i++) {
    cardInfo[i].innerHTML = asa.teachings[i];
    const item = document.createElement('div');
    const divForItem = document.createElement('div');
    divForItem.classList.add('divForItem');
    item.classList.add('card');
    item.classList.add('flex');
    item.innerHTML = asa.teachings[i];
    divForItem.appendChild(item);
    introduction.appendChild(divForItem);
}
let i = 0;
const interva = () => {
    iconDiv.innerHTML = '';
    content.innerHTML = '';
    if (i === asa.titles.length)
        i = 0;
    iconDiv.innerHTML = asa.titles[i][0];
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('contentDiv');
    contentDiv.innerHTML = asa.titles[i][1];
    content.appendChild(contentDiv);
    i++;
    setTimeout(interva, 3000);
};
interva();