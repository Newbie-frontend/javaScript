//Exercise level 3
// Check the requirement of this project from both images(jpg and gif). 
// All the data and CSS has been implemented using JavaScript only.
//  The data is found on starter folder project_3. 
// The drop down button has been created using details HTML element.

// Header
const body = document.querySelector('body');
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';

const header1 = document.querySelector('h1');
const header2 = document.querySelector('h2');
const timeClass = document.querySelector('.time');
let head = [header1, header2, timeClass];
for (let x of head) {
    x.style.textAlign = 'center';
    x.style.fontFamily = 'Segoe UI, sans-serif';
    x.style.margin = '0';
}
header1.style.fontWeight = '500';
header2.style.textDecoration = 'underline';
header2.style.fontFamily = 'Courier New, Courier, monospace';
header2.style.fontSize = '20px';
header2.style.margin = '15px 0';
timeClass.style.margin = '15px 0';

const yearBig = document.getElementById('year');
{
    yearBig.style.fontSize = '60px';
}

const timeId = document.getElementById('time'); // get the time element
function getMeTime() {
    let time = new Date(); // create a new date object
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // create an array of months
    let month = months[time.getMonth()]; // get the month from the time object
    let day = time.getDate(); // get the day from the time object
    let year = time.getFullYear(); // get the year from the time object
    let hours = time.getHours(); // get the hours from the time object
    let minutes = time.getMinutes(); // get the minutes from the time object
    let seconds = time.getSeconds(); // get the seconds from the time object
    let date = `${month} ${day}, ${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // create a string of the date
    timeId.innerHTML = date; // set the innerHTML of the new div element to Date and Time
    timeId.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // set the backgroundColor of the new div element to a random color
    timeId.style.padding = '5px 25px'; // set the padding of the new div element to 5px
    yearBig.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16); // set the color of the new div element to a random color
}
setInterval(getMeTime, 1000);

// Drop down Part   
const container = document.querySelector('#container');
const wrapper = document.querySelector('#wrapper');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.width = '60%';
wrapper.style.margin = '0 auto';

let colors = ['orange', 'MediumSeaGreen', 'tomato']
let decorations = ['underline', 'none'];
let carrotRight = '<i class="fa-solid fa-caret-right" style = "margin-right: 10px"></i>'
let checked = false;
for (let x = 0; x < asabenehChallenges2020.challenges.length; x++) {
    let color;
    let decor;
    if (asabenehChallenges2020.challenges[x].status.includes('Done')) {
        color = colors[1];
        decor = decorations[0];
    }
    else if (asabenehChallenges2020.challenges[x].status.includes('Coming')) {
        color = colors[2];
        decor = decorations[1];
    }
    else if (asabenehChallenges2020.challenges[x].status.includes('Ongoing')) {
        color = colors[0];
        decor = decorations[0];
    }
    const first = document.createElement('div');
    const challenge = document.createElement('div');
    challenge.style.width = '280px';
    challenge.style.paddingLeft = '20px';
    challenge.style.textDecoration = decor;
    challenge.innerHTML = asabenehChallenges2020.challenges[x].name;
    const dropdown = document.createElement('div');
    const course = document.createElement('div');
    course.style.display = 'flex';
    course.style.alignItems = 'center';
    course.style.width = '180px';
    course.style.fontWeight = '900';
    course.innerHTML = carrotRight + forgotten[x];
    const courseItems = document.createElement('ul');
    const progress = document.createElement('div');
    progress.style.width = '70px';
    progress.innerHTML = asabenehChallenges2020.challenges[x].status;
    first.appendChild(challenge);
    dropdown.appendChild(course);
    dropdown.appendChild(courseItems);
    first.appendChild(dropdown);
    first.appendChild(progress);
    wrapper.appendChild(first);
    first.style.width = '100%';
    first.style.display = 'flex';
    first.style.justifyContent = 'space-between';
    first.style.backgroundColor = color;
    first.style.margin = '2px 0';
    first.style.padding = '20px';
    first.style.fontFamily = 'Courier New, Courier, monospace';
    first.style.cursor = 'pointer';
    first.style.fontSize = '13px';
    first.addEventListener('click', function () {
        if (!checked) {
            for (let y = 0; y < asabenehChallenges2020.challenges[x].topics.length; y++) {
                const courseItem = document.createElement('li');
                courseItem.innerHTML = asabenehChallenges2020.challenges[x].topics[y];
                courseItems.appendChild(courseItem);
                courseItems.style.marginLeft = '15px';
                courseItem.style.margin = '3px 0';
            }
                course.style.marginBottom = '10px';
                checked = true;
                challenge.style.margin = 'auto 0';
                progress.style.margin = 'auto 0';
        }
        else {
            courseItems.innerHTML = '';
            course.style.marginBottom = '0';
            checked = false;
        }
    });

}

//Footer
const intro = document.querySelector('.intro'); // get the intro element
const name = document.querySelector('.name'); // get the name element
const symbols = document.querySelector('.symbols'); // get the symbols element
const txt = document.querySelector('.txt'); // get the txt element
//intro style
intro.style.display = 'flex';
intro.style.flexWrap = 'wrap';
intro.style.justifyContent = 'center';
intro.style.alignItems = 'center';
intro.style.flexDirection = 'column';
intro.style.width = '60%';
intro.style.margin = '0 auto';

//name style
name.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
name.style.fontSize = '32px';
name.style.fontFamily = 'Segoe UI, sans-serif';
name.style.fontWeight = '500';
name.style.margin = '15px 0 5px';

//symbols style
symbols.innerHTML = `${asabenehChallenges2020.author.socialLinks.map(x => x.fontawesomeIcon).join(' ')} `;
symbols.style.margin = '0 0 30px';
symbols.style.cursor = 'pointer';

//txt style
txt.innerHTML = `${asabenehChallenges2020.author.bio}`;
txt.style.fontSize = '18px';
txt.style.textAlign = 'center';
txt.style.textIndent = '0px';
txt.style.fontFamily = 'Segoe UI, sans-serif';
txt.style.margin = '0 0 50px';

//introSecond
const introSecond = document.querySelector('.introSecond'); // get the introSecond element
const title = document.querySelector('.title'); // get the title element
const titleList = document.querySelector('#titleList'); // get the titleList element
const skills = document.querySelector('.skills'); // get the skills element
const skillsList = document.querySelector('#skillsList'); // get the skillsList element
const qualifications = document.querySelector('.qualifications'); // get the qualifications element
const qualificationsList = document.querySelector('#qualificationsList'); // get the qualificationsList element

for (let x = 0; x < asabenehChallenges2020.author.titles.length; x++) {
    const titleItem = document.createElement('li');
    titleItem.innerHTML = `${asabenehChallenges2020.author.titles[x].join('  ')}`;
    titleList.appendChild(titleItem);
}
for (let x = 0; x < asabenehChallenges2020.author.skills.length; x++) {
    const skillsItem = document.createElement('li');
    skillsItem.innerHTML = `<i class="fa-solid fa-square-check"></i> ${asabenehChallenges2020.author.skills[x]}`;
    skillsList.appendChild(skillsItem);
}
for (let x = 0; x < asabenehChallenges2020.author.qualifications.length; x++) {
    const qualificationsItem = document.createElement('li');
    qualificationsItem.innerHTML = `<i class="fa-solid fa-user-graduate"></i> ${asabenehChallenges2020.author.qualifications[x]}`;
    qualificationsList.appendChild(qualificationsItem);
}

//introSecond style
const allTheLists = document.querySelectorAll('ul');
allTheLists.forEach(x => {
    x.style.listStyleType = 'none'
    x.style.padding = '0'
    x.style.margin = '0'
});
introSecond.style.display = 'flex';
introSecond.style.width = '60%';
introSecond.style.margin = '0 auto 50px';
introSecond.style.fontFamily = 'Segoe UI, sans-serif';
title.style.flexGrow = '1';
skills.style.flexGrow = '1';
qualifications.style.flexGrow = '1';
//heads
const heads = document.querySelectorAll('.headOfIntSec');
heads.forEach(x => {
    x.style.fontSize = '20px';
    x.style.fontFamily = 'Segoe UI, sans-serif';
    x.style.fontWeight = '700';
    x.style.margin = '0 0 10px';
})

//keywords
const keyWords = document.querySelector('.keyWords'); // get the keyWords element
const keyWordsList = document.querySelector('#keyWordsList'); // get the keyWordsList element
keyWords.style.display = 'flex';
keyWords.style.flexDirection = 'column';
keyWords.style.width = '60%';
keyWords.style.margin = '0 auto 50px';
keyWordsList.style.marginLeft = '40px';
for (let x = 0; x < asabenehChallenges2020.keywords.length; x++) {
    const keyWordsItem = document.createElement('div');
    keyWordsItem.style.display = 'inline-block';
    keyWordsItem.style.margin = '2px 5px';
    keyWordsItem.style.padding = '7px';
    keyWordsItem.style.borderRadius = '15px';
    keyWordsItem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    keyWordsItem.style.cursor = 'pointer';
    keyWordsItem.style.fontFamily = 'Segoe UI, sans-serif';
    keyWordsItem.style.fontWeight = '500';
    keyWordsItem.style.fontSize = '14px';
    keyWordsItem.innerHTML = `# ${asabenehChallenges2020.keywords[x]}`;
    keyWordsList.appendChild(keyWordsItem);
}