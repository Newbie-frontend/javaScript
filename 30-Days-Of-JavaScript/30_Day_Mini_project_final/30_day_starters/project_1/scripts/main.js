//30 Days of javascript
//Final Project - Project 1
//Countries Data

//<i class="fa-solid fa-arrow-down"></i>
//<i class="fa-solid fa-arrow-up"></i>

//Global Variables
const CountriesArrLen = countries.length;
const countiresLen = document.querySelector('#countiresLen');
countiresLen.innerHTML = CountriesArrLen;
let filteredCountriesArr = [...countries];


//Function to display the countries
const countriesBox = document.querySelector('.countriesBox');
//function to create each country card
function createCountryCard(country) {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const cardName = document.createElement('h3');
    cardName.classList.add('name');
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    cardImage.innerHTML = `<img class="imgStyle" src="https://countryflagsapi.com/png/${country.name.toLowerCase()}" alt="${country.name}">`;
    cardName.innerHTML = `<p class="cName orange">${country.name}</p>`;
    cardInfo.innerHTML = `<p class="info">Capital: ${country.capital}</p>
    <p class="info">Languages: ${country.languages.join(', ')}</p>
    <p class="info">Population: ${country.population}</p>`

    countryCard.appendChild(cardImage);
    countryCard.appendChild(cardName);
    countryCard.appendChild(cardInfo);
    return countryCard;
}
function createBox(countriesList) {
    countriesList.forEach(country => {
        countriesBox.appendChild(createCountryCard(country));
    });
}

//adding event listener to the button **countries bayad avaz beshe**
//name button
const nameButton = document.querySelector('.nameButton');
let nameStatus = false;
nameButton.addEventListener('click', () => {
    capitalButton.innerHTML = 'CAPITAL';
    populationButton.innerHTML = 'POPULATION';
    if (!nameStatus) {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        }));
        nameStatus = true;
        nameButton.innerHTML = 'NAME <i class="fa-solid fa-arrow-down"></i>';
    }
    else {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        }));
        nameStatus = false;
        nameButton.innerHTML = 'NAME <i class="fa-solid fa-arrow-up"></i>';
    }
});

//capital button
const capitalButton = document.querySelector('.capitalButton');
let capitalStatus = false;
capitalButton.addEventListener('click', () => {
    nameButton.innerHTML = 'NAME';
    populationButton.innerHTML = 'POPULATION';
    if (!capitalStatus) {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.capital > b.capital) return 1;
            if (a.capital < b.capital) return -1;
            return 0;
        }));
        capitalStatus = true;
        capitalButton.innerHTML = 'CAPITAL <i class="fa-solid fa-arrow-down"></i>';
    }
    else {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.capital > b.capital) return -1;
            if (a.capital < b.capital) return 1;
            return 0;
        }));
        capitalStatus = false;
        capitalButton.innerHTML = 'CAPITAL <i class="fa-solid fa-arrow-up"></i>';
    }
});

//population button
const populationButton = document.querySelector('.populationButton');
let populationStatus = false;
populationButton.addEventListener('click', () => {
    nameButton.innerHTML = 'NAME';
    capitalButton.innerHTML = 'CAPITAL';
    if (!populationStatus) {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.population > b.population) return 1;
            if (a.population < b.population) return -1;
            return 0;
        }));
        populationStatus = true;
        populationButton.innerHTML = 'POPULATION <i class="fa-solid fa-arrow-down"></i>';
    }
    else {
        countriesBox.innerHTML = '';
        createBox(filteredCountriesArr.sort((a, b) => {
            if (a.population > b.population) return -1;
            if (a.population < b.population) return 1;
            return 0;
        }));
        populationStatus = false;
        populationButton.innerHTML = 'POPULATION <i class="fa-solid fa-arrow-up"></i>';
    }
});




//graphs
const stat = document.querySelector('#stat');
const header4 = document.querySelector('.graph-title');

function createPopulation() {
    filteredCountriesArr.sort((a, b) => b.population - a.population);
    let tenPopulation = filteredCountriesArr.slice(0, 10);
    const worldPopulation = countries.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);
    const width = Object.entries(tenPopulation).map(country => {
        return country[1].population / worldPopulation;
    });
    tenPopulation.unshift({ name: 'World', population: worldPopulation });
    width.unshift(1);
    for (let i = 0; i < tenPopulation.length; i++) {
        const element = document.createElement('div');
        element.classList.add('elementClass');
        const leftElement = document.createElement('div');
        leftElement.classList.add('leftElement');
        const middleElement = document.createElement('div');
        middleElement.classList.add('middleElementClass');
        const middleInner = document.createElement('div');
        middleInner.classList.add('middleInner');
        const rightElement = document.createElement('div');
        rightElement.classList.add('rightElement');
        leftElement.innerHTML = tenPopulation[i].name;
        middleElement.style.width = `${width[i] * 40}vw`;
        rightElement.innerHTML = tenPopulation[i].population;
        element.appendChild(leftElement);
        middleInner.appendChild(middleElement);
        element.appendChild(middleInner);
        element.appendChild(rightElement);
        stat.appendChild(element);
    }
    header4.innerHTML = 'World Population';
}
const populationB = document.querySelector('.population');
populationB.addEventListener('click', () => {
    stat.innerHTML = '';
    createPopulation();
});

const createLanguages = () => {
    let languages = [];
    for (let index in filteredCountriesArr)
        languages.push(filteredCountriesArr[index].languages);
    languages = languages.flat()
    let lanSet = new Set(languages);
    let lang = []
    for (let lan of lanSet) {
        let count = languages.filter(lang => lang === lan).length;
        lang.push({ name: lan, count: count });
    }
    lang.sort((a, b) => b.count - a.count);
    let tenLanguages = lang.slice(0, 10);
    for (let i = 0; i < tenLanguages.length; i++) {
        const element = document.createElement('div');
        element.classList.add('elementClass');
        const leftElement = document.createElement('div');
        leftElement.classList.add('leftElement');
        const middleElement = document.createElement('div');
        middleElement.classList.add('middleElementClass');
        const middleInner = document.createElement('div');
        middleInner.classList.add('middleInner');
        const rightElement = document.createElement('div');
        rightElement.classList.add('rightElement');
        leftElement.innerHTML = tenLanguages[i].name;
        middleElement.style.width = `${tenLanguages[i].count / 100 * 40}vw`;
        rightElement.innerHTML = tenLanguages[i].count;
        element.appendChild(leftElement);
        middleInner.appendChild(middleElement);
        element.appendChild(middleInner);
        element.appendChild(rightElement);
        stat.appendChild(element);
    }
    header4.innerHTML = 'These Countries Languages';
}
const languagesButton = document.querySelector('.languages');
languagesButton.addEventListener('click', () => {
    stat.innerHTML = '';
    createLanguages();
});



//input event listener
const inputClass = document.querySelector('.inputClass');
const satisfy = document.querySelector('.satisfy');
inputClass.addEventListener('input', () => {
    const inputValue = inputClass.value;
    filteredCountriesArr = countries.filter(country => {
        return country.name.toLowerCase().includes(inputValue.toLowerCase());
    }
    );
    countriesBox.innerHTML = '';
    stat.innerHTML = '';
    createBox(filteredCountriesArr);
    createPopulation();
    console.log(wrapper.getBoundingClientRect().bottom);
    if (filteredCountriesArr.length === 0)
        satisfy.innerHTML = 'No Countries Found';
    else if (inputValue === '')
        satisfy.innerHTML = '';
    else
        satisfy.innerHTML = `${filteredCountriesArr.length} satisfied the search criteria`;
});

const wrapper = document.querySelector('.wrapper');
console.log(wrapper.getBoundingClientRect().bottom);