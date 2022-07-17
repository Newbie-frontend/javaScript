console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// let x = Array();
let y = [1, [3, 4, 5], 3, 4, [10, 11, 12], 6];
// console.log(x);
console.log(y);
let z = y.flat();
console.log(z)
let test = [1, 2, 4, 5, 6, 6, 7, 1, 2, 4, 5]
let testLength = test.length;
console.log(testLength);
let firstItem = test[0]
let lastItem = test[testLength - 1]
let middleItem = test[Math.floor(testLength / 2)]
console.log(firstItem, lastItem, middleItem)

let mixedDataTypes = [123, 'hossein', [1, 2, 3], false, { a: 'ali', b: 'hossein' }, 'ahmad', 111, 12345]
let sizeMixedDataTypes = mixedDataTypes.length;
console.log(sizeMixedDataTypes);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0], itCompanies[itCompanies.length - 1], itCompanies[Math.floor((itCompanies.length - 1) / 2)])

// for (let x in itCompanies)
//     console.log(itCompanies[x] + "  Ajab")

// let itCom = [];
// for (let x of itCompanies) {
//     itCom.shift(x.toUpperCase());
// }
// for (let y of itCom) {
//     console.log(y + " Ajab")
// }
// let temp = itCompanies.pop();
// let sentence = itCompanies.join(', ') + " and " + temp + " are big IT companies.";
// console.log(sentence);
// itCompanies.push(temp);
// console.log(itCompanies);

// let tempPrompt = prompt("IT Company : ");
// function checkIt(x) {
//     return tempPrompt == x;
// }
// let a = itCompanies.find(checkIt)
// a ? console.log(a) : console.log(`${tempPrompt} company is not found.`);

let newCompanies = []
for (let company of itCompanies) {
    if (company.match(/o/gi) == null || company.match(/o/gi).length < 2)
        newCompanies.push(company);
}
console.log(newCompanies);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(0, 3).concat(itCompanies.slice(4, 7)));


itCompanies.shift()
console.log(itCompanies);

itCompanies.splice(2, 2)
console.log(itCompanies);

itCompanies.pop()
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies);

console.log(countries);
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia");
countries.sort();

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[,.]/gi, '').split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart)

if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
console.log(shoppingCart)

function ifHoney(x) {
    return x != "Honey"
}
console.log(shoppingCart.filter(ifHoney))

let key = Object.keys(shoppingCart)
console.log(key)

let index = shoppingCart.indexOf('Tea')
shoppingCart[index] = 'Green Tea'
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
let countAge = ages.length;
console.log(countAge)
countAge % 2 ? console.log(ages[Math.floor(countAge / 2)]) : console.log((ages[countAge / 2] + ages[countAge / 2 - 1]) / 2);
let total = 0;
for (let age of ages) {
    total += age;
}
let average = total / countAge;
console.log(`Average = ${average}`)

let min = 100;
let max = 0;
for (let age of ages) {
    max = age > max ? age : max;
    min = age < min ? age : min;
}
console.log(min, max);
console.log(`Range of Ages is: ${max - min}`);
console.log(`Compare : max - average = ${Math.abs(average - max).toFixed(2)} and average - min = ${Math.abs(average - min).toFixed(2)}`)
console.log(`${Math.abs(average - min) > Math.abs(average - max) ? "Average - min is bigger" : "Average - min is bigger"}`)

let sliced = countries.slice(0, 10)
console.log(sliced)

let countCountries = countries.length
console.log(countCountries)
countCountries % 2 ?
    console.log(`Middle country is ${countries[Math.floor(countCountries / 2)]}`) :
    console.log(`Middle countries are : ${countries[countCountries / 2]} and ${countries[(countCountries / 2) - 1]}`);

let firstSliced = countCountries % 2 ?
    countries.slice(0, Math.floor(countCountries / 2) + 1) :
    countries.slice(0, (countCountries / 2) + 1);
console.log(firstSliced.length)
console.log(firstSliced)

let OtherHalf = countCountries % 2 ?
    countries.slice(Math.floor(countCountries / 2) + 1) :
    countries.slice((countCountries / 2) + 1);
console.log(OtherHalf.length)
console.log(OtherHalf)