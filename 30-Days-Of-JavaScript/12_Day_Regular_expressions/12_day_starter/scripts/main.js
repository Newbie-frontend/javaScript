console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want



// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// const txt = 'Thissss regular expression example was made in December 6,  2019.'
// const pattern = /^This$/g // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']

//Exercises 
//Part 1 
//First Question
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let findings = text.match(/\d+/g)
console.log(`Annual income: ${parseInt(findings[0]) * 12 + parseInt(findings[1]) + parseInt(findings[2]) * 12}`)

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

//level 2 
function tenMostFrequentWords(paragraph, num) {
    sepratedParag = paragraph.match(/\w+/g)
    let sepSet = new Set(sepratedParag)
    console.log(sepSet)
    let result = []
    for (let x of sepSet) {
        let re = new RegExp(x, 'g')
        let y = paragraph.match(re)
        let count = y.length
        result.push({ word: x, count: count })
    }
    result.sort(function (a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    })
    return result.slice(0, num)
}
console.log(tenMostFrequentWords(paragraph, 10))

//level 3
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let cleanedText = sentence.replace(/[%@$#&]/gi, '')
console.log(cleanedText)
function mostFrequentWords(cleanedText) {
    let sepratedText = cleanedText.match(/\w+/g)
    console.log(sepratedText)
    let textSet = new Set(sepratedText)
    const finding = (x) => {
        if (x.length < 2) {
            x = x.concat(' ')
        }
        let re = new RegExp(x, 'g')
        let result = cleanedText.match(re)
        // console.log(result)
        return { word: x.trim(' '), count: result.length }
    }
    let Akharesh = []
    for (let x of textSet) {
        Akharesh.push(finding(x))
    }
    Akharesh.sort(function (a, b) {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    })
    return Akharesh.slice(0, 3);
}
console.log(mostFrequentWords(cleanedText))
// console.log(cleanText(sentence))




