// // console.log(countries)
// // alert('Open the console and check if the countries has been loaded')

// // a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n ** 2
//   }

//   // function that takes other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }

//   console.log(cube(callback, 3))

//   // Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

// //   function sayHello() {
// //     console.log('Hello')
// //   }
// //   setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// //   function akhey() {
// //     console.log('آخیییییی')
// //   }
// //   setTimeout(akhey, 2000) // it prints hello after it waits for 2 seconds.


// let sum = 0;
// const numbers = [2, 3, 4, 5, 6];
// numbers.forEach(num => console.log(num))
// console.log(sum)

// numbers.forEach(num => sum += num)

// console.log(sum)

// /*Arrow function and explicit return
// const modifiedArray = arr.map((element,index) => element);
// */
// //Example
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

// const coun = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]
// const countriesToUpperCase = coun.map((country) => country.toUpperCase())
// console.log(countriesToUpperCase)

// /*
// // Arrow function
// const countriesToUpperCase = countries.map((country) => {
//   return country.toUpperCase();
// })
// //Explicit return arrow function
// const countriesToUpperCase = countries.map(country => country.toUpperCase());
// */

// const countriesFirstThreeLetters = coun.map((country) =>
//   country.toUpperCase().slice(0, 3)
// )
// console.log(countriesFirstThreeLetters)


// //Filter countries containing land
// const countriesContainingLand = coun.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)
// console.log(coun)


// const countriesEndsByia = coun.filter((country) => country.endsWith('ia'))
// console.log(countriesEndsByia)

// const scores = [
//   { name: 'Asabeneh', score: 95 },
//    { name: 'Lidiya', score: 98 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ]

// const scoresGreaterEighty = scores.filter((score) => score.score > 80)
// console.log(scoresGreaterEighty)

// const S = numbers.reduce((acc, cur) => acc * cur)

// console.log(S)



// const score = scores.find((user) => user.score >= 100)
// console.log(score)

// const bools = [true, false, false, false]
// let x = bools.includes(true)
// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true
// console.log(x) //true

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// let y = products.sort()
// console.log(y) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array  is also sorted
// console.log(products)


//Exercises part 1 
//1st Question
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const conLog = (x) => console.log(x);
const khodesh = (x) => x;
countries.forEach(conLog)
console.log(countries.forEach(khodesh)) // forEach does not return an array so ... 
names.forEach(conLog)
console.log(names.forEach(khodesh)) // Same as the top one 
numbers.forEach(conLog)

//6th Question
const toUp = (x) => x.toUpperCase();
let countriesUpperCase = countries.map(toUp)
console.log(countriesUpperCase)

//7th Question
const len = x => x.length;
let countriesLen = countries.map(len)
console.log(countriesLen)
console.log(countries)

//8th Question
const square = x => x ** 2;
let numbersSquare = numbers.map(square)
console.log(numbersSquare)

//9th Question
let namesToUpperCase = names.map(toUp)
console.log(namesToUpperCase)

//10th Question
const mapCorresponding = (x) => x.price;
console.log(products.map(mapCorresponding))

//11th Question
console.log(countries.filter((x) => x.match(/land/i)))

//12th, 13th , 14th, 15th Questions
console.log(countries.filter(x => x.length === 6))
console.log(countries.filter(x => x.length >= 6))
console.log(countries.filter(x => x.startsWith('S')))
console.log(products.filter(x => typeof x.price === 'number'))

console.log(typeof (typeof products[0].price))

//16th Question
const getStringLists = x => typeof x === 'string';
let myArray = [1, 2, 'sdfsdf', true, 'Hossein']
console.log(myArray.filter(getStringLists))

//17 Question
console.log(numbers.reduce((acc, cur) => acc + cur))

//20th Question
console.log(countries.some(x => x.length > 7))

//21st Question
console.log(countries.every(x => x.match(/land/i)))

//22nd Question


//23rd Question
console.log(countries.find(x => x.length === 6))

//24th Question
console.log(countries.findIndex(x => x.length === 6))

//25th Question
console.log(countries.findIndex(x => x == 'Norway'))

//26th Question
console.log(countries.findIndex(x => x == 'Russia'))

//Exercise level 2
//1st Question
let totalPrice = products.map(x => x.price).filter(x => typeof x === 'number').reduce((acc, cur) => acc + cur)
console.log(`Total price: ${totalPrice}`)


const GetTotal = (total, num) => {
  if (typeof num.price === 'number')
    return total + num.price
}
let totalReduce = products.reduce((acc, cur) => {
  if (typeof cur.price === 'number')
    return acc + cur.price
  else
    return acc + 0
}, 0)
console.log(totalReduce)

//4th Question
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lett = letters.split('')
console.log(lett)
function findLetterCountry() {
  return lett.map(getlet)

}
function getlet(x) {
  let tedad = 0;
  coun.forEach(country => {
    if (country.name.charAt(0) == x)
      tedad++;
  })
  return { letter: x, count: tedad }
}
const answer = findLetterCountry()
console.log(answer)

//5th Question
function getFirstTenCountries() {
  const firstTen = coun.slice(0, 10).map(x => x.name)
  return firstTen
}
console.log(getFirstTenCountries())

//6th Question
function getLastTenCountries() {
  const lastTen = coun.slice(coun.length - 10).map(x => x.name);
  return lastTen;
}
console.log(getLastTenCountries())

//7th Question
let countOfLetter = answer.map(x => x.count).sort(function (a, b) { return b - a })[0]
console.log(countOfLetter)
let mostCountCountriesletter = answer.filter(x => x.count === countOfLetter).map(x => x.letter).toString()
console.log(mostCountCountriesletter)
let countriesWithMostLetter = coun.map(x => x.name).filter(x => x.charAt(0) === mostCountCountriesletter)
console.log(countriesWithMostLetter)


//Exercise level 3
//1st Question
//sort by name
console.log(coun.sort(function (a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}))
//sort by capital
console.log(coun.sort(function (a, b) {
  if (a.capital < b.capital)
    return -1;
  if (a.capital > b.capital)
    return 1;
  return 0;
}))
//sort by population
console.log(coun.sort(function (a, b) {
  if (a.population < b.population)
    return -1;
  if (a.population > b.population)
    return 1;
  return 0;
}))

//2nd Question
function mostSpokenLanguages(countries, num) {
  let languages = countries.map(x => x.languages).flat()
  let output = [] // it could be written with return but i prefered this way
  const shit = (lan) => {
    if (output.map(x => x.language).includes(lan)) {
      let index = output.findIndex(x => x.language == lan);
      output[index].count++;
    }
    else
      output.push({ language: lan, count: 1 });
  }
  languages.forEach(shit)
  return output.sort(function (a, b) {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  }).slice(0, num)
}

console.log(mostSpokenLanguages(coun, 10));
console.log(mostSpokenLanguages(coun, 3));
console.log(mostSpokenLanguages(coun, 30));

//3rd Question
function mostPopulatedCountries(countries, num) {
  let sortByPopulation = countries.sort(function (a, b) {
    if (a.population < b.population) return 1;
    if (a.population > b.population) return -1;
    return 0;
  })
  const makeArray = (country) => {
    return { Country: country.name, Population: country.population }
  }
  return sortByPopulation.slice(0, num).map(makeArray)
}
console.log(mostPopulatedCountries(coun, 10))
console.log(mostPopulatedCountries(coun, 3))

















