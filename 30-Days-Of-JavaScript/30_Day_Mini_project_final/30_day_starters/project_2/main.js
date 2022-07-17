//30 days of JavaScript
//Day 30 - Project 2
//form validation
//This is a mini project that will validate a form.

const form = document.querySelector('form');
let allDatas = [];

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

form.addEventListener('submit', function (event) {
    const errorDivs = document.querySelectorAll('.error');
    const formControl = document.querySelectorAll('.form-control');
    for (let i = 0; i < errorDivs.length; i++) {
        errorDivs[i].innerHTML = '';
        formControl[i].style.border = '1px solid #ccc';
    }
    event.preventDefault();
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const phoneNumber = document.querySelector('#phone');
    const bio = document.querySelector('#bio');

    const errorMessage = (nodeName, message) => {
        nodeName.style.border = '1px solid red';
        nodeName.nextElementSibling.innerHTML = message;
    };

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const fParentNode = firstName.parentNode
    let namePattern = /^[a-zA-Z0-9]{3,16}$/
    let fName = namePattern.test(firstNameValue)
    if (!fName) {
        errorMessage(firstName, 'First name must be Alphanumeric and contain 3 - 16 characters');
    }
    let lName = namePattern.test(lastNameValue)
    if (!lName) {
        errorMessage(lastName, 'Last name must be Alphanumeric and contain 3 - 16 characters');
    }
    const emailValue = email.value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let emailValid = emailPattern.test(emailValue)
    if (!emailValid) {
        errorMessage(email, 'Email must be valid address, e.g. example@example.com');
    }
    const passwordValue = password.value;
    // let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let passwordPattern = /^[A-Za-z\d@,_-]{6,20}$/
    let passwordValid = passwordPattern.test(passwordValue)
    if (!passwordValid) {
        errorMessage(password, 'Password must be Alphanumeric (@,_ and - also allowed) and between 6 - 20 characters');
    }
    const phoneNumberValue = phoneNumber.value;
    let phonePattern = /^[0-9]{10}$/
    let phoneValid = phonePattern.test(phoneNumberValue)
    if (!phoneValid) {
        errorMessage(phoneNumber, 'Phone number must be 10 digits');
    }
    const bioValue = bio.value;
    let bioPattern = /^[a-z_-\s]{8,50}$/
    let bioValid = bioPattern.test(bioValue)
    if (!bioValid) {
        errorMessage(bio, 'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters');
    }
    let data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue,
        phoneNumber: phoneNumberValue,
        bio: bioValue
    }
    if (fName && lName && emailValid && passwordValid && phoneValid && bioValid) {
        allDatas.push(data);
        console.log(allDatas);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
        phoneNumber.value = '';
        bio.value = '';
    }
});

