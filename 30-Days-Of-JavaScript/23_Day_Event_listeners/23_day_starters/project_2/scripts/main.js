//Exercise 2
//Generating the keyboard code code using even listener. The image below.

const body = document.querySelector('body');
const start = document.querySelector('.start');
const keyboard = document.querySelector('.keyboard');
const ascii = document.querySelector('.ascii');

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';
body.style.height = '90vh';
body.style.fontSize = '40px';
body.style.fontFamily = 'Segoe UI';
body.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
start.style.display = 'flex';
start.style.justifyContent = 'center';
start.style.alignItems = 'center';
start.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
start.style.width = '500px';
start.style.height = '100px';
keyboard.style.display = 'none';
keyboard.style.justifyContent = 'center';
keyboard.style.alignItems = 'center';
keyboard.style.width = '500px';
keyboard.style.height = '100px';
keyboard.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
ascii.style.display = 'none';
ascii.style.justifyContent = 'center';
ascii.style.alignItems = 'center';
ascii.style.width = '180px';
ascii.style.height = '220px';
ascii.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
ascii.style.marginTop = '30px';
ascii.style.fontSize = '100px';
ascii.style.color = 'green';

document.addEventListener('keydown', function (e) {
    start.style.display = 'none';
    keyboard.style.display = 'flex';
    keyboard.innerHTML = `You Pressed <div style = "color: green; margin-left: 10px;">${e.key}</div>`;
    ascii.style.display = 'flex';
    ascii.innerHTML = `<p>${e.keyCode}</p>`;
    console.log(e.keyCode);
    console.log(e.key);
})