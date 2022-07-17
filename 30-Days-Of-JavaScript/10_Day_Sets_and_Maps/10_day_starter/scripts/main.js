// // console.log(countries)
// // alert('Open the console and check if the countries has been loaded')

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]

//   const setOfLanguages = new Set(languages)

//   for (const language of setOfLanguages) {
//     console.log(language)
//   }

//   const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//   setOfCompanies.add(company)
// }
// console.log(setOfCompanies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)



//Exercises part 1 
//1st Question
let myset = new Set();
console.log(myset)

//2nd Question
for (let i = 0; i <= 10; i++) {
    myset.add(i)
}
console.log(myset)

//3rd Question
myset.delete(10)
console.log(myset)


//4th Question
myset.clear()
console.log(myset)

//5th Question
let myFriends = ['Ali', 'Hossein', 'Kerem', 'Ismail', 'Majid']
const newSetFromArray = new Set(myFriends)
console.log(newSetFromArray)

let countriesArrayOfArray = [['Iran', 4], ['Turkey', 6], ['Canada', 5], ['France', 6]]
let newMap = new Map(countriesArrayOfArray)
console.log(newMap)


//Part 2 
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [4, 5, 6, 7, 11, 12]
let c = [...a, ...b]
console.log(c)
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

let cEsterak = a.filter(x => B.has(x))
let CEsterak = new Set(cEsterak)
console.log(CEsterak)

let cEkhtelaf = a.filter(x => !B.has(x))
let cEkhtelafB = b.filter(x => !A.has(x))
let CEkhtelaf = new Set(cEkhtelaf)
let CEkhtelafB = new Set(cEkhtelafB)
let totalEkhtelaf = [...cEkhtelaf, ...cEkhtelafB]
let TotalSet = new Set(totalEkhtelaf)
console.log(CEkhtelaf)
console.log(CEkhtelafB)
console.log(TotalSet)

//part 3
console.log(countries.length)
function mostSpokenLanguages(countries, num) {
    let lans = countries.map(x => x.languages).flat()
    let lansSet = new Set(lans)
    const lanCount = []
    for (let l of lansSet) {
        let filterdlans = lans.filter((lng) => lng === l)
        lanCount.push({ [l]: filterdlans.length })
    }
    lanCount.sort(function (a, b) {
        if (Object.values(a).toString() < Object.values(b).toString()) return 1;
        if (Object.values(a).toString() > Object.values(b).toString()) return -1;
        return 0;
    })
    return lanCount.slice(0, num)
}
console.log(mostSpokenLanguages(countries, 10))
console.log(mostSpokenLanguages(countries, 3))




















