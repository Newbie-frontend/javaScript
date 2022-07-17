//Exercise level 1 

// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const body = document.querySelector('body');
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';

const header1 = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('h3');
{
    header1.style.textAlign = 'center';
    header2.style.textAlign = 'center';
    header3.style.textAlign = 'center';

    header1.style.fontSize = '38px';
    header2.style.fontSize = '18px';
    header3.style.fontSize = '18px';

    header1.style.margin = '0';
    header2.style.margin = '0';
    header3.style.margin = '0';

    header1.style.padding = '0';
    header2.style.padding = '0';
    header3.style.padding = '0';

    header1.style.fontFamily = 'sans-serif';
    header2.style.fontFamily = 'Courier New';
    header3.style.fontFamily = 'Courier New';

    header1.style.fontweight = 'lighter';
    header2.style.fontweight = 'lighter';
    header3.style.fontweight = 'lighter';

    header2.style.textDecoration = 'underline';
    header3.style.textDecoration = 'underline';

    header3.style.marginBottom = '10px';
}

const wrapper = document.querySelector('.wrapper');
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.backgroundColor = '#f5f5f5';

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '70%';
container.style.margin = '0 auto';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
wrapper.appendChild(container);

for (let i = 0; i <= 101; i++) {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.width = '150px';
    div.style.height = '100px';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    {
        let counter = 0;
        for (let j = 2; j < i && i > 1; j++)
            if (i % j === 0)
                counter++;
        if (counter === 0 && i > 1)
            div.style.backgroundColor = '#FF2F25';
        else if (i % 2 === 0)
            div.style.backgroundColor = 'MediumSeaGreen';
        else
            div.style.backgroundColor = '#FFE44D';
        counter = 0;
    }
    div.style.margin = '0';
    div.style.padding = '0';
    div.style.boxSizing = 'border-box';
    div.style.margin = '2px';
    container.appendChild(div);
    const childDiv = document.createElement('div');
    childDiv.style.display = 'flex';
    childDiv.style.justifyContent = 'center';
    childDiv.style.alignItems = 'center';
    childDiv.style.margin = '0';
    childDiv.style.padding = '0';
    childDiv.style.boxSizing = 'border-box';
    childDiv.style.fontSize = '30px';
    childDiv.style.fontFamily = 'sans-serif';
    childDiv.style.fontWeight = 'lighter';
    div.appendChild(childDiv);
    childDiv.innerHTML = i;
}


