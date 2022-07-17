// this is your main.js script
// const timeNow = new Date()

// let year = timeNow.getFullYear()
// let day = timeNow.getDate()
// let month = timeNow.getMonth()
// let hour = timeNow.getHours()
// let min = timeNow.getMinutes()

// console.log(typeof (year + "0"))
// console.log(`${year}-${month > 9 ? month : "0" + month}-${day > 9 ? day : "0" + day}-${hour > 9 ? hour : "0" + hour}:${min > 9 ? min : "0" + min}`);

console.log (4 == '4')
// let x = prompt('Enter base: ', '')
// let y = prompt('Enter height: ', '')
// console.log(0.5 * x * y)
// let a = parseFloat(prompt("Enter side a: "))
// let b = parseFloat(prompt("Enter side b: "))
// let c = parseFloat(prompt("Enter side c: "))
// console.log(a + b + c)
let nameMan = 'Hossein Raz'
nameMan.length > 7 ? console.log("Name is long") : console.log("Name is short");

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
console.log(`Your first name, ${firstName} is ${firstName.length > lastName.length ? "longer" : "shorter"} than your family name, ${lastName}`);

let myAge = 250
let yourAge = 25
let difference = myAge - yourAge;
console.log(`I am ${Math.abs(difference)} years ${difference > 0 ? "older" : "yonger"} than you.`)

// let Drive = prompt("Enter Birth Year: ");
// let Age = 2022 - Drive;
// Age >= 18 ? console.log(`You are ${Age}. You are old enough to drive.`) : console.log(`You are ${Age}. You will be allowed to drive after ${18 - Age} years.`);

// let numYears = prompt("Enter number of years you lived: ");
// let second = numYears * (365 * 24 * 60 * 60);
// console.log (`You lived ` + second + " seconds.");

let D = new Date();
let Y = D.getFullYear();
let M = D.getMonth();
let Da = D.getDay();
let H = D.getHours();
let Mi = D.getMinutes();

console.log(`${Y}-${M > 9 ? M : "0" + M}-${Da > 9 ? Da : "0" + Da} ${H > 9 ? H : "0" + H}:${Mi > 9 ? Mi : "0" + Mi}`)
console.log(`${Da > 9 ? Da : "0" + Da}-${M > 9 ? M : "0" + M}-${Y} ${H > 9 ? H : "0" + H}:${Mi > 9 ? Mi : "0" + Mi}`)
console.log(`${Y}/${M > 9 ? M : "0" + M}/${Da > 9 ? Da : "0" + Da} ${H > 9 ? H : "0" + H}:${Mi > 9 ? Mi : "0" + Mi}`)