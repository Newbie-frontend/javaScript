//Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)

const stat = document.querySelector('#stat');
const header4 = document.querySelector('.graph-title');

function createPopulation() {
    countries_data.sort((a, b) => b.population - a.population);
    let tenPopulation = countries_data.slice(0, 10);
    const worldPopulation = countries_data.reduce((acc, curr) => {
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
    header4.innerHTML = '10 Most Populated Countries In The World';
}

const populationButton = document.querySelector('.population');
populationButton.addEventListener('click', () => {
    stat.innerHTML = '';
    createPopulation();
});


const createLanguages = () => {
    let languages = [];
    for (let index in countries_data)
        languages.push(countries_data[index].languages);
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
    header4.innerHTML = '10 Most Spoken Languages In The World';
}
const languagesButton = document.querySelector('.languages');
languagesButton.addEventListener('click', () => {
    stat.innerHTML = '';
    createLanguages();
});

const feedback = document.querySelector('#feedback');
feedback.innerHTML = countries_data.length;