console.log(countries)
// alert('Open the console and check if the countries has been loaded')
let hash = [];
for (let i = 1; i < 8; i++) {
    for (let j = 0; j - i < 0; j++) {
        hash.push("#");
    }
    console.log(hash.join(''))
    hash = [];
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}
console.log("i^1   i^2   i^3")
for (let i = 0; i <= 10; i++) {
    console.log(`${i}     ${i ** 2}     ${i ** 3}`)
}
// Soale 7
let even = []
let odd = []
for (let i = 0; i < 101; i++)
    !(i % 2) ? even.push(i) : odd.push(i);
console.log(even.join(', '))
console.log(odd.join(', '))

//soale 9
let Count;
let prime = [];
for (let i = 2; i < 101; i++) {
    Count = 0;
    for (let j = 1; j < i; j++)
        if (!(i % j))
            Count++;
    if (Count < 2)
        prime.push(i);
}
console.log(prime.join(', '));

//Soale 10
let sum = 0;
for (let i = 0; i < 101; i++)
    sum += i;
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Soale 11
let evenSum = 0;
function summing(x) {
    evenSum += x;
    return evenSum
}
let a = even.map(summing)

let oddSum = 0;
for (let x of odd) {
    oddSum += x;
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

let S = [evenSum, oddSum]
console.log(S)

//Soale 13
let randomSeri = []
for (let i = 0; i < 5; i++) {
    randomSeri.push(Math.floor(Math.random() * 101))
}
console.log(randomSeri)

//Soale 15
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let randomChar = []
let anotherRandom = []
console.log(char.length)
for (let x = 0; x < 6; x++) {
    randomChar.push(char[Math.floor(Math.random() * 62)])
    anotherRandom.push(String.fromCharCode(Math.floor(Math.random() * 95) + 32))
}
console.log(randomChar.join(''))
console.log(anotherRandom.join(''))

// level2 
// soale 2 
let character = '1234567890abcdef';
let hexCode = ['#']
for (let x = 0; x < 6; x++) {
    hexCode.push(character[Math.floor(Math.random() * 16)]);
}
console.log(hexCode.join(''))

//rgb
let rgb = []
for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256))
}
console.log(`rgb(${rgb.join()})`)

//countries array Soale 4
const cou = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Iceland',
    'Ireland',
    'Japan',
    'Kenya'
]
function cap(x) {
    return x.toUpperCase()
}
let CapitalC = cou.map(cap)
console.log(CapitalC)

//soale 5
let len = []
for (let i = 0; i < cou.length; i++) {
    len.push(cou[i].length)
}
console.log(len)

// Soale 6
let totalC = []
for (let i = 0; i < cou.length; i++) {
    let temp = []
    temp.push(cou[i])
    temp.push(cou[i].slice(0, 3).toUpperCase())
    temp.push(cou[i].length)
    totalC.push(temp)
}
console.log(totalC)

// soale 7
let landCountries = []
function Check(x) {
    if (x.includes('land'))
        return x
}
landCountries = cou.filter(Check)
landCountries != [] ? console.log(landCountries) : console.log(`All these countries are without land`);

// Soale 8
let iaCountries = []
function iaCheck(x) {
    if (x.includes('ia'))
        return x
}
iaCountries = cou.filter(iaCheck)
iaCountries != [] ? console.log(iaCountries) : console.log(`All these countries are without ia`);

// Soale 9
let longest = cou[0];
let num = cou[0].length;
for (let i = 1; i < cou.length; i++) {
    if (cou[i].length > num) {
        longest = cou[i];
        num = cou[i].length;
    }
}
console.log(longest)

//soale 10
function isItFive(x) {
    if (x.length == 5)
        return x;
}
let five = cou.filter(isItFive)
console.log(five)


//Soale 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
let flatted = fullStack.flat();
for (let shit of flatted) {
    console.log(`${shit.toUpperCase()}`)
}

// Deep copy 
//Soale 1 
const couCopy = JSON.parse(JSON.stringify(countries)) //Deep Copy 
for (let i = 0; i < 150; i++)
    couCopy.pop()

console.log(couCopy)
console.log(countries)

let anotherCopy = [...countries] //Shallow copy 
console.log(anotherCopy)

for (let i = 0; i < 180; i++)
    anotherCopy.pop()
console.log(anotherCopy)

//Soale 4
function ifLand(x) {
    if (x.includes('land')) {
        return x;
    }
}
let landC = countries.filter(ifLand)
console.log(landC)

//Soale 5 : for practice it is a long way 
function lenFunc(x) {
    return x.length;
}
let lengthCountries = countries.map(lenFunc).sort(function (a, b) { return a - b; }).reverse()
for (let c of countries)
    if (c.length == lengthCountries[0]) {
        console.log(c)
    }
console.log(lengthCountries)

// Soale 7
let newArr = []
for (let x of countries)
    if (x.length == 4)
        newArr.push(x)
console.log(newArr)

let newArr2 = []
for (let x of countries)
    if (x.includes(' '))
        newArr2.push(x)
console.log(newArr2)

let mamad = [...countries]
function wtf(x) {
    return x.toUpperCase()
}
mamad = mamad.map(wtf).reverse()
console.log(mamad)



const countriesWithLand = [];
let flag = flase
for (const country of countries) {
    if (country.includes('land')) {
        countriesWithLand.push(country)
        flag = true
    }
}
if (flag == true)
    console.log(countriesWithLand)
else
    console.log('No countries with land')