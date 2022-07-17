
//Create the following using HTML, CSS, and JavaScript
const body = document.querySelector('body');
const leaderboardDiv = document.querySelector('.leaderboardDiv');

const createEachDiv = (x) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');
    const nameTime = document.createElement('div');
    nameTime.classList.add('nameTime');
    const country = document.createElement('div');
    country.classList.add('country');
    const score = document.createElement('div');
    score.classList.add('score');
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const name = document.createElement('div');
    name.classList.add('firstLast');
    const time = document.createElement('div');
    time.classList.add('timeOfEach');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.classList.add('circleButton');
    const plusFive = document.createElement('button');
    plusFive.classList.add('plusFive');
    plusFive.classList.add('circleButton');
    const minusFive = document.createElement('button');
    minusFive.classList.add('minusFive');
    minusFive.classList.add('circleButton');

    name.innerHTML = x.firstName + ' ' + x.lastName;
    time.innerHTML = x.submitTime;
    country.innerHTML = x.countryName;
    score.innerHTML = x.playerScore;
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    plusFive.innerHTML = '+5';
    minusFive.innerHTML = '-5';

    deleteButton.addEventListener('click', () => {
        mainDiv.remove();
    });
    plusFive.addEventListener('click', () => {
        x.playerScore += 5;
        score.innerHTML = x.playerScore;
    });
    minusFive.addEventListener('click', () => {
        x.playerScore -= 5;
        score.innerHTML = x.playerScore;
    });


    nameTime.appendChild(name);
    nameTime.appendChild(time);
    mainDiv.appendChild(nameTime);
    mainDiv.appendChild(country);
    mainDiv.appendChild(score);
    buttons.appendChild(deleteButton);
    buttons.appendChild(plusFive);
    buttons.appendChild(minusFive);
    mainDiv.appendChild(buttons);
    leaderboardDiv.appendChild(mainDiv);
}

const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');
const inputCountry = document.querySelector('#country');
const inputScore = document.querySelector('#score');
const submitButton = document.querySelector('#submit');
const checkMessage = document.querySelector('#checkMessage');

submitButton.addEventListener('click', () => {
    if (inputFirstName.value === '' || inputLastName.value === '' || inputCountry.value === '' || inputScore.value === '') {
        checkMessage.innerHTML = 'Please fill in all fields';
    } else {
        const firstName = inputFirstName.value;
        const lastName = inputLastName.value;
        const countryName = inputCountry.value;
        const playerScore = parseInt(inputScore.value);
        const timeNow = new Date();
        const submitTime = timeNow.toLocaleString().replace(',', '');
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            countryName: countryName,
            playerScore: playerScore,
            submitTime: submitTime
        };
        leaderboard.push(newPlayer);
        createEachDiv(newPlayer);
        inputFirstName.value = '';
        inputLastName.value = '';
        inputCountry.value = '';
        inputScore.value = '';
        checkMessage.innerHTML = '';
    }
});
body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitButton.click();
    }
});

for (let index in leaderboard) {
    createEachDiv(leaderboard[index]);
}