//Exercise level 2
//Use the countries array to display all the countries.See the design

const body = document.querySelector('body');
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';

const header2 = document.querySelector('h2');
header2.innerHTML = header2.innerHTML.toUpperCase();
const header3 = document.querySelectorAll('h3');
const header4 = document.querySelector('h4');
{   
    header2.style.textAlign = 'center';
    header3.forEach(x => x.style.textAlign = 'center');
    header4.style.textAlign = 'center';

    header2.style.fontSize = '38px';
    header3.forEach(x => x.style.fontSize = '14px');
    header4.style.fontSize = '18px';

    header2.style.margin = '0';
    header3.forEach(x => x.style.margin = '0');
    header4.style.margin = '0';

    header2.style.padding = '0';
    header3.forEach(x => x.style.padding = '0');
    header4.style.padding = '0';

    header2.style.fontFamily = 'Segoe UI, sans-serif';
    header3.forEach(x => x.style.fontFamily = 'monospace');
    header4.style.fontFamily = 'brush script mt, cursive';

    header4.style.fontWeight = 'light';
    header2.style.fontWeight = "light";
    header3.forEach(x => x.style.fontWeight = 'lighter');

    header2.style.fontStretch = 'ultra-expanded';
    header2.style.wordSpacing = '0.2em';
    header2.style.letterSpacing = '0.3em';

}

header4.innerHTML = `Total number of countries: ${countries.length}`; //display total number of countries

const container = document.querySelectorAll('.countries-container'); //container for countries
container[0].style.display = 'flex';
container[0].style.width = '100%';
container[0].style.margin = '70px auto 0px';


const wrapper = document.querySelectorAll('.countries-wrapper'); //wrapper for countries
wrapper[0].style.display = 'flex';
wrapper[0].style.width = '60%';
wrapper[0].style.margin = '0 auto';
wrapper[0].style.flexWrap = 'wrap';
wrapper[0].style.justifyContent = 'center';
wrapper[0].style.alignItems = 'center';

function createCountry(i) {     //function to create country
    const country = document.createElement('div');
    country.classList.add('country');
    country.style.width = '120px';
    country.style.height = '150px';
    country.style.display = 'flex';
    country.style.flexWrap = 'wrap';
    country.style.justifyContent = 'center';
    country.style.alignItems = 'center';
    country.style.margin = '5px';
    country.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    country.style.borderRadius = '3px';
    country.style.textAlign = 'center';
    country.style.fontFamily = 'Segoe UI, sans-serif';
    country.style.fontWeight = '500';
    country.innerHTML = countries[i];
    return country;
}

for (let i = 0; i < countries.length; i++) {    //loop to create countries
    const country = createCountry(i);
    wrapper[0].appendChild(country);
}
