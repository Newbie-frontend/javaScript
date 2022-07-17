// alert('Open the console and check if the countries has been loaded')

//Visualize the countries array as follows

let down = '<i class="fa-solid fa-arrow-down-a-z"></i>';
let up = '<i class="fa-solid fa-arrow-up-a-z"></i>';
let len = countries.length;
const CountriesLen = document.getElementById('CountriesLen');
CountriesLen.innerHTML = len;

//description
const description = document.querySelector('.description');
const header2 = document.querySelector('.header2');

//buttons 
let contain = false;
let start = false;
let sortt = 0;
const sortAZ = document.querySelector('.makeReverse');
const startingWord = document.querySelector('.starting');
const containingWord = document.querySelector('.containing');
containingWord.addEventListener('click', () => {
    if (contain) {
        contain = false;
        containingWord.style.backgroundColor = 'rgb(182, 87, 226)';
    }
    else {
        contain = true;
        start = false;
        containingWord.style.backgroundColor = 'rgb(132, 14, 187)';
        startingWord.style.backgroundColor = 'rgb(182, 87, 226)';
    }
});
startingWord.addEventListener('click', () => {
    if (start) {
        start = false;
        startingWord.style.backgroundColor = 'rgb(182, 87, 226)';
    }
    else {
        start = true;
        contain = false;
        containingWord.style.backgroundColor = 'rgb(182, 87, 226)';
        startingWord.style.backgroundColor = 'rgb(132, 14, 187)';
    }
});

sortAZ.addEventListener('click', () => {
    if (sortt === 0) {
        sortt = 1;
        start = 0;
        contain = 0;
        startingWord.style.backgroundColor = 'rgb(182, 87, 226)';
        containingWord.style.backgroundColor = 'rgb(182, 87, 226)';
        sortAZ.style.backgroundColor = 'rgb(132, 14, 187)';
        sortAZ.innerHTML = down;
        description.innerHTML = 'All countries sorted alphabetically from A to Z';
        header2.style.marginBottom = '1vw';
        createCountries(countries.sort());
    } else if (sortt === 1) {
        sortt = 2;
        start = 0;
        contain = 0;
        startingWord.style.backgroundColor = 'rgb(182, 87, 226)';
        containingWord.style.backgroundColor = 'rgb(182, 87, 226)';
        sortAZ.innerHTML = up;
        countriesSection.innerHTML = '';
        description.innerHTML = 'All countries sorted alphabetically from Z to A';
        header2.style.marginBottom = '1vw';
        createCountries(countries.sort().reverse());
    }
    else {
        sortt = 0;
        start = 0;
        contain = 0;
        sortAZ.style.backgroundColor = 'rgb(182, 87, 226)';
        sortAZ.innerHTML = down;
        countriesSection.innerHTML = '';
        description.innerHTML = '';
    }
});
//end of buttons

const inputValue = document.getElementById('search');
const countriesSection = document.querySelector('.countries');
const createCountries = (filteredCountries) => {
    filteredCountries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('eachCountry');
        countryDiv.innerHTML = country;
        countryDiv.style.display = 'flex';
        countryDiv.style.justifyContent = 'center';
        countryDiv.style.alignItems = 'center';
        countryDiv.style.width = '11vw';
        countryDiv.style.height = '15vw';
        countryDiv.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/map_image.jpg)';
        countryDiv.style.backgroundSize = 'cover';
        countryDiv.style.backgroundPosition = 'center';
        countryDiv.style.color = 'white';
        countryDiv.style.textAlign = 'center';
        countryDiv.style.margin = '1vw 1vw';
        countryDiv.style.borderRadius = '3px';
        countryDiv.style.fontSize = '1.5vw';
        countryDiv.style.fontWeight = 'bold';
        countriesSection.appendChild(countryDiv);
    });
}

inputValue.addEventListener('input', (e) => {
    countriesSection.innerHTML = '';
    const input = e.target.value;
    if (input === '') {
        countriesSection.innerHTML = '';
    }
    else {
        let filteredCountries = [];
        if (contain) {
            filteredCountries = countries.filter(country => country.toLowerCase().includes(input.toLowerCase()));
            createCountries(filteredCountries);
            description.innerHTML = `Countries containing ${input} are ${filteredCountries.length}`;
            header2.style.marginBottom = '1vw';
        }
        else if (start) {
            filteredCountries = countries.filter(country => country.toLowerCase().startsWith(input.toLowerCase()));
            createCountries(filteredCountries);
            description.innerHTML = `Countries starting with ${input} are ${filteredCountries.length}`;
            header2.style.marginBottom = '1vw';
        }
        else {
            countriesSection.innerHTML = '';
            description.innerHTML = '';
        }
    }
});